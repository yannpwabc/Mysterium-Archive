const container = document.getElementById("caseContainer");
const searchInput = document.getElementById("searchInput");

// Fungsi untuk menampilkan kartu kasus
function renderCases(data) {
  if (!container) return;

  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "case-card";

    card.innerHTML = `
      <img src="${item.image || ""}" alt="${item.title || "Case image"}" class="case-image">
      <h3>${item.title}</h3>
      <p><strong>Tahun:</strong> ${item.year} | <strong>Kategori:</strong> ${item.category}</p>
      <p>${item.summary}</p>
    `;

    container.appendChild(card);
  });
}

// Fitur pencarian
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase().trim();

    const filteredCases = casesData.filter(item => {
      return (
        item.title.toLowerCase().includes(keyword) ||
        item.year.toString().includes(keyword) ||
        item.category.toLowerCase().includes(keyword)
      );
    });

    renderCases(filteredCases);
  });
}

// Tampilkan semua kasus saat pertama kali dibuka
renderCases(casesData);
