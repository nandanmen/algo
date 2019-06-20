const minimumBribes = require('.')

describe('new year chaos', () => {
  it('returns 3 given 2 1 5 3 4', () => {
    const result = minimumBribes(2, 1, 5, 3, 4)
    expect(result).toEqual(3)
  })

  it('returns too chaotic given 2 5 1 3 4', () => {
    const result = minimumBribes(2, 5, 1, 3, 4)
    expect(result.toLowerCase()).toEqual('too chaotic')
  })
})