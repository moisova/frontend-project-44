import { greetUser, game } from '../bin/index.js'
import { hiddenSequence } from '../src/cli.js'

const rules = 'What number is missing in the progression?'
greetUser(rules)

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
