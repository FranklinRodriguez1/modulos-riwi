// Seleccionar elementos del DOM
let input = document.querySelector(".inputNota");
let button = document.querySelector(".buttonAñadir");
let ul = document.querySelector(".listaNotas");

// Cargar calificaciones al cargar la página
document.addEventListener('DOMContentLoaded', cargarCalificaciones);

// Agregar evento al botón para añadir calificación
button.addEventListener('click', agregarCalificacion);

// Función para agregar una calificación
function agregarCalificacion() {
    if (input.value === "" || input.value == null) {
        alert("Ingresa tu calificación");
        return;
    }
    let li = document.createElement("li");
    li.className = "d-flex justify-content-between itemList gap-2";
    li.innerHTML = `<span class="material-symbols-outlined delete p-1 text-light bg-danger rounded">close</span>${input.value}`;
    ul.appendChild(li);
    actualizarLocalStorage(input.value);
    input.value = "";
    input.focus();
}

// Función para cargar calificaciones desde localStorage
function cargarCalificaciones() {
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.forEach(nota => {
        let li = document.createElement("li");
        li.className = "d-flex justify-content-between itemList gap-2";
        li.innerHTML = `<span class="material-symbols-outlined delete p-1 text-light bg-danger rounded">close</span>${nota}`;
        ul.appendChild(li);
    });
}

// Función para actualizar localStorage
function actualizarLocalStorage(nota) {
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.push(nota);
    localStorage.setItem("notas", JSON.stringify(notas));
}

// Evento para eliminar calificación
ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        eliminarCalificacion(e.target.parentElement);
    }
});

// Función para eliminar una calificación
function eliminarCalificacion(liElement) {
    let nota = liElement.textContent.trim().replace('close', '').trim();
    liElement.remove();
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas = notas.filter(n => n !== nota);
    localStorage.setItem("notas", JSON.stringify(notas));
}
