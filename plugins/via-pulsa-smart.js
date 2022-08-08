let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  let text = `${htki} SMARTFREN ${htka}

Hay👋, ingin melanjutkan pembayaran?

💰 *Pembayaran*
• Via: Pulsa Smartfren 
• Nomor: 088215689772
• A/n: Fangz
• Mitra: Fangz BOT
• Metode pembayaran: Online ( ~Cod~ )

💰 *Bayar melalui aplikasi TokoBot*

TokoBot: https://app.bukaolshop.com/toko/tokobot

FangzApp:https://web.jagel.id/store/fangzapp

Website:https://toko.ly/TokoBot   (Non apk)

📦 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan pulsa.
Pastikan pulsa kamu mencukupi untuk bertransaksi!


📮KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`;
  const templateButtons = [
    {
      index: 1,
      urlButton: { displayText: "Isi Pulsa", url: "KE KONTER LAH ANJ" },
    },
    {
      index: 4,
      quickReplyButton: { displayText: "Sudah membayar", id: ".sudahbayar" },
    },
  ];
  let tm = {
    text: text,
    footer: global.wm,
    templateButtons: templateButtons,
    image: { url: fla + "Donasi" },
  };
  conn.sendMessage(m.chat, tm, m);
};
handler.help = ["donasi"];
handler.tags = ["info"];
handler.command = /^pulsasmartfren$/i;
handler.private = true;

export default handler;
