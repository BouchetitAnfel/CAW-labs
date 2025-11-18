const chunk = require('../chunk');  

test('1 case : Splits array into chunks of size 2', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
});

test('2 case : The last chunk can be smaller than the others', () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
});