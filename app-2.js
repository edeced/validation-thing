// 1. get DOM element
const form = document.querySelector('#form')

// const input = document.querySelectorAll('input')

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password1 = document.querySelector('#password1')
const password2 = document.querySelector('#password2')



// adding event listener on the form
form.addEventListener('submit', function (e) {
  e.preventDefault()


  validateEmpty(username)
  validateEmpty(email)
  validateEmpty(password1)
  validateEmpty(password2)
  // validateMinLength(input)
  // validateIsEmail(email)
  validatePassMatch(password1, password2)

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

  if (input.value === '') {
    const inputName = input.value
    showError(input)
    return true
  } else {
    showSuccess(input)
    return false
  }
}

function showError (input) {
  input.className='error'
  input.nextElementSibling.classList.remove('hidden')
}

function showSuccess (input) {
  input.className='success-input'
  input.nextElementSibling.className='hidden'
}

function validatePassMatch (password1, password2) {
  password1.value = 'ececed'
  password2.value = 'eceded'
  console.log(password1.value, password2.value)
  // if password1.value === password2.value {
  //   showSuccess(password1, password2)
  // } else {
  //   showSuccess(password1, password2)
  // }
}


// input: HTMLInputElement
// function validate(username) {
//   if (username.value === '') {
//     console.log('error')
//   } 
// }

// function showError (input) {
//   input.nextElementSibling.innerHTML = '<small class="error">❌ Please enter your username.</small>'
// }

// function showSuccess (input) {
//   input.nextElementSibling.innerHTML = '<small class="success">✅ Thank you</small>'
//   // console.log('✅ Thank you')
// }


// function validatePassMatch (password1, password2) {
//   if (password1.value === password2.value) {
//     showSuccess(input)
//   } else {
//     showError(input, 'passwords do not match')
//   }
//   //@TODO: check if the passwords match
// }

// function validateIsEmail (email) {
//   if (emailValidates(email)) { // return true
//     showSuccess(email)
//   } else {
//     showError(email, 'Email is invalid')
//   }
// }

// returns boolean
// function emailValidates (email) {
  // Regular Expression
  //@TODO:  find implementation on SO
  //
//   return true
// }

// // input: HTMLInputElement
// function validateMinLength (input) {
//   // console.log(input.value.length)
//   if (input.value.length < 6) {
//     showError(input, 'Username too short')
//   } else {
//     showSuccess(input)
//   }
// }

// // input: HTMLInputElement (DOM) | msg: string
// function showError (input, msg) {
//   input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`

//   //reverts the success border
//   input.className='base-input'
// }

// function showSuccess (input) {
//   input.className = 'success-input'
//   // removes the flash message
//   input.nextElementSibling.innerHTML = ''
// }
