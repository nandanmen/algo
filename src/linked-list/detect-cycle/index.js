class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function hasCycle(head) {
  const visited = new Set()
  let curr = head
  while (curr) {
    if (visited.has(curr)) return true
    visited.add(curr)
    curr = curr.next
  }
  return false
}

module.exports = {
  Node,
  hasCycle
}
