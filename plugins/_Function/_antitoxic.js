/*

let handler = m => m

let linkRegex = /(a(su|nj(([ie])ng|([ie])r)?)|me?me?k|ko?nto?l|ba?bi|fu?ck|ta(e|i)k|bangsat|g([iueo])bl([iueo])(k|g)|g ([iueo]) b l ([iueo]) (k|g)|a (n j (i n g|i r)?)s u|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  if (/masuk|lanjutkan|banjir|(per)?panjang/g.exec(m.text)) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupToxic = linkRegex.exec(m.text)

  if (chat.antiToxic && isGroupToxic) {
    m.reply('Jangan Toxic ya!!\n' + readMore + '\nMau Matikan? ketik * /disable antitoxic*')
    if (global.opts['restrict']) {
      // if (!user.isAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

export const disable = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
*/

const isToxic =
  /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|f(uck|ack)|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i; // tambahin sendiri

export async function before(
  m,
  { conn, args, usedPrefix, command, isAdmin, isBotAdmin }
) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;
  if (/masuk|lanjutkan|banjir|(per)?panjang/g.exec(m.text)) return !0;
  this.toxic = this.toxic ? this.toxic : {};
  let chat = global.db.data.chats[m.chat];
  let bot = global.db.data.settings[this.user.jid] || {};
  const isAntiToxic = isToxic.exec(m.text);
  let hapus = m.key.participant;
  let bang = m.key.id;
  if (m.sender + m.chat in this.toxic) {
    if (
      chat.antiToxic &&
      this.toxic[m.sender + m.chat].count > 0 &&
      m.messageTimestamp.toNumber() - this.toxic[m.sender + m.chat].lastspam >
        10
    ) {
      console.log(
        `User: ${m.sender} reset count toxic ${
          this.toxic[m.sender + m.chat].count
        }`
      );
      this.toxic[m.sender + m.chat].count =
        this.toxic[m.sender + m.chat].count - 1;
      this.toxic[m.sender + m.chat].lastspam = m.messageTimestamp.toNumber();
    }
    if (chat.antiToxic && isAntiToxic) {
      this.toxic[m.sender + m.chat].count++;
      await conn.sendButton(
        m.chat,
        `*Kata Aneh Terdeteksi!*\n_Anda telah ${
          this.toxic[m.sender + m.chat].count
        }${bot.restrict ? "/10" : ""} kali toxic di sini!_\n${
          bot.restrict
            ? "_Anda harus sopan agar di kurangkan jumlah toxic mu_"
            : ""
        } ${isBotAdmin ? "" : "\n\n_Bot bukan atmin_"}`,
        author,
        ["off antitoxic", "/disable antitoxic"],
        m
      );
      if (isBotAdmin && bot.restrict) {
        //await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        global.db.data.users[m.sender].warn += 1;
        //global.db.data.users[m.sender].banned = true;
        if (this.toxic[m.sender + m.chat].count > 9) {
          m.reply(
            "Anda telah melebihi batas toxic anda, maka dari itu\nAnda akan di kick!!"
          );
          await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        }
        return conn.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: bang,
            participant: hapus,
          },
        });
      } else if (!bot.restrict) {
        return m.reply("Semoga kamu cepat sadar!");
      }
    }
  } else {
    this.toxic[m.sender + m.chat] = {
      jid: m.sender + m.chat,
      count: 0,
      lastspam: 0,
    };
  }
  return !0;
}
