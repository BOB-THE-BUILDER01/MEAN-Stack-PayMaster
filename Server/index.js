const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongodb = 'mongodb://localhost/PaymasterDB';

mongoose.connect(mongodb, { useNewUrlParser: true })
const con = mongoose.connection;

con.on('open', (req,res)=>{
    console.log('Welcome to the Matrix...');
})

app.use(express.json())

const routes = require('./routes/routes.js')
app.use('/', routes)

app.listen(6969,()=>{
    console.log("Server Started")
})