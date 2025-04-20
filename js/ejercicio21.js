const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");

texto1.addEventListener("input", function() {
    texto2.textContent = texto1.value;
});