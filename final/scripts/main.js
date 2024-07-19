import { places } from "./places.js";

places.forEach((_place) => {
    const article = document.createElement("article");
    article.classList.add("place-grid");
    const htmlelement = "h2";
    if (_place.name === "Brooke") {
        htmlelement = "h3"
    }
    const h2 = document.createElement(htmlelement);
    const img = document.createElement("img");
    img.classList.add("places-img");
    const p = document.createElement("p");

    h2.textContent = _place.name;
    img.setAttribute("src", _place.image);
    img.setAttribute("alt", _place.name);
    p.textContent = _place.description;
    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(p);
    document.querySelector("#places").appendChild(article);
});


  

