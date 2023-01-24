/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from "node-fetch";
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let pp = await conn.profilePictureUrl(m.chat).catch((_) => null);

  let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
| *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`;
  let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey`;
  let thumb = await (await fetch(wibu)).buffer();
  conn.sendButtonDoc(m.chat, krtu, wm, "MENU", ".menu", m, {
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: sig,
        mediaType: "VIDEO",
        description: sig,
        title: nameown,
        body: wm,
        thumbnail: thumb,
        sourceUrl: sgc,
      },
    },
  }); // Tambah sendiri kalo mau
};
handler.command = /^(intro)$/i;

export default handler;
