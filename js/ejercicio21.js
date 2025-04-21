import { actualizarTexto } from './funcion21.js';

const input = document.getElementById('texto1');
const salida = document.getElementById('texto2');

input.addEventListener('input', () => {
  actualizarTexto(input.value, salida);
});