// after analysing the first function (Array)
// i found out that it can break more than 10 time 
// i wrote 15 test to cover all the cases
// each test will be explained in the comments


const first = require('../first');  

test('1 case : Normal case get first 3 elements', () => {
    expect(first([10, 20, 30, 40, 50], 3)).toEqual([10, 20, 30]);
});

test('2 case :  Ask for more elements than exist', () => {
    expect(first([1, 2, 3], 100)).toEqual([1, 2, 3]);
});

test('3 case :  No n given → should return first element', () => {
    expect(first([7, 8, 9])).toBe(7);
});

test('4 case :  Empty array and no n → returns undefined', () => {
    expect(first([])).toBeUndefined();
});

test('5 case : n = 0 → returns empty array', () => {
    expect(first([1, 2, 3, 4], 0)).toEqual([]);
});

test('6 case : n is negative → returns empty array', () => {
    expect(first([5, 6, 7], -10)).toEqual([]);
});

test('7 case : array is null → returns empty array', () => {
    expect(first(null, 5)).toEqual([]);
});

test('8 case : array is undefined → returns empty array', () => {
    expect(first(undefined, 5)).toEqual([]);
});

test('9 case : n is null → returns first element', () => {
    expect(first([99, 88, 77], null)).toBe(99);
});

test('10 case : n is NaN → returns empty array (safe)', () => {
    expect(first([1, 2, 3], NaN)).toEqual([]);
});

test('11 case : n is a string number → still works (bonus)', () => {
    expect(first([10, 20, 30], "2")).toEqual([10, 20]);
});