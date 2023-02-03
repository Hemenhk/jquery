const cities = ['mumbai', 'new york', 'stockholm', 'london'];

const reducedCities = cities.reduce((acc, curr) => {
   return acc + ' ' + curr
}, '')

console.log(reducedCities)


const numbers = [12234, 234, 56, 234, 564];

const reducedNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(reducedNumbers)
console.log('-----')

let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];

    console.log(sum)
}