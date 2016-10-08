const express = require('express')
const http = require('http')
const RTCSwitchboard = require('rtc-switchboard')

const app = express()
const server = http.Server(app)

const PORT = parseInt(process.env.PORT) || 3000

app.get('/', (req, res) => {
  res.send('hello friend')
})

// start the server
server.listen(PORT, (err) => {
  if (err) {
    return console.log('Encountered error starting server: ', err)
  }

  console.log('Server running on port' + PORT)
});
