import fs from "fs";
import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix: _p }) => {
  let info = fs.readFileSync("./mp3/soundultah.mp3");

  let td =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  conn.reply(
    m.chat,
    info,
    m,
    { quoted: fkontak },
    {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaUrl: global.syt,
          mediaType: 2,
          description: global.syt,
          title: "bot-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ",
          body: wm,
          thumbnail: thumb,
          sourceUrl: sig,
        },
      },
    }
  );
};
handler.command = ["soundultah"];
handler.help = ["soundultah"];
handler.tags = ["sounds"];
export default handler;
