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