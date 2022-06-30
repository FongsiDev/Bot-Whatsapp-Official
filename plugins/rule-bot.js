import fetch from "node-fetch";
import db from "../lib/database.js";

let text = `
◈───〖 *RULES* 〗───◈
1. Tolong Gunakan Delay 5 Detik Untuk Menggukan BOT
2. Gunakan Dengan Bijak
3. Jangan Spam Command.


◈───〖 *SNK* 〗───◈
1. Data Whatsapp Anda Akan Kami Simpan Di Server Kami Selama BOT Aktif.
2. Data Anda Akan Di Hapus Ketika BOT OFFLINE
3. Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim
4. Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi
5. Jika Menemukan BUG/ERROR Silahkan Langsung Lapor Ke OWNER BOT!


◈───〖 *ATTENTION* 〗───◈
*KONSEKUENSI BILA MELANGGAR RULES*
- Bot Akan Memblokir Nomor Anda.
- Anda Tidak Akan Bisa Mengakses Bot Lagi.
- Mengeksploitasi Terhadap bot.
Sanksi: *PERMANENT BLOCK*
`;
let handler = async (m, { conn }) => {
  let pp = "https://i.gifer.com/VofE.gif";
  conn.sendHydrated(
    m.chat,
    text,
    author,
    pp,
    "https://github.com/FongsiDev",
    "Github",
    null,
    null,
    [
      ["Donate", "/donasi"],
      ["Speed", "/ping"],
      ["Owner", "/owner"],
    ],
    m
  );
};
handler.help = ["rules-bot"];
handler.tags = ["info"];

handler.command = /^(rules-bot|rules|info-bot)$/i;
export default handler;