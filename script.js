let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


document.addEventListener("DOMContentLoaded", () => {
    const filterItems = document.querySelectorAll(".filter-produit ul li");
    const productBoxes = document.querySelectorAll(".products-container .box");
  
    filterItems.forEach(item => {
      item.addEventListener("click", () => {
        filterItems.forEach(li => li.classList.remove("current"));
        item.classList.add("current");
  
        const filterValue = item.textContent.trim();
        productBoxes.forEach(box => {
          const filterCategory = box.getAttribute("data-filter");
          if (filterValue === "All" || filterCategory === filterValue) {
            box.style.display = "block";
          } else {
            box.style.display = "none";
          }
        });
      });
    });
  });
  