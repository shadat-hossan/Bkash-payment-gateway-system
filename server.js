require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser"); 

const PORT = process.env.PORT || 5001;

const route = require("./routes/routes")

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(bodyParser.json())

app.use("api/", route);

app.get("/", (req, res)=>{
    res.send("Welcome to Home Page")
})


app.listen(PORT, ()=>{
    console.log(`The Server is runing at http://localhost:${PORT}`);
})