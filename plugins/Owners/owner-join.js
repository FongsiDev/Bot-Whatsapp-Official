let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

let handler = async (m, { conn, text, isOwner }) => {
  let [_, code, expired] = text.match(linkRegex) || [];
  if (!code) throw "Link invalid";
  let res,
    isJoin = false;
  try {
    isJoin = true;
    res = await conn.groupAcceptInvite(code);
  } catch (e) {
    return m.reply(e?.message ? e.message : e);
  }
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
    conn.JoinLst = +new Date() + 30 * 1000;
  }
  m.reply(
    `Berhasil join grup ${res}${expired ? ` selama ${expired} hari` : ""}`
  );
  let chats = global.db.data.chats[res];
  if (!chats) chats = global.db.data.chats[res] = {};
  if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24;
};
handler.help = ["join <chat.whatsapp.com>"];
handler.tags = ["owner"];

handler.command = /^join$/i;
handler.owner = true;

export default handler;

const isNumber = (x) => ((x = parseInt(x)), typeof x === "number" && !isNaN(x));
