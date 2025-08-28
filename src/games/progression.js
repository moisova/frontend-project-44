import { greetUser, game } from '../index.js'
import { randomNumber } from '../randomNumber.js'

const rules = 'What number is missing in the progression?'
greetUser(rules)

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

const hiddenSequence = () => {
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

export const progression = () => {
  const getQuestionAndAnswer = () => {
    const { question, answer } = hiddenSequence()
    return {
      question,
      correctAnswer: answer,
    }
  }
  game(getQuestionAndAnswer)
}
