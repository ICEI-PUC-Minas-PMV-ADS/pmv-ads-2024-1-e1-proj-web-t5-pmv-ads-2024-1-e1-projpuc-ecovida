
function carregarForuns() {
  var foruns = localStorage.getItem('foruns');
  if (foruns) {
      foruns = JSON.parse(foruns);
      var listaForuns = document.getElementById('lista-foruns');
      listaForuns.innerHTML = '';
      for (var i = 0; i < foruns.length; i++) {
          var forumItem = document.createElement('li');
          forumItem.textContent = foruns[i];
          listaForuns.appendChild(forumItem);
      }
  }
}

function adicionarForum() {
  var novoForum = prompt('Digite o nome do Novo Assunto:');
  if (novoForum) {
      
      var foruns = localStorage.getItem('foruns');
      if (foruns) {
          foruns = JSON.parse(foruns);
      } else {
          foruns = [];
      }
            
      foruns.push(novoForum);
      
      localStorage.setItem('foruns', JSON.stringify(foruns));
      
      carregarForuns();
  }
}

function enviarResposta() {
  var nomeUsuario = prompt('Digite seu nome:');
  var resposta = prompt('Digite sua resposta:');
  var forumSelecionado = document.getElementById('select-forums').value;

  if (nomeUsuario.trim() === '' || resposta.trim() === '') {
      alert('Por favor, preencha seu nome e digite uma resposta.');
      return;
  }

  var respostas = localStorage.getItem(`respostas-${forumSelecionado}`);
  if (respostas) {
      respostas = JSON.parse(respostas);
  } else {
      respostas = [];
  }

  var dataResposta = new Date().toLocaleString();

  respostas.push({ nome: nomeUsuario, resposta: resposta, data: dataResposta });

  localStorage.setItem(`respostas-${forumSelecionado}`, JSON.stringify(respostas));

  alert('Resposta enviada com sucesso!');

  document.getElementById('select-forums').value = '';

