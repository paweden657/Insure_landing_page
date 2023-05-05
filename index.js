let btnHam = document.getElementById("hamburger-icon");
let navList = document.getElementById("nav-list");

navList.classList.add("hide");

let changeWindowSize = () => {
    let windowWidth = window.innerWidth;

    if(windowWidth > 768) {
        navList.classList.add("hide");
        btnHam.src = "images/icon-hamburger.svg"
    }
}

btnHam.addEventListener("click", () => {
    if(btnHam.src.endsWith("images/icon-hamburger.svg")) {
        navList.classList.remove("hide");
        btnHam.src = "images/icon-close.svg";
    }
    else {
        navList.classList.add("hide");
        btnHam.src = "images/icon-hamburger.svg";
    }
});

window.addEventListener("resize", changeWindowSize);