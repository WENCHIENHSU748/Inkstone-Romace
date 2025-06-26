let currentStage = 0;
let currentTarget = null;
let currentQuestionIndex = 0;
let lastDateTarget = ""; // 全域變數，紀錄見面的對象

const characterImages = {
  "mo-li": "mo-li.png",
  "rika": "rika.png",
  "xing-hang": "xing-hang.png"
};

function updateCharacterImage(targetId) {
  const baseId = getBaseTargetId(targetId);
  const imgElement = document.getElementById("character-img");

  if (characterImages[baseId]) {
    imgElement.src = characterImages[baseId];
    imgElement.classList.remove("hidden");
  } else {
    imgElement.classList.add("hidden");
  }
}

const state = {
  stage: "intro", // 或其他進度階段
  affinity: {},
  finalChoice: null
};

function getBaseTargetId(target) {
  const baseIds = ["rika", "mo-li", "xing-hang"];
  if (!target) return null;
  for (const id of baseIds) {
    if (target.startsWith(id)) return id;
  }
  return target; // 若沒命中則返回原值
}

const characters = ["mo-li", "rika", "xing-hang"];

function updateStats() {
  console.log("🔁 更新狀態");
  characters.forEach(id => {
    const el = document.getElementById(`${id}-affinity`);
    if (el) el.textContent = state.affinity[id] || 0;
  });
}



function handleFinalChoice(choiceId) {
  state.finalChoice = choiceId;  // 例如 'rika'
  showEnding();  // 呼叫結局
}

function handleStage7Completion() {
  if (lastDateTarget && state.affinity.hasOwnProperty(lastDateTarget)) {
    state.affinity[lastDateTarget] += 2; // 例如見面加 2 分
    console.log(`${lastDateTarget} 好感度提高為：${state.affinity[lastDateTarget]}`);
  }
}

let isTransitioning = false; // 防止過早點擊

const storyText = document.getElementById("story-text");
const storyOptions = document.getElementById("storyoptions");
const interactionQuiz = document.getElementById("interaction-quiz");
const npcName = document.getElementById("npc-name");
const npcDialogue = document.getElementById("npc-dialogue");
const quizOptions = document.getElementById("quiz-options");
const affinityDisplay = document.getElementById("affinity");
const currentTargetDisplay = document.getElementById("current-target");


function typeLine(text, container, speed = 30) {
  return new Promise(resolve => {
    let i = 0;
    const span = document.createElement("p");
    container.appendChild(span);

    function typeChar() {
      if (i < text.length) {
        span.textContent += text.charAt(i++);
        setTimeout(typeChar, speed);
      } else {
        resolve();
      }
    }

    typeChar();
  });
}

function chooseFinalCharacter(characterId) {
  finalChoice = characterId; // 例如 'rika'、'mo-li'、'xing-hang'
  showEnding();
}

async function showStory(stageNumber) {
  const stage = storyStages.find(s => s.stageNumber === stageNumber);
  if (!stage) return;

  storyText.innerHTML = "";
  storyText.classList.remove("hidden", "fade-out");

  for (const line of stage.lines) {
    await typeLine(line, storyText);
    await new Promise(res => setTimeout(res, 400));
  }

  storyText.classList.add("fade-out");
  await new Promise(res => setTimeout(res, 1000));
  storyText.classList.add("hidden");

  generateStoryOptions(stageNumber);
}

