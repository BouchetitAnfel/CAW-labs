// __tests__/calculator.test.js
const math = require('../calculator'); // go up one folder to import calculator.js

describe("Calculator tests", () => {
  
  test('adds 2 + 3 to equal 5', () => {
    expect(math.add(2, 3)).toBe(5);
  });

  test('subtracts 5 - 3 to equal 2', () => {
    expect(math.subtract(5, 3)).toBe(2);
  });

  test('multiplies 4 * 3 to equal 12', () => {
    expect(math.multiply(4, 3)).toBe(12);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(math.divide(10, 2)).toBe(5);
  });

  test('dividing by zero throws error', () => {
    expect(() => math.divide(10, 0)).toThrow("Cannot divide by zero");
  });

});
