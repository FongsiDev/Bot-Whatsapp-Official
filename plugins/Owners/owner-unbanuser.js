let handler = async (m, { conn, text }) => {
  if (!text) throw "Who wants to be banned?";
  let who;
  if (m.isGroup)
    who = m.mentionedJid[0]
      ? m.mentionedJid
      : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  else who = m.chat;
  if (!who) throw "Tag??";
  let users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `User: ${who} sukses di unbanned!!`, m);
};
handler.help = ["unban"];
handler.tags = ["owner"];
handler.command = /^unban(user)?$/i;
handler.rowner = true;

export default handler;
