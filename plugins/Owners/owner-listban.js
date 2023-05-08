let handler = async (m, { jid, conn, usedPrefix }) => {
  let chats = Object.values(global.db.data.chats).filter((x) => x.isBanned);
  let users = Object.values(global.db.data.users).filter((x) => x.banned);
  let txt_c = "";
  chats.map((ob, i) => {
    txt_c += `
│ ${i + 1}. ${ob.isName}
│ ${ob.jid}\n`.trim();
  });
  let txt_u = "";
  users.map((ob, i) => {
    txt_u += `
│ ${i + 1}. ${ob.name}
│ ${ob.jid}\n`.trim();
  });
  m.reply(
    `
┌ *Daftar Chat Terbanned*
│ Total : ${chats.length} Chat${chats ? "\n" + txt_c : ""}
└────

┌ *Daftar User Terbanned*
│ Total : ${users.length} User${users ? "\n" + txt_u : ""}
└────
`.trim()
  );
};
handler.help = ["bannedlist"];
handler.tags = ["info"];
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i;
export default handler;
