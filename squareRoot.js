
/**
 * Find the square root for a number.
 * Latest change adds support for numbers between 0 and 1.
 * @param {number} num - number to find the square root for
 * @param {number} iterations - number of iterations to allow
 * @param {function} checkPasses - inspect how many passes it took the algorithm to find the square root
 * @returns {[number, number]} - a duple just for testing purposes - in the real world this would just return a number
 */
module.exports.squareRoot = function squareRoot(num = 0, maxIterations = 200, checkPasses = () => {}) {
  let passes = 0;
  function handler(limUp = 0, limDown = 0, i = 200) {
    if (num < 0) return NaN;
    if (!num) return 0;
    if (num === 1) return 1;

    const current = (limUp + limDown) / 2;

    if (i <= 0) return current;

    passes += 1;
    const product = current * current;

    // found the solution!
    if (product === num) return current;

    const solution = handler(
      product > num ? current : limUp,
      product < num ? current : limDown,
      i - 1,
    );
    if (checkPasses) checkPasses(passes);
    return solution;
  }
  return num > 1
    ? handler(num, 0, maxIterations)
    // find solution for numbers where 0 < num < 1
    : handler(1, num, maxIterations);
}

/**
 * This is an implementation of the babylonian method (AKA newtonian method)
 * It converges quadratically towards the solution.
 * @param {number} num 
 * @returns {number}
 * @see https://stackoverflow.com/a/46740801
 * @see https://en.wikipedia.org/wiki/Newton%27s_method#Square_root
 */
module.exports.babylonian = function (num = 0) {
  if (!num) return 0;
    if (num < 0) return NaN;
    if (num === 1) return 1;
    const errorThreshold = 0.000000000000001;
    let s = num;
    // max passes
    let i = 200;
    while (s - num / s > errorThreshold && i > 0) {
      s = (s + num / s) / 2;
      i--;
    }
    return s;
}
