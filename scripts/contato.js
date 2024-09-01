const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

let loading = false;
const errorMessage = 'Erro ao enviar mensagem!';

// Processa o envio do formulário
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!loading) {
    loading = true;
    submitBtn.disabled = true;
    submitBtn.innerText = 'Aguarde...';
    const formData = new FormData(contactForm);
    const json = JSON.stringify(Object.fromEntries(formData));
    try {
      const { status } = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });
      if (status == 200) {
        alert('Mensagem enviada com sucesso! Em breve, entraremos em contato com você.');
        contactForm.reset();
      }
      else {
        alert(errorMessage);
      }
    }
    catch {
      alert(errorMessage);
    }
    finally {
      loading = false;
      submitBtn.disabled = false;
      submitBtn.innerText = 'Enviar';
    }
  }
});