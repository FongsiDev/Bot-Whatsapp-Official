let handler = async (m, { conn, text, isOwner }) => {
  let chats = global.db.data.settings[conn.user.jid];
  if (!chats) chats = global.db.data.settings[conn.user.jid] = {};
  chats.isBotMute = chats.isBotMute !== true;
  return m.reply(`Bot telah ${chats.isBotMute ? "Mute" : "UnMute"}!`);
};
handler.help = ["mutebot"];
handler.tags = ["owner"];

handler.command = /^mutebot$/i;
handler.owner = true;

export default handler;
