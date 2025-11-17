// ========================================
// exercice2.js - Array Function Implementations
// Web Application Design - Exercise 2
// ========================================

/**
 * Exercise 1: Returns the first n elements of an array
 * @param {Array} array - The input array
 * @param {number} n - Number of elements to return
 * @returns {Array|*} - Array of first n elements, or first element if n is undefined
 */
function first(array, n) {
  if (array == null || n <= 0)
    return [];
  if (n == null)
    return array[0];
  return array.slice(0, n);
}

/**
 * Exercise 2: Returns the last n elements of an array
 * @param {Array} array - The input array
 * @param {number} n - Number of elements to return
 * @returns {Array|*} - Array of last n elements, or last element if n is undefined
 */
function last(array, n) {
  if (array == null)
    return [];
  if (n == null)
    return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}

/**
 * Exercise 4: Divides an array into sub-arrays of a specified size
 * @param {Array} array - The input array
 * @param {number} size - Size of each chunk
 * @returns {Array} - Array of sub-arrays
 */
function chunk(array, size) {
  var chunkedArr = [];
  var index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

// Export functions for Jest testing
module.exports = { first, last, chunk };

// Exercise 3: Example usage for string concatenation
// Only runs when file is executed directly (not when imported by Jest)
if (require.main === module) {
  console.log("\n=== Exercise 3: String Concatenation Examples ===");
  var myColor = ["Red", "Green", "White", "Black"];
  console.log("Original array:", myColor);
  console.log("toString():", myColor.toString());
  console.log("join():", myColor.join());
  console.log("join(''):", myColor.join(''));
  console.log("join(' + '):", myColor.join(' + '));
}