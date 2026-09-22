// Espera o HTML da página carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  // Procura o espaço do apelido na sidebar
  const elementoApelido = document.querySelector("#apelido-valor");

  // Puxa o apelido salvo no login (index.js)
  const apelidoSalvo = localStorage.getItem("apelidoUsuario");

  // Se o elemento existir e o usuário estiver logado, mostra o apelido
  if (elementoApelido && apelidoSalvo) {
    elementoApelido.textContent = apelidoSalvo;
  }
});
