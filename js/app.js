const botonTarea = document.querySelector("#formdescripcion");
let listado = document.querySelector("ul");

//manejador de eventos:
botonTarea.addEventListener("submit", agregarTarea);

//funcion:
function agregarTarea(e) {
    e.preventDefault();
    let tareaAgregada = document.querySelector("input").value;
    console.log(tareaAgregada);

    listado.innerHTML = listado + "<li>" + tareaAgregada + "</li>";

    document.querySelector("#formdescripcion").reset();
}

/*
let items = document.getElementById("lista");
let lista = [];

function agregar() {
    let val = document.getElementById("lista").value;
    if (val === "") {
        alert("Por favor ingrese la tarea primero");
    } else {
        lista.push(val.trim());
        lista.value = "";
        mostrarLista();
    }
}

function mostrarLista() {
    let datos = "";
    if (lista.length > 0) {
        for (let i = 0; i < lista.length; i++) {
            datos +=
                "<li class='list-group-item'><button class='pull-right' onclick='removeList(" +
                i +
                ")'><span class='glyphicon glyphicon-trash'></span></button>" +
                lists[i] +
                "</li>";
        }
    }
    document.getElementById("resultados").innerHTML = datos;
}

function remover(lista) {
    lista.splice(lista, 1);
    mostrarLista();
}
*/
