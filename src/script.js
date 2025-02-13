import wordsData from './words.json' with { type: 'json' }

const generateButton = document.querySelector('#generate')
const copyButton = document.querySelector('#copy')
const passwordInput = document.querySelector('#password')

function generatePassword() {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
  const SYMBOLS = '!#$%&*+,-./:;<=>?@^_|~'
  const DELIMETERS = '*+,-.=_~'
  const WORDS_ARRAY = wordsData.words
  const NUMBER_OF_WORDS = 3

  function getRandom(length) {
    let randomBuffer = self.crypto.getRandomValues(new Uint32Array(1))
    return randomBuffer[0] % length
  }

  // Get random words
  const words = []
  for (let i = 0; i < NUMBER_OF_WORDS; i++) {
    words.push(WORDS_ARRAY[getRandom(WORDS_ARRAY.length)])
  }

  // Inset random char in random word
  let index = getRandom(NUMBER_OF_WORDS)
  let char = ALPHABET[getRandom(ALPHABET.length)]
  let charIndex = getRandom(words[index].length)
  words[index] = words[index].slice(0, charIndex) + char + words[index].slice(charIndex)

  // Capitalize a random word
  index = getRandom(NUMBER_OF_WORDS)
  words[index] = words[index].toUpperCase()

  // Inset digits at random position
  index = getRandom(NUMBER_OF_WORDS + 1)
  let digits = String(getRandom(10000)).padStart(4, '0')
  words.splice(index, 0, digits)

  // Add delimeter
  let delimeter = DELIMETERS[getRandom(DELIMETERS.length)]
  let symbol = SYMBOLS[getRandom(SYMBOLS.length)]
  const password = words.join(delimeter).concat(symbol)

  return password
}

generateButton.addEventListener('click', () => {
  passwordInput.value = generatePassword()
})

copyButton.addEventListener('click', () => {
  passwordInput.select()
  navigator.clipboard.writeText(passwordInput.value)
})

window.onload = function () {
  passwordInput.value = generatePassword()
}
