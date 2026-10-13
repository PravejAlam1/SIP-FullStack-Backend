function sum(num) {
  let sum = 0;

  for(let i = 0; i <num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sum(9))


//second question

let str = ["Hello", "Parvati", "Bye", "!"];

function concat(str) {
  let result = "";
  for(let i =0; i<str.length; i++) {
    result += str[i];
  }
  return result;
}

 console.log( concat(str))