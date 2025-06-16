#!/usr/bin/env node

import { getName, greeting } from '../src/cli.js'

console.log('Welcome to the Brain-Games!')
const name = getName()
console.log(greeting(name))
