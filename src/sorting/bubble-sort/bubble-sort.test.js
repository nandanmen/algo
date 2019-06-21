const countSwaps = require('.')

describe('bubble-sort', () => {
  const tests = [
    [
      [1, 2, 3],
      {
        numSwaps: 0,
        firstElement: 1,
        lastElement: 3
      }
    ],
    [
      [3, 2, 1],
      {
        numSwaps: 3,
        firstElement: 1,
        lastElement: 3
      }
    ]
  ]

  tests.forEach(([input, expected], index) => {
    test(`test ${index}`, () => {
      const result = countSwaps(input)
      expect(result).toEqual(expected)
    })
  })
})
