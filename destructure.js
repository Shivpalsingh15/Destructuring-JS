/*Destructuring in JavaScript is a powerful feature that allows you to extract values from objects or arrays and assign them to variables in a concise and readable way.  */

//destructuring in FUNCTION parameters

// Original Function
function printPersonDetails({ name, age, city }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

// Object to pass as an argument
const personDetails = { name: 'Alice', age: 25, city: 'London' };

// Calling the function with destructuring
printPersonDetails(personDetails);
// Output: Name: Alice, Age: 25, City: London

// -------------------------------------------------------------------------------------






let person = {name: "shiv", location: "Indore"}
let { name, location } = person;
console.log("first:", name);
console.log("second:", location);

//output
// first: shiv;
// second: Indore;


//Renaming them to Variables durning destruturing.

let person1 = { name: "shiv", location: "Indore" };
let { name: FName, location: place } = person1;
console.log("first:", name);
console.log("second:", location);

// first: shiv;
// second: Indore;


//ARRAY destruturing.

// Original Array
// const colors = ['red', 'green', 'blue'];

// // Destructuring
// const [firstColor, secondColor, thirdColor] = colors;

// // Extracted Values
// console.log(firstColor);  // Output: red
// console.log(secondColor); // Output: green
// console.log(thirdColor);  // Output: blue


// Original Array
const colors = ['red', 'green', 'blue'];

// Destructuring
const [firstColor, ...secondColor] = colors; 
//red
// [ 'green', 'blue' ]


// Extracted Values
console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
// console.log(thirdColor);  // Output: blue


/*
While destructuring allows you to extract specific values from objects or arrays, the spread operator (...) in JavaScript is used for creating copies of objects or arrays,  */

let man = {name: "shiv", age: "24"}
let women = { name2: "shiv", age1: "24" };
let people = {...man, ...women}
console.log('people:', people)

//Example 2: Creating a Shallow Copy with Additional Properties

let man1 = { name: "shiv", age: "24" };

let people1 = { ...man, location: "ahmedabad" };
console.log("people:", people1);
/*output: people: { name: 'shiv', age: '24', location: 'ahmedabad' } */


//Destructuring with Array Spread:

let even = [0, 2, 4, 6, 8]
let odd = [1,3,5,7,9]
let combined = [...even, ...odd]
console.log('combined:', combined)

/*output: combined: [
  0, 2, 4, 6, 8,
  1, 3, 5, 7, 9
] */

// Example 2: Creating a Shallow Copy with Additional Elements

let num = [0, 2, 4, 6, 8];
let combine = [...num,  1, 2, 3];
console.log("combined:", combine);

/*outpu: combined: [
  0, 2, 4, 6,
  8, 1, 2, 3
] */

// Destructuring with Spread in Function Parameters:

const person2 = { name: 'Alice', age: 25, city: 'London' };

// Destructuring with spread in function parameters
function printPersonDetails({ name, ...rest }) {
  console.log(`Name: ${name}`);
  console.log('Additional Details:', rest);
}

printPersonDetails(person2);
// Output:
// Name: Alice
// Additional Details: { age: 25, city: 'London' }



//...rest operator
/*The ...rest operator in JavaScript is used to collect the remaining arguments or elements into a single array or object. It allows you to handle a variable number of arguments or elements more flexibly. */

let obj = {a: 2, b: 3, c: 4, d: 5}
let objvalue = {a, b, ...all} = obj
console.log('a:', a)
console.log('all:', all)

/*
output
a: 2
all: { c: 4, d: 5 } */

//array in ...rest

let no = [1561,45,565,45]
let no1 = [f, ...alls] = no
console.log('f:', f)
console.log('alls:', alls)

/*
output
f: 1561
alls: [ 45, 565, 45 ] */


let name1 = "shivpal"
console.log('name:', ...name1) /*output: name: s h i v p a l */

let arr = [2,3,4,5,6,7]
console.log('arr:', ...arr) /*output: arr: 2 3 4 5 6 7*/


//array of object

let newobj = [
    { name: "shiv", age: "23" },
    { name: "nilesh", age: "25" },
    { name: "kuldeep", age: "27" },
];

console.log('newobj:', newobj[0])
console.log("newobj:", newobj[1]);
console.log("newobj:", newobj[2]);
/*output: newobj: { name: 'shiv', age: '23' }
newobj: { name: 'nilesh', age: '25' }
newobj: { name: 'kuldeep', age: '27' } */

