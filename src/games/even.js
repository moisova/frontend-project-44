import { randomNumber } from '../randomNumber.js'
import { greetUser, game } from '../index.js'

export const even = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
  const userName = greetUser(rules)
  const getQuestionAndAnswer = () => {
    const question = randomNumber(1, 100)
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no'
    return { question, correctAnswer }
  }

  game(getQuestionAndAnswer, userName)
}
