function Sidebar(paginaAtiva) {
  const items = [
    { label: "Início", href: "dashboard.html" },
    { label: "Sobre mim", href: "sobremim.html" },
    { label: "Cadastro", href: "cadastro.html" },
    { label: "Sair", href: "../index.html" },
  ];

  const nav = document.createElement("div");
  nav.className = "sidebar";

  nav.innerHTML = `
    <img class="logo-img" src="https://cdn-icons-png.flaticon.com/512/552/552250.png" alt="Logo" />
    <div id="apelido-valor"></div>
    ${items.map(item => `
      <a href="${item.href}" class="botao-sidebar ${item.label === paginaAtiva ? "ativo" : ""}">
        ${item.label}
      </a>
    `).join("")}
  `;

  return nav;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sidebar");
  if (!container) return;

  const paginaAtiva = container.dataset.pagina || "";
  container.appendChild(Sidebar(paginaAtiva));

  // Carrega apelido aqui — sidebar já existe neste ponto
  const elementoApelido = document.querySelector("#apelido-valor");
  const apelidoSalvo = localStorage.getItem("apelidoUsuario");
  if (elementoApelido && apelidoSalvo) {
    elementoApelido.textContent = apelidoSalvo;
  }
});