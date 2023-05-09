let handler = async (m, { jid, conn, usedPrefix }) => {
  let chats = Object.values(global.db.data.chats).filter((x) => x.isBanned);
  let users = Object.values(global.db.data.users).filter((x) => x.banned);
  let txt_c = "";
  chats.map((ob, i) => {
    txt_c += `\n│ ${i + 1}. ${ob.isName}\n│ ${ob.jid}`;
  });
  let txt_u = "";
  users.map((ob, i) => {
    txt_u += `\n│ ${i + 1}. ${ob.name}\n│ ${ob.jid}`;
  });
  m.reply(
    `
┌ *Daftar Chat Terbanned*
│ Total : ${chats.length} Chat${chats ? txt_c : ""}
└────

┌ *Daftar User Terbanned*
│ Total : ${users.length} User${users ? txt_u : ""}
└────
`.trim()
  );
};
handler.help = ["bannedlist"];
handler.tags = ["info"];
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i;
export default handler;
