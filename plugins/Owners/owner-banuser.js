let handler = async (m, { conn, text }) => {
  let who = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : text
    ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
    : m.chat;
  if (!who) throw "Siapa yg mau dibanned?🗿";
  let users = global.db.data.users[who];
  if (!users) users = global.db.data.users[who] = {};
  users.banned = true;
  conn.reply(m.chat, `User: ${who} sukses di banned!!`, m);
  conn.reply(
    who,
    `Hey, Goodbye from bot users, because you have been banned.\nSorry if that happened, it's probably because you violated bot rules.\nChat our Owner to get more information\nhttps://wa.me/${nomorown}`
  );
};
handler.help = ["ban"];
handler.tags = ["owner"];
handler.command = /^ban(user)?$/i;
handler.rowner = true;

export default handler;
