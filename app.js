const express = require("express");
const app = express();
const qrcode = require("qrcode");
app.get("/", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Bot Online");
});
const listener = app.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});

