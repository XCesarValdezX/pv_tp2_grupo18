import { cambiarTexto } from "./cambiarTexto.js"; 

const boton = document.getElementById("boton");
const texto = document.getElementById("texto");

boton.addEventListener("click", () => {
    cambiarTexto(texto);
});
