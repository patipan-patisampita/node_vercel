//Add express
const express = require('express')
const port = 5000

//Initialize express
const app = express()

//Create get request
app.use('/', (req, res) => {
    res.send("Express with vercel")
})

//Initpalze server
app.listen(port, (req, res) => {
    console.log(`Starting Server at http://localhost:${port}`)
})

// Export the Express API
module.exports = app;