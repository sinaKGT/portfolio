// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const close_btn = document.querySelector(".mobile-menu-close-button")

const sidebar = document.querySelector(".sidebar");
const backdrop = document.querySelector('.navbar-backdrop');

// open navbar
btn.addEventListener("click", () => {
  backdrop.classList.remove("hidden");
  backdrop.classList.add("flex");
});


// close navbar
close_btn.addEventListener("click", () => {
    backdrop.classList.remove("flex");
    backdrop.classList.add("hidden");
    
  });

// close sidebar by click on page 
backdrop.addEventListener("click", () => {
  backdrop.classList.remove("flex");
  // sidebar.classList.toggle("translate-x-full");
  backdrop.classList.add("hidden");
  
});

sidebar.addEventListener("click", (event)=>{
  event.stopPropagation();
});