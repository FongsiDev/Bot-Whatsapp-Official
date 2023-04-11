import fetch from "node-fetch";
import fs from "fs";
import glob from "glob";
let handler = async (
  m,
  { conn, groupMetadata, usedPrefix, text, args, isOwner, command }
) => {
  let frep = {
    contextInfo: {
      externalAdReply: {
        title: global.wm,
        body: global.author,
        sourceUrl: snh,
        thumbnail: fs.readFileSync("./thumbnail.jpg"),
      },
    },
  };
  let fdoc = {
    quoted: {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: `${command}` } },
    },
  };
  // let imgr = flaaa.getRandom()
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let pp = await conn.profilePictureUrl(who).catch((_) => hoppai.getRandom());
  const listPlugins = Object.keys(global.plugins).map((v) =>
    v.replace(/^.*[\\\/]/, "").replace(/\.js/, "")
  );
  if (command == "savefile") {
    if (!text)
      throw `where is the path?\n\nexample:\n${usedPrefix + command} menu`;
    if (!listPlugins.includes(text)) {
      return m.reply(`'${text}' not found!`);
    }
    if (!m.quoted.text) throw `reply code`;
    const path = glob.sync(`./plugins/**/${text}.js`);
    await fs.writeFileSync(path[0], m.quoted.text);
    m.reply(`Saved ${path[0]} to file!`);
  }
  if (command == "openfile") {
    if (!text)
      throw `where is the path?\n\nexample:\n${usedPrefix + command} menu`;
    if (!listPlugins.includes(text)) {
      return m.reply(`'${text}' not found!`);
    }
    const path = glob.sync(`./plugins/**/${text}.js`);
    let pile = await fs.readFileSync(path[0], "utf8");
    //await conn.sendFile(m.chat, pile, "", "Nihh,?", m);
    await m.reply(pile);
  }
  if (command == "removefile") {
    if (!text)
      throw `where is the path?\n\nexample:\n${usedPrefix + command} menu`;
    if (!listPlugins.includes(text)) {
      return m.reply(`'${text}' not found!`);
    }
    const path = glob.sync(`./plugins/**/${text}.js`);
    await fs.unlinkSync(path[0]);
    m.reply(`Delete ${path[0]} to file!`);
  }
  if (command == "tesfake") {
    if (args[0] == "aud") {
      await conn.sendMessage(
        m.chat,
        {
          audio: {
            url: "http://www.myinstants.com/media/sounds/run-vine-sound-effect.mp3",
          },
          fileLength: fsizedoc,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              mediaUrl: "https://www.facebook.com",
              mediaType: 2,
              previewType: "pdf",
              title: "👋 Nihhh, ",
              body: "Role ",
              thumbnail: await (await fetch(pp)).buffer(),
              sourceUrl: gcwangsaf,
            },
          },
        },
        { quoted: fgif }
      );
    }
    if (args[0] == "vid") {
      await conn.sendMessage(
        m.chat,
        {
          video: { url: "https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4" },
          fileLength: fsizedoc,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              mediaUrl: "https://www.facebook.com",
              mediaType: 2,
              previewType: "pdf",
              title: "👋 Nihhh, ",
              body: "Role ",
              thumbnail: await (await fetch(pp)).buffer(),
              sourceUrl: gcwangsaf,
            },
          },
        },
        { quoted: fgif }
      );
    }
    if (args[0] == "doc") {
      await conn.sendMessage(
        m.chat,
        {
          document: {
            url: "http://www.myinstants.com/media/sounds/run-vine-sound-effect.mp3",
          },
          fileName: wm,
          fileLength: fsizedoc,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              mediaUrl: "https://www.facebook.com",
              mediaType: 2,
              previewType: "pdf",
              title: "👋 Nihhh, ",
              body: "Role ",
              thumbnail: await (await fetch(pp)).buffer(),
              sourceUrl: gcwangsaf,
            },
          },
        },
        { quoted: fgif }
      );
    }
  }

  if (command == "cekfake") {
    let frnya = [
      "ftroli",
      "fkontak",
      "fvn",
      "floc",
      "ftoko",
      "fdocs",
      "fgclink",
      "fgif",
      "fvid",
    ];
    if (!args[0]) return m.reply(Array.from(frnya));
    if (args[0] == "ftroli") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: ftroli }
      );
    }
    if (args[0] == "fkontak") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: fkontak }
      );
    }
    if (args[0] == "fvn") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: fvn }
      );
    }
    if (args[0] == "floc") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: floc }
      );
    }
    if (args[0] == "ftoko") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: ftoko }
      );
    }
    if (args[0] == "fdocs") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: fdocs }
      );
    }
    if (args[0] == "fgclink") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: fgclink }
      );
    }
    if (args[0] == "fgif") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: fgif }
      );
    }
    if (args[0] == "fvid") {
      await conn.sendButton(
        m.chat,
        `Fake ${args[0]}`,
        wm,
        null,
        [["Ok!", `${usedPrefix + command}`]],
        m,
        { quoted: fvid }
      );
    }
  }
};
handler.command = handler.help = [
  "savefile",
  "cekfake",
  "tesfake",
  "openfile",
  "removefile",
];
handler.tags = ["owner"];
handler.owner = true;

export default handler;
