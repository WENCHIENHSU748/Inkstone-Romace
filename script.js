const storyStages = [
  {
  lines: [
    "硯颺已經很久沒有談戀愛了。",
    "她習慣了獨處，也慢慢學會與孤單為伍。",
    "有時，她會幻想有人靠近、輕聲與她說話……",
    "但現實裡的她，卻不知道怎麼與人開始曖昧。",
    "久而久之，那股對戀愛的渴望似乎也漸漸被時間磨平了。",
    "直到某天，她收到了三個邀請──",
    "三段不同的緣分，三位截然不同的人。",
    "她不知道未來會走向何方，",
    "但她決定，今天，就從踏出第一步開始。"
  ],
    stageNumber: 0,
    targets: []
},
  {
    lines: [
      "【上午 09:13】",
      "床頭的充電器還插著，手機螢幕一閃一閃。",
      "硯颺睜開眼，天氣陰濛濛的。",
      "昨天直播結束得太晚，今天一整個賴床。",
      "⋯⋯但有什麼訊息，像是在等她查看。"
    ],
    stageNumber: 1,
    targets: ["mo-li", "rika", "xing-hang"]
  },
  {
    lines: [
      "【下午 14:26】",
      "你在公司茶水間遇見了熟悉的背影。",
      "⋯⋯那不是星航嗎？",
      "她正笑著喝咖啡，看起來心情不錯，還對你眨了下眼。",
      "突然，手機又震動了一下——",
      "Rika 傳訊來問今晚要不要一起直播；墨離則說她今天家裡剛好有空。",
      "你要回誰的訊息？"
    ],
    stageNumber: 2,
    targets: ["mo-li-2", "rika-2", "xing-hang-2"]
  },
  {
    lines: [
      "【晚上 21:47】",
      "直播倒數不到十分鐘，聊天室已經有人在刷留言。",
      "硯颺調整好燈光和麥克風，坐在椅子上深吸一口氣。",
      "右上角跳出三個通知：",
      "墨離：「今晚會開聊詩嗎？」",
      "Rika 傳來一段暖場BGM音檔。",
      "星航則是傳了一張桌上擺滿小蛋糕與奶茶的照片。",
      "她該先回誰？"
    ],
    stageNumber: 3,
    targets: ["mo-li-3", "rika-3", "xing-hang-3"]
  },
  {
    lines: [
      "【上午 08:02】",
      "下著雨，鬧鐘響了兩次才醒。",
      "窗外濕答答，空氣有點冷，硯颺窩在被子裡滑手機。",
      "星航傳來一段語音：「早安～今天要撐傘喔」",
      "Rika 則傳了一張早餐便當的照片，寫著「來猜猜這家在哪～」",
      "墨離難得早起，留言：「夢裡妳說想吃熱豆花。」",
      "一大早，誰的訊息該先回？"
    ],
    stageNumber: 4,
    targets: ["mo-li-4", "rika-4", "xing-hang-4"]
  },
  {
    lines: [
      "【下午 15:44】",
      "工作告一段落，硯颺窩在咖啡廳整理直播素材。",
      "雨已經停了，窗外陽光斜斜地照進來，空氣像是被洗過一樣清爽。",
      "她正準備打開下一個剪輯軟體時，手機跳出三條訊息——",
      "墨離：「下次來我家喝茶，好嗎？」",
      "Rika：「要不要一起去看展？有妳會更好玩～」",
      "星航：「我最近常經過妳直播時提到的那間咖啡廳⋯⋯會不會遇到妳呢？」",
      "突然之間，世界變得很真實。",
      "她，準備好見誰了嗎？"
    ],
    stageNumber: 5,
    targets: ["mo-li-5", "rika-5", "xing-hang-5"]
  },
  {
    lines: [
      "【晚上 19:20】",
      "她穿上今天最安全的那件外套，站在鏡子前整理髮絲。",
      "無論是誰，今晚都是第一次見面。",
      "心跳得有點快，不確定是期待還是緊張。",
      "傳訊的是——",
      "墨離：「我在巷口書店前面。」",
      "Rika：「我坐在展場門口那隻粉紅獅子旁！」",
      "星航：「我坐妳直播提過的那個靠窗位子喔～」",
      "她握著手機，深吸一口氣。",
      "今晚，要往哪一條路走去？"
    ],
    stageNumber: 6,
    targets: ["mo-li-6", "rika-6", "xing-hang-6"]
  },
  {
    lines: [
      "【晚上 23:58】",
      "門關上的瞬間，世界又只剩她一人。",
      "硯颺坐在書桌前，還穿著今天出門的外套，燈沒開，房間一片靜默。",
      "今天⋯⋯太真實了。",
      "她可以選擇：",
      "🛏️ 就這樣睡去，任由夢境接手。",
      "📹 開直播，和觀眾聊些模糊的感受。",
      "📖 或者拿起筆，寫下一頁自己的心事。"
    ],
    stageNumber: 7,
    targets: ["dream", "stream", "diary"]
  },
  {
  stageNumber: 8,
  lines: [
    "【隔天上午 10:00】",
    "天氣放晴，空氣裡透著悶熱。硯颺醒來時，手機已經爆炸了。",
    "墨離：「昨天很開心⋯⋯我想再見妳一次。」",
    "Rika：「下午來我店裡！我煮咖啡給妳喝～」",
    "星航：「我在樓下早餐店排隊等妳一起吃喔 :)」",
    "三個人，同時邀約。",
    "今天，也許會是個改變命運的日子。"
  ],
  targets: ["mo-li-final", "rika-final", "xing-hang-final"]
}
];


