import { obtenerColorAleatorio } from "./funcion24.js";

const boton = document.getElementById("botonCambiar");

const cambiarColor = () => {
  const color = obtenerColorAleatorio(); // Recibe el objeto con nombre + código
  document.body.style.backgroundColor = color.codigo;
  alert("Color cambiado a: " + color.nombre);
};

boton.addEventListener("click", cambiarColor);