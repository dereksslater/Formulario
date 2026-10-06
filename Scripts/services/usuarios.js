function buscarUsuarios() {
  return JSON.parse(localStorage.getItem("listaDeCadastros")) || [];
}
