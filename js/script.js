let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let button__name = document.querySelector(".js-button__name");

button.addEventListener("click", () => {
    body.classList.toggle("darkBackground");

    button__name.innerText = body.classList.contains("darkBackground") ? "Jasny motyw" : "Ciemny motyw";
});