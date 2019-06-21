# Frequency Queries

## Problem Description

> Problem from [hackerrank/frequency-queries](https://www.hackerrank.com/challenges/frequency-queries/problem)

You are given `q` queries. Each query is of the form:

- 1x: Insert `x` into your data structure.
- 2y: Delete one occurence of `y` in your data structure, if present.
- 3z: Check if any integer is present whose frequency is exactly `z`. If yes, print 1 else 0.

The queries are given in a 2D array `queries` where `queries[i][0]` contains the operation, and `queries[i][1]` contains the data element.

### Function Description

Complete the `freqQuery` function. It must return an array of integers where each element is a `1` if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.