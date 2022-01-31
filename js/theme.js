"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let iconTheme = document.getElementById("icon_theme");
  let ligthcolor = "rgb(255, 255, 255)";

  iconTheme.addEventListener("click", () => {
    let background = document.getElementById("background");
    let iconMenu = document.getElementById("icon_menu");
    let navbar = document.querySelector(".navbar");
    let titleInputs = document.querySelector(".title_inputs");
    let arrowLink = document.querySelector(".bxs-arrow-from-left");

    if (iconTheme.style.color == ligthcolor) {
      iconTheme.style.color = "#1a1a1a";
      background.style.backgroundColor = "#FFFFFF";
      iconMenu.style.color = "#000000";
      navbar.style.color = "#000000";
      titleInputs.style.color = "#000000";
    } else {
      iconTheme.style.color = "#FFFFFF";
      background.style.backgroundColor = "#1a1a1a";
      iconMenu.style.color = "#FFFFFF";
      navbar.style.color = "#FFFFFF";
      titleInputs.style.color = "#FFFFFF";
      // arrowLink.style.color = "#FFFFFF"
    }
  });
});
