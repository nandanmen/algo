const minimumBribes = require('.')

describe('new year chaos', () => {
  it('returns 3 given 2 1 5 3 4', () => {
    const result = minimumBribes(2, 1, 5, 3, 4)
    expect(result).toEqual(3)
  })

  it('returns 4 given 1 2 5 3 4 7 8 6', () => {
    const result = minimumBribes(1, 2, 5, 3, 4, 7, 8, 6)
    expect(result).toEqual(4)
  })

  it('returns 7 given 1 2 5 3 7 8 6 4', () => {
    const result = minimumBribes(1, 2, 5, 3, 7, 8, 6, 4)
    expect(result).toEqual(7)
  })

  it('returns too chaotic given 2 5 1 3 4', () => {
    const result = minimumBribes(2, 5, 1, 3, 4)
    expect(typeof result).toEqual('string')
    expect(result.toLowerCase()).toEqual('too chaotic')
  })
})
