const nombres = ["Francisco","Alex","Martin","Armando","Maximiliano"];

let maxLength = nombres[0].length;
let nombreMaxLength = nombres[0]; //inicializar sino no sale nada!!!

nombres.forEach( (x) => {
    if(maxLength < x.length){
        maxLength = x.length;
        nombreMaxLength = x;
    }
});

console.log("El nombre mas largo es: "+nombreMaxLength);
console.log("Tiene "+maxLength+" caracteres");