function generateStoryOptions(stageNumber) {
  const stage = storyStages.find(s => s.stageNumber === stageNumber);
  if (!stage) return;

  storyOptions.innerHTML = "";
  storyOptions.classList.remove("hidden", "fade-out");
  isTransitioning = false;

  // ✅ 有指定互動對象：顯示對象選擇按鈕
  if (stage.targets && stage.targets.length > 0) {
    storyOptions.innerHTML = "<p>你想回覆誰的訊息？</p>";
    stage.targets.forEach(targetKey => {
      const data = quizData[targetKey];
      if (!data) return;

      const btn = document.createElement("button");
      btn.textContent = `${data.name}：${data.intro}`;
      btn.classList.add("option-btn");

      btn.addEventListener("click", () => {
        updateCharacterImage(targetKey);              // ✅ 切換角色圖
        handleTargetSelection(targetKey);
      });

      storyOptions.appendChild(btn);
    });

  // ✅ 特殊處理：Stage 7 - 只有選過對象才提供自由活動
  } else if (stage.stageNumber === 7) {
    if (lastDateTarget) {
      storyOptions.innerHTML = "<p>今天晚上你想做什麼？</p>";
      const freeChoices = ["dream", "stream", "diary"];
      freeChoices.forEach(targetKey => {
        const data = quizData[targetKey];
        if (!data) return;

        const btn = document.createElement("button");
        btn.textContent = `${data.name}：${data.intro}`;
        btn.classList.add("option-btn");

        btn.addEventListener("click", () => {
          updateCharacterImage(targetKey);            // ✅ 切換自由活動圖（如果有）
          handleTargetSelection(targetKey);
        });

        storyOptions.appendChild(btn);
      });
    } else {
      // ❌ 沒選過人 → 跳過 Stage 7
      handleNextStage();
    }

  // ✅ 特殊處理：Stage 0 - 結束後強制進入 Stage 1
  } else if (stage.stageNumber === 0) {
    currentStage = 1; // 防止重複執行 Stage 1
    showStory(1);

  // ✅ 其他情況：直接跳下一階段
  } else {
    handleNextStage();
  }
}



function handleTargetSelection(targetKey) {
  if (isTransitioning) return;
  isTransitioning = true;

  storyOptions.classList.add("fade-out");

  setTimeout(() => {
    storyOptions.classList.add("hidden");
    startQuiz(targetKey);
  }, 1000);
}

function startQuiz(targetKey) {
  currentTarget = targetKey;
  currentQuestionIndex = 0;

  storyOptions.innerHTML = "";
  storyOptions.classList.add("hidden");

  interactionQuiz.classList.remove("hidden");
  npcName.textContent = quizData[targetKey].name;

  updateStats(); // 每次開啟時刷新
  showCurrentQuestion();
}


function showCurrentQuestion() {
  const data = quizData[currentTarget];
  const question = data.questions[currentQuestionIndex];

  npcDialogue.textContent = question.q;
  quizOptions.innerHTML = "";

  question.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.classList.add("option-btn");

    btn.addEventListener("click", () => {
      handleAnswer(opt.effect);
    });

    quizOptions.appendChild(btn);
  });

  updateStats(); // 顯示題目的同時刷新數值
}


function handleAnswer(effect) {
  const rawId = currentTarget || effect.name;  // currentTarget 為主，備援用 effect.name
  const baseId = getBaseTargetId(rawId);

  if (effect.affinity && baseId) {
    if (!state.affinity[baseId]) state.affinity[baseId] = 0;
    state.affinity[baseId] += effect.affinity;
  }

  // 結局選擇處理
  if (currentStage === 8 && effect.end === "none" && currentTarget) {
  state.rejectedTarget = getBaseTargetId(currentTarget);
}

  currentQuestionIndex++;
  const data = quizData[currentTarget];
  if (currentQuestionIndex < data.questions.length) {
    showCurrentQuestion();
  } else {
    interactionQuiz.classList.add("hidden");

    if (currentStage === 7) {
      handleStage7Completion();
    }

    if (currentStage === 8) {
      showEnding();
      return;
    }

    currentStage++;
    if (storyStages.find(s => s.stageNumber === currentStage)) {
      setTimeout(() => showStory(currentStage), 1000);
    } else {
      storyText.classList.remove("hidden");
      storyText.innerHTML = "<p>（遊戲結束，謝謝體驗）</p>";
    }
  }

  updateStats(); // 確保顯示跟著更新
}

