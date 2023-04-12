import { sticker } from "../../lib/sticker.js";
import { qouted } from "../../lib/stickerFuc.js";
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
  if (!text) throw `Masukan Text`;
  try {
    let username = await conn.getName(m.sender);
    let pp = await conn
      .profilePictureUrl(m.sender, "image")
      .catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
    let res = await qouted(text, username, pp);
    let stiker = await sticker(
      res.result,
      null,
      global.stickpack,
      global.stickauth
    );
    if (stiker) return conn.sendFile(m.chat, stiker, "sticker.webp", "", m);
    throw stiker.toString();
  } catch (e) {
    return throw Error(e);
  }
};
handler.help = ["qc <teks>"];
handler.tags = ["sticker"];

handler.command = /^qc$/i;

export default handler;
