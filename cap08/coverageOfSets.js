// Solution using a greedy algorithm
// This solution will be O(nˆ2)
// The ideal solution would be O(2ˆn). In order to improve the time complexity,
// we adopt this greedy solution...

let desiredStates = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])
const stations = {
  'kone': new Set(['id', 'nv', 'ut']),
  'ktwo': new Set(['wa', 'id', 'mt']),
  'kthree': new Set(['or', 'nv', 'ca']),
  'kfour': new Set(['nv', 'ut']),
  'kfive': new Set(['ca', 'az'])
}

const finalStations = new Set()

while (desiredStates.size) {
  let bestStation = undefined
  let coveredStates = new Set()
  for (const station in stations) {
    const covered = setIntersection(stations[station], desiredStates)

    if (covered.size > coveredStates.size) {
      bestStation = station
      coveredStates = covered
    }
  }

  desiredStates = setDifference(desiredStates, coveredStates)
  finalStations.add(bestStation)
}

console.log(finalStations)

function setIntersection(firstSet, secondSet) {
  const intersection = new Set()

  firstSet.forEach(value => {
    if (secondSet.has(value)) intersection.add(value)
  })

  return intersection
}

function setDifference(firstSet, secondSet) {
  const difference = new Set()

  firstSet.forEach(value => {
    if (!secondSet.has(value)) difference.add(value)
  })

  return difference
}