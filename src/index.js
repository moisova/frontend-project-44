import readlineSync from 'readline-sync'
import { getName, greeting } from '../src/cli.js'

const userName = getName()
export const greetUser = (rules) => {
  console.log('Welcome to the Brain Games!')
  console.log(greeting(userName))
  console.log(`${rules}`)
}

export const game = (getQuestionAndAnswer) => {
  let answersCount = 0
  const roundsCount = 3

  while (answersCount < roundsCount) {
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
      answersCount += 1
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export const game1 = (getQuestionAndAnswer) => {
  const roundsCount = 3

  for (let i = 0; i === roundsCount;) {
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
