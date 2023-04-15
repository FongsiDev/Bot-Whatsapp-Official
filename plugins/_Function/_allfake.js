import l from "fs";
import A from "node-fetch";
import E from "moment-timezone";
import PhoneNumber from "awesome-phonenumber";
let handler = (g) => g;
handler.all = async function (g) {
  global.www = null;
  let t = await conn.getName(g.sender),
    W = ["Hai", "Ohayo", "Kyaa", "Halo", "Nyann"],
    p = "https://telegra.ph/file/24fa902ead26340f3df2c.png";
  try {
    p = await this.profilePictureUrl(g.sender, "image");
  } catch (F) {
  } finally {
    global.doc = pickRandom([
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/msword",
      "application/pdf",
    ]);
    global.fetch = import("node-fetch");
    global.bochil = import("@bochilteam/scraper");
    const z = process.uptime() * 1000;
    global.kontak2 = [
      [
        owner[0],
        await this.getName(owner[0] + "@s.whatsapp.net"),
        "ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ",
        "booewa@gmail.com",
        true,
      ],
      [
        owner[1],
        await this.getName(owner[1] + "@s.whatsapp.net"),
        "ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ",
        "FokusDotId13@gmail.com",
        true,
      ],
    ];
    global.ucapan = ucapan();
    global.ephemeral = "86400";
    let j = await conn.resize(hwaifu.getRandom(), 300, 150);
    global.terkadang = j;
    global.adReply = {
      contextInfo: {
        forwardingScore: 9999,
        externalAdReply: {
          showAdAttribution: true,
          title: global.ucapan,
          body: "Hallo " + t,
          mediaUrl: sgc,
          description: "simple bot esm",
          previewType: "PHOTO",
          thumbnail: await (await A(p)).buffer(),
          sourceUrl: sgh,
        },
      },
    };
    global.fakeig = {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaUrl: sig,
          mediaType: "VIDEO",
          description: sig,
          title: "★BKN BOT BY BLUECKKN★",
          body: wm,
          thumbnailUrl: p,
          sourceUrl: sgc,
        },
      },
    };
    global.ftroli = {
      key: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
      },
      message: {
        orderMessage: {
          itemCount: 1e55,
          status: 1,
          surface: 1,
          message: wm,
          orderTitle: wm,
          sellerJid: "0@s.whatsapp.net",
        },
      },
    };
    global.fkontak = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(g.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        contactMessage: {
          displayName: wm,
          vcard: `
BEGIN:VCARD
VERSION:3.0
N:XL;${wm};;;
FN:${wm}
item1.TEL;waid=${nomorown}:${PhoneNumber("+" + nomorown).getNumber(
            "international"
          )}
item1.X-ABLabel:Ponsel
END:VCARD`.trim(),
          jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
          thumbnail: l.readFileSync("./thumbnail.jpg"),
          sendEphemeral: true,
        },
      },
    };
    global.fvn = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(g.chat ? { remoteJid: "6282127487538-1625305606@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999999999,
          ptt: true,
        },
      },
    };
    global.fimage = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(g.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          title: wm,
          h: wm,
          seconds: "359996400",
          caption: wm,
          jpegThumbnail: await conn.resize(
            l.readFileSync("./thumbnail.jpg"),
            150,
            150
          ),
        },
      },
    };
    global.ftextt = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(g.chat ? { remoteJid: "6282127487538-1625305606@g.us" } : {}),
      },
      message: {
        extendedTextMessage: {
          text: wm,
          title: wm,
          jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
        },
      },
    };
    global.fliveLoc = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(g.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        liveLocationMessage: {
          caption: "BY BLUECKKN",
          h: "" + wm,
          jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
        },
      },
    };
    global.fliveLoc2 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(g.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        liveLocationMessage: {
          title: "BY BLUECKKN",
          h: wm,
          jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
        },
      },
    };
    global.ftoko = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(g.chat ? { remoteJid: "6282127487538@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
            },
            title: wm,
            description: "Simple Bot Esm",
            currencyCode: "USD",
            priceAmount1000: "20000000",
            retailerId: "Ghost",
            productImageCount: 1,
          },
          businessOwnerJid: "0@s.whatsapp.net",
        },
      },
    };
    global.fdocs = {
      key: { participant: "0@s.whatsapp.net" },
      message: {
        documentMessage: {
          title: wm,
          jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
        },
      },
    };
    global.fgclink = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        groupInviteMessage: {
          groupJid: "6282127487538-1625305606@g.us",
          inviteCode: "null",
          groupName: "BLUECKKN",
          caption: wm,
          jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
        },
      },
    };
    global.fgif = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(g.chat ? { remoteJid: "6282127487538-1625305606@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: wm,
          h: "Hmm",
          seconds: "999999999",
          gifPlayback: "true",
          caption: wm,
          jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
        },
      },
    };
    global.fvid = {
      key: { participant: "0@s.whatsapp.net" },
      message: {
        videoMessage: {
          title: wm,
          h: "Hmm",
          seconds: 999999999999,
          caption: "👋 " + W.getRandom() + " Kak :> " + t,
          jpegThumbnail: l.readFileSync("./thumbnail.jpg"),
        },
      },
    };
    global.fpoll = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        pollCreationMessage: { name: "👋 Hay Kak :> " + t },
      },
    };
    global.fpayment = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: "BAE595C600522C9C",
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: wm,
          amount1000: fsizedoc,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: { extendedTextMessage: { text: "Hai Kak " + t } },
          expiryTimestamp: fsizedoc,
          amount: {
            value: fsizedoc,
            offset: fsizedoc,
            currencyCode: wm,
          },
        },
      },
    };
    let h = [
      global.ftroli,
      global.fkontak,
      global.fpayment,
      global.fvn,
      global.fimage,
      global.ftextt,
      global.fliveLoc,
      global.fliveLoc2,
      global.ftoko,
      global.fdocs,
      global.fgclink,
      global.fgif,
      global.fvid,
      global.fpoll,
    ];
    global.fakes = h.getRandom();
  }
};
export default handler;
function ucapan() {
  const g = E.tz("Asia/Jakarta").format("HH");
  let t = "Selamat malam 🌙";
  g >= 4 && (t = "Selamat pagi 🌄");
  g > 10 && (t = "Selamat siang ☀️");
  g >= 15 && (t = "Selamat sore 🌅");
  g >= 18 && (t = "Selamat malam 🌙");
  return t;
}
function pickRandom(g) {
  return g[Math.floor(g.length * Math.random())];
}
