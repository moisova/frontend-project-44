import { greetUser, game } from '../index.js'
import { randomNumber } from '../randomNumber.js'

const rules = 'What is the result of the expression?'
greetUser(rules)

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
  }
}

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
