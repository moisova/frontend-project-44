import { randomNumber } from '../randomNumber.js'
import { greetUser, game } from '../index.js'

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
greetUser(rules)

export const even = () => {
  const getQuestionAndAnswer = () => {
    const question = randomNumber(1, 100)
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no'
    return { question, correctAnswer }
  }

  game(getQuestionAndAnswer)
}
