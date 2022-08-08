//
let { MessageType } = (await import("@adiwajshing/baileys")).default;
import { sticker } from "../lib/sticker.js";
let handler = async (m, { conn, args }) => {
  let stiker = false;
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    if (/image|video/.test(mime)) {
      let img = await q.download();
      if (!img) throw "Reply stiker nya!";
      stiker = await sticker(img, false, "🍀", "📮 • Yt :\n⤷ FANGZ BOT");
    } else if (args[0])
      stiker = await sticker(false, args[0], "🍀", "📮 • Yt :\n⤷ FANGZ BOT");
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, "sticker.webp", "", m);
    else throw "Mana foto/Video nya?";
  }
};
handler.help = ["sticker"];
handler.tags = ["sticker"];
handler.command = /^s(tic?ker)?(gif)?$/i;
handler.owner = false;
handler.limit = false;
handler.register = true;

export default handler;
