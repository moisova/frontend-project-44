import { greetUser, game } from '../bin/index.js'
import { randomNumber, calculate } from '../src/cli.js'

const rules = 'What is the result of the expression?'
greetUser(rules)

const operators = ['+', '-', '*']

export const calc = () => {
  const getQuestionAndAnswer = () => {
    const a = randomNumber(1, 10)
    const b = randomNumber(1, 10)
    const operator = operators[Math.floor(Math.random() * operators.length)]
    const question = `${a} ${operator} ${b}`
    const correctAnswer = String(calculate(a, b, operator))
    return { question, correctAnswer }
  }
  game(getQuestionAndAnswer)
}
