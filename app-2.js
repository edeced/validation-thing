// 1. get DOM element
const form = document.querySelector('#form')

// const input = document.querySelectorAll('#form > input')

// const username = document.querySelector('#username')
// const email = document.querySelector('#email')
// const password = document.querySelectorAll(`input[type=password]`)
// const password = document.querySelector('#password')
// const password2 = document.querySelector('#password2')
// const userInput = getFormInput('#username')
// console.log (password2)
// console.log (password2)

// adding event listener on the form
form.addEventListener('submit', function (e) {
  e.preventDefault()


  validateEmpty(username)
  validateEmpty(email)
  validateEmpty(password1)
  validateEmpty(password2)
  validateMinLength(username)
  validateMinLength(email)
  validateMinLength(password1)
  validateMinLength(password2)
  // validateIsEmail(email)
  // validatePassMatch(password, password2)

  //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  //@TODO: Code Challenge 5c: Starting from your refactored code,
  // 1. Implement and use the validatePassMatch() function to confirm both passwords match
  // 2. Implement and use the emailValidates() function to confirm it's a valid email. See: https://stackoverflow.com/a/46181

 //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  // validateIsEmail(email)
 
 
  //@TODO: add the validation for password (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  // validatePassMatch(password)
  // validatePass2Match(password2)

})

function validateEmpty(input) {
  const inputName = input.name
  // console.log(input)
  if (input.value==='') {
    showError(input)
  } else {
    showSuccess(input)
  }

}

function showError (input, msg) {
  // console.log(input)
  // console.log(input.nextElementSibling)
  input.nextElementSibling.innerHTML = `<small class="text-white">❌ Required</small>`
  input.className='error'
}

function showSuccess (input) {
  input.nextElementSibling.innerHTML = '<small class="text-white">✅ Thank you</small>'
  input.className='success-input'
}

function validateIsEmail (email) {
  // const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.mathc(re)) {
    showError(email
      )
  } else {
  showSuccess(email)
  }
}
  
// function validatePassMatch (password, password2) {
//   console.log(password2)
//   console.log(password)
//   if (password.value===password2.value){
//     showError(password2, 'Error, not match')
//   }
// } 

function validateMinLength (input) {
  console.log(input.value.length)
  if (input.value.length < 5) {
  showError(input)
  } else {
    showSuccess(input)
  }
}
