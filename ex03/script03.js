function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "com peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "com sobrepeso";
    } else {
        return "obeso";
    }
}

function calcularEClassificarIMC() {
    let resultados = "";
    for (let pessoa = 1; pessoa <= 5; pessoa++) {
        let peso = parseFloat(prompt("Informe o peso da pessoa " + pessoa + " (em kg):"));
        let altura = parseFloat(prompt("Informe a altura da pessoa " + pessoa + " (em metros):"));

        let imc = calcularIMC(peso, altura);
        let classificacao = classificarIMC(imc);

        resultados += "Pessoa " + pessoa + ": IMC = " + imc.toFixed(2) + " - " + classificacao + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultados;
}

calcularEClassificarIMC();
