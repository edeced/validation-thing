// 1. get DOM element
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  validateEmpty(username)
  // validateEmpty(email)
  // validateEmpty(password1)
  // validateEmpty(password2)
  // validateMinLength(username)
  // validateMinLength(password2)
  // validateIsEmail(email)
  validatePassMatch(password)

  //@TODO: Code Challenge 5c: Starting from your refactored code,
  // 1. Implement and use the validatePassMatch() function to confirm both passwords match
  // 2. Implement and use the emailValidates() function to confirm it's a valid email. See: https://stackoverflow.com/a/46181

  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  // validateIsEmail(email)

})

function validateEmpty(input) { 
  if (input.value === '') {
    showError(input, `${input.name} is empty`)
  } else {
    showSuccess(input)
  }
}

function showError (input, msg) {
  input.nextElementSibling.innerHTML = `<small class="text-white uppercase">❌ ${msg}</small>`
  input.className='error'
}

function showSuccess (input) {
  input.nextElementSibling.innerHTML = `<small class="text-white ">✅ </small>`
  input.className= 'success-input'
}

function validateIsEmail (email) {
  validateEmpty(email)
  // const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // console.log(re)
  if (emailValidates(email)) {
    showSuccess(email)
  } else {
    showError(email)
  }
}

function emailValidates (email) {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  return true
}
  
function validatePassMatch (password1, password2) {
  validateEmpty(password, password2)
  if (password1.value===password2.value){
    showError(password2, `${input.name} Does not match`)
    return true
    // showError(password2, 'Error, not match')
  } else {

    return false
  }
} 

function validateMinLength (input) {
  // console.log(input.value.length)
  if (input.value.length < 5 || input.value.length > 14) {
  showError(input)
  } else {
    showSuccess(input)
  }
}
