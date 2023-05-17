// Credits By https://github.com/FongsiDev
import { processing } from "../../lib/scrape.js";
import uploadImage from "../../lib/uploadImage.js";
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw "ʀᴇᴘʟʏ ɢᴀᴍʙᴀʀɴʏᴀ ᴋᴀᴋ (～￣▽￣)～";
  let media = await q.download(true);
  await m.reply(global.wait);
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
  let data = await processing(media, "enhance");
  let url = await uploadImage((await conn.getFile(data, true)).filename);
  await conn.sendFile(
    m.chat,
    data,
    "hd.jpg",
    `ɪɴɪ ᴋᴀᴋ ʜᴀꜱɪʟɴʏᴀヾ(≧▽≦*)ᴏ\nLink: ${url}`,
    m
  );
};

handler.help = ["hd <caption|reply media>"];
handler.tags = ["tools"];
handler.command = /^(hd|jernih|hdr)$/i;

export default handler;
