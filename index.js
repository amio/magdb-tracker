const Server = require('bittorrent-tracker').Server

const server = new Server({})

server.on('error', function (err) {
  // fatal server error!
  console.log(err.message)
})

server.on('warning', function (err) {
  // client sent bad data. probably not a problem, just a buggy client.
  console.log(err.message)
})

server.on('listening', function () {
  // fired when all requested servers are listening
  console.log('listening on http port:' + server.http.address().port)
  console.log('listening on udp port:' + server.udp.address().port)
})

// listen for individual tracker messages from peers:
server.on('start', function (addr) {
  console.log('got start message from ' + addr)
})

// start tracker server listening! Use 0 to listen on a random free port.
server.listen(8000, 'localhost', x => {
  console.log('Listen on ', 8000, x)
})
