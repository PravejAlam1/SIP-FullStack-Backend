const express = require("express")
const app = express();

app.get("/", (req,res) => {
  console.log("Request Aayi hai");

  console.log(req.query);

  res.send(`
    <h1> Hello ${req.query.name} </h1>
    <h2> City ${req.query.city} </h2>
    <h2> Age ${req.query.age} </h1>
    `);
});

app.listen(3001, () =>{
  console.log("Server is start");
});






// const express = require("express");
// const path = require("path");

// const app = express();

// const  PORT = 3000;


// app.use(express.static(path.join(__dirname, "public")));

// app.get("/submit", (req, res) => {
//   console.log(req.query);

//   const { username, city} = req.query;

//   res.send(`
//     <h1> Student Detail</h1>
//     <h2> Name: ${username}</h2>
//     <h2> City: ${city}</h2>
    
    
//     `);
// });

// app.listen(PORT, () =>{
//   console.log(`Server is running at ${PORT}`);
// });