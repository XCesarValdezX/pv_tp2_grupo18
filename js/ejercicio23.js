import { mostrarSeleccion } from "./funcion23.js";

// Seleccionamos todos los radio buttons
const radios = document.querySelectorAll('input[name="lenguaje"]');

// Recorremos cada uno y vemos el cambio
radios.forEach((radio) => {
    radio.addEventListener("change", () => {
        console.log(`Elegiste: ${radio.value}`);
        mostrarSeleccion(radio.value);
    });
});