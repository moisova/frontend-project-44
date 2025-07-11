import { greetUser, game } from '../bin/index.js'
import { isPrime, randomNumber } from '../src/cli.js'

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
greetUser(rules)

export const prime = () => {
  const getQuestionAndAnswer = () => {
    const question = randomNumber (1, 100)
    const correctAnswer = isPrime(question) ? 'yes' : 'no'
    return { question, correctAnswer }
  }
  game(getQuestionAndAnswer)
}
