# Frequency Queries

## First Approach

```js
function freqQuery(queries) {
    const result = []
    const map = {}
    queries.forEach(([op, data]) => {
        if (op === 1) {
            const value = map[data]
            if (!value) {
                map[data] = 1
            } else {
                map[data] = value + 1
            }
        } else if (op === 2) {
            const value = map[data]
            if (value) {
                map[data] = value - 1
            }
        } else if (op === 3) {
            const entries = Object.values(map)
            if (entries.indexOf(data) >= 0) {
                result.push(1)
            } else {
                result.push(0)
            }
        }
    })
    return result
}
```

## Accepted Solution

```js
function freqQuery(...queries) {
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
