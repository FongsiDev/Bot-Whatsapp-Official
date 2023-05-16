let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

let handler = async (m, { conn, text, isOwner }) => {
  let [_, code, expired] = text.match(linkRegex) || [];
  if (!code) throw "Link invalid";
  try {
    let res = await conn.groupQueryInvite(code);
    let chats = global.db.data.chats[res.id];
    if (!chats) chats = global.db.data.chats[res.id] = {};
    if (isOwner) {
      if (expired) {
        expired = Math.floor(
          Math.min(999, Math.max(1, isNumber(expired) ? parseInt(expired) : 0))
        );
      } else {
        expired = false;
      }
    }
    chats.JoinLst = +new Date() + 24 * 60 * 60 * 1000;
    if (expired) {
      chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24;
    }
    await conn.groupAcceptInvite(code);  
    return await m.reply(
      `Berhasil join grup ${res.subject} [${res.id}]${
        expired ? ` selama ${expired} hari` : ""
      }`
    );
  } catch (e) {
    console.log(e)
    return m.reply(e?.message ? e.message : e);
  }
};
handler.help = ["join <chat.whatsapp.com>"];
handler.tags = ["owner"];

handler.command = /^join$/i;
handler.owner = true;

export default handler;
//FG - JB Made By 𝙁𝘾 么 Glitch Editz#0433
