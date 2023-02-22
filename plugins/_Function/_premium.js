let handler = (m) => m;

handler.before = async function (m) {
  let user = db.data.users[m.sender];
  if (user.premium && new Date() - user.premiumTime > 0) {
    user.premiumTime = 0;
    user.premium = false;
    m.reply(
      `Premium anda telah habis, silakan ketik .sewa untuk membeli premium lagi`
    );
    this.reply(
      m.sender,
      `Premium anda telah habis, silakan ketik .sewa untuk membeli premium lagi`,
      m
    );
  }
};

export default handler;
