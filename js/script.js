// Selecionar
const total = document.querySelector("#total");
const botaoSomar = document.querySelector("#somar");
const botaoZerar = document.querySelector("#zerar");

let valor = 0;

function atualizar() {
  total.textContent = valor;
}

atualizar();

botaoSomar.addEventListener("click", () => {
  valor++;
  atualizar();
});

botaoZerar.addEventListener("click", () => {
  valor = 0;
  atualizar();
});