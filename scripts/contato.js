const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

let loading = false;
const errorMessage = 'Erro ao enviar mensagem!';

// Processa o envio do formulário
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Evita que o formulário seja enviado, enquanto ter um envio pendente
  if (!loading) {
    loading = true;

    // Desabilita o botão
    submitBtn.disabled = true;
    submitBtn.innerText = 'Aguarde...';
    const formData = new FormData(contactForm);
    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      // Envia os dados para o servidor
      const { status } = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      // Mostra que a mensagm foi enviada e reseta o formulario
      if (status == 200) {
        alert('Mensagem enviada com sucesso! Em breve, entraremos em contato com você.');
        contactForm.reset();
      }

      // Exibe mensagem de erro em caso de erro do servidor
      else {
        alert(errorMessage);
      }
    }
    catch {
      //Exibe mensagem de erro em caso de erro da requisição
      alert(errorMessage);
    }
    finally {
      // Habilita o botão
      loading = false;
      submitBtn.disabled = false;
      submitBtn.innerText = 'Enviar';
    }
  }
});