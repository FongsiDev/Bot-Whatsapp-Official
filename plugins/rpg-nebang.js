const timeout = 3600000;

let handler = async (m, { conn, usedPrefix, text }) => {
  let aqua = global.db.data.users[m.sender].potion;
  let time = global.db.data.users[m.sender].lastnebang + 3600000;
  if (aqua == 0)
    return m.reply(
      `*Pastikan kamu memiliki semua potion*\nKetik :\n${usedPrefix}shop buy potion 5`
    );
  if (new Date() - global.db.data.users[m.sender].lastnebang < 3600000)
    throw `Anda sudah menebang\nMohon tunggu hasil tebangan mu\nTunggu selama ${msToTime(
      time - new Date()
    )} lagi`;
  if (global.db.data.users[m.sender].potion > 9) {
    let kayus = `${Math.floor(Math.random() * 1000)}`.trim();
    let aquas = `${Math.floor(Math.random() * 10)}`.trim();
    global.db.data.users[m.sender].wood += woods * 1;
    global.db.data.users[m.sender].common += 3;
    global.db.data.users[m.sender].potion -= potions * 1;
    global.db.data.users[m.sender].lastnebang = new Date() * 1;
    m.reply(
      `Selamat kamu mendapatkan : \n+${woods} Kayu\n+3 comoon\n\nKamu sudah menghabiskan potion\n-${potions} Potion`
    );
    setTimeout(() => {
      conn.reply(m.chat, `⏲️Waktunya nebang pohon lagi kak…`, m);
    }, timeout);
  } else
    m.reply(
      `Pastikan potion kamu *10* untuk bisa nebang, Karena menguras tenaga`
    );
};
handler.help = ["nebang"];
handler.tags = ["rpg"];
handler.command = /^(nebang)/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = true;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;
handler.limit = true;
handler.exp = 0;
handler.money = 0;

export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + " jam " + minutes + " menit " + seconds + " detik";
}
