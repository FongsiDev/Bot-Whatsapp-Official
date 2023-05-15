let handler = async (m, { conn }) => {
  if (!m.quoted) throw "where's message?";
  if (m.quoted.mtype !== "viewOnceMessageV2") throw "Itu bukan pesan viewOnce";
  const msg = await m.quoted?.download?.();
  if (!msg) throw "can't open message!";
  let media = m.quoted.mediaMessage[m.quoted.mediaType];
  await conn.sendFile(m.chat, await msg, "", await media.caption, m);
};

handler.help = ["readviewonce", "viewonce"];
handler.tags = ["tools"];
handler.command = /^readviewonce|viewonce/i;

export default handler;
