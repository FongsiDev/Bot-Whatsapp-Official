import { sticker5 } from "../../lib/sticker.js";
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
  let stiker = await sticker5(
    false,
    global.API(
      "ApiFgsi",
      "/api/maker/attp",
      { file: "", text: teks },
      "apikey"
    ),
    global.stickpack,
    global.stickauth
  );
  conn.sendFile(m.chat, sticker, "attp.webp", "", m, false, {
    asSticker: true,
  });
};
handler.help = ["attp <teks>"];
handler.tags = ["sticker"];

handler.command = /^attp$/i;

export default handler;
