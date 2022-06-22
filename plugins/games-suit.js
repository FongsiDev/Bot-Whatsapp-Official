let handler = async (m, { conn, command, args }) => {
  let poin = 10;
  let poin_lose = 10;
  let timeout = 60000;
  conn.suit = conn.suit ? conn.suit : {};
  if (
    Object.values(conn.suit).find(
      roof => roof.id.startsWith("suit") && [roof.p, roof.p2].includes(m.sender)
    )
  )
    m.reply(`Selesaikan suit mu yang sebelumnya`);
  if (m.mentionedJid[0] === m.sender)
    return m.reply(`Tidak bisa bermain dengan diri sendiri !`);
  if (!m.mentionedJid[0])
    return m.reply(
      `_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ?suit <tag orgnya>`
    );
  if (
    Object.values(conn.suit).find(
      roof =>
        roof.id.startsWith("suit") &&
        [roof.p, roof.p2].includes(m.mentionedJid[0])
    )
  )
    throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`;
  let id = "suit_" + new Date() * 1;
  let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${
    m.mentionedJid[0].split`@`[0]
  } untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`;
  conn.suit[id] = {
    chat: await conn.sendText(m.chat, caption, m, {
      mentions: conn.parseMention(caption)
    }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: "wait",
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m);
      delete conn.suit[id];
    }, 60000),
    poin,
    poin_lose,
    timeout
  };
};

handler.help = ["suitpvp", "suit"].map(v => v + " <@tag>");
handler.tags = ["game"];
handler.command = /^suit/i;

export default handler;
