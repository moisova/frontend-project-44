import readlineSync from 'readline-sync'

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ')
  return userName
}

export const greeting = (name) => {
  return `Hello, ${name}!`
}

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
  }
}
