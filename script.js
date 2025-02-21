document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search-box");
  const searchIcon = document.querySelector("#search-icon");
  const navbar = document.querySelector(".navbar");
  const menuIcon = document.querySelector("#menu-icon");
  const header = document.querySelector("header");
  const filterItems = document.querySelectorAll(".filter-produit ul li");
  const productBoxes = document.querySelectorAll(".products-container .box");
  const fadeElements = document.querySelectorAll('.fade-on-scroll');

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

  // Remove active classes on scroll and add shadow to header
  window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
    searchBox.classList.remove("active");
    header.classList.toggle("shadow", window.scrollY > 0);

    // Add fade effect on scroll for elements
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add('visible');
      }
    });

    // Check if product boxes are in view and add visible class
    productBoxes.forEach((box) => {
      const rect = box.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        box.classList.add("visible");
      }
    });
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

  // Initial check for elements already in view (fade and product boxes)
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      el.classList.add('visible');
    }
  });

  productBoxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      box.classList.add("visible");
    }
  });
});
