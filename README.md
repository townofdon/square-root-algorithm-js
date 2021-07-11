# Square Root - Javascript Example

This is just a super simple demonstration of a square root algorithm.

:warning: **ONLY USE THIS LIB IF:**

- You want your code to run ~8,000,000% slower
- You do not mind a slight loss of precision
## Installation:

```
yarn install
```

## Usage:

```
import { squareRoot } from './path/to/squareRoot.js';
squareRoot(4); // 2
squareRoot(6); // 3
squareRoot(16); // 4
squareRoot(-1); // NaN
```

## Test

Run the test suite to see this function in action. 🦾

```
yarn test
```

## Perf

This runs a LOT slower than the `Math.sqrt` function, like ~8,000,000% slower. 😭

https://jsbench.me/01kqzjvdqx/1

There exist [lots of ways to calculate the square root of a number](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Decimal_(base_10)).
If I were John Carmack, I would continue this quest to find the best possible algorithm, but I'm satisfied
with this quick-and-dirty solution I came up with.

## Diagram

I've attempted to create a visual diagram explaining how this algoritm works:

[Whimsical - Square Root Algorithm](https://whimsical.com/square-root-algorithm-RiiUwd4XAGYjxCXhG6mRSB)
