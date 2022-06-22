let toM = (a) => "@" + a.split("@")[0];
function handler(m, { conn, groupMetadata }) {
  let ps = groupMetadata.participants.map((v) => v.id);
  const isOwner = [
    conn.decodeJid(conn.user.id),
    ...global.owner.map(([number]) => number),
  ]
    .map((v) => v?.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(m.mentionedJid[0] || m.sender);
  let a = isOwner ? "6289503433262" : ps.getRandom();
  let b;
  do b = isOwner ? "6285280808438" : ps.getRandom();
  while (b === a);
  m.reply(`${toM(a)} ❤️ ${toM(b)}`, null, {
    mentions: [a, b],
  });
}
handler.help = ["jadian"];
handler.tags = ["main", "fun"];
handler.command = ["jadian"];

handler.group = true;

export default handler;