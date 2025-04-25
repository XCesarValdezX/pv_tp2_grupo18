const colores = [
    { nombre: "Rojo", codigo: "#ffadad" },
    { nombre: "Naranja", codigo: "#ffd6a5" },
    { nombre: "Amarillo", codigo: "#fdffb6" },
    { nombre: "Verde", codigo: "#caffbf" },
    { nombre: "Celeste", codigo: "#9bf6ff" },
    { nombre: "Azul", codigo: "#a0c4ff" },
    { nombre: "Violeta", codigo: "#bdb2ff" },
    { nombre: "Rosa", codigo: "#ffc6ff" }
];
  
// Función que elige un color aleatorio del array
export const obtenerColorAleatorio = () => {
    const indice = Math.floor(Math.random() * colores.length);
    const color = colores[indice];
    console.log(`Color seleccionado desde la función: ${color.nombre} (${color.codigo})`);
    return color;
};