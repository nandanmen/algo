# Frequency Queries

Read about [how I approached the problem](approach.md).

## Problem Description

> Problem from [hackerrank/frequency-queries](https://www.hackerrank.com/challenges/frequency-queries/problem)

You are given `q` queries. Each query is of the form:

- 1x: Insert `x` into your data structure.
- 2y: Delete one occurence of `y` in your data structure, if present.
- 3z: Check if any integer is present whose frequency is exactly `z`. If yes, print 1 else 0.

The queries are given in a 2D array `queries` where `queries[i][0]` contains the operation, and `queries[i][1]` contains the data element.

### Function Description

Complete the `freqQuery` function. It must return an array of integers where each element is a `1` if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

## Solution

```js
function freqQuery(queries) {
  const result = []

  // counts has key = count and value = numbers with that count
  const counts = {}

  // map has key = number and value = count of that number
  const map = {}

  queries.forEach(([op, data]) => {
    if (op === 1) {
      const prevCount = map[data]

      /**
       * if first occurence of number, then add the number to the
       * map with count = 1 and add number to set with count = 1
       */
      if (prevCount === undefined) {
        map[data] = 1
        const set = counts[1] || new Set()
        set.add(data)
        counts[1] = set
      } else {
        /**
         * if not the first occurence of number, increment count, then:
         *  1. Remove data from previous count set
         *  2. Add data into new count set
         */
        const nextCount = prevCount + 1
        map[data] = nextCount

        const prevSet = counts[prevCount]
        const nextSet = counts[nextCount] || new Set()
        if (prevSet) prevSet.delete(data)
        nextSet.add(data)

        counts[nextCount] = nextSet
      }
    } else if (op === 2) {
      const prevCount = map[data]
      if (prevCount) {
        /**
         * if data exists, decrement count, then:
         *  1. Remove data from previous count set
         *  2. Add data into new count set
         */
        const nextCount = prevCount - 1
        map[data] = nextCount

        const prevSet = counts[prevCount]
        const nextSet = counts[nextCount] || new Set()
        if (prevSet) prevSet.delete(data)
        nextSet.add(data)

        counts[nextCount] = nextSet
      }
    } else if (op === 3) {
      const set = counts[data]
      result.push(set && set.size ? 1 : 0)
    }
  })
  return result
}
```
