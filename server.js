const express = require('express')
const http = require('http')

const RTCSwitchboard = require('./rtc-switchboard')

const app = express()
const server = http.Server(app)
const switchboard = RTCSwitchboard(server)

const PORT = parseInt(process.env.PORT) || 5000

app.get('/', (req, res) => {
  res.send('hello friend')
})

switchboard.on('room:exit', function(payload) {
  // inform each room member of the exit
  payload.room.members.forEach(member => {
    member.emit('data', `/peerleave|${payload.peer.id}`)
  })
});

// start the server
server.listen(PORT, (err) => {
  if (err) {
    return console.log('Encountered error starting server: ', err)
  }

  console.log('Server running on port ' + PORT)
});
