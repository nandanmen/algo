# New Year Chaos

## Problem Description

> Problem from [hackerrank/new-year-chaos](https://www.hackerrank.com/challenges/new-year-chaos/problem)

It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by `1` from `1` at the front of the line to `n` at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if `n = 8` and `person 5` bribes `person 4`, the queue will look like this: `1, 2, 3, 5, 4, 6, 7, 8`.

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

### Function Description

Complete the function `minimumBribes`. It must print an integer representing the minimum number of bribes necessary, or `Too chaotic` if the line configuration is not possible.

`minimumBribes` has the following parameter(s):

- `q`: An array of integers

## Running the Algorithm

```
$ alg new-year-chaos <input>
```

Example:

```
$ alg new-year-chaos 2 1 5 3 4    // prints 3
```