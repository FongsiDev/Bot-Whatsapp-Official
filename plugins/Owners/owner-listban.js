let handler = async (m, { jid, conn, usedPrefix }) => {
  let chats = Object.values(global.db.data.chats).filter((x) => x.isBanned);
  let users = Object.values(global.db.data.users).filter((x) => x.banned);

  m.reply(
    `
┌ *Daftar Chat Terbanned*
│ Total : ${chats.length} Chat${
      chats
        ? "\n" +
          chats
            .map((ob, i) => {
              `
│ ${i + 1}. ${
                conn.getName(ob.jid) == undefined
                  ? "Unknown"
                  : conn.getName(ob.jid)
              }
│ ${ob.jid}
`.trim();
            })
            .join("\n")
        : ""
    }
└────

┌ *Daftar User Terbanned*
│ Total : ${users.length} User${
      users
        ? "\n" +
          users
            .map((ob, i) => {
              `
│ ${i + 1}. ${
                conn.getName(ob.jid) == undefined
                  ? "Unknown"
                  : conn.getName(ob.jid)
              }
│ ${ob.jid}
`.trim();
            })
            .join("\n")
        : ""
    }
└────
`.trim()
  );
};
handler.help = ["bannedlist"];
handler.tags = ["info"];
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i;
export default handler;
