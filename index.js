// Configure env variables
require('dotenv').config();

// Configure express server

const express = require('express');
const app = express();

// Middlewares
app.use(express.json()) // Parses JSON requests

// EJS engine
app.set('view engine', 'ejs'); // Sets the view engine to ejs
app.set('views', 'views'); // Sets the views directory to views


// Routes
const indexRouter = require('./routes/index.js')
app.use('/', indexRouter);

// Server listens to port 3000
app.listen(process.env.API_PORT || 5000, (err) => {
    if(err) {
        console.log('Express server failed to start', err.message)
        return;
    }

    console.log('Express server started')
})