import moment from "moment-timezone";
import fs from "fs";
import fetch from "node-fetch";
import jimp from "jimp";
import PhoneNumber from "awesome-phonenumber";
let { MessageType } = (await import("@adiwajshing/baileys")).default;

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
  let tag = `@${m.sender.replace(/@.+/, "")}`;
  let mentionedJid = [m.sender];
  let ucpn = `${ucapan()}`;
  let name = conn.getName(m.sender);

  //tim
  let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss");
  let wibh = moment.tz("Asia/Jakarta").format("HH");
  let wibm = moment.tz("Asia/Jakarta").format("mm");
  let wibs = moment.tz("Asia/Jakarta").format("ss");
  let wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
  let wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
  let wktuwib = `${wibh} H ${wibm} M ${wibs} S`;

  let d = new Date(new Date() + 3600000);
  let locale = "id";
  // d.getTimeZoneOffset()
  // Offset -420 is 18.00
  // Offsetalldiii0 is  0.00
  // Offset  420 is  7.00
  let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
    Math.floor(d / 84600000) % 5
  ];
  let week = d.toLocaleDateString(locale, { weekday: "long" });
  let date = d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //==============> Menu nya
  let intro = `*BOT* *BKN* _Adalah Progam komputer yang dijalankan di WhatsApp yang khusus dibuat untuk melakukan pekerjaan-pekerjaan otomatis, Bot WhatsApp dirancang sedemikian rupa sehingga dapat di gunakan dengan nyaman dan kemungkinan memiliki sedikit bug, Ada fitur dari bot WhatsApp ini tentu akan membantu anda untuk bersenang senang, DLL_`;
  conn.send3ButtonDoc(
    m.chat,
    `\n\n     *『 INTROCADUTION 』*\n\n`,
    intro + `\n\n${tag}\n\n`,
    "Aʟʟ Mᴇɴᴜ",
    ".menu2 all",
    "Lɪsᴛ Mᴇɴᴜ",
    ".menu2",
    "\nAku bedo 🗿",
    "bilek",
    m,
    {
      contextInfo: {
        forwardingScore: fsizedoc,
        externalAdReply: {
          body: "Subscribe Channel Saya :v",
          containsAutoReply: true,
          mediaType: 1,
          mediaUrl: fla + "Menu",
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceId: "Subscribe Channel Saya",
          sourceType: "PDF",
          previewType: "PDF",
          sourceUrl: syt,
          thumbnail: await (await fetch(thumb)).buffer(),
          thumbnailUrl: syt,
          title: "INTROCADUTION",
        },
      },
    }
  );
};

handler.help = ["menu"];
handler.tags = ["main"];
handler.command = /^(menu|help|co)$/i;
handler.register = false;

export default handler;

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, " H ", m, " M ", s, " S "]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10;
  let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12;
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30;
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    ye,
    " *Years 🗓️*\n",
    mo,
    " *Month 🌙*\n",
    d,
    " *Days ☀️*\n",
    h,
    " *Hours 🕐*\n",
    m,
    " *Minute ⏰*\n",
    s,
    " *Second ⏱️*",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}

function ucapan() {
  const time = moment.tz("Asia/Jakarta").format("HH");
  let res = "Kok Belum Tidur Kak? 🥱";
  if (time >= 4) {
    res = "Pagi Lord 🌄";
  }
  if (time >= 10) {
    res = "Siang Lord ☀️";
  }
  if (time >= 15) {
    res = "Sore Lord 🌇";
  }
  if (time >= 18) {
    res = "Malam Lord 🌙";
  }
  return res;
}

function wish() {
  let wishloc = "";
  const time = moment.tz("Asia/Kolkata").format("HH");
  wishloc = "Hi";
  if (time >= 0) {
    wishloc = "Night Rider";
  }
  if (time >= 4) {
    wishloc = "Good Morning";
  }
  if (time >= 12) {
    wishloc = "Good Afternoon";
  }
  if (time >= 16) {
    wishloc = "️Good Evening";
  }
  if (time >= 23) {
    wishloc = "Night Rider";
  }
  return wishloc;
};
