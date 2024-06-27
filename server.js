require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5002;
const DBURL = process.env.DBURL;
const route = require('./routes/routes');

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', route);

app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

const db = async ()=> {
    try {
        await mongoose.connect(DBURL);
        // Start server
        app.listen(PORT, () => {
            console.log(`The Server is running at http://localhost:${PORT}`);
        });
        console.log("MongoDB Server is Connected");
    } catch (error) {
        console.log("Samthing is wrong in MongoDB")
    }
}

db()

