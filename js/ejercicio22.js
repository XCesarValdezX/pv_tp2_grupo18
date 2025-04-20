const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");

texto1.addEventListener("input", () => {
    const texto = texto1.value;
    texto2.textContent = texto;

    if (texto.length > 20) {
        texto2.classList.add("largo");
    } else {
        texto2.classList.remove("largo");
    }
});