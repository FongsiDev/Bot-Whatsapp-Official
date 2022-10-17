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
      regex = /x/g;
    if (!q) return res.send("Input Parameter Number Parameter");
    if (!q.match(regex))
      return res.send('Parameter Number Must Fill With One Letter "x"');
    let random = q.match(regex).length,
      total = Math.pow(10, random),
      array = [];
    for (let i = 0; i < total; i++) {
      let list = [...i.toString().padStart(random, "0")];
      let result = q.replace(regex, () => list.shift()) + "@s.whatsapp.net";
      if (await conn.onWhatsApp(result).then((v) => (v[0] || {}).exists)) {
        let info = await conn.fetchStatus(result).catch((_) => {});
        array.push({ jid: result, exists: true, ...info });
      } else {
        array.push({ jid: result, exists: false });
      }
    }
    res.json({ result: array });
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
