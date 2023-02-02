/**
 * The map method operates on arrays. It creates a new array with the results of 
 * calling a provided function on every element in the calling array. 
 * It does not modify the orginial array, but instead returns a new array 
 * with the transformed elements.
 */


const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

const double = x => x * 2;

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);