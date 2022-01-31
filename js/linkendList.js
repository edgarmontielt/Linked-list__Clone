"use strict";

let buttonAdd = document.getElementById("button_agregar");
let indexModif = document.getElementById("index_modif");
let buttonDelete = document.getElementById("button_delete");
let elementList = document.querySelector(".container_arrow_left");
let buttonModif = document.getElementById("button_modif");
let buttonSave = document.getElementById("button_save");

buttonAdd.addEventListener("click", () => {
  let node = document.querySelector("span");
  let containerNode = document.querySelector(".class_list");
  containerNode.style.display = "block";
  containerNode.style.animation = `animateNode ${menuTimeOut / 1000}s ease`;
});

buttonDelete.addEventListener("click", () => {
  let node = document.querySelector("span");
  let containerNode = document.querySelector(".class_list");
  containerNode.style.display = "block";
  containerNode.style.animation = `deletePointer ${menuTimeOut / 1000}s ease`;
  containerNode.style.display = "absolute";
});

let insertNode = () => {
  let containerList = document.querySelector(".container_list");
  let newNode =
    '<div class="container_arrow_left"><i class="bx bxs-right-arrow-alt bx-md" style="color:#e4d9d9"></i></div><div class="class_list"><span>2</span></div>';

  containerList.insertAdjacentHTML("beforeend", newNode);
};

buttonModif.addEventListener("click", () => {});

buttonSave.addEventListener("click", () => {
  error();
});
