/**
 * An object constructor is a function that is used to create 
 * objects with specific properties and methods. When a constructor
 * is used to create an object, it's often referred to as an instance
 * of the constructor.
 */

// example:

function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.greet = () => {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age}, from the city of ${this.city}`);
    };
};

const person = new Person('Hemen Hiwa Kamal', 24, 'Linköping');
person.greet();