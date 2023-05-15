let handler = async (m, { conn, text }) => {
  let who = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : text
    ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
    : m.chat;

  if (!who) throw "Siapa yg mau dibanned?🗿";
  let users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `User: ${who} sukses di unbanned!!`, m);
  conn.reply(
    who,
    `Hello, Congratulations you have been banned by the Owner.\nWelcome back to using cmd :)`
  );
};
handler.help = ["unban"];
handler.tags = ["owner"];
handler.command = /^unban(user)?$/i;
handler.rowner = true;

export default handler;
