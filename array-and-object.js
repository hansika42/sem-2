let newArray = [1,2,3,4,5];
let squaredArray = newArray.
map(num => num*num);
console.log(squaredArray);


let evenNumbers = [1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.
filter(num => num%2 === 0);
console.log(filteredEvenNumber);

let sum = [1,2,3,4,5];
let total = sum.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);