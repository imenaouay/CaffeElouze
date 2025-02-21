document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search-box");
  const searchIcon = document.querySelector("#search-icon");
  const navbar = document.querySelector(".navbar");
  const menuIcon = document.querySelector("#menu-icon");
  const header = document.querySelector("header");
  const filterItems = document.querySelectorAll(".filter-produit ul li");
  const productBoxes = document.querySelectorAll(".products-container .box");

  // Toggle search box
  searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    navbar.classList.remove("active");
  });

  // Toggle navbar
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    searchBox.classList.remove("active");
  });

  // Remove active classes on scroll
  window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
    searchBox.classList.remove("active");
    header.classList.toggle("shadow", window.scrollY > 0);
  });

  // Filter products
  filterItems.forEach(item => {
    item.addEventListener("click", () => {
      document.querySelector(".filter-produit ul li.current")?.classList.remove("current");
      item.classList.add("current");

      const filterValue = item.textContent.trim();
      productBoxes.forEach(box => {
        const filterCategory = box.getAttribute("data-filter");
        box.style.display = filterValue === "All" || filterCategory === filterValue ? "block" : "none";
      });
    });
  });
});
