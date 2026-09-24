
document.addEventListener("DOMContentLoaded", () => {
  
  const elementoApelido = document.querySelector("#apelido-valor");

  
  const apelidoSalvo = localStorage.getItem("apelidoUsuario");

  
  if (elementoApelido && apelidoSalvo) {
    elementoApelido.textContent = apelidoSalvo;
  }
});