function startQuiz(targetKey) {
  currentTarget = targetKey;
  currentQuestionIndex = 0;

  // 初始化好感度為 0（若尚未有）
  if (typeof state.affinity[targetKey] !== "number") {
    state.affinity[targetKey] = 0;
  }

  updateStats();

  // 清除並隱藏角色選單
  storyOptions.innerHTML = "";
  storyOptions.classList.add("hidden");

  // 顯示問答區塊
  interactionQuiz.classList.remove("hidden");

  npcName.textContent = quizData[targetKey].name;
  showCurrentQuestion();
}



let finalChoice = null;

function showEnding() {
  // ✅ 1. 隱藏角色立繪
  const characterImg = document.getElementById("character-img");
  const mainCharacterImg = document.getElementById("main-character-img");
  if (characterImg) characterImg.classList.add("hidden");
  if (mainCharacterImg) mainCharacterImg.classList.add("hidden");

  // ✅ 2. 判斷結局圖片路徑
  const endingContainer = document.getElementById("ending-image");
  endingContainer.innerHTML = "";

  const endingImg = document.createElement("img");
  let endingPath = "ending-default.png";

  const chosenCharacterId = state.finalChoice;
  const baseId = getBaseTargetId(chosenCharacterId);
  const validIds = ["mo-li", "rika", "xing-hang"];

  // 嘗試觸發正選結局
  if (validIds.includes(baseId)) {
    const affectionValue = state.affinity[baseId] || 0;
    if (affectionValue >= 6) {
      endingPath = `ending-${baseId}-true.png`;
    } else {
      endingPath = `ending-${baseId}-normal.png`;
    }
  } else {
    // ✅ 僅當剛剛互動對象沒被選且好感度高才會病嬌
    const rejectId = state.rejectedTarget; // 最後互動卻沒選的角色
    if (
      rejectId &&
      validIds.includes(rejectId) &&
      (state.affinity[rejectId] || 0) >= 3
    ) {
      endingPath = `ending-${rejectId}-yandere.png`;
    }
  }

  endingImg.src = endingPath;
  endingImg.alt = "結局圖";
  endingImg.classList.add("ending-scene-img");
  endingContainer.appendChild(endingImg);

  // ✅ 3. 隱藏互動畫面
  storyText.classList.remove("hidden");
  storyOptions.classList.add("hidden");
  interactionQuiz.classList.add("hidden");

  // ✅ 4. 結局文字
  const affectionValue = state.affinity[chosenCharacterId] || 0;
  const nameMap = {
    "mo-li": "墨離",
    "rika": "Rika",
    "xing-hang": "星航"
  };

  let endingText = "";

  if (chosenCharacterId && chosenCharacterId !== "none") {
    if (affectionValue >= 6) {
      const trueEndings = {
        "mo-li": `妳說完告白那晚，墨離輕輕握住妳的手。\n\n她沒有立刻回應，只說：「等等我一下，我把今天的字練完。」\n\n妳坐在她身邊，看著筆鋒一筆一畫地勾勒妳的名字。\n\n她笑著說：「這樣，就能寫一輩子了。」`,
        "rika": `Rika關掉直播後，看著妳說：「這次輪我請妳吃消夜了吧？」\n\n妳們肩並肩走進夜色裡，像日常，又像承諾。\n\n她不是什麼完美女孩，妳也不再需要隱藏真實的自己。這段關係未必穩定，但夠真實，也夠溫暖。`,
        "xing-hang": `「真的可以嗎？」\n\n星航的聲音還是有些發抖。\n\n妳牽起她的手：「可以啊。我想和妳一起看看妳說的那些宇宙。」\n\n她紅著眼睛笑了。\n\n從此之後，她的畫裡常常出現妳的身影，偶爾像星星，偶爾像月亮，但總在她的世界裡閃閃發光。`
      };
      endingText = trueEndings[chosenCharacterId];
    } else {
      endingText = `${nameMap[chosenCharacterId]}接受了妳的心意。\n\n你們開始交往了，雖然還有很多磨合，但這一次，妳決定試著相信愛情。`;
    }
  } else {
    // ❗ 病嬌觸發只有剛剛互動對象被拒
    const rejectId = state.rejectedTarget;
    const yandereEndings = {
      "mo-li": `那天，公司群組突然傳出一張照片。是墨離趴在辦公室桌上，手腕染著墨水與血。\n\n桌上鋪滿字帖，全是妳的名字，一遍又一遍。\n\n她沒有怪妳，只留下一句話：「我寫不出來了，所以只能這樣讓妳記得我。」`,
      "rika": `直播當晚，Rika突然笑著說：「大家知道嗎？有些人私下聊得很熱，表面卻裝沒事，超渣對吧～」\n\n聊天室瞬間爆炸。她沒有指名道姓，但大家都知道那是妳。`,
      "xing-hang": `妳沒選星航。但她從沒放棄。\n\n起初是語音訊息、私訊。後來，她出現在妳常去的咖啡廳與住家附近。\n\n她說：「這不叫騷擾，這叫愛。」`
    };

    if (
      rejectId &&
      validIds.includes(rejectId) &&
      (state.affinity[rejectId] || 0) >= 3
    ) {
      endingText = yandereEndings[rejectId];
    } else {
      endingText = `妳拒絕了所有人。\n\n但奇怪的是，妳一點也不覺得孤單。\n\n或許，是因為妳終於明白，自己的價值不需要靠別人定義。\n\n手機訊息響起，是Rika傳來的直播連結。\n\n墨離寄來一張明信片。\n\n星航發了張貼圖：是顆小小的星星。\n\n妳笑了，點開連結，泡了一杯熱茶。\n\n日子還長。`;
    }
  }

  // ✅ 5. 顯示結局文字與 debug 區塊
  let debugText = `<p style="color:gray;"><strong>[Debug]</strong> 好感值狀態：</strong></p>`;
  for (const char in state.affinity) {
    debugText += `<p style="color:gray;">${char}：${state.affinity[char]}</p>`;
  }

  storyText.innerHTML =
    debugText +
    endingText
      .split("\n")
      .map(line => `<p>${line}</p>`)
      .join("");

  displayEnding(endingText);
}



