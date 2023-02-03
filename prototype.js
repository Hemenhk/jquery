/**
 * Prototypes are objects that are used as templates for creating new
 * objects. Every object in JS has a prototype, which is essentially the
 * object from which it inherits properties and methods.
 */

// example:

function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
};

/**
 * Using prototypes, you can extend the functionality of objects and reuse
 * code across multiple objects. Prototypes are a fundamental concept in JS,
 * and play a key role in OOP.
 */

Person.prototype.greet = function(){
    console.log(`Hi, my name is ${this.name} and I'm ${this.age}, from the city of ${this.city}`);
};


const person = new Person('Hemen Hiwa Kamal', 24, 'Linköping');
person.greet();

