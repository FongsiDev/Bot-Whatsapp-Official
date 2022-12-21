/**
 * Jangan Di Hapus!!
 *
 * Buatan Zenss
 * Github: https://github.com/RaaaGH
 *
 *
 *
 * Gatau Males Pengen Beli Truk
 *GW TAU GW KASI WM NNTI JUGA DI HAPUS 🗿🤟
 *
 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
  conn.menfess = conn.menfess ? conn.menfess : {};
  if (!text)
    throw `*Cara penggunaan :*\n\n${
      usedPrefix + command
    } nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${
      usedPrefix + command
    } ${m.sender.split`@`[0]}|Nama|Halo.\n\n「 𝙰𝚕𝚋𝚎𝚍𝚘-𝙱𝙾𝚃  」`;
  let [jid, name, pesan] = text.split("|");
  if (!jid || !name || !pesan)
    throw `*Cara penggunaan :*\n\n${
      usedPrefix + command
    } nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${
      usedPrefix + command
    } ${m.sender.split`@`[0]}|Bapakmu|Halo.\n\n「 𝙰𝚕𝚋𝚎𝚍𝚘-𝙱𝙾𝚃 」`;
  jid = jid.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  let data = (await conn.onWhatsApp(jid))[0] || {};
  if (!data.exists) throw "Nomer tidak terdaftar di whatsapp.";
  if (jid == m.sender)
    throw "tidak bisa mengirim pesan menfess ke diri sendiri.";
  let mf = Object.values(conn.menfess).find((mf) => mf.status === true);
  if (mf) return !0;
  try {
    let id = +new Date();
    let txt = `Hai @${
      data.jid.split("@")[0]
    }, kamu menerima pesan Menfess nih.\n\nDari: *${name}*\nPesan: \n${pesan}\n\nMau balas pesan ini kak? bisa kak. kakak tinggal ketik pesan kakak nanti saya sampaikan ke *${name}*.`.trim();
    await conn
      .sendButton(
        data.jid,
        txt,
        wm,
        0,
        [["Balas Pesan", ".balasmenfess"]],
        null
      )
      .then(() => {
        m.reply("Berhasil mengirim pesan menfess.");
        conn.menfess[id] = {
          id,
          dari: m.sender,
          nama: name,
          penerima: data.jid,
          pesan: pesan,
          status: false,
        };
        return !0;
      });
  } catch (e) {
    console.log(e);
    m.reply("eror");
  }
};
handler.tags = ["menbalas"];
handler.help = ["menfes"].map((v) => v + " <nomor|nama|pesan>");
handler.command = /^(confes|menfes)$/i;
handler.private = true;

export default handler;
