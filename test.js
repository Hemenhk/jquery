// const numbers = [1,2,3,4,5];

// const double = x => x * 2

// const doubledNumbers = numbers.map(double);

// console.log(doubledNumbers);

// const sum = doubledNumbers.reduce((acc, curr) => acc + curr, 0)
// console.log(sum)

function Person(fname, age){
    this.fname = fname;
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.fname} and I am ${this.age} years old`)
}

const person = new Person('Hemen', '30')

person.greet()