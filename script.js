// Obtém o parâmetro 'resposta' da URL
const params = new URLSearchParams(window.location.search);
const resposta = params.get('resposta');

// Verifica se há uma resposta e exibe-a na página
if (resposta) {
  const respostaElement = document.getElementById('resposta');
  respostaElement.innerText = resposta;
}
