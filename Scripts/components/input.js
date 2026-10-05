function Input({ id, label, type = 'text', placeholder = '' }) {
  const wrapper = document.createElement('div');
  wrapper.className = `${id}-cadastro`;

  wrapper.innerHTML = `
    <label for="${id}">${label}</label>
    <input 
      type="${type}" 
      id="${id}" 
      name="${id}" 
      class="input-cadastro" 
      placeholder="${placeholder}" 
    />
  `;

  return wrapper;
}