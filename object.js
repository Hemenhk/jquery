/**
 * An object literal is a way to create an object by explicitly
 * defining its properties and values. 
 */

// example:

const person = {
    name: 'Hemen Hiwa Kamal',
    age: 24,
    city: 'Linköping'
};

/**
 * You can access the properties of an object by using dot notation
 * or square bracket notation.
 */

// console.log(person.name);
// console.log(person['age']);

/**
 * You can add, modify or delete properties of an object using assignment
 * operator or delete the operator.
 */

person.job = 'Developer';
console.log(person)

console.log('-----')
console.log('-----')

person.age = 35;
console.log(person)

console.log('-----')
console.log('-----')

delete person.job;
console.log(person)