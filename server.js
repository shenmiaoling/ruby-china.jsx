const express = require('express')
const server = express()

server.use('/assets', express.static('assets'))

server.get('*', (request, response) => {
  response.sendFile(`${__dirname}/index.html`)
})

server.listen(3000, () => {})
