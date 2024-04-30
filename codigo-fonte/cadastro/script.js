const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const confirmeSenha = document.getElementById('confirmeSenha');
const form = document.getElementById('form-cadastro');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
    const usuarioValue = usuario.value.trim();
    const senhaValue = senha.value.trim();
    const confirmeSenhaValue = confirmeSenha.value.trim();
    
    if(usuario.value === '' || usuario.value == null)
    {
       return alert('Preencha o nome de Úsuario');
        
    } 
    
    if(senha.value ===''){
        return  alert('Preencha a senha');
    } 
    
    if(senha.value.lenght <= 5)
    {
        
      return  alert('Senha deve conter mais de 6 caracteres');
    
    }
    
    if(senha.value.lenght >= 20)
    {
       
        return alert('Senha não pode conter mais de 20 caracteres'); 
    } 

    if(confirmeSenhaValue === ''){
      return  alert( 'Preencha a Confirmação de Senha');
    } else if(senhaValue !== confirmeSenhaValue){
       return alert( 'As senhas não conferem');
    } 
}

/// local storage

function cadastrar () {
    if(validUsuario && validSenha &&validConfirmeSenha){
        let listaUser =JSON.parse(localStorage.getItem('listaUser') || '[]')
    }

    listaUser.push(
        {
            userCad: usuario.value,
            senhaCad: senha.value
        }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
}
