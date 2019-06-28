class DoublyLinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insertNode(data) {
    const node = new DoublyLinkedListNode(data)
    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
      node.prev = this.tail
    }
    this.tail = node
  }
}

function printNode(node) {
  const result = []
  while (node) {
    result.push(node.data)
    node = node.next
  }
  return result.join(' -> ')
}

function sortedInsert(list, data) {
  let curr = list.head
  const node = new DoublyLinkedListNode(data)

  // if list is empty, insert data normally
  if (!curr) {
    list.insertNode(data)
    return list
  }

  while (curr) {
    const { data: currData } = curr
    if (data <= currData) {
      const tmp = curr.prev
      curr.prev = node
      node.next = curr
      node.prev = tmp
      if (tmp) {
        tmp.next = node
      } else {
        list.head = node
      }
      return list
    }
    curr = curr.next
  }

  list.insertNode(data)
  return list
}

module.exports = {
  DoublyLinkedList,
  printNode,
  sortedInsert
}