const quizData = {
  "mo-li": {
    name: "墨離",
    intro: "與墨離討論貓咪。",
    stage: 1,
    questions: [
      {
        q: "（傳來一張黑白貓的照片。）",
        options: [
          { text: "「好可愛喔！」", effect: { affinity: 1, affinity: 1 } },
          { text: "「妳是在哪裡拍的？」", effect: { affinity: 2 } },
          { text: "已讀不回。", effect: { affinity: -1 } }
        ]
      },
      {
        q: "今天會不會開台？",
        options: [
          { text: "「會喔，晚上十點開播。」", effect: { affinity: 1 } },
          { text: "「今天不開，想休息一下。」", effect: { affinity: 1 } },
          { text: "「妳猜猜看～」", effect: { affinity: -1 } }
        ]
      },
      {
        q: "我有點想妳了。",
        options: [
          { text: "「我也是……」", effect: { affinity: 2 } },
          { text: "「妳太黏人啦～」", effect: { affinity: -1 } },
          { text: "我回傳一張自拍給她。", effect: { affinity: 1 } }
        ]
      }
    ]
  },
  "rika": {
    name: "Rika",
    intro: "幫 Rika 看劇本草稿。",
    stage: 1,
    questions: [
      {
        q: "（傳來一份劇本草稿）幫我看看。",
        options: [
          { text: "我幫她細細校對，提出具體建議。", effect: { affinity: 2 } },
          { text: "我只回傳一個 👍 表情符號。", effect: { affinity: -1 } },
          { text: "「我們開語音聊聊吧？」", effect: { affinity: 1 } }
        ]
      },
      {
        q: "妳會不會覺得我最近直播有點無聊？",
        options: [
          { text: "「不會啊，我一直有看耶。」", effect: { affinity: 2 } },
          { text: "「我覺得妳可以再放鬆一點。」", effect: { affinity: 1 } },
          { text: "「其實……可以再有趣一點啦？」", effect: { affinity: -1 } }
        ]
      },
      {
        q: "下次一起合作直播，好嗎？",
        options: [
          { text: "「好啊，我很期待！」", effect: { affinity: 2 } },
          { text: "「看我哪天有空吧～」", effect: { affinity: -1 } },
          { text: "「我怕我會搶妳風頭耶。」", effect: { affinity: 0 } }
        ]
      }
    ]
  },
  "xing-hang": {
    name: "星航",
    intro: "回覆星航的下午茶邀約。",
    stage: 1,
    questions: [
      {
        q: "要不要一起去喝下午茶？",
        options: [
          { text: "我立刻答應：「好啊好啊～」", effect: { affinity: 2 } },
          { text: "「今天有點累，改天可以嗎？」", effect: { affinity: 1 } },
          { text: "「還有誰會去啊？」", effect: { affinity: -1 } }
        ]
      },
      {
        q: "最近為什麼都沒主動找我？",
        options: [
          { text: "「我太想妳，不知道怎麼開口……」", effect: { affinity: 2 } },
          { text: "「最近真的太忙了啦。」", effect: { affinity: -1 } },
          { text: "「那我現在就找妳了呀。」", effect: { affinity: 1 } }
        ]
      },
      {
        q: "如果我今天想牽你的手呢？",
        options: [
          { text: "「那妳就牽啊～」", effect: { affinity: 2 } },
          { text: "「會不會太快了點……」", effect: { affinity: -1 } },
          { text: "「等我先洗個手。」", effect: { affinity: 1 } }
        ]
      }
    ]
  },
  "mo-li-2": {
    name: "墨離",
    intro: "來我家玩嘛～",
    stage: 2,
    questions: [
      {
      q: "我今天有煮番茄牛肉麵喔，妳來不來？",
      options: [
        { text: "「真的假的！我超愛妳煮的。」", effect: { affinity: 2 } },
        { text: "「我晚點看情況，可能要工作。」", effect: { affinity: 1 } },
        { text: "「今天太累了，下次好嗎？」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "最近直播的聲音怎麼有點啞？",
      options: [
        { text: "「可能是空調太強了⋯⋯」", effect: { affinity: 1 } },
        { text: "「妳在關心我嗎？」", effect: { affinity: 1 } },
        { text: "「我很好啦～別擔心。」", effect: { affinity: 1 } }
      ]
    },
    {
      q: "我們什麼時候才能一起睡覺？",
      options: [
        { text: "「要我今晚過去嗎？」", effect: { affinity: 2 } },
        { text: "「欸你太直白了啦哈哈哈」", effect: { affinity: 1 } },
        { text: "「你是不是又發燒了？」", effect: { affinity: -1 } }
      ]
    }
    ]
  },
  "rika-2": {
    name: "Rika",
    intro: "今晚來合作一場直播？",
    stage: 2,
    questions: [
          {
      q: "晚上我們聊聊感情觀好不好？觀眾好像很期待～",
      options: [
        { text: "「好啊，我蠻想聽妳的想法。」", effect: { affinity: 2 } },
        { text: "「我可以當綠葉陪妳聊。」", effect: { affinity: 1 } },
        { text: "「我怕會講出太多私事耶⋯」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "妳喜歡看大家刷什麼禮物？",
      options: [
        { text: "「我最喜歡看到小紙條～」", effect: { affinity: 1 } },
        { text: "「其實我都沒仔細看禮物欸哈哈」", effect: { affinity: 1 } },
        { text: "「禮物不重要，有人在就好。」", effect: { affinity: 1 } }
      ]
    },
    {
      q: "妳覺得觀眾會怎麼看我們兩個？",
      options: [
        { text: "「他們一定覺得我們很配～」", effect: { affinity: 2 } },
        { text: "「當然是主播同盟囉。」", effect: { affinity: 1 } },
        { text: "「我怕他們亂 ship。」", effect: { affinity: -1 } }
      ]
    }
     ]
  },
  "xing-hang-2": {
    name: "星航",
    intro: "今天還好嗎？",
    stage: 2,
    questions: [
      {
        q: "早安，妳今天怎麼看起來有點沒睡飽？",
        options: [
          { text: "「昨晚直播到太晚⋯⋯」", effect: { affinity: 1 } },
          { text: "「還好啦，見到你就醒了。」", effect: { affinity: 2 } },
          { text: "「你管我啊⋯」", effect: { affinity: -1 } }
        ]
      },
      {
        q: "等等一起吃午餐？",
        options: [
          { text: "「好啊，午休一起走～」", effect: { affinity: 1 } },
          { text: "「等等有點事，下次好嗎？」", effect: { affinity: 0 } },
          { text: "「你是不是太閒了？」", effect: { affinity: -1 } }
        ]
      },
      {
        q: "如果我說，其實我有在偷偷看妳直播⋯⋯？",
        options: [
          { text: "「真的假的？那你都有看到什麼⋯」", effect: { affinity: 1 } },
          { text: "「哇，被發現了～」", effect: { affinity: 2 } },
          { text: "「⋯⋯你有病嗎？」", effect: { affinity: -2 } }
        ]
      }
    ]
  },
"mo-li-3": {
  name: "墨離",
  intro: "你會不會唸詩？",
  stage: 3,
  questions: [
    {
      q: "妳今天會唸昨晚說的那首《江城子》嗎？",
      options: [
        { text: "「會喔，我記得妳喜歡那句‘十年生死兩茫茫’。」", effect: { affinity: 2, affinity: 1 } },
        { text: "「改天吧，今天氣氛不太適合。」", effect: { affinity: -1 } },
        { text: "「我不確定大家有沒有興趣⋯⋯」", effect: { affinity: 1 } }
      ]
    },
    {
      q: "我今天做了一幅字帖，等妳下播可以看看嗎？",
      options: [
        { text: "「好啊，妳的字我每次都好喜歡。」", effect: { affinity: 2 } },
        { text: "「可以啊，但我可能會很晚回喔。」", effect: { affinity: 1 } },
        { text: "「妳是不是偷偷寫我名字了？」", effect: { affinity: -1, affinity: 1 } }
      ]
    },
    {
      q: "我總覺得，妳一直播，我就不那麼孤單了。",
      options: [
        { text: "「我也是啊，有妳在聊天室就很安心。」", effect: { affinity: 2, affinity: 1 } },
        { text: "「笨蛋，怎麼會孤單呢？」", effect: { affinity: 1 } },
        { text: "「好中二的說法喔哈哈。」", effect: { affinity: -2 } }
      ]
    }
  ]
},
"rika-3": {
  name: "Rika",
  intro: "傳來一段音樂檔。",
  stage: 3,
  questions: [
    {
      q: "這段 BGM 很適合妳今晚的直播開頭吧？我剪超久！",
      options: [
        { text: "「超讚，我一開場就用它！」", effect: { affinity: 2 } },
        { text: "「謝啦，我再聽聽看效果。」", effect: { affinity: 1 } },
        { text: "「你怎麼知道我今晚要聊什麼？」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "等一下我會在聊天室丟彩虹彈幕，幫我撐個場～",
      options: [
        { text: "「妳最罩了 Rika ❤️」", effect: { affinity: 2 } },
        { text: "「噓～別讓別人知道我們串通好XD」", effect: { affinity: 1 } },
        { text: "「妳不要太高調喔⋯⋯」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "其實我最喜歡看妳結束時突然走心的幾分鐘。",
      options: [
        { text: "「妳都記得啊⋯⋯這樣會讓人很想依賴妳耶。」", effect: { affinity: 2 } },
        { text: "「欸，才幾分鐘妳也能注意到喔？」", effect: { affinity: 1 } },
        { text: "「我有嗎？應該是妳錯覺吧～」", effect: { affinity: -1 } }
      ]
    }
  ]
},
"xing-hang-3": {
  name: "星航",
  intro: "發來甜點照片。",
  stage: 3,
  questions: [
    {
      q: "這是我幫妳準備的直播加油甜點（雖然妳吃不到XD）",
      options: [
        { text: "「光是看到就飽了，謝謝你 ♥」", effect: { affinity: 2 } },
        { text: "「好啦好啦，有心我收到了。」", effect: { affinity: 1 } },
        { text: "「別再幻想我們交往了啦⋯」", effect: { affinity: -2 } }
      ]
    },
    {
      q: "我剛剛又重看了妳兩個月前那支歌回，還是好喜歡。",
      options: [
        { text: "「你真的都記得欸，謝謝你。」", effect: { affinity: 1 } },
        { text: "「真的假的？我自己都快忘了⋯」", effect: { affinity: 1 } },
        { text: "「有空幫我剪 highlight 好不好～」", effect: { affinity: 1 } }
      ]
    },
    {
      q: "我是不是最懂妳的那個人？",
      options: [
        { text: "「也許吧⋯⋯有時候真的很像。」", effect: { affinity: 2 } },
        { text: "「那妳猜猜我現在在想什麼？」", effect: { affinity: -1 } },
        { text: "「別再自以為了啦⋯」", effect: { affinity: -2 } }
      ]
    }
  ]
 },
"mo-li-4": {
  name: "墨離",
  intro: "墨離做了一碗熱豆花。",
  stage: 4,
  questions: [
    {
      q: "我夢見妳說『天氣冷，想吃甜的』，妳是不是有在想我？",
      options: [
        { text: "「妳怎麼知道我昨晚真的在想豆花⋯」", effect: { affinity: 2 } },
        { text: "「只是妳剛好猜對了吧～」", effect: { affinity: 1 } },
        { text: "「還好欸，應該是妳自己想吃。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "我現在在外面散步，街道好安靜，想讓妳一起看看。",
      options: [
        { text: "「拍給我看～我想一起。」", effect: { affinity: 2 } },
        { text: "「妳一大早就文青模式了欸。」", effect: { affinity: 1 } },
        { text: "「我在床上爛掉，不想動～」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "如果我出現在妳家樓下，妳會怎麼樣？",
      options: [
        { text: "「我會下來牽妳進來。」", effect: { affinity: 2 } },
        { text: "「先打聲招呼比較好吧哈哈哈」", effect: { affinity: 1 } },
        { text: "「我可能直接報警喔？」", effect: { affinity: -2 } }
      ]
    }
  ]
},
"rika-4": {
  name: "Rika",
  intro: "猜猜我在哪家早餐店？",
  stage: 4,
  questions: [
    {
      q: "這家蛋餅超酥脆，是不是妳常經過那家？",
      options: [
        { text: "「對！妳怎麼這麼會找～」", effect: { affinity: 1 } },
        { text: "「不是欸，我沒看過那桌子。」", effect: { affinity: 0 } },
        { text: "「怎樣，是想餵我嗎？」", effect: { affinity: 2 } }
      ]
    },
    {
      q: "我今天早上做了一個奇怪的夢，夢到我們在校園裡辦粉絲見面會。",
      options: [
        { text: "「欸～好有畫面喔哈哈！」", effect: { affinity: 1 } },
        { text: "「我們那麼紅喔？」", effect: { affinity: 1 } },
        { text: "「那夢裡我是不是超糗⋯⋯」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "說真的，妳最近有比較想我嗎？",
      options: [
        { text: "「有欸，尤其是直播完的時候。」", effect: { affinity: 2 } },
        { text: "「我們不是每天都在聊？」", effect: { affinity: 1 } },
        { text: "「怎麼突然問這個⋯⋯」", effect: { affinity: -1 } }
      ]
    }
  ]
},
"xing-hang-4": {
  name: "星航",
  intro: "語音訊息的早安。",
  stage: 4,
  questions: [
    {
      q: "妳有沒有習慣早上第一件事滑誰的訊息？",
      options: [
        { text: "「你啊，誰叫你這麼愛傳語音～」", effect: { affinity: 2 } },
        { text: "「我都先看業配通知啦XD」", effect: { affinity: 1 } },
        { text: "「妳想太多了啦哈哈。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "如果我說我現在站在妳家對面呢？",
      options: [
        { text: "「你又在幻想劇情啦～」", effect: { affinity: 1 } },
        { text: "「⋯⋯你真的在嗎？」", effect: { affinity: -1 } },
        { text: "「變態警報又響了喔？」", effect: { affinity: -2 } }
      ]
    },
    {
      q: "有沒有人曾讓妳想過，會不會就是『命中注定』？",
      options: [
        { text: "「也許吧，但我還不確定。」", effect: { affinity: 2 } },
        { text: "「妳很喜歡這種設定齁？」", effect: { affinity: 1 } },
        { text: "「我不信命運。」", effect: { affinity: -1 } }
      ]
    }
  ]
 },
 "mo-li-4": {
  name: "墨離",
  intro: "墨離做了一碗熱豆花。",
  stage: 4,
  questions: [
    {
      q: "我夢見妳說『天氣冷，想吃甜的』，妳是不是有在想我？",
      options: [
        { text: "「妳怎麼知道我昨晚真的在想豆花⋯」", effect: { affinity: 2 } },
        { text: "「只是妳剛好猜對了吧～」", effect: { affinity: 1 } },
        { text: "「還好欸，應該是妳自己想吃。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "我現在在外面散步，街道好安靜，想讓妳一起看看。",
      options: [
        { text: "「拍給我看～我想一起。」", effect: { affinity: 2 } },
        { text: "「妳一大早就文青模式了欸。」", effect: { affinity: 1 } },
        { text: "「我在床上爛掉，不想動～」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "如果我出現在妳家樓下，妳會怎麼樣？",
      options: [
        { text: "「我會下來牽妳進來。」", effect: { affinity: 2 } },
        { text: "「先打聲招呼比較好吧哈哈哈」", effect: { affinity: 1 } },
        { text: "「我可能直接報警喔？」", effect: { affinity: -2 } }
      ]
    }
  ]
},
"rika-4": {
  name: "Rika",
  intro: "猜猜我在哪家早餐店？",
  stage: 4,
  questions: [
    {
      q: "這家蛋餅超酥脆，是不是妳常經過那家？",
      options: [
        { text: "「對！妳怎麼這麼會找～」", effect: { affinity: 1 } },
        { text: "「不是欸，我沒看過那桌子。」", effect: { affinity: 0 } },
        { text: "「怎樣，是想餵我嗎？」", effect: { affinity: 2 } }
      ]
    },
    {
      q: "我今天早上做了一個奇怪的夢，夢到我們在校園裡辦粉絲見面會。",
      options: [
        { text: "「欸～好有畫面喔哈哈！」", effect: { affinity: 1 } },
        { text: "「我們那麼紅喔？」", effect: { affinity: 1 } },
        { text: "「那夢裡我是不是超糗⋯⋯」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "說真的，妳最近有比較想我嗎？",
      options: [
        { text: "「有欸，尤其是直播完的時候。」", effect: { affinity: 2 } },
        { text: "「我們不是每天都在聊？」", effect: { affinity: 1 } },
        { text: "「怎麼突然問這個⋯⋯」", effect: { affinity: -1 } }
      ]
    }
  ]
},
"xing-hang-4": {
  name: "星航",
  intro: "語音訊息的早安。",
  stage: 4,
  questions: [
    {
      q: "妳有沒有習慣早上第一件事滑誰的訊息？",
      options: [
        { text: "「你啊，誰叫你這麼愛傳語音～」", effect: { affinity: 2 } },
        { text: "「我都先看業配通知啦XD」", effect: { affinity: 1 } },
        { text: "「妳想太多了啦哈哈。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "如果我說我現在站在妳家對面呢？",
      options: [
        { text: "「你又在幻想劇情啦～」", effect: { affinity: 1 } },
        { text: "「⋯⋯你真的在嗎？」", effect: { affinity: -1 } },
        { text: "「變態警報又響了喔？」", effect: { affinity: -2 } }
      ]
    },
    {
      q: "有沒有人曾讓妳想過，會不會就是『命中注定』？",
      options: [
        { text: "「也許吧，但我還不確定。」", effect: { affinity: 2 } },
        { text: "「妳很喜歡這種設定齁？」", effect: { affinity: 1 } },
        { text: "「我不信命運。」", effect: { affinity: -1 } }
      ]
    }
  ]
},
 "mo-li-5": {
  name: "墨離",
  intro: "邀妳來她家喝茶。",
  stage: 5,
  questions: [
    {
      q: "我會準備桂花糕和熱茶，還有我的新作品。",
      options: [
        { text: "「光用聽的就想去了⋯」", effect: { affinity: 2 } },
        { text: "「我考慮一下喔～」", effect: { affinity: 1 } },
        { text: "「妳不會覺得太快了嗎？」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "見面後妳會覺得我變得更遠，還是更近？",
      options: [
        { text: "「我覺得⋯會更近吧。」", effect: { affinity: 2 } },
        { text: "「我也不知道⋯試試看才知道。」", effect: { affinity: 1 } },
        { text: "「我比較習慣隔著螢幕耶。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "那天妳會穿妳自己嗎？還是，硯颺？",
      options: [
        { text: "「我會是我自己，不是誰的形象。」", effect: { affinity: 1 } },
        { text: "「妳希望我是哪個我呢？」", effect: { affinity: 1 } },
        { text: "「這麼在意形象幹嘛啦～」", effect: { affinity: -1 } }
      ]
    }
  ]
},
"rika-5": {
  name: "Rika",
  intro: "想約妳看展。",
  stage: 5,
  questions: [
    {
      q: "我發現一個超適合我們的展，主題是『虛擬情人』！",
      options: [
        { text: "「這題目好中我喔，走啦！」", effect: { affinity: 2 } },
        { text: "「哪裡？我查查看。」", effect: { affinity: 1 } },
        { text: "「聽起來有點中二欸XD」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "見到我本人，妳會失望嗎？",
      options: [
        { text: "「不會吧，我都那麼喜歡妳了。」", effect: { affinity: 2 } },
        { text: "「有點緊張，但我想見妳。」", effect: { affinity: 1 } },
        { text: "「我怕我會想逃跑⋯⋯」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "我們是朋友，還是準備更進一步的什麼？",
      options: [
        { text: "「我不知道⋯但我想靠妳更近一點。」", effect: { affinity: 2 } },
        { text: "「我們是朋友+吧哈哈」", effect: { affinity: 1 } },
        { text: "「先不要想太多啦～」", effect: { affinity: -1 } }
      ]
    }
  ]
},
"xing-hang-5": {
  name: "星航",
  intro: "暗示妳們可能擦肩而過。",
  stage: 5,
  questions: [
    {
      q: "妳今天在外面嗎？我總覺得⋯有種熟悉的味道。",
      options: [
        { text: "「我現在在××咖啡廳⋯會不會你真的在附近？」", effect: { affinity: 2 } },
        { text: "「你是靈媒嗎？怎麼那麼神。」", effect: { affinity: 1 } },
        { text: "「你又開始幻想啦～」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "我真的、真的很想見妳。",
      options: [
        { text: "「我也是⋯但有點怕被你看透。」", effect: { affinity: 2 } },
        { text: "「那等我有空排個時間好嗎？」", effect: { affinity: 1 } },
        { text: "「還是別這麼衝動比較好。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "如果見面之後，妳發現我跟想像中不一樣⋯妳會怎樣？",
      options: [
        { text: "「那也沒關係，我想認識真實的你。」", effect: { affinity: 2 } },
        { text: "「我們都不可能完全一樣吧～」", effect: { affinity: 1 } },
        { text: "「我可能會馬上離開。」", effect: { affinity: -2 } }
      ]
    }
  ]
 },
"mo-li-6": {
  name: "墨離",
  intro: "與墨離在書店門前見面。",
  stage: 6,
  questions: [
    {
      q: "她穿著深藍長風衣，一手拿書，一手牽妳的袖口。",
      options: [
        { text: "我輕聲說：「好久不見，雖然我們第一次見。」", effect: { affinity: 1 } },
        { text: "我主動牽她的手，說：「書看完了嗎？」", effect: { affinity: 2 } },
        { text: "我站得有點遠，點頭：「嗯⋯是妳啊。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "她指著書封上的詩句：「像不像我們？」",
      options: [
        { text: "「『我與你隔著一頁世界』⋯確實有點像。」", effect: { affinity: 2 } },
        { text: "「我比較像那句『默默坐著，看你看書』。」", effect: { affinity: 1 } },
        { text: "「我不太看這種詩欸。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "走進書店，她問：『我們要不要選一本彼此的書？』",
      options: [
        { text: "「可以，但妳要先猜我會選什麼。」", effect: { affinity: 1 } },
        { text: "「好啊，選完我們交換看～」", effect: { affinity: 2 } },
        { text: "「我今天不想買書欸，改天好嗎？」", effect: { affinity: -1 } }
      ]
    }
  ]
},


"rika-6": {
  name: "Rika",
  intro: "與 Rika 一起看展。",
  stage: 6,
  questions: [
    {
      q: "她朝妳揮手，笑得像陽光一樣。",
      options: [
        { text: "我也笑著跑過去：「等很久了嗎？」", effect: { affinity: 2 } },
        { text: "「哇，跟照片長得一樣耶。」", effect: { affinity: 1 } },
        { text: "「我差點認不出妳欸。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "展場播放著模擬戀愛語音，她突然湊近耳邊問：『這聲音像不像我？』",
      options: [
        { text: "「不像，是妳更可愛。」", effect: { affinity: 2 } },
        { text: "「好像有一點點像欸哈哈。」", effect: { affinity: 1 } },
        { text: "「你聲音太有辨識度了啦XD」", effect: { affinity: 1 } }
      ]
    },
    {
      q: "她停在一幅裝置藝術前：「如果是妳，會怎麼回應一段假的愛情？」",
      options: [
        { text: "「只要有感覺，那就不假。」", effect: { affinity: 2 } },
        { text: "「應該會逃吧⋯我很怕受傷。」", effect: { affinity: 1 } },
        { text: "「假的我就轉頭走人。」", effect: { affinity: -1 } }
      ]
    }
  ]
},


"xing-hang-6": {
  name: "星航",
  intro: "與星航在咖啡廳相遇。",
  stage: 6,
  questions: [
    {
      q: "他一看到妳就站起來，小心翼翼地笑著：『真的是妳。』",
      options: [
        { text: "我笑著點頭：「你怎麼那麼厲害⋯」", effect: { affinity: 2 } },
        { text: "「妳早就在等我了吧？」", effect: { affinity: 1 } },
        { text: "「你⋯不會是一直蹲點吧？」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "他小聲問：「我是不是很不真實？」",
      options: [
        { text: "「反而妳讓我覺得世界比較真了。」", effect: { affinity: 2 } },
        { text: "「其實你跟我想像差不多。」", effect: { affinity: 1 } },
        { text: "「有一點⋯但我也不確定自己是不是。」", effect: { affinity: 1 } }
      ]
    },
    {
      q: "他輕輕放下飲料：「我會不會太快了⋯會不會讓妳不舒服？」",
      options: [
        { text: "「我來了，不代表我抗拒。」", effect: { affinity: 2 } },
        { text: "「我們慢慢來好嗎？」", effect: { affinity: 1 } },
        { text: "「這一切都太奇怪了⋯」", effect: { affinity: -2 } }
      ]
    }
  ]
 },


"dream": {
  name: "夢境",
  intro: "閉上眼睛，夢裡的輪廓浮現。",
  stage: 7,
  questions: [
    {
      q: "你夢到有人在身邊牽起了你的手。那是⋯⋯",
      options: [
        { text: "熟悉的身影，讓人想靠近。", effect: { affinity: 2 } },
        { text: "模糊的臉龐，卻能感受到溫度。", effect: { affinity: 2 } },
        { text: "不確定是誰，但心跳好快。", effect: { affinity: 1 } }
      ]
    }
  ]
},


"stream": {
  name: "直播",
  intro: "鏡頭前，燈光有點太亮。",
  stage: 7,
  questions: [
    {
      q: "你想和觀眾分享哪一段？",
      options: [
        { text: "她的笑容真的很好看。", effect: { affinity: 2 } },
        { text: "沒想到會聊那麼多心事。", effect: { affinity: 2 } },
        { text: "今天真的很累⋯⋯但值得。", effect: { affinity: 1 } }
      ]
    }
  ]
},


"diary": {
  name: "日記",
  intro: "紙筆總是比螢幕更誠實。",
  stage: 7,
  questions: [
    {
      q: "你寫下了什麼？",
      options: [
        { text: "「我還想再見她一次。」", effect: { affinity: 2 } },
        { text: "「我是不是有點太心動了⋯⋯」", effect: { affinity: 2 } },
        { text: "「無論結果如何，我都不後悔今天的選擇。」", effect: { affinity: 2 } }
      ]
    }
  ]
},


"mo-li-final": {
  name: "墨離",
  intro: "與墨離在書店附近喝茶，她準備好了某些話。",
  stage: 8,
  questions: [
    {
      q: "「妳喜歡書的味道嗎？我覺得像陽光跟時間混在一起。」",
      options: [
        { text: "「有時候像妳。」", effect: { affinity: 2 } },
        { text: "「嗯，有點像紙老虎。」", effect: { affinity: -1 } },
        { text: "「我比較喜歡書裡的人。」", effect: { affinity: 1 } }
      ]
    },
    {
      q: "她看著你不說話，然後遞來一本詩集：「可以收下嗎？」",
      options: [
        { text: "「我會好好讀的。」", effect: { affinity: 2 } },
        { text: "「謝謝，我之後還妳。」", effect: { affinity: 1 } },
        { text: "「我不太看書耶⋯⋯」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "「我可以⋯⋯喜歡妳嗎？」",
      options: [
        { text: "「我比妳更早喜歡妳。」", effect: { affinity: 3, end: "mo-li" } },
        { text: "「我也在想同樣的事。」", effect: { affinity: 2, end: "mo-li" } },
        { text: "（沉默，沒接話。）", effect: { affinity: -1, end: "none" } }
      ]
    }
  ]
},
"rika-final": {
  name: "Rika",
  intro: "在她的咖啡廳裡，Rika 笑得特別燦爛。",
  stage: 8,
  questions: [
    {
      q: "「昨天妳好像一直看我裙子太短對吧～」",
      options: [
        { text: "「誰叫妳一直靠那麼近啦！」", effect: { affinity: 2 } },
        { text: "「那不是因為妳可愛嗎？」", effect: { affinity: 1, affinity: 1 } },
        { text: "「沒有吧？妳想太多。」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "她把一杯特調推過來：「這杯叫【喜歡妳】。」",
      options: [
        { text: "「那我乾杯：我也喜歡妳。」", effect: { affinity: 2 } },
        { text: "「味道⋯⋯不錯。」", effect: { affinity: 1 } },
        { text: "「這也太中二了吧！」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "「硯颺，我是說真的。我真的喜歡妳。」",
      options: [
        { text: "「我早就想親妳了。」", effect: { affinity: 3, end: "rika" } },
        { text: "「我也喜歡妳。」", effect: { affinity: 2, end: "rika" } },
        { text: "「⋯⋯我還沒準備好。」", effect: { affinity: -1, end: "none" } }
      ]
    }
  ]
},
"xing-hang-final": {
  name: "星航",
  intro: "她坐在熟悉的早餐店，手裡拿著妳提過的奶茶品牌。",
  stage: 8,
  questions: [
    {
      q: "「我昨天⋯⋯一直在回放我們的對話。」",
      options: [
        { text: "「我也會偷偷看妳的帳號。」", effect: { affinity: 1 } },
        { text: "「那我是不是該多傳點自拍？」", effect: { affinity: 2 } },
        { text: "「妳有點變態耶⋯⋯」", effect: { affinity: -2 } }
      ]
    },
    {
      q: "她把一袋妳喜歡的餅乾放到妳手上：「吃這個會不會比較好說話？」",
      options: [
        { text: "「我有點受寵若驚。」", effect: { affinity: 1 } },
        { text: "「太犯規了吧！」", effect: { affinity: 2 } },
        { text: "「這不會過期吧⋯」", effect: { affinity: -1 } }
      ]
    },
    {
      q: "「我一直以為妳不會注意到我⋯⋯但我真的喜歡妳。」",
      options: [
        { text: "「我一直知道，卻也在等妳說出口。」", effect: { affinity: 3, end: "xing-hang" } },
        { text: "「我有點心動。」", effect: { affinity: 2, end: "xing-hang" } },
        { text: "「我⋯⋯要回避一下這個問題。」", effect: { affinity: -1, end: "none" } }
      ]
    }
  ]
 }
}