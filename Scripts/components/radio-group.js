function RadioGroup({ name, label, options }) {
  const wrapper = document.createElement('div');
  wrapper.className = `${name}-cadastro`;

  wrapper.innerHTML = `
    <p>${label}</p>
    ${options.map(op => `
      <input type="radio" id="${op.value}" name="${name}" value="${op.value}" />
      <label for="${op.value}">${op.label}</label><br />
    `).join('')}
  `;

  return wrapper;
}