/**
 * The filter method is used to create a new array containing
 * only the elements that pass a given test. It's part of Array
 * prototype. It takes a callback function as its argument, which
 * is used to test eact element in the original array.
 */

// filter syntax:
// array.filter(callback(element, index, array));

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const unevenNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers);
console.log(unevenNumbers);