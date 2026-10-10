const params = new URLSearchParams(window.location.search);
const file = params.get("file");

fetch("/blog/" + file)
  .then((r) => r.text())
  .then((md) => {
    document.getElementById("post").innerHTML = marked.parse(md);
  });
