const { squareRoot } = require('../squareRoot');

describe('squareRoot()', () => {
  function test(num) {
    let passes = 0;
    const solutionTest = squareRoot(num, 200, (_passes) => passes = _passes);
    const solutionCorrect = Math.sqrt(num);
    const diff = Math.abs(solutionTest - solutionCorrect);

    if (diff > 0.000001) throw new Error(`Expected √(${num})=${solutionCorrect}, got: ${solutionTest}`);

    console.log(
      `√(${num})=`.padStart(7, ' '),
      solutionTest,
      solutionCorrect,
      `i:${passes}`
    );
  }

  it('should find correct square roots of all values', () => {
    test(0);
    test(1);
    test(2);
    test(3);
    test(4);
    test(5);
    test(6);
    test(7);
    test(8);
    test(9);
    test(10);
    test(11);
    test(12);
    test(13);
    test(14);
    test(15);
    test(16);
    test(25);
    test(36);
    test(49);
    test(64);
    test(81);
    test(100);
    test(121);
    test(144);
    test(169);
    test(160);
    test(180);
    test(1849858763862);
    test(-8);
    test(-1);
    test(-10);
  });
});
