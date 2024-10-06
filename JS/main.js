document.getElementById("gerar").addEventListener("click", function () {
    let maximo = document.getElementById("maximo").value;
    let gerado = numero(maximo);

    document.getElementById("numero").textContent = gerado;
});
    



function numero(maximo) {
    return parseInt(Math.random() * maximo + 1);
}