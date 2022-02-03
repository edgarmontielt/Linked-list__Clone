"use strict";

let openConf = document.getElementById("icon_menu-lateral");
let closeConf = document.querySelector(".close_menu");
let menuConf = document.getElementById("menu_lateral-settings");

let menuTimeOut = 800;

async function manageOpacity() {
    let navbar = document.querySelector(".navbar_container");
    let main = document.querySelector("main");

    let decreaseOpacity = `OpacityLow ${menuTimeOut / 10000}s ease`;
    let increaseOpacity = `OpacityHigh ${menuTimeOut / 10000}s ease`;

    if (main.style.opacity === "1" || main.style.opacity === "") {
        main.style.animation = decreaseOpacity;
        navbar.style.animation = decreaseOpacity;
        main.style.opacity = 0.1;
        navbar.style.opacity = 0.4;
    } else {
        main.style.animation = increaseOpacity;
        navbar.style.animation = increaseOpacity;
        main.style.opacity = 1;
        navbar.style.opacity = 1;
    }
}

openConf.addEventListener("click", () => {
    menuConf.style.display = "block";
    menuConf.style.animation = `openNav ${menuTimeOut / 1000}s ease`;
    manageOpacity();
});

closeConf.addEventListener("click", () => {
    menuConf.style.animation = `closeNav ${menuTimeOut / 1000}s ease`;
    manageOpacity();
    setTimeout(() => {
        menuConf.style.display = "none";
    }, menuTimeOut);
});

setTimeout(() => { }, menuTimeOut);
