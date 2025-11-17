// ========================================
// __tests__/exercice2.test.js - Jest Test Suite
// Web Application Design - Exercise 2
// M1.STIC – 1st Semester – 2025-2026
// ========================================

const { first, last, chunk } = require('../exercice2');

// ========================================
// EXERCISE 1: TEST SUITE - first() function
// ========================================

describe('Exercise 1: first() function - Get first n elements', () => {
  
  describe('Normal cases', () => {
    test('should return first 3 elements from [1,2,3,4,5]', () => {
      expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    test('should return first element when n is undefined', () => {
      expect(first([1, 2, 3, 4, 5])).toBe(1);
    });

    test('should return first element from single element array', () => {
      expect(first([42])).toBe(42);
    });

    test('should return all elements when n equals array length', () => {
      expect(first([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    test('should return first 2 elements from string array', () => {
      expect(first(['a', 'b', 'c', 'd'], 2)).toEqual(['a', 'b']);
    });
  });

  describe('Edge cases', () => {
    test('should return empty array when n is 0', () => {
      expect(first([1, 2, 3], 0)).toEqual([]);
    });

    test('should return empty array when n is negative', () => {
      expect(first([1, 2, 3], -5)).toEqual([]);
    });

    test('should return all elements when n > array length', () => {
      expect(first([1, 2, 3], 10)).toEqual([1, 2, 3]);
    });

    test('should return empty array for empty input array', () => {
      expect(first([], 3)).toEqual([]);
    });

    test('should return undefined for empty array without n', () => {
      expect(first([])).toBeUndefined();
    });
  });

  describe('Error handling', () => {
    test('should return empty array when array is null', () => {
      expect(first(null, 3)).toEqual([]);
    });

    test('should return empty array when array is undefined', () => {
      expect(first(undefined, 3)).toEqual([]);
    });

    test('should handle null array without n parameter', () => {
      expect(first(null)).toEqual([]);
    });
  });

  describe('Mixed data types', () => {
    test('should work with array of mixed types', () => {
      expect(first(['a', 1, true, null, 'test'], 3)).toEqual(['a', 1, true]);
    });

    test('should work with array of objects', () => {
      const arr = [{id: 1}, {id: 2}, {id: 3}];
      expect(first(arr, 2)).toEqual([{id: 1}, {id: 2}]);
    });
  });
});

// ========================================
// EXERCISE 2: TEST SUITE - last() function
// ========================================

describe('Exercise 2: last() function - Get last n elements', () => {
  
  describe('Normal cases', () => {
    test('should return last 3 elements from [1,2,3,4,5]', () => {
      expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    });

    test('should return last element when n is undefined', () => {
      expect(last([1, 2, 3, 4, 5])).toBe(5);
    });

    test('should return last element from single element array', () => {
      expect(last([42])).toBe(42);
    });

    test('should return all elements when n equals array length', () => {
      expect(last([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    test('should return last 2 elements from string array', () => {
      expect(last(['a', 'b', 'c', 'd'], 2)).toEqual(['c', 'd']);
    });
  });

  describe('Edge cases', () => {
    test('should return all elements when n > array length', () => {
      expect(last([1, 2, 3], 10)).toEqual([1, 2, 3]);
    });

    test('should return empty array when n is 0', () => {
      expect(last([1, 2, 3], 0)).toEqual([]);
    });

    test('should return undefined for empty array without n', () => {
      expect(last([])).toBeUndefined();
    });

    test('should return empty array for empty array with n', () => {
      expect(last([], 3)).toEqual([]);
    });

    test('should handle negative n by returning empty array', () => {
      expect(last([1, 2, 3], -2)).toEqual([]);
    });
  });

  describe('Error handling', () => {
    test('should return empty array when array is null', () => {
      expect(last(null, 3)).toEqual([]);
    });

    test('should return empty array when array is undefined', () => {
      expect(last(undefined, 3)).toEqual([]);
    });

    test('should handle null array without n parameter', () => {
      expect(last(null)).toEqual([]);
    });
  });

  describe('Mixed data types', () => {
    test('should work with array of mixed types', () => {
      expect(last(['a', 1, true, null, 'test'], 3)).toEqual([true, null, 'test']);
    });

    test('should work with array of objects', () => {
      const arr = [{id: 1}, {id: 2}, {id: 3}];
      expect(last(arr, 2)).toEqual([{id: 2}, {id: 3}]);
    });
  });
});

// ========================================
// EXERCISE 3: TEST SUITE - String concatenation
// ========================================

describe('Exercise 3: Array to String conversion - Concatenation methods', () => {
  
  describe('toString() method', () => {
    test('should convert color array to comma-separated string', () => {
      const myColor = ["Red", "Green", "White", "Black"];
      expect(myColor.toString()).toBe("Red,Green,White,Black");
    });

    test('should handle single element array', () => {
      expect(['Red'].toString()).toBe("Red");
    });

    test('should handle empty array', () => {
      expect([].toString()).toBe("");
    });

    test('should convert number array to string', () => {
      expect([1, 2, 3, 4].toString()).toBe("1,2,3,4");
    });
  });

  describe('join() method with default separator', () => {
    test('should join color array with default comma separator', () => {
      const myColor = ["Red", "Green", "White", "Black"];
      expect(myColor.join()).toBe("Red,Green,White,Black");
    });

    test('should produce same result as toString()', () => {
      const myColor = ["Red", "Green", "White", "Black"];
      expect(myColor.join()).toBe(myColor.toString());
    });

    test('should handle single element', () => {
      expect(['Red'].join()).toBe("Red");
    });

    test('should return empty string for empty array', () => {
      expect([].join()).toBe("");
    });
  });

  describe('join("") method - concatenation without separator', () => {
    test('should concatenate colors without separator', () => {
      const myColor = ["Red", "Green", "White", "Black"];
      expect(myColor.join('')).toBe("RedGreenWhiteBlack");
    });

    test('should join letters to form word', () => {
      expect(['H', 'e', 'l', 'l', 'o'].join('')).toBe("Hello");
    });

    test('should handle single element', () => {
      expect(['Red'].join('')).toBe("Red");
    });

    test('should return empty string for empty array', () => {
      expect([].join('')).toBe("");
    });
  });

  describe('join() method with custom separators', () => {
    test('should join with space separator', () => {
      const myColor = ["Red", "Green", "White", "Black"];
      expect(myColor.join(' ')).toBe("Red Green White Black");
    });

    test('should join with dash separator', () => {
      const myColor = ["Red", "Green", "White", "Black"];
      expect(myColor.join(' - ')).toBe("Red - Green - White - Black");
    });

    test('should join with pipe separator', () => {
      const myColor = ["Red", "Green", "White", "Black"];
      expect(myColor.join(' | ')).toBe("Red | Green | White | Black");
    });

    test('should join numbers with custom separator', () => {
      expect([1, 2, 3].join('-')).toBe("1-2-3");
    });

    test('should join with newline separator', () => {
      const items = ["Item 1", "Item 2", "Item 3"];
      expect(items.join('\n')).toBe("Item 1\nItem 2\nItem 3");
    });

    test('should join with slash separator for paths', () => {
      const path = ['home', 'user', 'documents'];
      expect(path.join('/')).toBe("home/user/documents");
    });
  });

  describe('Practical examples', () => {
    test('should create CSV format', () => {
      const headers = ["Name", "Age", "City"];
      expect(headers.join(',')).toBe("Name,Age,City");
    });

    test('should create sentence from words', () => {
      const words = ["JavaScript", "is", "awesome"];
      expect(words.join(' ')).toBe("JavaScript is awesome");
    });

    test('should handle mixed type array', () => {
      const mixed = ["Value:", 42, "Status:", true];
      expect(mixed.join(' ')).toBe("Value: 42 Status: true");
    });
  });
});

// ========================================
// EXERCISE 4: TEST SUITE - chunk() function
// ========================================

describe('Exercise 4: chunk() function - Divide array into sub-arrays', () => {
  
  describe('Normal cases - Even division', () => {
    test('should chunk [1,2,3,4,5,6] into size 2', () => {
      expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    test('should chunk [1,2,3,4,5,6,7,8,9] into size 3', () => {
      expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
        .toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });

    test('should chunk array of 8 elements into size 4', () => {
      expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 4))
        .toEqual([[1, 2, 3, 4], [5, 6, 7, 8]]);
    });
  });

  describe('Normal cases - Uneven division (with remainder)', () => {
    test('should chunk [1,2,3,4,5] into size 2 with remainder', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('should chunk [1,2,3,4,5,6,7,8] into size 3 with remainder', () => {
      expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
        .toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });

    test('should chunk [1,2,3,4,5,6,7] into size 5 with remainder', () => {
      expect(chunk([1, 2, 3, 4, 5, 6, 7], 5))
        .toEqual([[1, 2, 3, 4, 5], [6, 7]]);
    });
  });

  describe('Edge cases - Chunk size variations', () => {
    test('should chunk with size 1 (each element separate)', () => {
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    test('should return single chunk when size equals array length', () => {
      expect(chunk([1, 2, 3, 4], 4)).toEqual([[1, 2, 3, 4]]);
    });

    test('should return single chunk when size > array length', () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test('should return empty array for empty input', () => {
      expect(chunk([], 2)).toEqual([]);
    });
  });

  describe('Different data types', () => {
    test('should chunk string array', () => {
      expect(chunk(['a', 'b', 'c', 'd', 'e'], 2))
        .toEqual([['a', 'b'], ['c', 'd'], ['e']]);
    });

    test('should chunk array of objects', () => {
      const users = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
      expect(chunk(users, 2)).toEqual([[{id: 1}, {id: 2}], [{id: 3}, {id: 4}]]);
    });

    test('should chunk mixed type array', () => {
      expect(chunk([1, 'a', true, null, 2, 'b'], 2))
        .toEqual([[1, 'a'], [true, null], [2, 'b']]);
    });
  });

  describe('Practical use cases', () => {
    test('should paginate items (3 items per page)', () => {
      const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const pages = chunk(items, 3);
      expect(pages).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
      expect(pages.length).toBe(4); // 4 pages total
    });

    test('should create grid layout (4 columns)', () => {
      const elements = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      const rows = chunk(elements, 4);
      expect(rows).toEqual([['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H']]);
    });

    test('should batch process items (5 per batch)', () => {
      const tasks = Array.from({length: 12}, (_, i) => i + 1);
      const batches = chunk(tasks, 5);
      expect(batches.length).toBe(3);
      expect(batches[0].length).toBe(5);
      expect(batches[2].length).toBe(2);
    });
  });
});