import fs from "fs";
import moment from "moment-timezone";
import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
  let tag = `@${m.sender.replace(/@.+/, "")}`;
  let mentionedJid = [m.sender];
  let name = conn.getName(m.sender);
  await m.reply("*_Tunggu Sabar Ya..._*");
  let esce = `text nya `;
  let rules = `➯ *Tɪᴅᴀᴋ Sᴘᴀᴍ Bᴏᴛ*
 _Kebijakan privasi atau Private without being in public_



• *Kebijakan Privasi:*
1. ${namebot_1} tidak akan merekam data riwayat chat user.
2. ${namebot_1} tidak akan menyebarkan nomor users.
3. ${namebot_1} tidak akan menyimpan media yang dikirimkan oleh users.
4. ${namebot_1} tidak akan menyalah gunakan data data users.
5. Owner Bot berhak melihat data riwayat chat users.
6. Owner Bot berhak melihat status users.
7. Owner Bot dapat melihat riwayat chat, dan media yang dikirimkan users.

• Jika ada bug/eror di website kami saya mohon untuk Report nya, tanpa biaya dan aman

_Cara penggunaan ${namebot_1} Agar terhindar dari Suspand_

• *Peraturan ${namebot_1}:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. jika ingin membeli scrip bot Whatsapp bisa langsung Hubungi ke no Whatsapp:wa.me/6289503433262
3. Ketik .sewa Jika Ingin SewaBot 

•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan ${namebot_1}:*

1. ${namebot_1} akan keluar dari group jika ada salah satu member melanggar peraturan.
2. ${namebot_1} dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. ${namebot_1} tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. ${namebot_1} akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. ${namebot_1} bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
❏┳━━◩
┍┛
┆⟥⟤ ➠ ${global.bottime}
└─┈⟅
${global.botdate}`;
  let nth = `☰⟥⟝⟞⟝❨ *Rᴜʟᴇs Mʏ Bᴏᴛ* ❩⟞⟝⟞⟤☰`;
  conn.sendButton(
    m.chat,
    nth,
    rules,
    `${pickRandom(flaaa2)}${ucapan()} ${name}`,
    [
      ["Menu", ".menu"],
      ["Owner", ".owner"],
      ["Credit", ".credit"],
    ],
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
handler.help = ["rules"];
handler.tags = ["info"];
handler.command = /^(rules)$/i;

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
