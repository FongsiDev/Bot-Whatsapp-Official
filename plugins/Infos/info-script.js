import fetch from "node-fetch";
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let pp = await conn.profilePictureUrl(m.chat).catch((_) => null);

  let str = `PENTING
Warning: Jangan Memperjual Belikan Script Ini.

a little about this bot
✔️ | Simple
❌ | Button Template
✔️ | Multi Device
❌ | Button Document(Experiment)
Some of the features include
✔️ | Menfess
✔️ | AntiCall
✔️ | Game & Rpg Game
✔️ | Nsfw
✔️ | Sticker
✔️ | Kerang Ajaib
✔️ | Quotes
✔️ | Anime
✔️ | Premium
✔️ | Tools
Link SC: https://github.com/FongsiDev/Bot-Whatsapp-Official
`;
  let wibu = `https://hadi-api.herokuapp.com/api/loli`;
  let thumb = await (await fetch(wibu)).buffer();
  conn.sendButton(m.chat, str, wm, [["ᴏᴋ", "Bilek"]], m, {
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: sig,
        title: "Bot-MultiDevice",
        body: "want source code?",
        thumbnail: thumb,
        sourceUrl: sig,
      },
    },
  });
};
handler.help = ["sc", "script"];
handler.tags = ["info", "main"];
handler.command = /^(script|sc)$/i;

export default handler;