function displayEnding(text) {
  const endingScreen = document.getElementById("ending-screen");
  const endingText = document.getElementById("ending-text");

  // 顯示結局區塊
  endingScreen.style.display = "block";
  endingText.textContent = text;

  // 隱藏其他區塊
  document.getElementById("story-text").classList.add("hidden");
  document.getElementById("storyoptions").classList.add("hidden");
  document.getElementById("interaction-quiz").classList.add("hidden");
}


document.addEventListener("DOMContentLoaded", () => {
  updateStats();
  showStory(currentStage);
});

let isSkipping = false;

function typeLine(text, container, speed = 30) {
  return new Promise(resolve => {
    let i = 0;
    const span = document.createElement("p");
    container.appendChild(span);

    function typeChar() {
      if (isSkipping) {
        span.textContent = text;
        isSkipping = false; // 重置
        resolve();
        return;
      }

      if (i < text.length) {
        span.textContent += text.charAt(i++);
        setTimeout(typeChar, speed);
      } else {
        resolve();
      }
    }

    typeChar();
  });
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") {
    e.preventDefault(); // 防止網頁捲動
    isSkipping = true;
  }
});

// You'll still need this line to attach the function to the button
document.getElementById("restart-btn").addEventListener("click", restartGame);

function restartGame() {
  // Reset key global game state variables
  currentStage = 0;
  currentTarget = null;
  currentQuestionIndex = 0;
  lastDateTarget = "";

  // Reset character-specific affinity scores
  state.affinity = {
    "mo-li": 0,
    "rika": 0,
    "xing-hang": 0
  };

  // Remove other state values (if no longer used)
  // state.trust = 0;
  // state.vr = 0;
  state.finalChoice = null;

  // Hide potentially visible UI elements from previous gameplay
  interactionQuiz.classList.add("hidden");
  storyOptions.innerHTML = ""; // Clear any previous options
  document.getElementById("ending-screen").style.display = "none"; // Ensure ending screen is hidden

  // Clear existing story text (optional)
  storyText.innerHTML = "";

  // Update the stats display to show reset values
  updateStats();

  // Start the story from the very beginning (Stage 0)
  showStory(currentStage);
}
