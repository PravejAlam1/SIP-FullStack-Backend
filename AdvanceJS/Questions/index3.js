// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.


let nums = [1, 2, 3, 5, 6,8];

let Square = nums.map((nums) => nums * nums) ;

console.log(Square);
  

let sum = Square.reduce((acc, curr) => acc+ curr, 0);

  

let avg = sum / nums.length;


console.log(avg);


// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.


let number = [1, 8, 3, 4, 6, -9, -4];

// console.log(number.map((number) => number +5))

console.log(number.map((number) => number + 5))

// Qs3. Create a new array whose elements are in uppercase of words present in the  original array. 

let strings = ["baby", "monu", "saif", "karan", "tejamul"];

console.log(strings.map((man) => man.toUpperCase()))


// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled. 

const doubleAndReturnArg= (arr, ...args) => [
  ...arr,...args.map((v) => v*2),
];

doubleAndReturnArg([1, 2, 3], 4, 4);
doubleAndReturnArg([2], 10, 4);


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const margeObjects= (obj1, obj2) => ({ ...obj1, ...obj2});

margeObjects({a:1, b:2}, {c:3, d:4})