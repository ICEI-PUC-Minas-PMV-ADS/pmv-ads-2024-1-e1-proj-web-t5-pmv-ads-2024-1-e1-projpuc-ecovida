 // Save this as auth.js

 document.addEventListener("DOMContentLoaded", function() {
  // Function to check if the user is logged in
  function checkLoginStatus() {
      // Retrieve the user_logged object from local storage
      const userLogged = JSON.parse(localStorage.getItem('user_logged'));
      
      // Check if user_logged object exists and has valid properties
  return userLogged ? true : false
  }

  // Function to handle redirection if not logged in
  function handleAuthentication() {
      if (!checkLoginStatus()) {
          window.location.href = '/codigo-fonte/login'; // Redirect to login page
      } else {
          // Load the layout HTML
  fetch('../layouts/layout.html')
    .then(response => response.text())
    .then(layout => {
      document.body.innerHTML += layout;
    })
    .then(() => {
      // Ensure layout.js runs after the layout is loaded
      const layoutScript = document.createElement('script');
      layoutScript.src = '../layouts/layout.js';
      layoutScript.onload = () => {
        // Load page.js as the last component
        const pageScript = document.createElement('script');
        pageScript.src = 'script.js';
        document.body.appendChild(pageScript);
      };
      document.body.appendChild(layoutScript);
    })
    .catch(error => console.error('Error loading layout:', error));
      }
  }

  
    function getTopicById(id) {
      const topicList = JSON.parse(localStorage.getItem('topic_list')) || [];
      return topicList.find(topic => topic.ID_Assunto === id);
    }
  
    function formatDate(datetime) {
      const now = new Date();
      const date = new Date(datetime);
      const seconds = Math.floor((now - date) / 1000);
      let interval = Math.floor(seconds / 31536000);
  
      if (interval > 1) {
        return `${interval} anos atrás`;
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return `${interval} meses atrás`;
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return `${interval} dias atrás`;
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return `${interval} hrs atrás`;
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return `${interval} min atrás`;
      }
      return `${Math.floor(seconds)} seg atrás`;
    }
  
  
    function loadAssunto() {
      const urlParams = new URLSearchParams(window.location.search);
      const id_assunto = parseInt(urlParams.get('id_assunto'), 10);
      const topic = getTopicById(id_assunto);
  
      if (!topic) {
        window.location.href = '/codigo-fonte/forum'
        return;
      }
  
      document.getElementById('titulo-assunto').textContent = topic.TX_Titulo;
      document.getElementById('create-date-assunto').textContent = `Criado ${ function formatDate(datetime) {
        const now = new Date();
        const date = new Date(datetime);
        const seconds = Math.floor((now - date) / 1000);
        let interval = Math.floor(seconds / 31536000);
    
        if (interval > 1) {
          return `${interval} anos atrás`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return `${interval} meses atrás`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return `${interval} dias atrás`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return `${interval} hrs atrás`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
          return `${interval} min atrás`;
        }
        return `${Math.floor(seconds)} seg atrás`;
      }
    (topic.DH_Criacao)}`;
      document.getElementById('descricao-assunto').textContent = topic.TX_Conteudo;
  
      const respostasList = document.querySelector('.respostas-list');
      respostasList.innerHTML = ''; // Clear existing responses
  
      topic.Arr_Respostas.forEach(resposta => {
        const respostaItem = document.createElement('div');
        respostaItem.classList.add('resposta-item');
  
        const respostaText = document.createElement('p');
        respostaText.textContent = resposta.TX_Resposta;
  
        const userContent = document.createElement('div');
        userContent.classList.add('user-content');
  
        const dateResposta = document.createElement('span');
        dateResposta.style.fontSize = '0.6rem';
        dateResposta.textContent = `respondido ${new Date(resposta.DH_Criacao).toLocaleDateString('pt-BR')} às ${new Date(resposta.DH_Criacao).toLocaleTimeString('pt-BR')}`;
  
        const userBox = document.createElement('div');
        userBox.classList.add('user-box');
  
        const userImage = document.createElement('img');
        userImage.src = '../assets/circle-user-round.png';
        userImage.alt = '';
  
        const userName = document.createElement('span');
        userName.classList.add('nm-user-resposta');
        userName.textContent = resposta.NM_Usuario;
  
        userBox.appendChild(userImage);
        userBox.appendChild(userName);
  
        userContent.appendChild(dateResposta);
        userContent.appendChild(userBox);
  
        respostaItem.appendChild(respostaText);
        respostaItem.appendChild(userContent);
  
        respostasList.appendChild(respostaItem);
      });
  
      document.getElementById('totalTopics').textContent = `${topic.Arr_Respostas.length} respostas`;
    }
  
    // Load the assunto details once the page and layout are loaded
    loadAssunto();
  

  // Call the authentication handler
  handleAuthentication();
});
