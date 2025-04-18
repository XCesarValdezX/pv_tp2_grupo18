const edades = [21, 35, 18, 42, 27, 56, 19, 33];
console.log("Edades:", edades);
let suma = 0;
for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
}
const promedio = suma / edades.length;
console.log("La suma de todas las edades es:", suma);
console.log("El promedio de las edades es:", promedio);

