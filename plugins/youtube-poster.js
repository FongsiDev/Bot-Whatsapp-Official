import fetch from "node-fetch";
import db from "../lib/database.js";
import { youtube_poster, isValidURL } from "../lib/poster-yt.js";

let handler = async (m, { conn, args }) => {
  db.data.ytposter = db.data.ytposter || {};
  if (!args || !args[0]) throw "Uhm... urlnya mana?";
  if (!isValidURL(args[0])) throw `uhm... ini bukan link channel (YT).`;
  if (!/(add|del|remove|hapus|tambah)/i.test(m.msg))
    throw "uhm... itu di hapus atau di tambah?";
  if (/(add|tambah)/i.test(m.msg)) {
    let yt = db.data.ytposter;
    let matchs = args[0].split("/")[args[0].split("/").length - 1];
    try {
      yt[m.key.remoteJid].channels.push(matchs)
    } catch (a) {
      yt[m.key.remoteJid] = {
        channels: [matchs],
        msg: null,
      };
    }
    m.reply("Done, telah di tambahkan channel yt ke group ini");
  } else if (/(remove|hapus)/i.test(m.msg)) {
    let yt = db.data.ytposter;
    let matchs = args[0].split("/")[args[0].split("/").length - 1];

    yt[m.key.remoteJid] = {
      channels: yt[m.key.remoteJid].slice(0, yt[m.key.remoteJid].length - 1),
      msg: null,
    };
    m.reply("Done, telah di hapuskan channel yt di group ini");
  }
};
handler.help = ["yt-poster"].map((v) => v + ` <url_channel>`);
handler.tags = ["group"];
handler.group = true;
handler.botAdmin = true;
handler.command = /^(yt-poster|poster-yt)$/i;

export default handler;