/**
 * Prototype-based inheritance is a way of implementing inheritance in JS,
 * where objects inherit properties and methods from other objects. Instead
 * of using a class-based inheritance model, as in traditional OOP, protoype-based
 * inheritance uses prototypes as the building blocks for creating new objects.
 * 
 * In protoype-based, an object can inherit properties and methods from its 
 * prototpye. If the object doesn't have the property or method it's looking for,
 * it will look to its prototype.
 */

// example:

function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
};

Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age}, from the city of ${this.city}`);
};

function Teacher(name, age, city, subject){
    Person.call(this, name, age, city);
    this.subject = subject;
};

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function(){
    console.log(`I'm teaching ${this.subject}.`);
};

const teacher = new Teacher('Hemen Hiwa Kamal', 24, 'Linköping', 'Javascript');
teacher.greet();
teacher.teach();

