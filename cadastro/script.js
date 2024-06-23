const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const confirmeSenha = document.getElementById('confirmeSenha');
const btnCadastro = document.getElementById('btnCadastro')
const form = document.getElementById('form-cadastro');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
    btnCadastro.disabled = true
    const usuarioValue = usuario.value.trim();
    const senhaValue = senha.value.trim();
    const confirmeSenhaValue = confirmeSenha.value.trim();
    
    if(usuario.value === '' || usuario.value == null)
    {
        btnCadastro.disabled = false
       return alert('Preencha o nome de Úsuario');
        
    } 
    
    if(senha.value ===''){
        btnCadastro.disabled = false
        return  alert('Preencha a senha');
    } 
    
    if(senha.value.lenght <= 5)
    {
        btnCadastro.disabled = false
      return  alert('Senha deve conter mais de 6 caracteres');
    
    }
    
    if(senha.value.lenght >= 20)
    {
        btnCadastro.disabled = false
        return alert('Senha não pode conter mais de 20 caracteres'); 
    } 

    if(confirmeSenhaValue === ''){
        btnCadastro.disabled = false
      return  alert( 'Preencha a Confirmação de Senha');
    } else if(senhaValue !== confirmeSenhaValue){
        btnCadastro.disabled = false
       return alert( 'As senhas não conferem');
    } 

    return cadastrar()
}

/// local storage

function cadastrar () {

    let listaUser =JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    if(listaUser.find(user=> user.NM_User === usuario.value)){
        btnCadastro.disabled = false
        return alert('Este usuário já existe!')
    }

    listaUser.push(
        {
            NM_User: usuario.value,
            TX_Password: senha.value
        }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    
    window.location.href = '/codigo-fonte/login'
}