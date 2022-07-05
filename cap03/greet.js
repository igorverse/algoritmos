// call stack is a very important concept
// we know that call stack has two operations: push and pop
// one important thing about call stack is that can get really big and occupies a lot of memory

function greet(name) {
  console.log(`Hi, ${name}!`)
  greet2(name)
  console.log('Working to say bye...')
  bye()
}

function greet2(name) {
  console.log(`How are you, ${name}?`)
}

function bye() {
  console.log('Ok! Bye!')
}

greet('Igor')
