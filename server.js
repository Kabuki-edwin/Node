const express = require('express')
const mongoose = require('mongoose')
const app = express()


//routes

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, my name is Edwin')
}) 

app.listen(3000, () => {
    console.log('Node API app is running on port 3000')
})

mongoose
.connect('mongodb+srv://Admin:fez.co134205<password>@fezapi.mowli0w.mongodb.net/Node-API?retryWrites=true&w=majority')