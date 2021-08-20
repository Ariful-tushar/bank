document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email').value;
    const passField = document.getElementById('pass').value;

    console.log(emailField, passField)

    if (emailField == 'tushar@baaperbank.com' && passField == 'tushar'){
        console.log ('Valid User')
        window.location.href = 'banking.html'
    }
})