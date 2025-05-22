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
    "人们惊讶的发现小偷在被抓之前，整个世界都是他的"
  ];
  const factText    = document.getElementById("fact-text");
  const refreshFact = document.getElementById("refresh-fact");

  function showFact() {
    factText.textContent = facts[Math.floor(Math.random() * facts.length)];
  }

  showFact();
  refreshFact.addEventListener("click", showFact);
}); 
