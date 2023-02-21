let handler = async (m, { conn }) => {
  if (!m.quoted) throw "where's message?";
  if (m.quoted.mtype !== "viewOnceMessage" || m.quoted.mtype !== "viewOnceMessageV2") throw "Itu bukan pesan viewOnce";
  const msg = await conn.loadMessage(m.quoted.id);
  if (!msg) throw "can't open message!";
  await conn.reply(m.chat, "", msg);
};

handler.help = ["readviewonce"];
handler.tags = ["tools"];
handler.command = /^readviewonce/i;

export default handler;
