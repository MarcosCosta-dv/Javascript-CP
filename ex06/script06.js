function calculate(operator) {
    // Obtém os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    // Verifica se os valores são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Por favor, insira números válidos';
    } else {
        // Realiza a operação com base no operador
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
                break;
            default:
                result = 'Operação inválida';
        }
    }

    // Exibe o resultado
    document.getElementById('result').innerText = `Resultado: ${result}`;
}
