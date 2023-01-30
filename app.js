const express = require('express');
const router = require("./src/routes/api");
const app = new express();
const bodyparser = require("body-parser");
const path = require('path');


//security middleware
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoSinitize = require('express-mongo-sanitize');

//database
const mongoose = require('mongoose');
app.use(express.static('client/build'));


//security middleware implement

app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSinitize());
app.use(helmet());

//bodyParser
app.use(bodyparser.json());


//ratelimiter
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 3000 });
app.use(limiter);

//database connection
let URI = "mongodb+srv://<username>:<password>@cluster0.paw2h7t.mongodb.net/CRUD?retryWrites=true&w=majority";
let OPTION = { user: "crud786", pass: "tanvir786", autoIndex: true };
mongoose.connect(URI, OPTION, (error) => {
    if (error) {
        console.log('connection failed')
    } else {
        console.log('connection success')
    }
})



app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
// app.use((req, res, next) => {
//     const allowedOrigins = [
//         'http://localhost:5000',
//         'https://bholabarassociation.com',
//         'http://192.168.0.110:5000',
//         'http://192.168.0.105:5000',
//         'http://localhost:3000',
//     ]
//     const origin = req.headers.origin || "";
//     if (allowedOrigins.includes(origin)) {
//         res.setHeader("Access-Control-Allow-Origin", origin);
//     }
//     res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     res.header("Access-Control-Allow-Credentials", "true");

//     if (req.method === "OPTIONS") {
//         return res.status(200).end();
//     }

//     return next();
// });

//manging backend routing
app.use('/api/v1', router)

module.exports = app;