function minimumBribes(...arr) {
  const queue = arr.map(Number).map(v => v - 1)
  let numBribes = 0
  for (let i = queue.length - 1; i >= 0; i--) {
    const curr = queue[i]

    if (curr - i > 2) {
      return 'too chaotic'
    }

    for (let j = Math.max(0, curr - 1); j < i; j++) {
      if (queue[j] > curr) numBribes++
    }
  }
  return numBribes
}

module.exports = minimumBribes
