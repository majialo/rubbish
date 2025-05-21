document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("issue-select");
  const coverImg = document.getElementById("cover-img");
  const articleList = document.getElementById("article-list");

  fetch("data/issues.json")
    .then(response => response.json())
    .then(data => {
      // 初始填充
      updateIssue(data, select.value);

      // 切换期刊
      select.addEventListener("change", () => {
        const selected = select.value;
        updateIssue(data, selected);
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
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = title;
      li.appendChild(a);
      articleList.appendChild(li);
    });
  }
});
