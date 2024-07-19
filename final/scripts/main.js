import { places } from "./places.js";

places.forEach((_place) => {
  const article = document.createElement("article");
  article.classList.add("place-grid");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  img.classList.add("places-img");
  const p = document.createElement("p");

  h2.textContent = _place.name;
  //conditional branching
  if (_place.image) {
    img.setAttribute("src", _place.image);
    img.setAttribute("alt", _place.name);
  } else {
    img.setAttribute("src", "default.jpg");
    img.setAttribute("alt", "Default Image");
  }

  p.textContent = _place.description;
  article.appendChild(h2);
  article.appendChild(img);
  article.appendChild(p);
  document.querySelector("#places").appendChild(article);
});

document.querySelector("#places").addEventListener("click", viewHandler);

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
  const newSrc = clickedElement.getAttribute("src");
  document.body.insertAdjacentHTML(
    "afterbegin",
    viewerTemplate(newSrc, "alt description")
  );
  // add a listener to the close button (X) that calls a function called closeViewer when clicked
  document
    .querySelector(".close-viewer")
    .addEventListener("click", closeViewer);
}

function closeViewer() {
  document.querySelector(".viewer").remove();
}
