document.addEventListener('DOMContentLoaded', function() {
  // Função para mostrar o horário
  function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
  }

  // Exibir o horário imediatamente
  showTime();

  // Atualizar o horário a cada segundo
  setInterval(function () {
    showTime();
  }, 1000);

  // Obtendo o botão pelo ID e adicionando o evento de clique
  const botao = document.getElementById('botao');
  if (botao) {
    botao.addEventListener('click', function() {
      alert('Você clicou no botão!');
    });
  }
});