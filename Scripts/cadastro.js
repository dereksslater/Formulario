const inputNome = document.querySelector("#nome");
const inputNascimento = document.querySelector("#data-nasc");
const inputGenero = document.querySelector("#genero-cadastro");
const inputEmailCadastro = document.querySelector("#email-cadastro");
const inputSenhaCadastro = document.querySelector("#senha-cadastro");
const inputProfissaoCadastro = document.querySelector("#profissao");
const inputEndereco = document.querySelector("#endereco");
const botaoSalvar = document.querySelector("#botao-cadastro");

function capturarDados() {
  const dadosUsuario = {
    nome: inputNome.value,
    nascimento: inputNascimento.value,
    
    genero: document.querySelector('input[name="genero"]:checked')?.value,
    email: inputEmailCadastro.value,
    senha: inputSenhaCadastro.value,
    profissao: inputProfissaoCadastro.value,
    endereco: inputEndereco.value,
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
