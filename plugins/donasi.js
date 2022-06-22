let handler = m =>
  m.reply(
    `
╭─「 Donasi • Pulsa 」
│ • Tri3 [+62 895-0343-3262]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/foughtyew119206
│ • Gopay [ Tak Ada ]
╰────
`.trim()
  ); // Tambah sendiri kalo mau
handler.help = ["donasi"];
handler.tags = ["info"];
handler.command = /^dona(te|si)$/i;

export default handler;
