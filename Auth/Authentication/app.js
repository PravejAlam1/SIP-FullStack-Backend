const express = require('express');
const app = express();
// const PORT = 8000;
const PORT = process.env.PORT || 8000;
const path = require('path')
const mongoose = require('hbs');
const mongoose = require('expess-session');
const mongoose = require('dotenv');

dotenv.config();

const connectDB = require("./config/db")


// app.set('view engine', 'hbs');
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(session({
//     secret: 'kjdskjkjd',
//     resave: false,
//     saveUninitialized: true
// }))


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})