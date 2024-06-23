// const urlParams = new URLSearchParams(window.location.search);
// const id_assunto = urlParams.get('id_assunto');

document.addEventListener("DOMContentLoaded", function() {
  function checkLoginStatus() {
    // Retrieve the user_logged object from local storage
    const userLogged = JSON.parse(localStorage.getItem('user_logged'));
    
    // Check if user_logged object exists and has valid properties
    return userLogged ? true : false;
  }

  // Function to format the date
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

  // Function to load topics from localStorage and render them
  function loadTopics() {
    // const topicList = JSON.parse(localStorage.getItem('topic_list')) || [];
    const topicList =  JSON.parse(localStorage.getItem('topic_list')) || [];
    
    const topicsContainer = document.querySelector('.topics-list');
    if (topicsContainer) {
      
      topicsContainer.innerHTML = ''
      const searchBar = document.querySelector(".search-bar")
      const assuntos = document.createElement('span')
      assuntos.classList.add('assunto')
      assuntos.textContent = `${topicList.length} assuntos`
      searchBar.appendChild(assuntos)

      if(topicList.length === 0) {
       const span = document.createElement('span')
       span.textContent = 'Nenhum assunto criado!'
       span.style.textAlign = 'center'
       span.style.color = 'red'
       span.style.fontWeight = '500'
        return topicsContainer.appendChild(span)
      }
      topicList.map((topic, index) => {
        
        const topicElement = document.createElement('div');
        topicElement.classList.add('topic');

        const titleLink = document.createElement('a');
        titleLink.href = `/codigo-fonte/forum/assunto/?id_assunto=${topic.ID_Assunto}`;
        titleLink.textContent = topic.TX_Titulo;
        titleLink.classList.add('title-link');

        const category = document.createElement('p');
        category.classList.add('category');
        const conteudoLength = topic.TX_Conteudo.length
        category.textContent = `${conteudoLength > 150 ? `${topic.TX_Conteudo.substring(0, 150)}...` : topic.TX_Conteudo}`;

        const date = document.createElement('p');
        date.classList.add('date');
        date.innerHTML = `<span style="font-weight: bold;">${topic.NM_Usuario_Criacao}</span> ${formatDate(topic.DH_Criacao)}`;

        topicElement.appendChild(titleLink);
        topicElement.appendChild(category);
        topicElement.appendChild(date);

       index !== topicList.length - 1 && topicElement.classList.add('border-bottom')
        topicsContainer.appendChild(topicElement);
      });
    }
    
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
       
        loadTopics()
      })
      .catch(error => console.error('Error loading layout:', error));}
  }

  // Call the authentication handler
  handleAuthentication();

  window.showModal = function() {
    document.getElementById('modal').style.display = 'block';
  }
  
  // Hide modal
  window.hideModal = function() {
    document.getElementById('modal').style.display = 'none';
  }

  window.createAssunto = function(event){
    event.preventDefault();
    
    const data = new FormData(event.target)
    const title = data.get('title')
    const content = data.get('content')
    let userName = JSON.parse(localStorage.getItem('user_logged'))
  
    if(!userName) {
      window.location.href = '/codigo-fonte/login'
    }
  
    if(title.length < 10) return alert('Seu título deve ter no mínimo 10 caracteres.')
  
      if(content.length < 10) return alert('Seu assunto deve ter no mínimo 10 caracteres.')
  
    const newTopic = {
      "ID_Assunto": Math.floor(Math.random() * 1000000), // Generate a random ID
      "TX_Titulo": title,
      "TX_Conteudo": content,
      "NM_Usuario_Criacao": userName,
      "DH_Criacao": new Date().toISOString(),
      "Arr_Respostas": []
    };
  
    let topicList = JSON.parse(localStorage.getItem('topic_list')) || [];
    topicList.push(newTopic);
    localStorage.setItem('topic_list', JSON.stringify(topicList));
    
    hideModal();
    window.location.href = '/codigo-fonte/forum'
  }
})



