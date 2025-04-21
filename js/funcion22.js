export function actualizarTexto(valor, destino) {
    destino.textContent = valor || 'Tu texto aparecerá aquí.';
    
    if (valor.length > 20) {
      destino.classList.add('largo');
    } else {
      destino.classList.remove('largo');
    }
  }