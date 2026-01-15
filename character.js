;(function () {
  const params = new URLSearchParams(window.location.search)
  const id = params.get("id")
  const dataSrc = typeof window.characterData !== "undefined" ? window.characterData : null
  const container = document.getElementById("content") || document.getElementById("preview") || document.body

  function portrait(src, alt) {
    const img = document.createElement("img")
    img.src = src
    img.alt = alt || ""
    img.loading = "lazy"
    img.className = "char-portrait"
    img.onerror = function () {
      if (this.src.indexOf("default.webp") === -1) this.src = "anh/characters/default.webp"
    }
    return img
  }

  function buildSection(title, text, src, alt) {
    const sect = document.createElement("div")
    sect.className = "build-section"
    const info = document.createElement("div")
    info.className = "build-info"
    const h3 = document.createElement("h3")
    h3.textContent = title
    const p = document.createElement("p")
    p.textContent = text
    info.appendChild(h3)
    info.appendChild(p)
    sect.appendChild(info)
    if (src) {
      const img = document.createElement("img")
      img.className = "build-img"
      img.loading = "lazy"
      img.alt = alt || ""
      img.src = src
      img.onerror = function () {
        this.style.display = "none"
      }
      sect.appendChild(img)
    }
    return sect
  }

  if (!id || !dataSrc || !dataSrc[id]) {
    container.innerHTML = '<div class="error-box"><h1 style="color:#ff4d4d;">Lỗi: Không tìm thấy dữ liệu</h1></div>'
    return
  }

  const data = dataSrc[id]
  const rID = data.relic_id || id
  const pID = data.planar_id || id
  const themeColor = data.color || "#a0a0a0"
  const starCount = data.rarity || 4

  const wrap = document.createElement("div")
  wrap.className = "container"
  wrap.style.borderTop = "4px solid " + themeColor
  wrap.style.background = "linear-gradient(180deg, " + themeColor + "22 0%, rgba(0,0,0,0) 100%)"

  const header = document.createElement("div")
  header.className = "header"
  header.appendChild(portrait("anh/characters/" + id + ".webp", data.name))
  
  const infoBox = document.createElement("div")
  infoBox.className = "info"
  
  const title = document.createElement("h1")
  title.textContent = data.name
  title.style.color = themeColor
  title.style.textShadow = "0 0 10px " + themeColor + "66"

  const stars = document.createElement("div")
  stars.className = "stars"
  stars.style.color = "#FFD700"
  stars.style.fontSize = "1.2em"
  stars.textContent = "★".repeat(starCount)
  
  const meta = document.createElement("p")
  meta.innerHTML = `Vận mệnh: <b>${data.path}</b> | Thuộc tính: <b style="color:${themeColor}">${data.element}</b>`
  
  const quote = document.createElement("p")
  quote.className = "quote"
  quote.style.fontStyle = "italic"
  quote.style.opacity = "0.8"
  quote.style.marginTop = "5px"
  quote.style.fontSize = "0.9em"
  quote.innerHTML = `"${data.quote || '...'}"`

  infoBox.appendChild(title)
  infoBox.appendChild(stars)
  infoBox.appendChild(meta)
  if (data.quote) infoBox.appendChild(quote)
  
  header.appendChild(infoBox)
  wrap.appendChild(header)

  wrap.appendChild(buildSection("🛡️ Di Vật khuyên dùng:", data.relics, "anh/items/relics/" + rID + ".webp", "Di Vật"))
  wrap.appendChild(buildSection("💎 Phụ Kiện Vị Diện:", data.ornaments, "anh/items/ornaments/" + pID + ".webp", "Phụ Kiện Vị Diện"))
  wrap.appendChild(buildSection("⚔️ Nón Ánh Sáng:", data.lightCone, "anh/items/lightcones/" + id + ".webp", "Nón Ánh Sáng"))
  wrap.appendChild(buildSection("📊 Chỉ số ưu tiên:", data.stats, null, null))

  const link = document.createElement("a")
  link.href = "character.html?id=" + id
  link.textContent = "Xem đầy đủ"
  link.className = "back-btn"
  wrap.appendChild(link)

  container.innerHTML = ""
  container.appendChild(wrap)
})()
