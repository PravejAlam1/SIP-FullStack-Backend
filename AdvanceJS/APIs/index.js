// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//   console.log(res);
// })

// .catch((err) => {
//   console.log("Error: ", err);
// });



// async function getFact() {
  
//   try {

//   let res = await fetch(url);
//   let data = await res.json();

//   console.log(data.fact);

//   let res2 = await fetch(url);
//   let data2 = await res.json();
//   console.log(data2.fact)

//   } catch(err) {
//     console.log("Code Error: ", err)
//   }

//   console.log("bayee")

  
// }


//=====axios=====//

// let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
  let link = await getImage();
  let img = document.querySelector("#result");
  img.setAttribute("src", link);

  console.log(link);


});

async function getImage() {
  try {
  let res = await axios.get(url2);
  return res.data.message;

  } catch(err) {
    console.log("Code Error -", err)
    return "/";
  } 
}



//====Metod 1   ====

// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {

//   let fact = await getFacts();
//   console.log(fact);

//   let p = document.querySelector("#result");

//   p.innerText = fact;
// });

// async function getFacts() {
//   try {
//   let res = await axios.get(url);
//   return res.data.fact;

//   } catch(err) {
//     console.log("Code Error: ", err)
//     return "No fact found";
//   } 
// }

