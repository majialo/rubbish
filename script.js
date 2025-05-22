document.addEventListener("DOMContentLoaded", () => {
  // —— 暗黑模式切换 ——  
  const darkToggle = document.getElementById("dark-toggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // —— 随机“科学垃圾趣闻” ——  
  const facts = [
    "科学家在实验室里花了36小时，发现土豆也会发呆。",
    "量子力学告诉我们：你的薯片同时被吃和没被吃。",
    "研究表明：猫的喵叫频率可用于调制无线信号。",
    "微生物大会开幕，主题是“如何在黑暗中优雅地发光”。",
    "最新成果：用黑洞清理垃圾分类的效率提高了200%。",
    "牛顿其实是被披萨砸到才产生万有引力定律的灵感。"
  ];
  const factText    = document.getElementById("fact-text");
  const refreshFact = document.getElementById("refresh-fact");
  function showFact() {
    factText.textContent = facts[Math.floor(Math.random() * facts.length)];
  }
  showFact();
  refreshFact.addEventListener("click", showFact);

  // —— 文章列表动态加载 ——  
  const articleList = document.getElementById("article-list");
  fetch("data/issues.json")
    .then(res => res.json())
    .then(data => {
      const defaultId = "2025-06";
      const articles  = data[defaultId]?.articles || [];
      articleList.innerHTML = "";
      articles.forEach(title => {
        const li = document.createElement("li");
        const a  = document.createElement("a");
        a.href        = "#";
        a.textContent = title;
        li.appendChild(a);
        articleList.appendChild(li);
      });
    })
    .catch(err => {
      console.error(err);
      articleList.innerHTML = "<li>加载文章失败，请稍后重试。</li>";
    });
});
  showFact();
  refreshFact.addEventListener("click", showFact);
}); 
