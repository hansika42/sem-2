// object data type 
let person = {
    name: "john",
    age: 29,
    city: "new york"
};
console.log(person.name);
console.log(person.age);

//array data type
let array = [1,2,3,4,5];
console.log(array[0]);

//array with multiple data types 
let mixedarray = [1, "hello", true, {name: "alice"}, [1,2,3]];
console.log(mixedarray[0]);
console.log(mixedarray[1]);
console.log(mixedarray[2]);
console.log(mixedarray[3]);
console.log(mixedarray[4]);

//map on array
let newarray = [1,2,3,4,5];
let doublearray = newarray.map(num => 2 * num);
console.log(doublearray);
