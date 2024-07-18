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

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
  console.log("view button clicked");
	// create a variable to hold the element that was clicked on from event.target
  const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
  const srcparts = clickedElement.getAttribute("src").split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  const newSrc = srcparts[0] + "-full.jpeg";
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
  document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, "alt description"));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
  document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
  document.querySelector(".viewer").remove();
}

