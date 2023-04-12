import fs from "fs";
import moment from "moment-timezone";
import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
  if (!text) throw "[!] Masukkan teks.";
  let rules = `Cara gunakan pilih salah satu dari antara AI tersebut.
contoh; tanda ( ) adalah respon AI nya
  - !ai-old Apakabar ( Selamat pagi! ).
  - !ai-new Apakabar ( Saya baik-baik saja, terima kasih telah bertanya. Bagaimana kabar Anda? )
  - !ai-image Kucing ( kirim gambar kucing )

( click saja button di bawah ini )`;
  let nth = `☰⟥⟝⟞⟝❨ *AI My Bot* ❩⟞⟝⟞⟤☰`;
  conn.sendButton(
    m.chat,
    rules,
    author,
    null,
    [
      ["AI OLD", `!ai-old ${text}`],
      ["AI NEW", `!ai-new ${text}`],
      ["AI IMG", `!ai-image ${text}`][("AI INFORMATION", `!ai-info ${text}`)],
    ],
    m
  );
};
handler.help = ["ai", "openai"];
handler.tags = ["openai", "info"];
handler.command = /^(ai|openai)$/i;

export default handler;

function ucapan() {
  const time = moment.tz("Asia/Jakarta").format("HH");
  let res = "Selamat Malam";
  if (time >= 4) {
    res = "Selamat Pagi";
  }
  if (time >= 10) {
    res = "Selamat Siang";
  }
  if (time >= 15) {
    res = "Selamat Sore";
  }
  if (time >= 18) {
    res = "Selamat Malam";
  }
  return res;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
