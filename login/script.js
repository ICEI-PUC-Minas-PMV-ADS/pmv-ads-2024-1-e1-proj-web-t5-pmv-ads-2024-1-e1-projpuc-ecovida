const usuario = document.getElementById('NM_User');
const senha = document.getElementById('TX_Password');
const form = document.getElementById('form-login');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
    const usuarioValue = usuario.value.trim();
    const senhaValue = senha.value.trim();
    
    let listaUser =JSON.parse(localStorage.getItem('listaUser') || '[]')

    let exist = listaUser.find(user=> user.NM_User === usuarioValue)

    if(exist){
      if(exist.TX_Password === senhaValue){
        localStorage.setItem('user_logged', JSON.stringify(usuarioValue))
         window.location.href = '/puc-eco-vida'
      }else{
        return  alert('Usuário ou senha incorretos!')
      }
    }else{
     return alert('Usuário ou senha incorretos!')
    }


}
