let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  let text = `${htki} *RULES* ${htka}
1. Tolong Gunakan Delay 5 Detik Untuk Menggukan BOT
2. Gunakan Dengan Bijak.


◈───〖 *SNK* 〗───◈
1. Data Whatsapp Anda Akan Kami Simpan Di Server Kami Selama BOT Aktif.
2. Data Anda Akan Di Hapus Ketika BOT OFFLINE
3. Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim
4. Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi
5. Jika Menemukan BUG/ERROR Silahkan Langsung Lapor Ke OWNER BOT!


◈───〖 *ATTENTION* 〗───◈
*KONSEKUENSI BILA MELANGGAR RULES*
- Bot Akan Memblokir Nomor Anda.
- Anda Tidak Akan Bisa Mengakses Bot Lagi.
- Mengeksploitasi Terhadap bot.
Sanksi: *PERMANENT BLOCK* 
`;
  const templateButtons = [
    {
      index: 1,
      urlButton: { displayText: "Link", url: sweb + "rules-bot" },
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
handler.help = ["rules"];
handler.tags = ["info"];
handler.command = /^rules$/i;

export default handler;
