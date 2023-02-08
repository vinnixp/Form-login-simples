function login(){
    const inputEmail = document.querySelector("#email");
    const inputSenha = document.querySelector("#senha");

  

    if(inputEmail.value == "" || inputSenha.value == "" ){
      alert("Preencha todos os campos")
       
    } else if(inputEmail.value != "123" || inputSenha.value != "123"){
        alert("Usuário ou senha incorreta")
    } else if(inputEmail.value == "123" && inputSenha.value == "123"){
        alert("Você fez login com sucesso!")
    }
}
