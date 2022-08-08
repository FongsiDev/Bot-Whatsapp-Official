let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  let text = `${htki} *ONLINE* ${htka}`;
  const templateButtons = [
    {
      index: 1,
      urlButton: {
        displayText: "💬 Website",
        url: "https://fangzbot.websites.co.in/",
      },
    },
    { index: 3, urlButton: { displayText: "🌎 Official Group", url: sgc } },
    { index: 4, quickReplyButton: { displayText: "Siap", id: "Ok" } },
  ];
  let tm = {
    text: text,
    footer: global.wm,
    templateButtons: templateButtons,
    image: { url: fla + "Donasi" },
  };
  conn.sendMessage(m.chat, tm, m);
};
handler.help = ["donasi"];
handler.tags = ["info"];
handler.customPrefix = /^bot$/i;
handler.command = new RegExp();

export default handler;
