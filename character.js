const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (characterData[id]) {
  const data = characterData[id];

  document.getElementById("name").textContent = data.name;
  document.getElementById("desc").textContent =
    `Vận mệnh: ${data.path} | Thuộc tính: ${data.element}`;

  document.getElementById("image").src =
    `anh/characters/${id}.webp`;
} else {
  document.body.innerHTML = "<h1>Nhân vật không tồn tại</h1>";
}