// Buat search kalo kita klik
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Buat sidebar kalo diklik dihp
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika kita klik diluar menu untuk menghilangkan sidebar
const hm = document.querySelector("#hamburger");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");

  if (!sb.contains(e.target) && !searchForm.contains(e.target))
    searchForm.classList.remove("active");

  if (!sc.contains(e.target) && !keranjang.contains(e.target))
    keranjang.classList.remove("active");
});

// Tombol keranjang
const keranjang = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  keranjang.classList.toggle("active");
  e.preventDefault();
};

// Tombol detail produk
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Tombol close
document.querySelector(".close-button").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
// kalo kita klik diluar modal, modal hilang
window.onclick = (e) => {
  if (e.target == itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
