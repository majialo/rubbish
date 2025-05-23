document.addEventListener("DOMContentLoaded", () => {
  // — 1. 期刊切换 —
  const select      = document.getElementById("issue-select");
  const coverImg    = document.getElementById("cover-img");
  const articleList = document.getElementById("article-list");

  fetch("data/issues.json")
    .then(res => res.json())
    .then(data => {
      updateIssue(data, select.value);
      select.addEventListener("change", () => {
        updateIssue(data, select.value);
      });
    });

  function updateIssue(data, issueId) {
    const issue = data[issueId];
    if (!issue) return;
    coverImg.src = issue.cover;
    articleList.innerHTML = "";
    issue.articles.forEach(title => {
      const li = document.createElement("li");
      const a  = document.createElement("a");
      a.href        = "#";
      a.textContent = title;
      li.appendChild(a);
      articleList.appendChild(li);
    });
  }

  // — 2. 暗黑模式 —
  const darkToggle = document.getElementById("dark-toggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // — 3. 随机趣闻 —
  const facts       = [
    "科学家在实验室里花了36小时，发现土豆也会发呆。",
    "量子力学告诉我们：你的薯片同时被吃和没被吃。",
    "研究表明：猫的喵叫频率可用于调制无线信号。",
    "微生物大会开幕，主题是“如何在黑暗中优雅地发光”。",
    "最新成果：用黑洞清理垃圾分类的效率提高了200%。",
    "牛顿其实是被披萨砸到才产生万有引力定律的灵感。",
    "科学家发现外国有那么多个而中国只有一个",
    "用黄河代替电网的输电工程正式开启",
    "据研究人类下一个进化的器官将是充电宝",
    "人们惊讶的发现小偷在被抓之前，整个世界都是他的",
    "科学家成功让一块豆腐学会了自我防御，目前正在训练其格斗技能。",
    "新研究指出：当你在找遥控器时，遥控器也在找你。",
    "实验证实：90%的WiFi信号在转角处选择了自由。",
    "国际天文联盟确认：火星上的沙子比地球上的“更懂事”。",
    "最新AI模型已经开始对用户的颜值产生情绪波动。",
    "中国学者首次合成“反辣椒素”，吃火锅时自动降温。",
    "科学家发现：如果地球再胖一点，就能卡住月球不让它跑。",
    "最新论文指出：梦境其实是大脑在缓存你不想面对的真相。",
    "天体物理学家警告：再不清理房间，可能形成局部黑洞。",
    "日本研究发现：饭后摸鱼有助于稳定社会结构。",
    "量子洗衣机问世，衣服在洗之前就已经干净了。",
    "蜗牛大会闭幕，主旨演讲持续了两个星期。",
    "哲学教授成功用一根筷子夹住了时间的流逝。",
    "全球首次：用Ctrl+Z撤销了2020年的一部分尴尬瞬间。",
    "研究显示：人类在看到数学题时的逃避反应与鸵鸟一致。",
    "科学界大震动：有只鸡在下蛋的同时自问“我是谁”。",
    "地理学家发现：大多数地图其实是在偷窥你。",
    "全息投影公司宣布：你妈喊你回家吃饭将实现远程同步。",
    "研究称：猫其实只是外星人派来的观察者，狗是保镖。",
    "最新实验表明：朋友圈的三秒视频已达到量子存在上限。",

  ];
  const factText    = document.getElementById("fact-text");
  const refreshFact = document.getElementById("refresh-fact");

  function showFact() {
    factText.textContent = facts[Math.floor(Math.random() * facts.length)];
  }

  showFact();
  refreshFact.addEventListener("click", showFact);
}); 
