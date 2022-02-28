"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const buttonAdd = document.getElementById("button_agregar");
  const buttonDelete = document.getElementById("button_delete");
  const buttonModif = document.getElementById("button_modif");
  const parentList = document.querySelector(".container_list");
  const childs = parentList.getElementsByTagName("div");

  buttonAdd.addEventListener("click", () => {
    const addNodeInput = document.getElementById("index_add").value;

    if (addNodeInput == "") {
      alert("Nel bro, no se puede");
    } else {
      createNode(addNodeInput);
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
    <div class="class_list" id="node${childs.length + 1}">
    <span class="element_node">${arg}</span>
      </div>
    `;
    parentList.innerHTML += newNode;
    animationAddNode(childs.length - 1);
  }

  async function deleteNode(arg) {
    let arrow = parentList.getElementsByTagName("i");
    childs[arg].remove();
    if (arg === "0") {
      arrow[arg].remove();
    } else {
      arrow[arg - 1].remove();
    }
  }

  function animationAddNode(arg) {
    console.log(arg)
    childs[arg].style.animation = "animateNode 1.5s";
  }

  function animationDeleteNode(arg) {
    childs[arg].style.animation = "deletePointer 1.5s";
  }
});
