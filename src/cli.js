import readlineSync from 'readline-sync'

export const welcome = () => {
  return 'Welcome to the Brain Games!'
}
export const getName = () => {
  const userName = readlineSync.question('May I have your name? ')
  return userName
}

export const greeting = (name) => {
  return `Hello, ${name}!`
}

export const intro = () => {
  console.log(welcome())
  const name = getName()
  console.log(greeting(name))
}
