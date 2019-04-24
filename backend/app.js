const webSocket = require('ws')

const wss = new webSocket.Server({ port: 3030 })

wss.on('connection', (ws) => {
   ws.on('message', (data) => {
      wss.clients.forEach ((client) => {
         client.send(data)
      })
   })
})