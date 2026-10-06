document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#lista-usuarios");
  const usuarios = buscarUsuarios();

  usuarios.forEach((usuario) => {
    container.appendChild(CardUsuario(usuario));
  });
});

