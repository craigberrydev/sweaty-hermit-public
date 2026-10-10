fetch("/data/menu.json")
  .then((r) => r.json())
  .then((menu) => {
    const nav = document.getElementById("menu");

    menu.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.title;
      link.style.marginRight = "10px";
      nav.appendChild(link);
    });
  });
