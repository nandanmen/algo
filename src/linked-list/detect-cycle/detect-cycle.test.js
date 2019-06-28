const { Node, hasCycle } = require('.')

describe('detect-cycle', () => {
  test(`returns true when there's a cycle`, () => {
    const first = new Node(1)
    const second = new Node(2)
    const third = new Node(3)
    first.next = second
    second.next = third
    third.next = first

    expect(hasCycle(first)).toBe(true)
  })

  test(`returns false when there's no cycle`, () => {
    const first = new Node(1)
    const second = new Node(2)
    const third = new Node(3)
    first.next = second
    second.next = third
    third.next = null

    expect(hasCycle(first)).toBe(false)
  })
})
