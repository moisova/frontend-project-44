import { getName, greeting, randomNumber } from '../src/cli.js'

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain-Games!')
const userName = getName()
console.log(greeting(userName))
console.log('Answer "yes" if the number is even, otherwise answer "no".')

export const even = () => {
  let count = 0
  do {
    const questNumber = randomNumber(1, 100)
    console.log(`Question: ${questNumber}`)
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()
    const checkAnswer = (questNumber % 2 === 0) ? 'yes' : 'no'
    const isCorrect = userAnswer === checkAnswer
    if (!isCorrect) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${checkAnswer}.`)
      console.log(`Let's try again, ${userName}`)
      return false
    }
    else {
      count += 1
      console.log('Correct!')
    };
  }
  while (count < 3)
  if (count === 3) {
    console.log(`Congratulations, ${userName}`)
  };
}
