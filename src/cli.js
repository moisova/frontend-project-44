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

const makeSequence = () => {
  const start = randomNumber(1, 15)
  const step = randomNumber(1, 7)
  const sequenceLength = randomNumber(5, 10)

  const sequence = []
  for (let i = 0; i < sequenceLength; i += 1) {
    let currentElement = start + i * step
    sequence.push(currentElement)
  }
  return sequence
}

export const hiddenSequence = () => {
  const sequence = makeSequence()
  const hiddenIndex = randomNumber(0, sequence.length - 1)
  const answer = sequence[hiddenIndex]
  const questionArray = [...sequence]
  questionArray[hiddenIndex] = '..'
  const question = questionArray.join(' ')

  return {
    question,
    answer: String(answer),
  }
}
