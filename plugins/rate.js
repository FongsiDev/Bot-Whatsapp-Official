let handler = async (m, { conn }) => {
  let ph = "lumayan";
  let pn = "Wowww";
  let pp = "buruk";
  let pv = "sangat buruk";
  let ppm = "Bagus";
  let info = `                                                   
*${htki} RATE BINTANG ${htka}*
`;
  const sections = [
    {
      title: `${htjava} RATING ✦-------`,
      rows: [
        {
          title: "🌟🌟🌟🌟🌟",
          rowId: ".nilainih *Paket:* 5🌟 • Rate",
          description: "Bagus Sekali",
        },
        {
          title: "🌟🌟🌟🌟",
          rowId: ".nilainih *Paket:* 4🌟 • Rate",
          description: "Bagus",
        },
        {
          title: "🌟🌟🌟",
          rowId: ".nilainih *Paket:* 3🌟 • Rate",
          description: "Lumayan",
        },
        {
          title: "🌟🌟",
          rowId: ".nilainih *Paket:* 2🌟 • Rate",
          description: "Buruk",
        },
        {
          title: "🌟",
          rowId: ".nilainih *Paket:* 1🌟 • Rate",
          description: "Buruk Sekali",
        },
      ],
    },
  ];

  const listMessage = {
    text: info,
    footer: botdate,
    title: wm,
    buttonText: "RATING",
    sections,
  };
  await conn.sendMessage(m.chat, listMessage);
  //conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
};

handler.help = ["rating", "ratebot"];
handler.tags = ["info"];
handler.command = /^(rate(bot)?|rating)$/i;
handler.limit = true;
handler.private = false;

export default handler;
