const { mean } = require('../exo2');

describe('mean function', () => {
  test('calculates mean of scores1', () => {
    const scores1 = [15, 18, 12, 14, 16];
    expect(mean(scores1)).toBeCloseTo(15); // (15+18+12+14+16)/5 = 15
  });

  test('calculates mean of scores2', () => {
    const scores2 = [10, 20, 15, 13, 17, 19];
    expect(mean(scores2)).toBeCloseTo(15.6667); // (10+20+15+13+17+19)/6
  });

  test('returns 0 for empty array', () => {
    expect(mean([])).toBe(0);
  });
});
