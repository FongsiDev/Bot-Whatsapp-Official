// Credits By https://github.com/Xnuvers007
import fs from "fs";
import fetch from "node-fetch";
import FormData from "form-data";

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw "ʀᴇᴘʟʏ ɢᴀᴍʙᴀʀɴʏᴀ ᴋᴀᴋ (～￣▽￣)～";
  let media = await q.download(true);
  await m.reply(global.wait);
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
  let form = new FormData();
  form.append("image", fs.createReadStream(media));
  let resp = await fetch("https://api.deepai.org/api/torch-srgan", {
    method: "POST",
    headers: {
      "api-key": "quickstart-QUdJIGlzIGNvbWluZy4uLi4K",
    },
    body: form,
  });
  let data = await resp.json();
  await conn.sendFile(
    m.chat,
    data.output_url,
    "hd.jpg",
    "ɪɴɪ ᴋᴀᴋ ʜᴀꜱɪʟɴʏᴀヾ(≧▽≦*)ᴏ",
    m
  );
};

handler.help = ["hd <caption|reply media>"];
handler.tags = ["tools"];
handler.command = /^(hd|jernih)$/i;

export default handler;