"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const buttonAdd = document.getElementById("button_agregar");
  const buttonDelete = document.getElementById("button_delete");
  const buttonModif = document.getElementById("button_modif");
  const parentList = document.querySelector(".container_list");

  buttonAdd.addEventListener("click", () => {
    const addNodeInput = document.getElementById("index_add").value;

    if (addNodeInput == "") {
      alert("Nel bro, no se puede");
    } else {
      createNode(addNodeInput);
      setTimeout(() => {
        animationAddNode(addNodeInput);
      }, 1500);
    }
  });

  // Delete nodes
  buttonDelete.addEventListener("click", () => {
    const deleteIndex = document.getElementById("delete--index").value;

    if (deleteIndex === "") {
      alert("Esta vacío, intorduce un valor");
    } else {
      animationDeleteNode(deleteIndex);
      setTimeout(() => {
        deleteNode(deleteIndex);
      }, 1500);
    }
  });

  function createNode(arg) {

    const newNode = `<i class='bx bxs-right-arrow-alt bx-md' style='color:#838383' id='arrow_1'></i>
    <div class="class_list" id="node${arg}">
    <span class="element_node">${arg}</span>
      </div>
    `;
    parentList.innerHTML += newNode
  }
  async function deleteNode(arg) {
    let childs = parentList.getElementsByTagName("div");
    let arrow = parentList.getElementsByTagName("i");
    childs[arg].remove();
    arrow[arg].remove();
  }

  function animationAddNode(arg) {
    let childs = parentList.getElementsByTagName("div");
    childs[arg].style.animation = "animateNode 1.5s";
  }

  function animationDeleteNode(arg) {
    let childs = parentList.getElementsByTagName("div");
    childs[arg].style.animation = "deletePointer 1.5s";
  }
});
