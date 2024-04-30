const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const confirmeSenha = document.getElementById('confirmeSenha');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
    const usuarioValue = usuario.value.trim();
    const senhaValue = senha.value.trim();
    const confirmeSenhaValue = ConfirmeSenha.value.trim();
    
    if(usuario.value === '' || usuario.value == null);
    {
        setErrorfor(usuario,'Preencha o nome de Úsuario');
    } else  { 
        setSucessfor(usuario);
      }
    
    if(senha.value ===''){
        setErrorfor(senha, 'Preencha a senha');
    } else {
        setSucessfor(senha);
    }
    
    if(senha.value.lenght <= 5)
    {
        e.preventDefault();
        setErrorfor(senha,'Senha deve conter mais de 6 caracteres');
    } else {
        setSucessfor(senha);
    }
    
    if(senha.value.lenght >= 20)
    {
        e.preventDefault();
        setErrorfor(senha,'Senha não pode conter mais de 20 caracteres'); 
    } else {
        setSucessfor(senha);
    }

    if(confirmeSenhaValue === ''){
        setErrorFor(confirmeSenha, 'Preencha a Confirmação de Senha');
    } else if(senhaValue !== confirmeSenhaValue){
        setErrorFor(confirmeSenha, 'As senhas não conferem');
    } else{
        setSucessfor(confirmeSenha);
    }
}

/// local storage

function cadastrar () {
    if(validUsuario && validSenha &&validConfirmeSenha){
        let listaUser =JSON.parse(localStorage.getItem('listaUser') || '[]')
    }

    listaUser.push(
        {
            userCad: usuario.value
            senhaCad: senha.value
        }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
}
console.log('teste')