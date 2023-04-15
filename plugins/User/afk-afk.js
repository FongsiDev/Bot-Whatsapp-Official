let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender];
  user.afk = +new Date();
  user.afkReason = text;
  conn.reply(
    m.chat,
    `
  ${conn.getTag(m.sender)} is now AFK${text ? ": " + text : ""}
  `,
    m,
    { contextInfo: { mentionedJid: [m.sender] } }
  );
};
handler.help = ["afk [alasan]"];
handler.tags = ["main"];
handler.command = /^afk$/i;

export default handler;
