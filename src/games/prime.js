import { greetUser, game } from '../index.js'
import { randomNumber } from '../randomNumber.js'

const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) return false
  }
  return true
}

export const prime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const userName = greetUser(rules)
  const getQuestionAndAnswer = () => {
    const question = randomNumber (1, 100)
    const correctAnswer = isPrime(question) ? 'yes' : 'no'
    return { question, correctAnswer }
  }
  game(getQuestionAndAnswer, userName)
}
