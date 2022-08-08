let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  let text = `*${htki} MODE ${htka}*


              📮ᴍᴀᴜ ᴍᴏᴅᴇ ᴀᴘᴀ?
`;
  const templateButtons = [
    {
      index: 3,
      urlButton: {
        displayText: "💬 ᴏᴡɴᴇʀ",
        url: ownlink,
      },
    },
    {
      index: 4,
      quickReplyButton: { displayText: "Close", id: ".group close" },
    },
    { index: 5, quickReplyButton: { displayText: "Open", id: ".group open" } },
  ];
  let tm = {
    text: text,
    footer: global.wm,
    templateButtons: templateButtons,
    image: { url: fla + "Donasi" },
  };
  conn.sendMessage(m.chat, tm, m);
};
handler.help = ["mode"];
handler.tags = ["owner"];
handler.command = /^grup|group$/i;
handler.owner = false;
handler.group = true;
handler.admin = true;

export default handler;
