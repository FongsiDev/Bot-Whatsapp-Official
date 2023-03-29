(function (g, t) {
  const W = g();
  function L(g, t) {
    return Y(t - -0x246, g);
  }
  while (!![]) {
    try {
      const p =
        (-parseInt(L("]r^y", -0xb7)) / 0x1) *
          (parseInt(L("%VR9", -0xde)) / 0x2) +
        parseInt(L("$6b8", -"0xd1")) / 0x3 +
        (parseInt(L("RhDU", -0xca)) / 0x4) *
          (parseInt(L("6CW!", -0x100)) / 0x5) +
        (parseInt(L("w@a@", -"0x89")) / 0x6) *
          (parseInt(L("AO2j", -0xc9)) / 0x7) +
        -parseInt(L("ksZ0", -"0x84")) / 0x8 +
        (-parseInt(L("bVS0", -0xfc)) / 0x9) *
          (-parseInt(L("v&lA", -"0x106")) / 0xa) +
        (parseInt(L("AO2j", -"0x9e")) / 0xb) *
          (-parseInt(L("m7!f", -"0xb4")) / 0xc);
      if (p === t) break;
      else W["push"](W["shift"]());
    } catch (F) {
      W["push"](W["shift"]());
    }
  }
})(C, 0xac34d);
import l from "fs";
function Y(l, A) {
  const E = C();
  return (
    (Y = function (g, t) {
      g = g - 0x139;
      let W = E[g];
      if (Y["aeDfBP"] === undefined) {
        var p = function (L) {
          const K =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          let e = "",
            b = "";
          for (
            let M = 0x0, m, I, c = 0x0;
            (I = L["charAt"](c++));
            ~I && ((m = M % 0x4 ? m * 0x40 + I : I), M++ % 0x4)
              ? (e += String["fromCharCode"](0xff & (m >> ((-0x2 * M) & 0x6))))
              : 0x0
          ) {
            I = K["indexOf"](I);
          }
          for (let O = 0x0, D = e["length"]; O < D; O++) {
            b +=
              "%" +
              ("00" + e["charCodeAt"](O)["toString"](0x10))["slice"](-0x2);
          }
          return decodeURIComponent(b);
        };
        const h = function (L, K) {
          let e = [],
            b = 0x0,
            M,
            m = "";
          L = p(L);
          let I;
          for (I = 0x0; I < 0x100; I++) {
            e[I] = I;
          }
          for (I = 0x0; I < 0x100; I++) {
            (b = (b + e[I] + K["charCodeAt"](I % K["length"])) % 0x100),
              (M = e[I]),
              (e[I] = e[b]),
              (e[b] = M);
          }
          (I = 0x0), (b = 0x0);
          for (let c = 0x0; c < L["length"]; c++) {
            (I = (I + 0x1) % 0x100),
              (b = (b + e[I]) % 0x100),
              (M = e[I]),
              (e[I] = e[b]),
              (e[b] = M),
              (m += String["fromCharCode"](
                L["charCodeAt"](c) ^ e[(e[I] + e[b]) % 0x100]
              ));
          }
          return m;
        };
        (Y["TOzZFI"] = h), (l = arguments), (Y["aeDfBP"] = !![]);
      }
      const F = E[0x0],
        z = g + F,
        j = l[z];
      return (
        !j
          ? (Y["IXVhEv"] === undefined && (Y["IXVhEv"] = !![]),
            (W = Y["TOzZFI"](W, t)),
            (l[z] = W))
          : (W = j),
        W
      );
    }),
    Y(l, A)
  );
}
import A from "node-fetch";
import E from "moment-timezone";
import PhoneNumber from "awesome-phonenumber";
let handler = (g) => g;
handler[K(-"0xc0", "8jL#")] = async function (g) {
  function e(g, t) {
    return K(g - 0x1d7, t);
  }
  global.www = e;
  let t = await conn[e("0x10e", "t*g&")](g["sender"]),
    W = [
      e("0x13b", "3UzJ"),
      e(0xf5, "AO2j"),
      e("0x121", "m7!f"),
      e("0x17e", "#l#w"),
      "Nyann",
    ],
    p = e("0x125", "#l#w");
  try {
    p = await this[e(0x108, "Dyg4")](g[e("0x12d", "w@a@")], "image");
  } catch (F) {
  } finally {
    (global[e(0x102, "6CW!")] = pickRandom([
      "application/vnd.ms-excel",
      e("0x159", "Ja8i"),
      "application/msword",
      e(0x150, "YXXZ"),
    ])),
      (global["fetch"] = import(e("0x136", "$6b8"))),
      (global[e(0x167, "pE8K")] = import(e(0x11c, "Ja8i")));
    const z = process[e(0x155, "745S")]() * 0x3e8;
    (global[e(0x142, "CZfp")] = [
      [
        owner[0x0],
        await this["getName"](owner[0x0] + "@s.whatsapp.net"),
        e("0x107", "Eg9s"),
        "booewa@gmail.com",
        !![],
      ],
      [
        owner[0x1],
        await this[e(0x165, "9NmQ")](owner[0x1] + "@s.whatsapp.net"),
        e(0x177, "NK3v"),
        e("0x12a", "3UzJ"),
        !![],
      ],
    ]),
      (global[e(0x116, "R8u0")] = ucapan()),
      (global[e("0x10a", "LxSe")] = e(0x141, "6CW!"));
    let j = await conn[e("0x157", "t!m$")](
      hwaifu[e(0x11e, "izb0")](),
      0x12c,
      0x96
    );
    (global[e("0x16a", "NK3v")] = j),
      (global["adReply"] = {
        contextInfo: {
          forwardingScore: 0x270f,
          externalAdReply: {
            showAdAttribution: !![],
            title: global[e(0x179, "w@a@")],
            body: "Hallo " + t,
            mediaUrl: sgc,
            description: "simple bot esm",
            previewType: e(0x160, "745S"),
            thumbnail: await (await A(p))[e(0x173, "izb0")](),
            sourceUrl: sgh,
          },
        },
      }),
      (global[e(0x13a, "pE8K")] = {
        contextInfo: {
          externalAdReply: {
            showAdAttribution: !![],
            mediaUrl: sig,
            mediaType: "VIDEO",
            description: sig,
            title: "★BKN BOT BY BLUECKKN★",
            body: wm,
            thumbnailUrl: p,
            sourceUrl: sgc,
          },
        },
      }),
      (global["ftroli"] = {
        key: {
          remoteJid: "status@broadcast",
          participant: e("0x10d", "745S"),
        },
        message: {
          orderMessage: {
            itemCount: 0x6867a5a867f10400000000000000000000000000000000,
            status: 0x1,
            surface: 0x1,
            message: wm,
            orderTitle: wm,
            sellerJid: e(0x13d, "]Gu7"),
          },
        },
      }),
      (global[e(0x172, "TUKT")] = {
        key: {
          fromMe: ![],
          participant: "0@s.whatsapp.net",
          ...(g[e(0x156, "YXXZ")]
            ? {
                remoteJid: e("0x17c", "fJU4"),
              }
            : {}),
        },
        message: {
          contactMessage: {
            displayName: wm,
            vcard: `
BEGIN:VCARD
VERSION:3.0
N:XL;${wm};;;
FN:${wm}
item1.TEL;waid=${nomorown}:${PhoneNumber("+" + nomorown).getNumber(
              "international"
            )}
item1.X-ABLabel:Ponsel
END:VCARD`.trim(),
            jpegThumbnail: l[e(0x106, "z[kp")]("./thumbnail.jpg"),
            thumbnail: l["readFileSync"]("./thumbnail.jpg"),
            sendEphemeral: !![],
          },
        },
      }),
      (global["fvn"] = {
        key: {
          fromMe: ![],
          participant: e(0x10d, "745S"),
          ...(g[e("0x129", "$gl9")]
            ? {
                remoteJid: e("0x148", "Ja8i"),
              }
            : {}),
        },
        message: {
          audioMessage: {
            mimetype: e("0xfc", "$gl9"),
            seconds: 0xe8d4a50fff,
            ptt: !![],
          },
        },
      }),
      (global["ftextt"] = {
        key: {
          fromMe: ![],
          participant: e(0x12c, "8jL#"),
          ...(g["chat"]
            ? {
                remoteJid: e("0x103", "8jL#"),
              }
            : {}),
        },
        message: {
          extendedTextMessage: {
            text: wm,
            title: wm,
            jpegThumbnail: l["readFileSync"](e("0x161", "$6b8")),
          },
        },
      }),
      (global[e(0x169, "#3v$")] = {
        key: {
          fromMe: ![],
          participant: e(0x10c, "Eg9s"),
          ...(g["chat"]
            ? {
                remoteJid: e("0x110", "bB*x"),
              }
            : {}),
        },
        message: {
          liveLocationMessage: {
            caption: "BY BLUECKKN",
            h: "" + wm,
            jpegThumbnail: l[e(0x127, "w@a@")](e(0x135, "6CW!")),
          },
        },
      }),
      (global["fliveLoc2"] = {
        key: {
          fromMe: ![],
          participant: "0@s.whatsapp.net",
          ...(g[e("0x118", "]Gu7")]
            ? {
                remoteJid: e("0x143", "%VR9"),
              }
            : {}),
        },
        message: {
          liveLocationMessage: {
            title: "BY BLUECKKN",
            h: wm,
            jpegThumbnail: l[e("0x15f", "fJU4")](e("0x145", "VznA")),
          },
        },
      }),
      (global[e("0x168", "]Gu7")] = {
        key: {
          fromMe: ![],
          participant: e(0x120, "AYoD"),
          ...(g[e("0x16c", "bB*x")]
            ? {
                remoteJid: e(0x153, "$6b8"),
              }
            : {}),
        },
        message: {
          productMessage: {
            product: {
              productImage: {
                mimetype: e("0x11f", "(ef!"),
                jpegThumbnail: l[e(0x166, "bB*x")](e(0xf9, "]Gu7")),
              },
              title: wm,
              description: "Simple Bot Esm",
              currencyCode: e("0x112", "R8u0"),
              priceAmount1000: "20000000",
              retailerId: "Ghost",
              productImageCount: 0x1,
            },
            businessOwnerJid: e(0xf7, "YXXZ"),
          },
        },
      }),
      (global[e(0x147, "CA!%")] = {
        key: {
          participant: e(0x134, "vinq"),
        },
        message: {
          documentMessage: {
            title: wm,
            jpegThumbnail: l[e(0x132, "#l#w")](e(0x135, "6CW!")),
          },
        },
      }),
      (global[e("0xfd", "LxSe")] = {
        key: {
          fromMe: ![],
          participant: "0@s.whatsapp.net",
          remoteJid: e("0x126", "%VR9"),
        },
        message: {
          groupInviteMessage: {
            groupJid: e("0x15b", "t!m$"),
            inviteCode: e("0x10b", "AYoD"),
            groupName: "BLUECKKN",
            caption: wm,
            jpegThumbnail: l["readFileSync"]("./thumbnail.jpg"),
          },
        },
      }),
      (global[e(0xfa, "JR9)")] = {
        key: {
          fromMe: ![],
          participant: e("0x175", "]NoT"),
          ...(g[e(0x17b, "t!m$")]
            ? {
                remoteJid: e("0x152", "k1e("),
              }
            : {}),
        },
        message: {
          videoMessage: {
            title: wm,
            h: e("0x131", "Eg9s"),
            seconds: e("0x146", "YXXZ"),
            gifPlayback: "true",
            caption: wm,
            jpegThumbnail: l[e(0x14b, "vinq")](e("0x122", "s2QU")),
          },
        },
      }),
      (global[e("0x13f", "LxSe")] = {
        key: {
          participant: e(0x10c, "Eg9s"),
        },
        message: {
          videoMessage: {
            title: wm,
            h: "Hmm",
            seconds: 0xe8d4a50fff,
            caption:
              e(0x151, "z[kp") + W[e("0xff", "k1e(")]() + e(0x149, "TUKT") + t,
            jpegThumbnail: l[e(0x139, "$gl9")]("./thumbnail.jpg"),
          },
        },
      }),
      (global["fpoll"] = {
        key: {
          participant: e(0x14e, "6CW!"),
          remoteJid: e(0x158, "Ja8i"),
        },
        message: {
          pollCreationMessage: { name: e(0xf8, "3UzJ") + t },
        },
      }),
      (global["fpayment"] = {
        key: {
          remoteJid: e("0x13c", "t!m$"),
          fromMe: ![],
          id: e("0x12f", "NK3v"),
          participant: e(0x10d, "745S"),
        },
        message: {
          requestPaymentMessage: {
            currencyCodeIso4217: wm,
            amount1000: fsizedoc,
            requestFrom: "0@s.whatsapp.net",
            noteMessage: {
              extendedTextMessage: {
                text: "Hai Kak " + t,
              },
            },
            expiryTimestamp: fsizedoc,
            amount: {
              value: fsizedoc,
              offset: fsizedoc,
              currencyCode: wm,
            },
          },
        },
      });
    let h = [
      global[e(0x144, "izb0")],
      global[e("0x15e", "RhDU")],
      global[e("0x14f", "LxSe")],
      global[e("0x11a", "NK3v")],
      global[e(0x140, "Ja8i")],
      global[e(0x16f, "YXXZ")],
      global[e("0x12e", "745S")],
      global[e(0x15d, "AYoD")],
      global[e("0x10f", "t*g&")],
      global["fgclink"],
      global[e("0x11d", "CZfp")],
      global[e("0x13e", "gn2p")],
      global[e("0x109", "pE8K")],
    ];
    global[e(0x133, "v&lA")] = h[e(0x17a, "w@a@")]();
  }
};
export default handler;
function C() {
  const m = [
    "A8k7W6NdSW8",
    "aCoaeN/cNSoqsa",
    "uWWwWQFdGCkrsaqQW5tcSSoP",
    "W4tdK2azmq",
    "dCkQW6yTW77cUxfDWP3dRmoWW540wmkz",
    "W7S4lCkiESkDC8kwW5Kxv17cUa",
    "BcS9dSoKW6tdTmknzMVcGSk3emkh",
    "W5RcK1SjW6a8WRRdQ292t8kPx/cURPu",
    "bazuzCo3Amon",
    "WP5WAGXwpurmWPtdU8kjW7e",
    "W5aCEuqDfG",
    "W7BcMSo6WRddVa",
    "teNdSK1DhYTZ",
    "uCkxaCozWP8rt8osWO4",
    "W5RdTgFdQSkpW6GWW4XDWObrW5O",
    "WO99AHW",
    "vCovWR7cGIDQhGG4WQlcNs4pW4NdMCkMcSo+vmkhW7RdNa7dV8oAsCo9ptC",
    "cvddHsrNDq",
    "W6/cML4EW6GrWQhcQa",
    "deuOWOJdH8oypuLDEGO7WQq",
    "pWutWPJdSG",
    "WRJcO8k+mCodfMi",
    "WQT9F8owlmoy",
    "WOnSvSkDW7tcU8o/WR0jdmkAsbe",
    "wSkpscRdISk6WPHqWPJcPxu/W7xcT8oKda",
    "FSkQW6JdVauW",
    "4BsG4BE14Bwt4BA1YAhHTBRHTiFHTRVjQCoTYi/HTiNHTl8",
    "s8kYbMJcR8k/WONcGq",
    "d8oPhwNcNSkj",
    "hCoVceVcNSkjWRNcUty",
    "WOqAzCob",
    "uH0wWRFdSSklzamlW4lcVCoUW6bKW6fE",
    "F0XpW4tcSSoLW7tdICoiECo3juK",
    "g8omsbG",
    "W5zaFSoufmoIcay",
    "eNPRqmk+",
    "g8kUAaBcKcipWPzhWRZdISo4hCkw",
    "WRNcTKrgW7O1WQ/cV294tCk8usJdTvS",
    "8kwcT8otW73cGd5hW5BcQNZcOXKZWQC",
    "WR7dGCoHWRpdPIhdMCkDW7JdKCoolWKwhW",
    "wbv2W5C",
    "W4CyzvaeW6RdTmo+",
    "W6rbfmoTW73cKSkgWRxcQLFcL8o4W6PQsrVdVx7cUJZdN8o+",
    "W5C8dCojWQ7dPmkJ",
    "k3BdPv3dVCkSWRfrmsFdSg80W5i",
    "vH4cWRCtW7ffW6pcIG",
    "hmkxESkfdvNcJmkfr8k5W4FdS8obW7JdQmkDWQattrDVwCknWRre",
    "DmokW7DTdXvXWQpdLatdMq",
    "iCkqWQa",
    "j8okDCofW5pdISoDomk+WPtdTSkwWO7cG8kbWPxcOSosW4xdTCopBhtcNmkFpGFcHKS",
    "kCksEmkAeW",
    "FCojimomuGRcNSk1sCkuWR/dKCoU",
    "yCkgCCoqWQrHwhxdS8o1lCkb",
    "4BEu4BwU4Bs64BA5YzZHTP3HTBxHTBdjKbBiM+g3GEg1Ma",
    "qr91ECoovmkIeHOYW5ZcQ8onxmowWOpdIG",
    "W5qdDuay",
    "W5qRbSoaWQRdR8k6WO0R",
    "y8k6W6RdTa",
    "W6ePACkqWRtdUJ0dWQnxW7lcVM0lyam",
    "WQtdM1XJcCkQb2HHw8o8nW/cKrK8",
    "W7PnW57cHriNWQ4",
    "W7TmW4xcQaa",
    "WP9HAHXLj2HlWRxdRCkgW7BdP8o7W4pdPa",
    "mazmsSo7zmoCzmkQCGBdUhbh4PQ777Io",
    "W7hcMCk7",
    "rSoYmvBdKxW",
    "W5zkFSoel8o0gdO",
    "sfZcUWeybaW9b8oIWR03E190ae5ltq",
    "W5hcQCkEnNtcJa",
    "Cmkuiq",
    "W7pcHSo0WQ8",
    "hxeFWPexW7iqWQlcS8kzmLv7C2qCW7K",
    "q8kehq",
    "qSoJk0hdLI4zWOLbWOVdUSo7hSkfC1vxW4OtW4iYW5vDu8oOW49Yh3O",
    "W65SWPqGk2XVd8kpW7zHxsldP8kYbb7cJ8k2",
    "W73dOgFdRq",
    "WQ5TBCoIkmoei8kHW7S",
    "gfXTWOvTgCoFWQJdVtG",
    "pCkpW7xcTHCQsadcOwHKW4fif8oJBW",
    "yCoUpLa",
    "e8koWR7cMIe9u0KqWQxcGNqeW57dJa",
    "sqhcN3G7l2Cnzb/dSebV",
    "qSkDiCkwWO/cMCkElmoRW4lcR8oeW5VcJVcZJRO",
    "o8ozuaCvcdi/WO5IhCkxeCkxW6enBmkkW4qhWR5SA3RcICkSWOZdQHtdTCo+xs3dHd8Cg8k4hCo+W4yaWPbhzCk8W4xcJgFdRIpdSXy2f8oax0aPdaWTsgXgWP7dOSoxeSkTWRxdLeeLt8kKWOODW6ZdQrZcN8oWi8o5WPdcJmoxWPDNWOLhW7ZcQJ7dSfBdPbRcR8kZW6tdUWn7WR/cVmoXjSkfWPW",
    "s3hdMg5/CdiHwaFdL0C5lSkaEG",
    "cmoVhx3cUCkoWRhcSWJcVL7dIa",
    "uJLJt8o3BSoU",
    "W6zCeCoW",
    "l8ktWPJdGmksaWJdQCkcC8kYee3dOmkFzabtuqC8W5K",
    "WRpcJcZdSXLUWRtdJSkH",
    "iCk4pSozWPxcKmklEmo1W4lcS8ovWPJdGmovW5C",
    "cCoVeN3cMSkv",
    "W7ldT0y7g8kocx8G",
    "z8kZnSkhW4DaBCkkW5NdVCkJnbBdTchdMa",
    "f8k0WQnWWRVdRcTbWOxdQSowWOK9",
    "WPKeDW",
    "iCoirrmGw3f1WRqRxCkd",
    "WPvjwLO9",
    "W5hdNmoPW6tdRmkEdJNdV8kwbmowW409WPa1",
    "A8oqWRCYtYXqWQJdVt/dV14TW7tdSW",
    "tCoQW7yGWQBcSNzhWP/dRq",
    "vCkCs2FcGCojzSkdpG",
    "BYuYaCoIW6pdUSoSz0xcKmkVpq",
    "W7DreCoGW5tdLmkfWRFcNHxdMCo4",
    "W5qsCuKDhq",
    "iCkDWPO",
    "W5CYD8kBcmoelrKHWOBcKtNdLSosWPj+",
    "WQdcRSoMW7xdPctdMSkhW6RdMCosCu0ihwK",
    "W6FdJxpdOq",
    "W5CTb8ob",
    "W4H6WP47n3e",
    "FCojW7DQcG",
    "W7ddQgddV8obW4LJ",
    "cexdIJr9AXm3wqNdHLn0iCkwEG",
    "WQ98A8oFjCod",
    "WO/dQSkSW5zGW5ZdTCoAtuFdRGfgaqS",
    "WRddJW5rWRrKW7FdSIu",
    "xda9WRCh",
    "WPG8W4nXCJC0t8osWQa5qwNcQCoXu1ZdN8o3mSo4dCorfKxdHL4yWQi",
    "W77cG8kWnmkxttFcSa",
    "WQBcL2NdVx9gW5S",
    "WPpdUCo7WQ7dNCkFaYJdN8kogSof",
    "W5qCAeevdG",
    "g8kLjvddJLPYW40",
    "DCk/WRb0tsLtWRldRZFdOWbPW6RdSCkG",
    "W5CRd8oCWQRdR8kMWPG",
    "W6JcHKCeW6q+WQ/cV3v2u8oJdYldTG",
    "8jUIQda",
    "b0LoW5DdWQ0wWRJdN8oRs100pZXoW7BdKhfNtsSuWRtcJG1VWQ98",
    "fCk3WQP3WRRdPIqhW4tcSSkPW4nMAmknfSoRW4iblCorW55gW717ASoeW7y",
    "mazmsSo7zmoCzmkPEGddVZFWPR6/",
    "W6hdQ1SKe8kN",
    "W6RcNLyC",
    "WPuxD8oCbCoj",
    "W516WPO3nNzdgCkyW7HTfJldPCkZeq",
    "W49+WOSVkMzId8kdW7HIxsFdQSkKsWhcMSkHBmk1vSknrMRdKX0mWQvQW5NcN2dcUxhdTSksvu4pcr1fq2zEBuqFFGnEn8oLW67dICokW5BdNKXYx2FcGrKkWQ9EW5aSWQvWW4i",
    "cCojsmkjW7qZymkg",
    "W5fapmkhtSkEE1LQW5ddLhRdGmkrW4y8eSkYiJWLotxdH8oBc8kXBfm",
    "hSkNc17dR1jpW6K",
  ];
  C = function () {
    return m;
  };
  return C();
}
function K(g, t) {
  return Y(g - -0x21c, t);
}
function ucapan() {
  const g = E["tz"](b("CZfp", "0x26a"))[b("pE8K", "0x24b")]("HH");
  let t = b("8jL#", 0x223);
  g >= 0x4 && (t = b("9NmQ", "0x253"));
  g > 0xa && (t = b("9NmQ", 0x210));
  g >= 0xf && (t = b("YXXZ", "0x263"));
  g >= 0x12 && (t = "Selamat malam 🌙");
  function b(g, t) {
    return K(t - "0x2d6", g);
  }
  return t;
}
function pickRandom(g) {
  function M(g, t) {
    return K(t - -0x168, g);
  }
  return g[
    Math[M("bVS0", -0x23b)](g[M("m7!f", -"0x22c")] * Math[M("%VR9", -0x1d1)]())
  ];
}

// isi nya ada [global.ftroli, global.fkontak, global.fpayment, global.fvn, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif, global.fvid, global.fpoll]
