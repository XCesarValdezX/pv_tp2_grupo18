const paisesCapitales = {
    "argentina": "buenosaires",
    "brasil": "brasilia",
    "canada": "ottawa",
    "colombia": "bogota",
    "mexico": "ciudaddemexico",
    "peru": "lima"
};
function obtenerNombres(valorPais, valorCapital) {
    const nombresPaises = {
        "argentina": "Argentina",
        "brasil": "Brasil",
        "canada": "Canadá",
        "colombia": "Colombia",
        "mexico": "México",
        "peru": "Perú"
    };
    
    const nombresCapitales = {
        "buenosaires": "Buenos Aires",
        "brasilia": "Brasilia",
        "ottawa": "Ottawa",
        "bogota": "Bogotá",
        "ciudaddemexico": "Ciudad de México",
        "lima": "Lima"
    };
    
    return {
        pais: nombresPaises[valorPais],
        capital: nombresCapitales[valorCapital]
    };
}

export function iniciarSelector() {
    const selectPaises = document.getElementById('paises');
    const selectCapitales = document.getElementById('capitales');
    const display = document.getElementById('display');
    const seleccionTexto = document.getElementById('seleccion');

    selectPaises.addEventListener('change', function() {
        const paisSeleccionado = this.value;
        const capitalCorrespondiente = paisesCapitales[paisSeleccionado];
        
        selectCapitales.value = capitalCorrespondiente;
        
        const nombres = obtenerNombres(paisSeleccionado, capitalCorrespondiente);
        
        seleccionTexto.textContent = `${nombres.pais} - ${nombres.capital}`;
        display.style.display = 'block';
        console.log(`País seleccionado: ${nombres.pais}, Capital: ${nombres.capital}`);
    });

    selectCapitales.addEventListener('change', function() {
        const capitalSeleccionada = this.value;
        
        let paisCorrespondiente;
        for (const pais in paisesCapitales) {
            if (paisesCapitales[pais] === capitalSeleccionada) {
                paisCorrespondiente = pais;
                break;
            }
        }
        
        selectPaises.value = paisCorrespondiente;
        const nombres = obtenerNombres(paisCorrespondiente, capitalSeleccionada);
        seleccionTexto.textContent = `${nombres.pais} - ${nombres.capital}`;
        display.style.display = 'block';
        console.log(`País seleccionado: ${nombres.pais}, Capital: ${nombres.capital}`);
    });
}
