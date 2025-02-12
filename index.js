const generate = document.querySelector('#generate')
const copy = document.querySelector('#copy')
const password = document.querySelector('#password')

generate.addEventListener('click', () => {
  password.value = Math.random().toString(36).slice(-8)
})

copy.addEventListener('click', () => {
  password.select()
  navigator.clipboard.writeText(password.value)
})
