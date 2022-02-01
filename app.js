const express = require("express");
const fs = require("fs");
const qrcode = require("qrcode");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = 5000;
const open = require('open');

module.exports = (client) => {
  try {
    let lastqr = false;
    client.on("qr", (qr) => {
      qrcode.toDataURL(qr, function (err, url) {
        lastqr = url;
        io.emit("qr", lastqr);
      });
    });
    client.on("open", () => {
      io.emit("con", { jid: client.user.jid });
      lastqr = false;
    });
    client.on("close", () => io.emit("close", "IDLE"));
    io.on("connection", (socket) =>
      lastqr
        ? io.emit("qr", lastqr)
        : io.emit("con", { jid: client.user ? client.user.jid : false })
    );
    app.use(express.static("public"));
    server.listen(PORT, (err) => {
    	if (err) { 
    		console.log(err)
    		} else {
        console.log(`Server Running on Port ${PORT}`);
      	open(`http://localhost:${PORT}`, { app: "google chrome" })
      }
    });
  } catch {}
};