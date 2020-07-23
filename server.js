const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1> Server is up and running</h1>')
})

server.listen(3000, () => {
    console.log('Listening to port 3000!!')
})