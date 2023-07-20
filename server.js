const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog, My name is Fabiano')
})

/*Moved to mongoose.connect
app.listen(3000, ()=> {
    console.log(`Node API app is running on port 3000`)
})*/

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:admin@fabianoapi.k47xvj4.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})