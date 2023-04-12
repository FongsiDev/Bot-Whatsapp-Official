import { sticker } from "../../lib/sticker.js";
import { ttp } from "../../lib/stickerFuc.js";
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
  if (!text) throw `Masukan Text`;
  let res = await ttp(text);
  let stiker = await sticker(
    null,
    res.result,
    global.stickpack,
    global.stickauth
  );
  if (stiker) return conn.sendFile(m.chat, stiker, "sticker.webp", "", m);
  throw stiker.toString();
};
handler.help = ["ttp <teks>"];
handler.tags = ["sticker"];

handler.command = /^ttp$/i;

export default handler;
