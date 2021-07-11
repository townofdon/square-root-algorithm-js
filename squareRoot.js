
/**
 * Find the square root for a number
 * @param {number} num - number to find the square root for
 * @param {number} iterations - number of iterations to allow
 * @param {function} checkPasses - inspect how many passes it took the algorithm to find the square root
 * @returns {[number, number]} - a duple just for testing purposes - in the real world this would just return a number
 */
module.exports.squareRoot = function squareRoot(num = 0, iterations = 200, checkPasses = () => {}) {
  let passes = 0;
  
  function handler(target = 0, current = 0, limUp = 0, limDown = 0, i = 50) {
    if (!target) return 0;
    if (target < 0) return NaN;
    if (target === 1) return 1;
    if (!current) return 0;
    if (i <= 0) return current;
    const product = current * current;
    const diff = target - product;
    passes += 1;

    // we found the solution
    if (diff === 0) return current;

    // return a value halfway between the upper and lower limit
    return handler(
      target,
      (limUp + limDown) / 2,
      diff < 0 ? current : limUp,
      diff > 0 ? current : limDown,
      i - 1,
    );
  }
  
  const solution = handler(num, num / 2, num, 0, iterations);
  if (checkPasses) checkPasses(passes);
  return solution;
}
