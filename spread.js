/**
 * The spread operator is used to spread an iterable such as an array
 * into individual elements. Commonly used to concatenate arrays, spread
 * elements of an array into a function call or to destructure objects.
 */

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers);


// Spread operator in a function

const numbers = [12,34,56,67];

const add = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
}

const sum = add(...numbers);
console.log(sum);