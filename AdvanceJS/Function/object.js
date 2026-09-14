// var person= {
//   Fname: "Parvez",
//   Lname: "Khan",

//   age: 23,
//   isMarried: false,
//   city: "Bihar",
//   skills: ["HTML", "CSS", "JS", "React"]
// }

// console.log(person);   //== first way to print object
// console.log(person.Fname);    //== second way to print specific property


//========2====

var person= {
  Fname: "Parvez",
  Lname: "Khan",

  age: 23,
  isMarried: false,
  city: {
    name: "Bihar",
    location: "East Champaran",
    places: {
      place1: "Rohtash",
      place2: "balmiki nagar",
    },

  },
  skills: ["HTML", "CSS", "JS", "React"],
}

// console.log(person);   //== first way to print object

console.log(person.city.places.place2);    //== second way to print specific property

