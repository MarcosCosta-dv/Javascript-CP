
const tipoCarro = prompt("Qual tipo de carro você deseja comprar? (hatch, sedan, motocicleta ou caminhonete)");
const tipoCarroLowerCase = tipoCarro.toLowerCase();
switch (tipoCarroLowerCase) {
    case "hatch":
        alert("Compra efetuada com sucesso!");
        break;
    case "sedan":
    case "motocicleta":
    case "caminhonete":
        alert("Tem certeza de que não prefere um modelo hatch?");
        break;
    default:
        alert("Não trabalhamos com este tipo de automóvel aqui.");
        break;
}