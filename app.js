let email = document.querySelector('#email')
let msgError = document.querySelector('#msgError')
let imgError = document.querySelector('#imgError')

email.addEventListener('blur', function(){
     if (!email.checkValidity()) {
          msgError.style.display = 'block'
          imgError.style.display = 'block'
          email.style.border = '2px solid #f96262'
     } else {
          msgError.style.display = 'none'
          imgError.style.display = 'none'
          email.style.border = '1px solid #413a3a'
     }
})