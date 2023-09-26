/*function validaFormulario() {
//    alert('TESTE!!!');
    
    var nome,email,duvida;
    
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    duvida = document.getElementById('duvida').value;
    
    if(nome === "") {
        alert('Campo nome está vazio!');
        nome = document.getElementById('nome').focus();
    }
    else if (email === "") {
        alert('Campo email está vazio!');
        email = document.getElementById('email').focus();
    }
    else if (duvida === "") {
        alert('Campo dúvida está vazio!');
        email = document.getElementById('duvida').focus();
         }else{
             document.frmContato.submit();
         }
     }  */  
        function validaFormularioLogin() {
    //alert('TESTE!!!');
    
    var login,senha;
    
    login = document.getElementById('login').value;
    senha = document.getElementById('senha').value;
 
    
    if(login === "") {
        alert('Campo nome está vazio!');
        login = document.getElementById('login').focus();
    }
    else if (senha === "") {
        alert('Campo senha está vazio!');
        senha = document.getElementById('senha').focus();}
    else{
        document.frmLogin.submit();
    }
    }
    
    
    

