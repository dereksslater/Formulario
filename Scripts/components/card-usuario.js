function CardUsuario({ nome, email, idade, endereco, profissao }) {
  const card = document.createElement("div");
  card.className = "card-usuario";
  card.innerHTML = `
    <h2>${nome}</h2>
    <p>${email}</p>
    <p>${idade} anos</p>
    <p>${endereco}</p>
    <p>${profissao}</p>
  `;
  return card;
}
