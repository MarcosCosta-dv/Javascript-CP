function calcularSalarios() {
    // Define os salários brutos
    const salariosBrutos = [3000, 4500, 6000, 7500, 9000];
    
    // Função para calcular o INSS
    function calcularINSS(salario) {
        if (salario <= 1212.00) {
            return salario * 0.075;
        } else if (salario <= 2427.35) {
            return 1212.00 * 0.075 + (salario - 1212.00) * 0.09;
        } else if (salario <= 3641.03) {
            return 1212.00 * 0.075 + (2427.35 - 1212.00) * 0.09 + (salario - 2427.35) * 0.12;
        } else if (salario <= 7087.22) {
            return 1212.00 * 0.075 + (2427.35 - 1212.00) * 0.09 + (3641.03 - 2427.35) * 0.12 + (salario - 3641.03) * 0.14;
        } else {
            return 828.39; // Teto máximo do INSS em 2023
        }
    }

    // Função para calcular o Imposto de Renda
    function calcularIRPF(salario) {
        const salarioBase = salario - calcularINSS(salario);
        if (salarioBase <= 1903.98) {
            return 0;
        } else if (salarioBase <= 2826.65) {
            return (salarioBase - 1903.98) * 0.075 - 142.80;
        } else if (salarioBase <= 3751.05) {
            return (salarioBase - 2826.65) * 0.15 - 354.80;
        } else if (salarioBase <= 4664.68) {
            return (salarioBase - 3751.05) * 0.225 - 636.13;
        } else {
            return (salarioBase - 4664.68) * 0.275 - 869.36;
        }
    }

    // Calcula os salários líquidos
    const salariosLiquidos = salariosBrutos.map(salario => {
        const inss = calcularINSS(salario);
        const irpf = calcularIRPF(salario);
        return salario - inss - irpf;
    });

    // Exibe os resultados
    const output = document.getElementById('output');
    output.innerHTML = '<h3>Salários Líquidos:</h3>';
    salariosLiquidos.forEach((salario, index) => {
        output.innerHTML += `<p>Salário Bruto: R$ ${salariosBrutos[index].toFixed(2)} - Salário Líquido: R$ ${salario.toFixed(2)}</p>`;
    });
}
