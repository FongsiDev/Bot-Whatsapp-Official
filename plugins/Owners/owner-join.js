let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

let handler = async (m, { conn, text, isOwner }) => {
  let [_, code, expired] = text.match(linkRegex) || [];
  if (!code) throw "Link invalid";
  let res,
    isJoin = false;
  try {
    isJoin = true;
    res = await conn.groupAcceptInvite(code);
    res = await conn.groupQueryInvite(code);
  } catch (e) {
    return m.reply(e?.message ? e.message : e);
  }
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
  if (isJoin) {
    chats.JoinLst = +new Date() + 24 * 60 * 60 * 1000;
  }
  m.reply(
    `Berhasil join grup ${res.subject}${
      expired ? ` selama ${expired} hari` : ""
    }`
  );
  if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24;
};
handler.help = ["join <chat.whatsapp.com>"];
handler.tags = ["owner"];

handler.command = /^join$/i;
handler.owner = true;

export default handler;

const isNumber = (x) => ((x = parseInt(x)), typeof x === "number" && !isNaN(x));
