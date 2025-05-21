document.addEventListener("DOMContentLoaded", () => {
  // —— 1. 期刊切换功能 ——  
  const select      = document.getElementById("issue-select");
  const coverImg    = document.getElementById("cover-img");
  const articleList = document.getElementById("article-list");

  fetch("data/issues.json")
    .then(res => res.json())
    .then(data => {
      // 初始显示
      updateIssue(data, select.value);
      // 切换事件
      select.addEventListener("change", () => {
        updateIssue(data, select.value);
      });
    });

  function updateIssue(data, issueId) {
    const issue = data[issueId];
    if (!issue) return;
    // 更新封面
    coverImg.src = issue.cover;
    // 更新文章列表
    articleList.innerHTML = "";
    issue.articles.forEach(title => {
      const li = document.createElement("li");
      const a  = document.createElement("a");
      a.href          = "#";
      a.textContent   = title;
      li.appendChild(a);
      articleList.appendChild(li);
    });
  }

  // —— 2. 暗黑模式切换 ——  
  const darkToggle = document.getElementById("dark-toggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // —— 3. 随机“科学垃圾趣闻” ——  
  const facts       = [
    "科学家在实验室里花了36小时，发现土豆也会发呆。",
    "量子力学告诉我们：你的薯片其实同时被吃和没被吃。",
    "研究表明：猫的喵叫频率可用于调制无线信号。",
    "微生物大会开幕，主题是“如何在黑暗中优雅地发光”。",
    "最新成果：用黑洞清理垃圾分类的效率提高了200%。",
    "牛顿其实是被一个掉落的披萨打到才产生万有引力定律的灵感。"
  ];
  const factText    = document.getElementById("fact-text");
  const refreshFact = document.getElementById("refresh-fact");

  function showFact() {
    const idx = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[idx];
  }

  // 首次加载 & 点击刷新
  showFact();
  refreshFact.addEventListener("click", showFact);
});


  }
});
