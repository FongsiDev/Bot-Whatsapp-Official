let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  let who = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  if (!who) who = m.chat;
  let user = db.data.users[who];
  if (!user) user = db.data.users[who] = {};
  if (!who) throw `tag or mention someone!`;
  let txt = args[1];
  if (!txt) throw `where the number of days?`;
  if (isNaN(txt))
    return m.reply(
      `only number!\n\nexample:\n${usedPrefix + command} [user] <days>`
    );
  var jumlahHari = 86400000 * txt;
  var now = new Date() * 1;
  if (now < user.premiumTime) user.premiumTime += jumlahHari;
  else user.premiumTime = now + jumlahHari;
  user.premium = true;
  m.reply(`✔️ Success
📛 Name: ${user.name || conn.getName(who)}
📆 Days: ${txt} days
📉 Countdown: ${user.premiumTime - now}`);
};
handler.help = ["addprem [user] <days>"];
handler.tags = ["owner"];
handler.command = /^(add|tambah|\+)p(rem)?$/i;
handler.rowner = true;

export default handler;
