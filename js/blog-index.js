fetch("/data/posts.json")
  .then((r) => r.json())
  .then((posts) => {
    const list = document.getElementById("post-list");

    posts.forEach((post) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <a href="/blog/post.html?file=${post.file}">
          ${post.title}
        </a>
        <small>${post.date}</small>
      `;

      list.appendChild(li);
    });
  });
