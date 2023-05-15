let handler = async (m, { conn }) => {
  const isOwner = [
    conn.decodeJid(conn.user.id),
    ...global.owner.map(([number]) => number),
  ]
    .map((v) => v?.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(m.mentionedJid[0]);
  const isOwner_ = [
    conn.decodeJid(conn.user.id),
    ...global.owner.map(([number]) => number),
  ]
    .map((v) => v?.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(m.sender);
  conn.reply(
    m.chat,
    `${isOwner_ ? pickRandom(global.iqfake) : pickRandom(global.iq)}`,
    m
  );
};
handler.help = ["iqtest", "testiq"];
handler.tags = ["game"];
handler.command = /^(iqtest|testiq)$/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;

export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.iq = [
  "IQ Anda Sebesar : 1",
  "IQ Anda Sebesar : 14",
  "IQ Anda Sebesar : 23",
  "IQ Anda Sebesar : 35",
  "IQ Anda Sebesar : 41",
  "IQ Anda Sebesar : 50",
  "IQ Anda Sebesar : 67",
  "IQ Anda Sebesar : 72",
  "IQ Anda Sebesar : 86",
  "IQ Anda Sebesar : 99",
  "IQ Anda Sebesar : 150",
  "IQ Anda Sebesar : 340",
  "IQ Anda Sebesar : 423",
  "IQ Anda Sebesar : 500",
  "IQ Anda Sebesar : 676",
  "IQ Anda Sebesar : 780",
  "IQ Anda Sebesar : 812",
  "IQ Anda Sebesar : 945",
  "IQ Anda Sebesar : 1000",
  "IQ Anda Sebesar : Tidak Terbatas!",
  "IQ Anda Sebesar : 5000",
  "IQ Anda Sebesar : 7500",
  "IQ Anda Sebesar : 10000",
];
global.iqfake = [
  "IQ Anda Sebesar : 60706",
  "IQ Anda Sebesar : 70800",
  "IQ Anda Sebesar : 81002",
  "IQ Anda Sebesar : 94500",
  "IQ Anda Sebesar : 20000",
  "IQ Anda Sebesar : Tidak Terbatas!",
  "IQ Anda Sebesar : 50000",
  "IQ Anda Sebesar : 75000",
  "IQ Anda Sebesar : 90000",
];
