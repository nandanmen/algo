const freqQuery = require('.')

describe('frequency-queries', () => {
  const tests = [
    [[[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]], [0, 1]]
  ]

  tests.forEach(([input, expected], index) => {
    test(`test ${index}`, () => {
      const result = freqQuery(...input)
      expect(result).toEqual(expected)
    })
  })
})
