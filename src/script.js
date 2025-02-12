import wordsData from './words.json' with { type: 'json' }

const generateButton = document.querySelector('#generate')
const copyButton = document.querySelector('#copy')
const passwordInput = document.querySelector('#password')

generateButton.addEventListener('click', () => {
  // password.value = Math.random().toString(36).slice(-8)
  // Constants
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const symbols = '!#$%&*+,-./:;<=>?@^_|~'
  const delimeters = '*+,-.=_~'
  const wordsArray = wordsData.words

  // Set values
  const newDelimeter = delimeters[Math.floor(Math.random() * delimeters.length)]
  const numberOfWords = 3

  // Generate password
  let password = ''
  for (let i = 0; i < numberOfWords; i++) {
    password += wordsArray[Math.floor(Math.random() * wordsArray.length)]
    // TODO add random capitalization
    // if (Math.random() > 0.5) password = password.charAt(0).toUpperCase() + password.slice(1)
    password += newDelimeter
  }

  password += String(Math.floor(Math.random() * 10000)).padStart(4, '0')
  password += symbols[Math.floor(Math.random() * symbols.length)]

  // Insert password into input
  passwordInput.value = password
})

copyButton.addEventListener('click', () => {
  passwordInput.select()
  navigator.clipboard.writeText(passwordInput.value)
})
