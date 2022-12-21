import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let pp = await conn.profilePictureUrl(who).catch((_) => hwaifu.getRandom());
  let name = await conn.getName(who);

  if (command == "bot1") {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner WHMODS;Bot;;Md\nFN:${nameown}\nNICKNAME:👑 Owner Bot\n🚫 Don't call me 🥺\nTITLE:MODS\nitem1.TEL;waid=${nomorown}:+62 895-0343-3262\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:${global.syt}\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:blcnayu@gmail.com\nitem3.X-ABLabel:💌 Mail Owner BOT\nitem4.ADR:;;🇲🇾 Malaysia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:2021-5-4\nEND:VCARD`;
    const tag_own = await conn.sendMessage(
      m.chat,
      { contacts: { displayName: wm, contacts: [{ vcard }] } },
      { quoted: fakes }
    );
    let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${
      conn.user.name
    }* kak`;
    await conn.sendButton(
      m.chat,
      caption,
      nameown,
      null,
      [["🎀 Sapa Owner", "Huuu"]],
      m,
      { quoted: tag_own, mentions: conn.parseMention(caption) }
    );
  }
  if (command == "bot2") {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${nameown};;;\nFN:${nameown}\nORG:${nameown}\nTITLE:\nitem1.TEL;waid=${nomorown}:+62 895-0343-3262\nitem1.X-ABLabel:${nameown}\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:${nameown}\nEND:VCARD`;
    await conn.sendMessage(
      m.chat,
      { contacts: { displayName: wm, contacts: [{ vcard }] } },
      { quoted: fakes }
    );
  }
  function E(I, Z) {
    return P(Z - 0x32b, I);
  }
  (function (I, Z) {
    const l = I();
    function A(I, Z) {
      return P(I - 0x222, Z);
    }
    while (!![]) {
      try {
        const R =
          parseInt(A(0x387, "])dR")) / 0x1 +
          -parseInt(A(0x38f, "U$ha")) / 0x2 +
          (-parseInt(A(0x37f, "5ncY")) / 0x3) *
            (parseInt(A(0x376, "qRZy")) / 0x4) +
          (-parseInt(A(0x397, "a!FN")) / 0x5) *
            (parseInt(A(0x38e, "GWer")) / 0x6) +
          parseInt(A(0x370, "GWer")) / 0x7 +
          (-parseInt(A(0x382, "@BnD")) / 0x8) *
            (-parseInt(A(0x395, "vfzY")) / 0x9) +
          parseInt(A(0x390, "HgH7")) / 0xa;
        if (R === Z) break;
        else l["push"](l["shift"]());
      } catch (i) {
        l["push"](l["shift"]());
      }
    }
  })(G, 0x7e5c1);
  function P(I, Z) {
    const l = G();
    return (
      (P = function (R, i) {
        R = R - 0x14b;
        let A = l[R];
        if (P["VefKDM"] === undefined) {
          var E = function (a) {
            const r =
              "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
            let L = "",
              j = "";
            for (
              let g = 0x0, u, W, N = 0x0;
              (W = a["charAt"](N++));
              ~W && ((u = g % 0x4 ? u * 0x40 + W : W), g++ % 0x4)
                ? (L += String["fromCharCode"](
                    0xff & (u >> ((-0x2 * g) & 0x6))
                  ))
                : 0x0
            ) {
              W = r["indexOf"](W);
            }
            for (let D = 0x0, U = L["length"]; D < U; D++) {
              j +=
                "%" +
                ("00" + L["charCodeAt"](D)["toString"](0x10))["slice"](-0x2);
            }
            return decodeURIComponent(j);
          };
          const m = function (a, r) {
            let L = [],
              g = 0x0,
              u,
              W = "";
            a = E(a);
            let N;
            for (N = 0x0; N < 0x100; N++) {
              L[N] = N;
            }
            for (N = 0x0; N < 0x100; N++) {
              (g = (g + L[N] + r["charCodeAt"](N % r["length"])) % 0x100),
                (u = L[N]),
                (L[N] = L[g]),
                (L[g] = u);
            }
            (N = 0x0), (g = 0x0);
            for (let D = 0x0; D < a["length"]; D++) {
              (N = (N + 0x1) % 0x100),
                (g = (g + L[N]) % 0x100),
                (u = L[N]),
                (L[N] = L[g]),
                (L[g] = u),
                (W += String["fromCharCode"](
                  a["charCodeAt"](D) ^ L[(L[N] + L[g]) % 0x100]
                ));
            }
            return W;
          };
          (P["loZFwH"] = m), (I = arguments), (P["VefKDM"] = !![]);
        }
        const h = l[0x0],
          J = R + h,
          t = I[J];
        return (
          !t
            ? (P["HSPZqS"] === undefined && (P["HSPZqS"] = !![]),
              (A = P["loZFwH"](A, i)),
              (I[J] = A))
            : (A = t),
          A
        );
      }),
      P(I, Z)
    );
  }
  if (command == E("Iehk", 0x48e))
    try {
      const sentMsg = await conn[E("04PQ", 0x49f)](
        m[E("QUa8", 0x491)],
        [
          [
            "" + nomorown,
            "" + (await conn[E("g1M]", 0x487)](nomorown + "@s.whatsapp.net")),
            E("((0^", 0x47b),
            "🚫 Don't call me 🥺",
            E("G[fE", 0x483),
            "🇲🇾 Malaysia",
            E("@BnD", 0x49c),
            "👤 Gada pawang nih senggol dong 😔",
          ],
          [
            "" +
              conn[E("p]#%", 0x49d)][E("ZTeI", 0x486)][E("GWer", 0x47d)](
                "@"
              )[0x0],
            "" + (await conn["getName"](conn[E("lBmF", 0x489)]["jid"])),
            E("4nv*", 0x48f),
            E("qRZy", 0x496),
            E("S0vE", 0x484),
            E("UeGL", 0x48a),
            E("KzUS", 0x485),
            "🤖 Hanya bot biasa yang kadang suka eror ☺",
          ],
        ],
        fakes
      );
      await conn[E("]^50", 0x493)](
        m[E("23K#", 0x47a)],
        E("hdC!", 0x47e) +
          m[E("KzUS", 0x48d)][E("ZTeI", 0x49a)]("@")[0x0] +
          E("hdC!", 0x494),
        sentMsg,
        { mentions: [m["sender"]] }
      );
    } catch {
      const sentMsg = await conn[E("o#Lg", 0x495)](
        m[E("04PQ", 0x476)],
        "" + nomorown,
        "" + (await conn[E("hdC!", 0x482)](nomorown + E("a*Y]", 0x477))),
        m
      );
      await conn[E("AJQ^", 0x4a1)](
        m["chat"],
        E("P9nx", 0x49b) +
          m[E("HgH7", 0x48c)]["split"]("@")[0x0] +
          " itu nomor team developerku, jangan di apa-apain ya kak😖",
        sentMsg,
        { mentions: [m["sender"]] }
      );
    }
  function G() {
    const h = [
      "Dmk9A24",
      "W6yPW6eRF8kfCumvbvjYFLddJG",
      "i8oGrfVdJ8k7W63cLq",
      "W50xusLHW6lcUr/cQgeObG",
      "g8ofxSkG",
      "8j+IISoHDSozl8o1z31iWOrmW6TncxpdQq",
      "cmorWRDgW619aM8+dW",
      "WPHqc3eI",
      "dCkge1D9gCkDWQjVW7e",
      "wb/cHYrNW5vquWRdTG",
      "jLpdOmoiCCkZWPddTSoVWPSLxa",
      "WO/dVCkbu8oXfmkUW7i4WRZdVNi",
      "iSkcc3y8h8kz",
      "W47cRCozcmkGu8oXWPapWOZdMvPjWRPQW4VcUXG",
      "h8oKBYzPW5pdJG",
      "8jY7TepdICkNo8kRWO49W5OGcSk2W4aZzmo6WQSwW5TqW5xdH8oeW6NdKCoPet5UW6GQWRz8",
      "aSovta",
      "nSkQWR5xWPOaW4K",
      "kCkpW5ddJglcUb3cRrDx",
      "WObWW6zb",
      "8kQ0J/gpLz7cSe0xyc3cNCkRW6xcPh4",
      "EuOcWP/dTmk/WR88wCk4ggNdLG",
      "WPWhW5HBBMi",
      "FrenW4xcTJ0",
      "bmk8CSkDWR40W4S",
      "8lgxO8oNhmo4W7z1dvW7kW4JeSo0WR3WKBo2",
      "lmoIiCkkmMyrW5JdJe7cISkd",
      "W5uIW6hcNa",
      "Fq5QW4/cISoHW6C",
      "gG7dKmo4pW",
      "zCkoc019hmktWQqGW4m5WO/dQmk2fWZdHWy/xgjGWRzXW5RdOtVcKSkQc8kKamoPWRPVBIRcVhhdT1VWQjIm",
      "W57dLmoBjMtdGvFdRuxdNha",
      "8kwdNCkFufNdIcv/z8oJWO10erb0gCkjcmkGFColW4VWLBU+",
      "W58zvcTKW67dLqdcVweemmoQ",
      "WPRdS8k+wmkMWRRcOtBdHmoeW7pcOaG",
      "W55qWOemmIDOjCo2BCkztSofWRG",
      "g8omrmoRW50",
      "lc/dSbfFwadcL8o4W68",
      "8k2BUbVdJSk3W7NdVYK7W7jGs8oNWOWqWPRdLLenfmoXWQlcUSkVWR8pW7JcLv0EW64kW5ldH8kMo8keW69dCvehW45qWRb5xCoCzbVcLSkmW6BcHsiuW7xcUSkq",
      "WRxdH1i0",
      "WQddIdWFzmk2W6mK",
      "zmkWzh7dHCkzW6/cKGnMkev0WP7dKSoR",
      "WP/cPNSXWO0GnG",
      "eYVcIG7dVG",
      "WOFcJ8keBLWNWOSaW6/cOxdcRWy+",
    ];
    G = function () {
      return h;
    };
    return G();
  }

  //knp di enc? , biar kgk di rename deksripsi Developer nya, kalau untuk nomor nya bakal otomatis berubah pas kalian ubah di config.js
};
handler.help = ["bot1", "bot2", "bot3"];
handler.tags = ["info"];

handler.command = /^(bot1|bot2|bot3)$/i;

export default handler;
