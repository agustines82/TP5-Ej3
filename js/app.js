// menejadores de eventos:
let inputTarea = document.getElementById("tarea");
let btnAgregar = document.getElementById("agregar");
let listado = document.getElementById("listado");

btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    if (inputTarea.value === "") {
        return;
    }
    //tomamos el valor del input:
    let elemento = inputTarea.value;
    //creamos el elemento html (li)
    let li = document.createElement("li");
    li.innerHTML = elemento;
    li.className = "lead d-flex align-items-center justify-content-between border-bottom border-secondary ms-2 me-5";
    //agrego el li al listado
    listado.appendChild(li);

    //agregamos el boton eliminar:
    let btnEliminar = document.createElement("span");
    btnEliminar.innerHTML = `<i class="bi bi-trash text-danger"></i>`;
    li.appendChild(btnEliminar);

    //agregamos la funcionabilidad que elimina:
    btnEliminar.onclick = function () {
        li.remove();
    };

    //vaciamos el input:
    inputTarea.value = "";
}
