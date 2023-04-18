{
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const button__name = document.querySelector(".js-buttonNameElement");

        body.classList.toggle("darkBackground");

        button__name.innerText = body.classList.contains("darkBackground") ? "Jasny" : "Ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    }

    init();
}