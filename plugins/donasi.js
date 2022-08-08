let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  let text = `
┌─「 Donasi 」
│ • *Smartfren:* [${global.ppulsa}]
│ • *Tri3:* [${global.ppulsa2}]
❏────
`;
  const templateButtons = [
    { index: 1, urlButton: { displayText: "✨ YouTube", url: syt } },
    { index: 2, urlButton: { displayText: "📷 Instagram", url: sig } },
    { index: 3, quickReplyButton: { displayText: "Menu", id: ".menu" } },
    { index: 4, quickReplyButton: { displayText: "Owner", id: ".owner" } },
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
handler.command = /^dona(te|si)$/i;

export default handler;
