const generate = document.querySelector('#generate')
const copy = document.querySelector('#copy')
const password = document.querySelector('#password')

generate.addEventListener('click', () => {
  // password.value = Math.random().toString(36).slice(-8)
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+,-./:;<=>?@^_|~'
  const passwordLength = 20
  const randomValues = new Uint32Array(passwordLength)
  crypto.getRandomValues(randomValues)
  let securePassword = ''
  for (let i = 0; i < passwordLength; i++) {
    securePassword += charset[randomValues[i] % charset.length]
  }
  password.value = securePassword
})

copy.addEventListener('click', () => {
  password.select()
  navigator.clipboard.writeText(password.value)
})
