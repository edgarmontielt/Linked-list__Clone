"use strict";

document.addEventListener('DOMContentLoaded', () => {


    const buttonAdd = document.getElementById("button_agregar");
    const buttonDelete = document.getElementById("button_delete");
    const buttonModif = document.getElementById("button_modif");

    const parentList = document.querySelector(".container_list");
    const principalContainer = document.querySelector('.principal_container')

    buttonAdd.addEventListener("click", () => {
        const addNode = document.getElementById("button_agregar").value;

        let newNode = document.createElement('')

        

    });

    // Delete nodes
    buttonDelete.addEventListener("click", () => {
        const deleteIndex = document.getElementById("delete--index").value;

        // if (deleteIndex == '') {
        //     let newElement = document.createElement('div')
        //     newElement.id = 'error_list'
        //     newElement.innerHTML = '! Error, introduce un valor'
        //     principalContainer.appendChild(newElement)
        // } else {

        if (deleteIndex === '') {
            alert('Esta vacío')
        } else {
            animationDeleteNode(deleteIndex);
            setTimeout(() => {
                deleteNode(deleteIndex);
            }, 2000);
        }
    });

    // TODO:  add node in the list
    function createNode(arg) {
        // Pendient Process
    }

    function animationAddNode(arg) {

    }

    async function deleteNode(arg) {
        let childs = parentList.getElementsByTagName("div");

        childs[arg].remove();

    }

    function animationDeleteNode(arg) {
        let childs = parentList.getElementsByTagName("div");

        if (arg % 2 === 0) {
            childs[arg].style.animation = 'deletePointer 2s';
            const arrow = document.getElementById(`arrow_${Number(arg) + 1}`);
            arrow.style.animation = 'deletePointer 2s';
        } else {
            alert("EL nodo no coincide");
        }
    }

})