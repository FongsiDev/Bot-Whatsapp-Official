let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `kalo kamu ada keluhan tentang bug/eror atau lainya klik\n\nCustomer Service\n📮Klik link berikut: https://s.id/1awyu`;
  if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`;
  if (text.length > 1000)
    throw `Laporan terlalu panjang, maksimal 1000 karakter!`;
  let teks = `*${command.toUpperCase()}!*\n\nDari : *@${
    m.sender.split`@`[0]
  }*\n\nPesan : ${text}\n`;
  conn.reply(
    global.nomorown + "@s.whatsapp.net",
    m.quoted ? teks + m.quoted.text : teks,
    null,
    {
      contextInfo: {
        mentionedJid: [m.sender],
      },
    }
  );
  m.reply(
    `'_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi.\n\nJangan lupa cek info di https://fangzbot.websites.co.in/'_`
  );
};
handler.help = ["report", "request"].map((v) => v + " <teks>");
handler.tags = ["info"];
handler.private = true;
handler.command = /^(report|request)$/i;
export default handler;
