let handler = async (m, { conn }) => {
  //-----PRICE
  //sewa
  let sh = "5";
  let sn = "10";
  let ss = "25";
  let sp = "40";
  let sv = "120";
  //premium
  let ph = "5";
  let pn = "15";
  let pp = "45";
  let pv = "65";
  let ppm = "70";
  let info = `
*${htki} sᴇᴡᴀ ${htka}*
┏⫹⫺ *ʜᴇᴍᴀᴛ* 
┗$ ${sh}k/grup (1 minggu)

┏⫹⫺ *ɴᴏʀᴍᴀʟ* 
┗$ ${sn}k/grup (1 bulan)

┏⫹⫺ *sᴛᴀɴᴅᴀʀ* 
┗$ ${ss}k/grup (2 bulan)

┏⫹⫺ *ᴘʀᴏ* 
┗$ ${sp}k/grup (3 bulan)

┏⫹⫺ *ᴘᴇʀᴍᴀɴᴇɴ* 
┗$ ${sv}k/grup (Permanen)

──···────────────────···──

*${htki} ᴘʀᴇᴍɪᴜᴍ ${htka}*
┏⫹⫺ *ʜᴇᴍᴀᴛ* 
┗$ ${ph}k (1 minggu)

┏⫹⫺ *ɴᴏʀᴍᴀʟ* 
┗$ ${pn}k (1 bulan)

┏⫹⫺ *ɢᴏᴏᴅ* 
┗$ ${pp}k (3 bulan)

┏⫹⫺ *ᴘʀᴏ* 
┗$ ${pv}k (5 bulan)                                            

*📦 Kalau mau dapat discon langsung aja download aplikasi TokoBot* ☜

–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja.. max tawar 5k

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL


*📮 Pembayaran Saldo ( ~Cod~ )

▌│█║▌║▌║║▌║▌║█│▌
`;
  const sections = [
    {
      title: `✃ sᴇᴡᴀ`,
      rows: [
        {
          title: "𝗛𝗘𝗠𝗔𝗧",
          rowId: ".order *Paket:* HEMAT • Sewa",
          description: "𝗣𝗿𝗶𝗰𝗲: " + sh + "k (1 minggu)",
        },
        {
          title: "𝗡𝗢𝗥𝗠𝗔𝗟",
          rowId: ".order *Paket:* NORMAL • Sewa",
          description: "𝗣𝗿𝗶𝗰𝗲: " + sn + "k (1 bulan)",
        },
        {
          title: "𝗦𝗧𝗔𝗡𝗗𝗔𝗥",
          rowId: ".order *Paket:* STANDAR • Sewa",
          description: "𝗣𝗿𝗶𝗰𝗲: " + ss + "k (2 bulan)",
        },
        {
          title: "𝗣𝗥𝗢",
          rowId: ".order *Paket:* PRO • Sewa",
          description: "𝗣𝗿𝗶𝗰𝗲: " + sp + "k (3 bulan)",
        },
        {
          title: "🔖 𝗩𝗜𝗣",
          rowId: ".order *Paket:* VIP • Sewa",
          description: "𝗣𝗿𝗶𝗰𝗲: " + sv + "k (Permanen)",
        },
      ],
    },
    {
      title: `✃ ᴘʀᴇᴍɪᴜᴍ`,
      rows: [
        {
          title: "𝗛𝗘𝗠𝗔𝗧",
          rowId: ".order *Paket:* HEMAT • Premium",
          description: "𝗣𝗿𝗶𝗰𝗲: " + ph + "k (1 minggu)",
        },
        {
          title: "𝗡𝗢𝗥𝗠𝗔𝗟",
          rowId: ".order *Paket:* NORMAL • Premium",
          description: "𝗣𝗿𝗶𝗰𝗲: " + pn + "k (1 bulan)",
        },
        {
          title: "𝗚𝗢𝗢𝗗",
          rowId: ".order *Paket:* GOOD • Premium",
          description: "𝗣𝗿𝗶𝗰𝗲: " + pp + "k (3 bulan)",
        },
        {
          title: "𝗣𝗥𝗢",
          rowId: ".order *Paket:* PRO • Premium",
          description: "𝗣𝗿𝗶𝗰𝗲: " + pv + "k (5 bulan)",
        },
        //{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (UNLIMITED)' },
      ],
    },
    {
      title: `✃ PAYMENT`,
      rows: [
        { title: "💰PAYMENT", rowId: ".pay", description: "Metode Pembayaran" },
      ],
    },
  ];

  const listMessage = {
    text: " ",
    footer: info,
    title: null,
    buttonText: "ʙ ᴜ ʏ",
    sections,
  };
  await conn.sendMessage(m.chat, listMessage, { quoted: m });
  //conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
};

handler.help = ["sewa"];
handler.tags = ["main"];
handler.command = /^(sewa|premium)$/i;

export default handler;
