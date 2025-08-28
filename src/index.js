import readlineSync from 'readline-sync'
import { getName, greeting } from '../src/cli.js'

export const greetUser = (rules) => {
  console.log('Welcome to the Brain Games!')
  const userName = getName()
  console.log(greeting(userName))
  console.log(`${rules}`)
  return userName
}

export const game = (getQuestionAndAnswer, userName) => {
  const roundsCount = 3

  for (let i = 0; i < roundsCount;) {
    const { question, correctAnswer } = getQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return false
    }
    else {
      console.log('Correct!')
      i += 1
    }
  }

  console.log(`Congratulations, ${userName}!`)
}
