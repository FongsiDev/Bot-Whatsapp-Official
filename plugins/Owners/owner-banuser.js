let handler = async (m, { conn, text }) => {
  if (!text) throw "Siapa yg mau dibanned?🗿";
  let who;
  if (m.isGroup)
    who = m.mentionedJid[0]
      ? m.mentionedJid
      : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  else who = m.chat;
  if (!who) throw "Tag??";
  let users = global.db.data.users;
  users[who].banned = true;
  conn.reply(m.chat, `User: ${who} sukses di banned!!`, m);
};
handler.help = ["ban"];
handler.tags = ["owner"];
handler.command = /^ban(user)?$/i;
handler.rowner = true;

export default handler;
