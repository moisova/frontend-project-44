import { randomNumber } from '../cli.js'
import { greetUser, game } from '../index.js'

const rules = 'Find the greatest common divisor of given numbers.'
greetUser(rules)

const getGcd = (a, b) => {
  let num1 = a
  let num2 = b
  while (num2 !== 0) {
    const temp = num1 % num2
    num1 = num2
    num2 = temp
  }
  return num1
}

export const gcd = () => {
  const getQuestionAndAnswer = () => {
    const a = randomNumber(1, 10)
    const b = randomNumber(1, 10)
    const question = `${a} ${b}`
    const correctAnswer = String(getGcd(a, b))
    return { question, correctAnswer }
  }
  game(getQuestionAndAnswer)
}
