let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} i'm`;
  const isOwner = [
    conn.decodeJid(conn.user.id),
    ...global.owner.map(([number]) => number),
  ]
    .map((v) => v?.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(m.mentionedJid[0]);
  const isOwner_ = [
    conn.decodeJid(conn.user.id),
    ...global.owner.map(([number]) => number),
  ]
    .map((v) => v?.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(m.sender);
  conn.reply(
    m.chat,
    `
  ${command} *${text}*
  *${text}* is *${
      isOwner || isOwner_
        ? [100, 80, 90, 84, 79, 59, 70, 59].getRandom()
        : (101).getRandom()
    }*% ${command.replace("how", "").toUpperCase()}
  `.trim(),
    m,
    m.mentionedJid
      ? {
          mentions: m.mentionedJid,
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
  "jelek",
  "stress",
  "cute",
  "badmood",
  "bucin",
  "jones",
  "sadboy",
].map((v) => "how" + v + " siapa?");
handler.tags = ["kerang", "fun"];
handler.command =
  /^how(gay|pintar|jelek|cantik|cute|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy|badmood)/i;

export default handler;
