const candidatos = ["Candidato 1", "Candidato 2", "Candidato 3", "Candidato 4", "Candidato 5"];
let votos = [0, 0, 0, 0, 0];
let votacaoAberta = false;

function iniciarVotacao() {
    if (!votacaoAberta) {
        votacaoAberta = true;
        document.getElementById("output").innerHTML = "<h3>Votação Iniciada!</h3>";
        document.getElementById("output").innerHTML += "<p>Escolha um candidato clicando no botão correspondente.</p>";
        atualizarBotoes();
    } else {
        alert("A votação já está em andamento!");
    }
}

function encerrarVotacao() {
    if (votacaoAberta) {
        votacaoAberta = false;
        document.getElementById("output").innerHTML = "<h3>Votação Encerrada!</h3>";
        mostrarResultado();
    } else {
        alert("A votação ainda não foi iniciada!");
    }
}

function votar(candidatoIndex) {
    if (votacaoAberta) {
        votos[candidatoIndex]++;
        document.getElementById("output").innerHTML = `<p>Você votou em ${candidatos[candidatoIndex]}</p>`;
        atualizarBotoes();
    } else {
        alert("A votação ainda não foi iniciada!");
    }
}

function atualizarBotoes() {
    let buttonsHTML = "";
    for (let i = 0; i < candidatos.length; i++) {
        buttonsHTML += `<button onclick="votar(${i})">${candidatos[i]}</button>`;
    }
    document.getElementById("output").innerHTML += buttonsHTML;
}

function mostrarResultado() {
    let resultadoHTML = "<h3>Resultado da Votação:</h3>";
    for (let i = 0; i < candidatos.length; i++) {
        resultadoHTML += `<p>${candidatos[i]}: ${votos[i]} votos</p>`;
    }
    document.getElementById("output").innerHTML += resultadoHTML;
}
