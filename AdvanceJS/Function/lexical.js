let great = "Hello";

function changeGreat() {
  let great = "Namaste bro";
  console.log(great)

  function innerGreat() {
    console.log(great)

  }

  innerGreat()
}

console.log(great)
changeGreat()