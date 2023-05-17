import express from "express";
import mongoose from "mongoose";

const app = express()
const url = 'mongodb://localhost:27017/fezapi';


//routes

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, my name is Edwin')
}) 

/* mongodb+srv://Admin:fez.co134205<password>@fezapi.mowli0w.mongodb.net/Node-API?retryWrites=true&w=majority*/

mongoose
.connect(
    url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log('Node API app is running on port 3000')
    });
}).catch((error) => {
    console.log('Error connecting to MongODB' , error)
})