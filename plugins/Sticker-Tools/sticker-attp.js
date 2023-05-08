import { sticker5 } from "../../lib/sticker.js";
import uploadImage from "../../lib/uploadImage.js";
import fs from "fs";
import fetch from "node-fetch";
import { createSticker } from "wa-sticker-formatter";

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  text = text
    ? text
    : m.quoted && m.quoted.text
    ? m.quoted.text
    : m.quoted && m.quoted.caption
    ? m.quoted.caption
    : m.quoted && m.quoted.description
    ? m.quoted.description
    : "";
  if (!text) throw `Example : ${usedPrefix + command} Lagi Gabut :v`;
  const res = `https://api.lolhuman.xyz/api/${command}?apikey=${
    global.lolkey
  }&text=${encodeURIComponent(text.substring(0, 151))}`;
  const res2 = `https://xteam.xyz/attp?file&text=${encodeURIComponent(
    text.substring(0, 151)
  )}`;
  let stick;
  try {
    if (command == "attp") {
      stick = res;
    } else if (command == "attp2") {
      let url = await fetch(
        global.API("https://salism3api.pythonanywhere.com", "/text2gif/", {
          text: text,
        })
      );
      let res = await url.json();
      stick = res.image;
    } else if (command == "ttp7") {
      let url = await fetch(
        global.API("https://salism3api.pythonanywhere.com", "/text2img/", {
          text: text,
        })
      );
      let res = await url.json();
      stick = res.image;
    } else if (command == "ttp8") {
      let url = await fetch(
        global.API("https://salism3api.pythonanywhere.com", "/text2img/", {
          text: text,
          outlineColor: "255,0,0,255",
          textColor: "0,0,0,255",
        })
      );
      let res = await url.json();
      stick = res.image;
    } else if (command == "attp3") {
      stick = res2;
    } else {
      stick = res;
    }
    let stiker = await createSticker(stick, {
      pack: global.stickpack,
      author: global.stickauth,
    });
    conn.reply(m.chat, stiker, m, {
      asSticker: true,
    });
  } catch (e) {
    console.log(e);
    throw eror;
  }
};
handler.help = ["ttp", "ttp2 -> ttp8", "attp", "attp2", "attp3"];
handler.tags = ["sticker"];
handler.command = /^((ttp(2|3|4|5|6|7|8)?)|(attp(2|3)?))$/i;
handler.limit = true;
export default handler;
