// Hash table is a very important data structure
// There are differents approach, but in summary it can be
// considered a mix of hash functions and linked lists (or arrays)
// There are some important use cases for hash tables: search, avoid duplicatas, cache etc

// use case: search

const phoneBook = {}

phoneBook['cops'] = 190
phoneBook['emergency'] = 192

console.log(phoneBook['cops'])

const ipAddresses = {}

ipAddresses['google.com'] = '74.125.239.133'
ipAddresses['facebook.com'] = '173.252.120.6'
ipAddresses['scribd.com'] = '23.235.47.175'

console.log(ipAddresses['google.com'])

// use case: avoid duplicatas

const hasVoted = {}

function checkVoter(name) {
  if (hasVoted[name]) {
    console.log(`${name} has already voted!`)
  } else {
    hasVoted[name] = true
    console.log(`${name}, you can vote!`)
  }
}

checkVoter('foo')
console.log(hasVoted)

checkVoter('bar')
console.log(hasVoted)

checkVoter('baz')
console.log(hasVoted)

checkVoter('baz')
console.log(hasVoted)
