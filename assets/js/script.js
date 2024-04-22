const botaopersonalizado = () => {
    return document.querySelectorAll('.bnt-login');
  };

  const criar = (texto, cor) => {

    const botaozin = document.createElement('button');
    botaozin.classList.add('bnt-login');
  
    botaozin.textContent = texto;
  
    botaozin.style.backgroundColor = cor;
  
  
    return botaozin;
  };

  const botaoo = criar('Criar Agora', '#055c22');
  document.body.appendChild(botaoo);

  const divCadastroLogin = document.querySelector('.cadastro-login');
  divCadastroLogin.appendChild(botaoo);