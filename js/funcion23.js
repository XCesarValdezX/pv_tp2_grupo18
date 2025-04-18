export const mostrarSeleccion = (texto) => {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Seleccionaste: " + texto;
    console.log("Valor seleccionado:", texto);
};