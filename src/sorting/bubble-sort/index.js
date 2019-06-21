function swap(a, indexOne, indexTwo) {
  const tmp = a[indexOne]
  a[indexOne] = a[indexTwo]
  a[indexOne] = tmp
}

function countSwaps(arr) {
  let numSwaps = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        numSwaps++
      }
    }
  }

  return {
    firstElement: arr[0],
    lastElement: arr[arr.length - 1],
    numSwaps
  }
}

module.exports = countSwaps
