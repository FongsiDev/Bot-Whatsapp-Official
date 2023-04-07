let handler = (m) => m;

handler.before = function (m, { user, text }) {
  if (m.isBaileys && m.fromMe) return;
  let chat = global.db.data.chats[m.chat];
  let name = this.getName(m.sender);

  if (chat.antiVirtex && text > 2000) {
    this.reply(
      m.chat`
*「 ANTI VIRTEX 」*

Terdeteksi *${name}* telah mengirim virtex!

Maaf Kamu akan dikick dari grup ini!
`.trim(),
      m
    );
    this.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant,
      },
    });
    this.groupRemove(m.chat, [m.sender]);
  } else return false;
};
handler.group = true;

export default handler;
