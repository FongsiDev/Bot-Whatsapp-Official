let handler = async (m, { conn }) => {
  let info = `
*${htki} INFO BOT ${htka}*
`;
  const sections = [
    {
      title: `✃ STATS`,
      rows: [
        {
          title: "📊Test Speed",
          rowId: ".testspeed",
          description: "Test Speed",
        },
        {
          title: "📉Stats Server",
          rowId: ".statserver",
          description: "Status server",
        },
        { title: "👤Owner", rowId: ".owner", description: "Owner BOT" },
        { title: "💰Donasi", rowId: ".donasi", description: "Support" },
        //{title: "🔖 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (12 bulan)' },
      ],
    },
    {
      title: `✃ INFO`,
      rows: [
        { title: "📖Rules", rowId: ".rules", description: "S&K BLUECKKN BOT" },
        { title: "⛔", rowId: "huuu", description: "No menu" },
        { title: "⚡Speed", rowId: ".speed", description: "Speed BOT" },
        { title: "💰Sewa BOT", rowId: ".sewa", description: "Sewa BOT" },
        {
          title: "🗣️Request Fitur",
          rowId: ".request",
          description: "Request Fitur BOT",
        },
        //{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (UNLIMITED)' },
      ],
    },
  ];

  const listMessage = {
    text: " ",
    footer: info,
    title: null,
    buttonText: "C E K",
    sections,
  };
  await conn.sendMessage(m.chat, listMessage, { quoted: m });
  //conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
};

handler.help = ["hadiah", "claim"];
handler.tags = ["rpg"];
handler.command = /^(info|infobot)$/i;

export default handler;
