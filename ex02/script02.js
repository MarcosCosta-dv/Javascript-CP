function verificarBtn() {
    let res = document.getElementById("res");
    let idade = document.getElementById("idade").value;

    if (idade < 16) {
        res.innerHTML = "Você não pode votar";
    } else if (idade < 18 || idade >= 70) {
        res.innerHTML = "Voto facultativo";
    } else {
        res.innerHTML = "voto obrigatório";
    }
}