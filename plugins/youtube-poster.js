import fetch from "node-fetch";

let handler = async (m, { conn, text, command }) => {
  switch (command.replace("yt-poster-", "")) {
    case "add":
    case "tambah":
      if (!text) throw "Uhm... Mana Link Channel YouTube-Nya?";
      conn.YT.setChannel(text, m.chat)
        .then((x) => {
          return m.reply("Berhasil di tambahkan di group ini");
        })
        .catch((x) => {
          return m.reply(
            "Wah Sayang sekali tidak bisa tambahkan karena\n" +
              JSON.stringify(x)
          );
        });
      break;
    case "del":
    case "remove":
    case "hapus":
      if (!text) throw "Uhm... Mana Link Channel YouTube-Nya?";
      conn.YT.deleteChannel(m.chat, text)
        .then((x) => {
          return m.reply("Berhasil di hapuskan di group ini");
        })
        .catch((x) => {
          return m.reply(
            "Wah Sayang sekali tidak bisa hapuskan karena\n" + JSON.stringify(x)
          );
        });
      break;
    default:
      throw "Invaild Options";
  }
};
handler.help = ["yt-poster"].map((v) => v + ` <url_channel>`);
handler.tags = ["group"];
handler.group = true;
handler.botAdmin = true;
handler.command = /^yt-poster|yt-poster-(add|delete|tambah|hapus|del)$/i;

export default handler;