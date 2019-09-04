const webSocket = require("ws");

const wss = new webSocket.Server({ port: 3030 });

wss.on("connection", function connection(ws) {
  console.log("Wss Connection!");
  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === webSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
