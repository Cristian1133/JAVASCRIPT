


// Selección por ID
const titulo = document.getElementById('miTitulo');
console.log(titulo)

// Selección por clase
const elementos = document.getElementsByClassName('miClase');
console.log(elementos)
// Selección por selector CSS
const parrafo = document.querySelector('p');
const todosLosParrafos = document.querySelectorAll('p');
console.log(parrafo)
console.log(todosLosParrafos)
            
titulo.textContent = 'Nuevo Título Modificado';
parrafo.innerHTML = '<h1>Párrafo Modificado</h1>';

const enlace = document.querySelector('a');
enlace.setAttribute('href', 'https://www.udi.edu.co');

const caja = document.querySelector('.miClase');
caja.style.backgroundColor = 'blue';
caja.style.color = "red";

const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy un nuevo DIV';
document.body.appendChild(nuevoDiv);

// Seleccionar los elementos
let boton = document.getElementById("miBoton");
let boton2 = document.getElementById("miBoton2");

// Definir la función para el evento
function mostrarAlerta() {
    alert("¡Botón clickeado!");
}

// Agregar el evento al primer botón
boton.addEventListener("click", mostrarAlerta);

// Agregar evento al segundo botón para eliminar el evento del primero
boton2.addEventListener("click", function() {
    alert("¡Evento eliminado del primer botón!");
    boton.removeEventListener("click", mostrarAlerta); // Se quita el evento
});

 // Un ejemplo de función
//  function saludar() {
//      let nombre = prompt("ingrese su nombre")
//      alert("HOLA" + nombre);
//      console.log("hola" + nombre)
//  }
//  saludar();

