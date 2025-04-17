const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
        console.log(numero1 +" es mayor que "+numero2);
    } else if (numero2 > numero1) {
        console.log(numero2 +" es mayor que "+numero1);
    } else {
        console.log("Los dos números son iguales");
    }
};

calcularMayor(10, 5);
calcularMayor(7, 20);
calcularMayor(15, 15);