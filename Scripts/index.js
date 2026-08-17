import { usuarios } from "./data.js";

const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const botaoForm = document.querySelector("#botao-form");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mensagemErroEmail = document.querySelector("#mensagemErroEmail");

botaoForm.disabled = true;
botaoForm.setAttribute("aria-disabled", "true");

inputEmail.addEventListener("input", verificarCampos);
inputSenha.addEventListener("input", verificarCampos);

function verificarCampos() {
  const emailValor = inputEmail.value;
  const senhaValor = inputSenha.value;

  if (emailValor !== "" && !regexEmail.test(emailValor)) {
    mensagemErroEmail.textContent = "Email inválido!";
  } else {
    mensagemErroEmail.textContent = "";
  }

  if (senhaValor.length >= 6) {
    botaoForm.disabled = false;
    botaoForm.setAttribute("aria-disabled", "false");
  } else {
    botaoForm.disabled = true;
    botaoForm.setAttribute("aria-disabled", "true");
  }
}

botaoForm.addEventListener("click", (event) => {
  event.preventDefault();

  const emailValor = inputEmail.value;
  const senhaValor = inputSenha.value;

  let permissaoUsuario;

  for (let i = 0; i < usuarios.length; i++) {
    const user = usuarios[i];

    if (emailValor === user.email && senhaValor === user.senha) {
      permissaoUsuario = user;
      break;
    }
  }

  if (!permissaoUsuario) {
    inputEmail.value = "";
    inputSenha.value = "";

    botaoForm.disabled = true;
    botaoForm.setAttribute("aria-disabled", "true");

    const mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = "Email ou senha incorretos";

    return false;
  }

  window.location.href = "../Pages/dashboard.html";
});
