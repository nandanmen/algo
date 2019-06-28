const { sortedInsert, printNode, DoublyLinkedList } = require('.')

describe('insert-sorted-linked-list', () => {
  let list

  function setup(...values) {
    values.forEach(v => list.insertNode(v))
  }

  beforeEach(() => {
    list = new DoublyLinkedList()
  })

  test('inserts value at front', () => {
    setup(2, 3, 4, 10)
    expect(printNode(sortedInsert(list, 1).head)).toEqual(
      `1 -> 2 -> 3 -> 4 -> 10`
    )
  })

  test('inserts value into middle', () => {
    setup(1, 3, 4, 10)
    const updatedList = sortedInsert(list, 5)
    expect(printNode(updatedList.head)).toEqual(`1 -> 3 -> 4 -> 5 -> 10`)
  })

  test('inserts value at end', () => {
    setup(1, 2, 3)
    const updatedList = sortedInsert(list, 4)
    expect(printNode(updatedList.head)).toEqual(`1 -> 2 -> 3 -> 4`)
  })
})
