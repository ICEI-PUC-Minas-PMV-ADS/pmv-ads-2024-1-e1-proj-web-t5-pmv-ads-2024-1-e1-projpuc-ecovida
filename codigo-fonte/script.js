
var topics = [];

function addTopic(username, title, content) {
    var date = new Date();
    var formattedDate = date.toLocaleString();
    var topic = {
        username: anonymous ? 'Anônimo' : username,
        title: title,
        content: content,
        date: formattedDate
    };
    
    topics.push(topic);
    displayTopics();
}
function displayTopics() {
    var topicsList = document.getElementById('topicsList');
    topicsList.innerHTML = '';
    
    topics.forEach(function(topic) {
        var li = document.createElement('li');
        li.classList.add('topic-item');
        
        var meta = document.createElement('div');
        meta.classList.add('meta');
        meta.textContent = 'Por ' + topic.username + ' em ' + topic.date;
        
        var h3 = document.createElement('h3');
        h3.textContent = topic.title;
        
        var p = document.createElement('p');
        p.textContent = topic.content;
        
        li.appendChild(meta);
        li.appendChild(h3);
        li.appendChild(p);
        
        topicsList.appendChild(li);
    });
}

document.getElementById('newTopicForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var topicTitle = document.getElementById('topicTitle').value;
    var topicContent = document.getElementById('topicContent').value;
    
    if (!anonymous && username === '') {
        alert('Por favor, insira um nome de usuário ou selecione a opção para postar anonimamente.');
        return;
    }
    
    if (topicTitle && topicContent) {
        addTopic(username, topicTitle, topicContent, anonymous);
        document.getElementById('username').value = '';
        document.getElementById('topicTitle').value = '';
        document.getElementById('topicContent').value = '';
        document.getElementById('anonymous').checked = false;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});


displayTopics();