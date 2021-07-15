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
squareRoot(9); // 3
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

There exist [lots of ways to calculate the square root of a number](<https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Decimal_(base_10)>).
If I were John Carmack, I would continue this quest to find the best possible algorithm, but I'm satisfied
with this quick-and-dirty solution I came up with.

## Diagram

I've attempted to create a visual diagram explaining how this algoritm works:

[Whimsical - Square Root Algorithm](https://whimsical.com/square-root-algorithm-RiiUwd4XAGYjxCXhG6mRSB)

## Latest update - support for numbers less than 1

During testing I discovered a bug. :scream:

Calculations were way off for any number less than 1.

Tweaking the algorithm slightly so that the `limUp=1` and the `limDown=${number}` fixed the bug, to my surprise.

## Latest Addition - Babylonian Method

Researching this topic led me down the rabbit hole of square root algorithms and back into high school algebra
(which alarmed me as to how much I had forgotten). I came across the Newtonian (AKA Babylonian) method of
iterating and converging closer and closer to a solution.

Interestingly, the Babylonian method converges _quadratically_ to the solution, as opposed to
my binary search algorithm, so it's quite a bit faster.

Benchmarking the newtonian method against my algorithm was almost 100% faster. :success_kid:

However, one downside of the newtonian method is that it wouldn't support values between 0 and 1 (at
least to my knowledge - I could very well be missing something).
