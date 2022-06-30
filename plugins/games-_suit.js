import db from "../lib/database.js";
let winScore = 2999;
let playScore = 99;

export async function before(m) {
  const hisoka = this;
  this.suit = this.suit ? this.suit : {};
  let roof = Object.values(this.suit).find(
    roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
  );
  if (roof) {
    let win = "";
    let tie = false;
    if (
      m.sender == roof.p2 &&
      /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(
        m.text
      ) &&
      m.isGroup &&
      roof.status == "wait"
    ) {
      if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
        hisoka.sendTextWithMentions(
          m.chat,
          `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`,
          m
        );
        delete this.suit[roof.id];
        return !0;
      }
      roof.status = "play";
      roof.asal = m.chat;
      clearTimeout(roof.waktu);
      //delete roof[roof.id].waktu
      hisoka.sendText(
        m.chat,
        `Suit telah dikirimkan ke chat
@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}
Silahkan pilih suit di chat masing"
klik https://wa.me/${this.user.id.split(`:`)[0]}`,
        m,
        { mentions: [roof.p, roof.p2] }
      );
      if (!roof.pilih)
        hisoka.sendText(
          roof.p,
          `Silahkan pilih \n\nBatu\nKertas\nGunting`,
          m
        );
      if (!roof.pilih2)
        hisoka.sendText(
          roof.p2,
          `Silahkan pilih \n\nBatu\nKertas\nGunting`,
          m
        );
      roof.waktu_milih = setTimeout(() => {
        if (!roof.pilih && !roof.pilih2)
          hisoka.sendText(
            m.chat,
            `Kedua pemain tidak niat main,\nSuit dibatalkan`
          );
        else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p;
          hisoka.sendText(
            m.chat,
            `@${
              (roof.pilih ? roof.p2 : roof.p).split`@`[0]
            } tidak memilih suit, game berakhir`,
            m,
            { mentions: [roof.p, roof.p2] }
          );
        }
        delete this.suit[roof.id];
        return !0;
      }, roof.timeout);
    }
    let jwb = m.sender == roof.p;
    let jwb2 = m.sender == roof.p2;
    let g = /gunting/i;
    let b = /batu/i;
    let k = /kertas/i;
    let reg = /^(gunting|batu|kertas)/i;
    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
      roof.pilih = reg.exec(m.text.toLowerCase())[0];
      roof.text = m.text;
      m.reply(
        `Kamu telah memilih ${m.text} ${
          !roof.pilih2 ? `\n\nMenunggu lawan memilih` : ""
        }`
      );
      if (!roof.pilih2)
        hisoka.sendText(
          roof.p2,
          "_Lawan sudah memilih_\nSekarang giliran kamu",
          0
        );
    }
    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
      roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
      roof.text2 = m.text;
      m.reply(
        `Kamu telah memilih ${m.text} ${
          !roof.pilih ? `\n\nMenunggu lawan memilih` : ""
        }`
      );
      if (!roof.pilih)
        hisoka.sendText(
          roof.p,
          "_Lawan sudah memilih_\nSekarang giliran kamu",
          0
        );
    }
    let stage = roof.pilih;
    let stage2 = roof.pilih2;
    if (roof.pilih && roof.pilih2) {
      clearTimeout(roof.waktu_milih);
      if (b.test(stage) && g.test(stage2)) win = roof.p;
      else if (b.test(stage) && k.test(stage2)) win = roof.p2;
      else if (g.test(stage) && k.test(stage2)) win = roof.p;
      else if (g.test(stage) && b.test(stage2)) win = roof.p2;
      else if (k.test(stage) && b.test(stage2)) win = roof.p;
      else if (k.test(stage) && g.test(stage2)) win = roof.p2;
      else if (stage == stage2) tie = true;
      hisoka.sendText(
        roof.asal,
        `_*Hasil Suit*_${tie ? "\nSERI" : ""}
@${roof.p.split`@`[0]} (${roof.text}) ${
          tie ? "" : roof.p == win ? ` Menang \n` : ` Kalah \n`
        }
@${roof.p2.split`@`[0]} (${roof.text2}) ${
          tie ? "" : roof.p2 == win ? ` Menang \n` : ` Kalah \n`
        }
`.trim(),
        m,
        { mentions: [roof.p, roof.p2] }
      );
      delete this.suit[roof.id];
    }
  }
}
