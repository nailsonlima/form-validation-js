const form = document.querySelector("#form")
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

form.addEventListener("submit", (event) => {
    event.preventDefault();


    // verifica se o nome ta vazio
    if(nameInput.value === ""){
        alert('Por favor, preencha o seu nome')
        return
    }

    // verifica email preenchido e valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert('Por favor, preencha o seu email')
        return
    }

    // verifica senha preenchida
    if(!validatePassword(passwordInput.value, 8)){
        alert('A senha precisa ter no minimo 8 caracteres!')
        return
    }

    // verifica a situação selected
    if(jobSelect.value === ''){
        alert('Por favor, selecione uma situação')
        return
    }

    // verifica se a mensagem foi preenchida
    if(messageTextarea.value === ''){
        alert('Por favor, digite uma mensagem')
        return
    }

    // se todos os campos estiverem corretamente preenchidos, envie o form

    form.submit();
})

// Função que nvalida email
function isEmailValid(email){

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true
    }else {
        return false
    }
}

//função que valida a senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true
    }else{
        return false
    }
}