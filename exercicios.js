const numero1 = 10;
const numero2 = 2;
const operacao = "multiplicação";

// if (operacao === "soma") {
//   console.log(numero1 + numero2);
// } else if (operacao === "multiplicação") {
//   console.log(numero1 * numero2);
// } else {
//   console.log("Operação inválida ou não identificada");
// }

// localizar o nivel de bonus de acordo com a faixa salarial
// 11000 e acima 3% bonus
// 10999 a 7000 5% bonus
// 6999 a 4000 7% bonus
// 3999 a baixo 9% bonus

const funcionario = {
  nome: "João",
  salario: 5000,
  cargo: "Desenvolvedor",
};

const salario = funcionario.salario;
let bonusPercentual;
let bonusValor;

if (salario >= 11000) {
  bonusPercentual = 0.03;
} else if (salario >= 7000) {
  bonusPercentual = 0.05;
} else if (salario >= 4000) {
  bonusPercentual = 0.07;
} else {
  bonusPercentual = 0.09;
}

bonusValor = salario * bonusPercentual;

console.log(
  `${funcionario.nome} recebeu um bônus de ${bonusPercentual * 100}%, ganhando R$ ${bonusValor.toFixed(2)}`
);

