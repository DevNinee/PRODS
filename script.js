const form = document.getElementById('meuFormulario');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // impede envio real

      const fname = document.getElementById('fname').value.trim();
      const lname = document.getElementById('lname').value.trim();

      if (fname === '' || lname === '') {
        mensagem.style.color = 'red';
        mensagem.textContent = 'Por favor, preencha todos os campos!';
      } else {
        mensagem.style.color = 'green';
        mensagem.textContent = `Olá ${fname} ${lname}, formulário enviado com sucesso!`;
      }
    });
