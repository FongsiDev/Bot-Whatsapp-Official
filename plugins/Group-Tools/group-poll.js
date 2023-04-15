let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `Gunakan perintah *${usedPrefix}${command}* <Pertanyaan>|<Opsi1>|<Opsi2>|<Opsi3>...`;

  let options = text.split("|");
  let question = options.shift();
  if (options.length < 2)
    throw "Minimal 2 opsi dibutuhkan untuk membuat polling!";
  if (options.length > 10)
    throw "Maksimal 10 opsi dibutuhkan untuk membuat polling!";

  let name = conn.getName(m.sender);
  let pollOptions = options.map((option) => {
    return { text: option, voter: [] };
  });

  await conn.sendPoll(
    m.chat,
    `📊 *POLL* 📊\n\n👤 *Pembuat* : ${name}\n\n🗣️ *Pertanyaan* : ${question}`,
    pollOptions,
    m
  );
};

handler.help = ["poll <Pertanyaan>|<Opsi1>|<Opsi2>|<Opsi3>..."];
handler.tags = ["group"];
handler.command = /^(poll|polling)$/i;
handler.group = true;
handler.admin = true;

export default handler;
