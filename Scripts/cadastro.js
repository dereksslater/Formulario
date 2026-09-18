const inputNome = document.querySelector("#nome");
const inputNascimento = document.querySelector("#data-nasc");
const inputGenero = document.querySelector("#genero-cadastro");
const inputEmailCadastro = document.querySelector("#email-cadastro");
const inputSenhaCadastro = document.querySelector("#senha-cadastro");
const inputProfissaoCadastro = document.querySelector("#profissao");
const inputEndereco = document.querySelector("#endereco");
const botaoSalvar = document.querySelector("#botao-cadastro");

function calcularIdade(dataInput) {
  if (!dataInput) return null;

  const partes = dataInput.split("-");
  const anoNasc = Number(partes[0]);
  const mesNasc = Number(partes[1]);
  const diaNasc = Number(partes[2]);

  const hoje = new Date();

  let idade = hoje.getFullYear() - anoNasc;

  const mesAtual = hoje.getMonth() + 1;
  const diaAtual = hoje.getDate();

  if (mesAtual < mesNasc || (mesAtual == mesNasc && diaAtual < diaNasc)) {
    idade--;
  }

  return idade;
}

function capturarDados() {
  const linguagensSelecionadas = Array.from(
    document.querySelectorAll('input[name="linguagens"]:checked'),
  ).map((checkbox) => checkbox.value);

  const dadosUsuario = {
    nome: inputNome.value,
    nascimento: inputNascimento.value,
    idade: calcularIdade(inputNascimento.value),
    genero: document.querySelector('input[name="genero"]:checked')?.value,
    email: inputEmailCadastro.value,
    senha: inputSenhaCadastro.value,
    profissao: inputProfissaoCadastro.value,
    endereco: inputEndereco.value,
    linguagens: linguagensSelecionadas,
  };

  console.log(dadosUsuario);
}

botaoSalvar.addEventListener("click", function (event) {
  event.preventDefault();
  capturarDados();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("O enter foi clicado!");
    capturarDados();
  }
});
