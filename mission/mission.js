const themeSelector = document.getElementById("themeSelector");

function changeTheme() {
    const selectedOption = themeSelector.value;
    const body = document.body;
    const logo = document.getElementById("logo");

    if (selectedOption === "dark") {
        body.classList.add("dark");
        logo.src = "byui-logo_white.png";
    } else {
        body.classList.remove("dark");
        logo.src = "byui-logo_blue.png";
    }
}

themeSelector.addEventListener("change", changeTheme);