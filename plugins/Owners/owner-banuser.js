let handler = async (m, { conn, text }) => {
  let who;
  if (m.isGroup)
    who = m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.quoted
      ? m.quoted.sender
      : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  else who = m.chat;
  if (!who) throw "Siapa yg mau dibanned?🗿";
  let users = global.db.data.users[who];
  if (!users) users = global.db.data.users[who] = {};
  users.banned = true;
  conn.reply(m.chat, `User: ${who} sukses di banned!!`, m);
};
handler.help = ["ban"];
handler.tags = ["owner"];
handler.command = /^ban(user)?$/i;
handler.rowner = true;

export default handler;