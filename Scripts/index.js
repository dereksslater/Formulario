import {usuarios} from "./data.js";



const inputEmail = document.querySelector("#email");

const inputSenha = document.querySelector("#senha");

const botaoForm = document.querySelector("#botao-form");



botaoForm.addEventListener("click",(event) => {
    event.preventDefault();
    const emailValor = inputEmail.value;
    const senhaValor = inputSenha.value;




let  permissaoUsuario;

for (let i = 0; i < usuarios.length; i ++) {
    const user = usuarios[i];

    if (emailValor === user.email && senhaValor ===user.senha){
        permissaoUsuario = user
        break;
    } 
    

}
    if(!permissaoUsuario) {
        inputEmail.value = "";
        inputSenha.value = "";



        const mensagemErro = document.querySelector("#mensagem-erro");
            mensagemErro.style.color = "red";
            mensagemErro.textContent = "Email ou senha inválidos";

    return false;   
}


window.location.href = "../Pages/dashboard.html";
 })



    
    









