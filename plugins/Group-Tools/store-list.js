let handler = async (m, { conn, usedPrefix, command }) => {
  let msgs = db.data.msgs;
  let msg = Object.entries(msgs)
    .map(([nama, isi]) => {
      return { nama, ...isi };
    })
    .map((v) => v.nama);
  let row = Object.keys(msg).map((v) => ({
    title: msg[v],
    description: "",
    rowId: msg[v],
  }));
  let button = {
    buttonText: "LIST STORE",
    description: "Berikut daftar Menu yg Ada di List store...",
    footerText: wm,
  };
  if (msg[0]) return await conn.sendListM(m.chat, button, row, m);
  else
    throw `\nbelum ada Menu yg Ada di list store.\nketik *${
      usedPrefix + command
    } <teks>* untuk menambahkan daftar menu.\n`;
};
handler.help = ["list"];
handler.tags = ["admin"];
handler.command = /^list$/;

export default handler;
