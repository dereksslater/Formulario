document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#formCadastro');
  const botaoSalvar = document.querySelector('#botao-cadastro');

  
  const campos = [
    Input({ id: 'nome',          label: 'Nome completo',       placeholder: 'Digite seu nome' }),
    Input({ id: 'data-nasc',     label: 'Data de nascimento',  type: 'date', placeholder: '' }),
    RadioGroup({
      name: 'genero',
      label: 'Selecione seu gênero:',
      options: [
        { value: 'feminino',  label: 'Feminino' },
        { value: 'masculino', label: 'Masculino' },
        { value: 'outro',     label: 'Outro' },
      ]
    }),
    CheckboxGroup({
      name: 'linguagens',
      label: 'Selecione suas linguagens:',
      options: [
        { value: 'javaScript',  label: 'JavaScript' },
        { value: 'python',      label: 'Python' },
        { value: 'java',        label: 'Java' },
        { value: 'typeScript',  label: 'TypeScript' },
      ]
    }),
    Input({ id: 'email-cadastro', label: 'Email',    type: 'email',    placeholder: 'Digite seu email' }),
    Input({ id: 'senha-cadastro', label: 'Senha',    type: 'password', placeholder: 'Crie uma senha' }),
    Input({ id: 'profissao',      label: 'Profissão',             placeholder: 'Digite sua profissão' }),
    Input({ id: 'endereco',       label: 'Endereço',              placeholder: 'Rua, Número, Bairro' }),
  ];

  campos.forEach(campo => form.insertBefore(campo, botaoSalvar));


  function calcularIdade(dataInput) {
    if (!dataInput) return null;
    const [ano, mes, dia] = dataInput.split('-').map(Number);
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    if (hoje.getMonth() + 1 < mes || (hoje.getMonth() + 1 === mes && hoje.getDate() < dia)) idade--;
    return idade;
  }

  function capturarDados() {
    const linguagens = Array.from(document.querySelectorAll('input[name="linguagens"]:checked')).map(c => c.value);

    const dadosUsuario = {
      nome:      document.querySelector('#nome').value,
      nascimento:document.querySelector('#data-nasc').value,
      idade:     calcularIdade(document.querySelector('#data-nasc').value),
      genero:    document.querySelector('input[name="genero"]:checked')?.value,
      email:     document.querySelector('#email-cadastro').value,
      senha:     document.querySelector('#senha-cadastro').value,
      profissao: document.querySelector('#profissao').value,
      endereco:  document.querySelector('#endereco').value,
      linguagens,
    };

    const lista = JSON.parse(localStorage.getItem('listaDeCadastros')) || [];
    lista.push(dadosUsuario);
    localStorage.setItem('listaDeCadastros', JSON.stringify(lista));

    alert('Usuário cadastrado com sucesso!');
    console.log('Lista completa salva:', lista);
    form.reset();
  }

  botaoSalvar.addEventListener('click', (e) => { e.preventDefault(); capturarDados(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); capturarDados(); } });
});