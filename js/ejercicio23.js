import { mostrarSeleccion } from "./funcion23.js";

// Seleccionamos todos los radio buttons
const radios = document.querySelectorAll('input[name="lenguaje"]');

// Recorremos cada uno y vemos el cambio
radios.forEach((radio) => {
    radio.addEventListener("change", () => {
        mostrarSeleccion(radio.value);
    });
});