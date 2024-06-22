const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  console.log("menu button clicked");
  const menu = document.querySelector(".menu-hide");
  menu.style.display = "block";
  // menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


