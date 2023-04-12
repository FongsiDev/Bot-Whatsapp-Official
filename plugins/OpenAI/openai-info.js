import fs from "fs";
import moment from "moment-timezone";
import fetch from "node-fetch";
let voice_ai = fs.readFileSync("./mp3/ai-voice.ogg");
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
  if (!text) throw "[!] Masukkan teks.";
  let tag = `@${m.sender.replace(/@.+/, "")}`;
  let mentionedJid = [m.sender];
  let name = conn.getName(m.sender);
  await m.reply(`*_Tunggu Sabar Ya @${m.sender.split(`@`)[0]}..._*`);
  let esce = `text nya `;
  let flaaa2 = [
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
  ];
  let rules = `➯ *AI Terbaru*
 _Semua di fix dan di ganti agar lebih sempurna_

• *AI:*
- Apa itu AI??
_AI atau Artificial Intelligence adalah teknologi komputer yang bertujuan untuk membuat komputer dapat berperilaku seperti manusia, termasuk dalam hal pengambilan keputusan, pemrosesan informasi, dan tindakan yang diambil dalam situasi tertentu. AI diprogram untuk belajar dari pengalaman dan datanya sendiri, membuatnya semakin pintar seiring waktu. Contoh dari aplikasi AI adalah asisten virtual, pengenal wajah, dan mobil otonom._

_Sekarang AI kami memiliki dua perbedaan, apa aja kah itu???_
- AI Old [ Adalah AI yg milik akses terbatas dan tidak miliki detail yg tidak akurat ].
- AI New [ Adalah Ai yg miliki akses luar, dan lebih detail dari AI Old Kekurangan nya adalah lambat respon ].

Dari Semua saya kasih itu semua untuk kenyamanan penggunaan AI
Di sini kami miliki dua AI ( AI-OLD dan AI-NEW ).
Cara gunakan pilih salah satu dari antara AI tersebut.
contoh; tanda ( ) adalah respon AI nya
  - !ai-old Apakabar ( Selamat pagi! ).
  - !ai-new Apakabar ( Saya baik-baik saja, terima kasih telah bertanya. Bagaimana kabar Anda? )

Anda bisa gunakan !ai-old <text> or !ai-new <text> or !ai <text> ( click button di bawah ini )
❏┳━━◩
┍┛
┆⟥⟤ ➠ ${global.bottime}
└─┈⟅
${global.botdate}`;
  let nth = `☰⟥⟝⟞⟝❨ *AI My Bot* ❩⟞⟝⟞⟤☰`;
  conn.send3ButtonImg(
    m.chat,
    `${pickRandom(flaaa2)}` + `${ucapan()} ` + `${name}`,
    nth,
    rules,
    "AI OLD",
    `!ai-old ${text}`,
    "AI NEW",
    `!ai-new ${text}`,
    "Credit",
    ".credit",
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
  conn.sendFile(m.chat, voice_ai, null, null, m, true);
};
handler.help = ["ai-info", "openai-info"];
handler.tags = ["openai", "info"];
handler.command = /^(ai-info|openai-info)$/i;

export default handler;

function ucapan() {
  const time = moment.tz("Asia/Jakarta").format("HH");
  let res = "Selamat Malam";
  if (time >= 4) {
    res = "Selamat Pagi";
  }
  if (time >= 10) {
    res = "Selamat Siang";
  }
  if (time >= 15) {
    res = "Selamat Sore";
  }
  if (time >= 18) {
    res = "Selamat Malam";
  }
  return res;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
