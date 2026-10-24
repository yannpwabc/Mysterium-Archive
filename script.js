const container = document.getElementById("caseContainer");
const searchInput = document.getElementById("searchInput");

// Fungsi untuk menampilkan kartu kasus
function renderCases(data) {
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "case-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="case-image">
      <h3>${item.title}</h3>
      <p><strong>Tahun:</strong> ${item.year} | <strong>Kategori:</strong> ${item.category}</p>
      <p>${item.summary}</p>
    `;
    container.appendChild(card);
  });
}

// Fitur Pencarian
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filteredCases = casesData.filter(item => 
    item.title.toLowerCase().includes(keyword) || 
    item.year.includes(keyword)
  );
  renderCases(filteredCases);
});

// Tampilkan semua kasus saat pertama kali dibuka
renderCases(casesData);
