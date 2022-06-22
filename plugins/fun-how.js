let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} i'm`;
  const isOwner = [
      conn.decodeJid(conn.user.id),
      ...global.owner.map(([number]) => number)
    ]
      .map(v => v?.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.mentionedJid[0] || m.sender);
  conn.reply(
    m.chat,
    `
  ${command} *${text}*
  *${text}* is *${isOwner ? "100" : (101).getRandom()}*% ${command
      .replace("how", "")
      .toUpperCase()}
  `.trim(),
    m,
    m.mentionedJid
      ? {
          mentions: m.mentionedJid
        }
      : {}
  );
};
handler.help = [
  "gay",
  "pintar",
  "cantik",
  "ganteng",
  "gabut",
  "gila",
  "lesbi",
  "stress",
  "bucin",
  "jones",
  "sadboy"
].map(v => "how" + v + " siapa?");
handler.tags = ["kerang", "fun"];
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)/i;

export default handler;
