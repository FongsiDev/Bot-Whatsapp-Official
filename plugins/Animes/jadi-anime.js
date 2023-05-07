import fetch from "node-fetch";
import uploadImage from "../../lib/uploadImage.js";
let handler = async (m, { conn }) => {
  let user =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let tagname = await conn.getName(user),
    qoutes = m.quoted ? m.quoted : m;
  let mimetype = (qoutes.msg || qoutes).mimetype || "";
  if (!mimetype) {
    throw "Kirim/Reply Gambar dengan caption .jadianime";
  }
  m.reply("Tunggu Pastikan Gambarnya Tidak Burik");
  let mediaDown = await qoutes.download(true),
    img = await uploadImage(mediaDown),
    file = "https://api.ibeng.tech/api/maker/anime?img=" + img + "&apikey=tamvan";
  console.log(file);
  await conn.sendButton(
    m.chat,
    "ANJAY " + tagname + " WIBU",
    "ʟᴀʀɪ ᴀᴅᴀ ᴡɪʙᴜ",
    file,
    [
      ["Menu", ".menu"],
      ["Donasi", ".donasi"],
    ],
    m
  );
};
handler.help = ["jadianime"];
handler.tags = ["anime"];
handler.command = /^(jadianime)$/i;
handler.limit = 3;
export default handler;

/*
import fetch from "node-fetch";
import uploadImage from "../../lib/uploadImage.js";
import { JadiAnime } from "jadianime-ts";
import { v4 as v4uuid } from "uuid";
import md5 from "md5";
import axios from "axios";
//const { v4: v4uuid } = uuid_;

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let name = await conn.getName(who);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw "Kirim/Reply Gambar dengan caption .jadianime";
  m.reply("ᴛᴜɴɢɢᴜ sᴇᴅᴀɴɢ ᴍᴇᴍᴜᴀᴛ ɢᴀᴍʙᴀʀ ᴡɪʙᴜ");
  let media = await q.download();
  let url = await uploadImage(media);
  async function toAnime() {
    try {
      jadianime(media).then((image) => {
        conn.sendFile(m.chat, image.img, "", `ANJAY ${name} WIBU`, m);
      });
    } catch (e) {
      throw e;
    }
  }
  return toAnime();
};
handler.help = ["jadianime"];
handler.tags = ["anime"];
handler.command = /^(jadianime)$/i;
handler.limit = 1;

export default handler;

async function jadianime(img) {
  const signV1 = (obj) => {
    const str = JSON.stringify(obj);
    return md5(
      "https://h5.tu.qq.com" +
        (str.length +
          (encodeURIComponent(str).match(/%[89ABab]/g)?.length || 0)) +
        "HQ31X02e"
    );
  };
  const imgData = await Buffer.from(img).toString("base64");
  const obj = {
    busiId: "different_dimension_me_img_entry",
    extra: JSON.stringify({
      face_rects: [],
      version: 2,
      platform: "web",
      data_report: {
        parent_trace_id: v4uuid(),
        root_channel: "",
        level: 0,
      },
    }),
    images: [imgData],
  };
  const sign = signV1(obj);

  const response = await axios.request({
    method: "POST",
    url: "https://ai.tu.qq.com/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process",
    data: obj,
    headers: {
      "Content-Type": "application/json",
      Origin: "https://h5.tu.qq.com",
      Referer: "https://h5.tu.qq.com/web/ai-2d/cartoon/index",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      "x-sign-value": sign,
      "x-sign-version": "v1",
    },
  });
  console.log(response.data);
  return response?.data ? response.data : null;
}
*/
