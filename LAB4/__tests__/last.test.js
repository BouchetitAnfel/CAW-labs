
const last = require('../last');  

test('1. Get last 2 elements', () => {
    expect(last([10, 20, 30, 40, 50], 2)).toEqual([40, 50]);
});

test('2. No n given → return last element', () => {
    expect(last([7, 8, 9, 10])).toBe(10);
});