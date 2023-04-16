import acrcloud from "acrcloud";
let acr = new acrcloud({
  host: "identify-ap-southeast-1.acrcloud.com",
  access_key: "10634091dc79ac56a964d3f5f3700641",
  access_secret: "G1lJlzvtKEi8k39mYxLFRbcyYHudBCFAQK7e6tdc",
});

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";
  if (/video|audio/.test(mime)) {
    let buffer = await q.download();
    await m.reply("_In progress, please wait..._");
    let { status, metadata } = await acr.identify(buffer);
    if (status.code !== 0) throw status.msg;
    let { title, artists, album, genres, release_date } = metadata.music[0];
    let txt = `*• Title:* ${title}${
      artists ? `\n*• Artists:* ${artists.map((v) => v.name).join(", ")}` : ""
    }`;
    txt += `${album ? `\n*• Album:* ${album.name}` : ""}${
      genres ? `\n*• Genres:* ${genres.map((v) => v.name).join(", ")}` : ""
    }\n`;
    txt += `*• Release Date:* ${release_date}`;
    m.reply(txt.trim());
  } else throw `Reply audio/video with command ${usedPrefix + command}`;
};
handler.help = handler.alias = ["whatmusic"];
handler.tags = ["tools"];
handler.command = /^(whatmusic)$/i;

export default handler;
