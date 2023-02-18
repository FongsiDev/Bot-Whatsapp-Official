import express from "express";
import fetch from "node-fetch";
import { createServer } from "http";
import { toBuffer } from "qrcode";
let app = (global.app = express());
console.log(app);
let server = (global.server = createServer(app));

function connect(PORT, conn) {
  let _qr = "invalid";

  conn.ev.on("connection.update", function appQR({ qr }) {
    if (qr) _qr = qr;
  });

  app.get("/", (req, res) => res.send("Hello World!"));

  app.get("/scan", async (req, res) => {
    res.setHeader("content-type", "image/png");
    res.end(await toBuffer(_qr));
  });
  app.get("/nowa", async (req, res) => {
    let q = req.query.number,
      msg = req.query.msg,
      regex = /x/g;
    if (!q) return res.send("Input Parameter Number Parameter");
    if (!msg) return res.send("Input Parameter Message");
    conn.sendMessage(q.replace(/[^0-9]/g, "") + "@s.whatsapp.net", {
      text: msg,
    });
    res.json({ status: 200 });
  });

  server.listen(PORT, () => {
    keepAlive();
    console.log("App listened on port", PORT);
  });
}

function keepAlive() {
  let url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
  if (/(\/\/|\.)undefined\./.test(url)) return;
  setInterval(() => {
    fetch(url).catch(console.log);
  }, 5 * 1000 * 60);
}

function formatDate(n, locale = "id") {
  let d = new Date(n);
  return d.toLocaleDateString(locale, { timeZone: "Asia/Jakarta" });
}

export default connect;
