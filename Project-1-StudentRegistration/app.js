
const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

                                 
app.get("/submit", (req,res) => {

  const {
    studentName,
    fatherName,
    email,
    phone,
    age,
    course,
    city
  } = req.query;

  res.send(`
    <h1>Registration Successful</h1>

    <h1>Student Name: ${studentName}</h1>
    <h1>Father Name: ${fatherName}</h1>
    <h1>Email: ${email}</h1>
    <h1>Phone: ${phone}</h1>
    <h1>Age: ${age}</h1>
    <h1>Course: ${course}</h1>
    <h1>City: ${city}</h1>

    

    
    `);
});

app.listen(PORT, () => {
  console.log(`Server is runnin at http://localhost: ${PORT}`);
});