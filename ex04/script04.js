function verificarFruta() {
    let fruta = document.getElementById("inputFruta").value.toLowerCase();
    let mensagem;

    switch (fruta) {
        case "maçã":
            mensagem = "Não vendemos esta fruta aqui";
            break;
        case "banana":
            mensagem = "Estamos com escassez de banana";
            break;
        case "melancia":
            mensagem = "Aqui está, são 3 reais o quilo";
            break;
        default:
            mensagem = "Esta fruta não faz parte das frutas que me interessam";
    }

    document.getElementById("resultado").innerText = mensagem;
}