const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (characters[id]) {
  document.getElementById("name").textContent = characters[id].name;
  document.getElementById("image").src = characters[id].image;
  document.getElementById("desc").textContent = characters[id].desc;
} else {
  document.body.innerHTML = "<h1>Nhân vật không tồn tại</h1>";
}