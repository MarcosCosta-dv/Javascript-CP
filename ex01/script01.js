function verificarNumero() {
    let num = prompt("Digite um número:");
    let res = document.getElementById("res");


    if (num > 0) {
        res.innerHTML = "O número é positivo.";
    } else if (num < 0) {
        res.innerHTML = "O número é negativo.";
    } else {
        res.innerHTML = "O número é zero.";
    }
}