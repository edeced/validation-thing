// 1. get DOM element
const form = document.querySelector('#form')

// const input = document.querySelectorAll('input')

// const username = document.querySelector('#username')
// const email = document.querySelector('#email')
// const password = document.querySelectorAll(`input[type=password]`)
// const password1 = document.querySelector('#password')
// const password2 = document.querySelector('#password2')
// const userInput = getFormInput('#username')

// getFormInput('#username')
// getFormInput('#email')
// getFormInput('#password')
// getFormInput('#password2')

// console.log(password)
 function getFormInput(inputName){
   const formInput = document.querySelector(inputName)
   console.log(formInput)
 }




form.addEventListener('submit', function (e) {
  e.preventDefault()


  validateEmpty(username)
  validateEmpty(email)
  validateEmpty(password)
  validateEmpty(password2)
  // validateMinLength(input)
  // validateIsEmail(email)
  validatePassMatch(password, password2)
})

function validateEmpty(input) {
  // console.log(input)
  const inputName = input.name
  if (input.value ==='') {
    showError(input,)
  } else {
    showSuccess(input,)
  }

}

function showError (input){
  input.nextElementSibling.innerHTML = `<small class="text-red-500">❌ Empty</small>`
  input.className='error'
}

function showSuccess (input) {
  input.nextElementSibling.innerHTML = `<small class="text-white">✅ Thank you</small>`
  input.className='success-input'
}

function validatePassMatch (password1, password2) {
  if (password.value!==password2.value && password.value==='') {
    showError(pa) }
  }
//   } else if (password1.value ) {}
  // console.log(password1.value, password2.value)
  // if password1.value === password2.value {
  //   showSuccess(password1, password2)
  // } else {
  //   showSuccess(password1, password2)
  // }
// }


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
