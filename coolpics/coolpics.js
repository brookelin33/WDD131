const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  console.log("menu button clicked");
  const menu = document.querySelector(".menu-hide");
  menu.style.display = "block";
  // menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
handleResize();
window.addEventListener("resize", handleResize);
