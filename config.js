// S C R I P T  O R I  B Y  @BochilGaming 🔭
// M A D E  B Y  BLUECKKN🌱
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • The.Sad.Boy01
// • BLUECKKNBot
// • Rasel comel
// • Xtreshe (Beban)
// • Dll

//[!] Jangan Dihapus, mending ditambahin

import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import moment from "moment-timezone";

/*============= WAKTU =============*/
let wibh = moment.tz("Asia/Jakarta").format("HH");
let wibm = moment.tz("Asia/Jakarta").format("mm");
let wibs = moment.tz("Asia/Jakarta").format("ss");
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`;

let d = new Date(new Date() + 3600000);
let locale = "id";
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset    0 is  0.00
// Offset  420 is  7.00
let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
  Math.floor(d / 84600000) % 5
];
let week = d.toLocaleDateString(locale, { weekday: "long" });
let date = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sweb = "https://blueckkn.repl.co/";
global.sig = global.sweb + "ig";
global.syt = global.sweb + "yt";
global.stik = global.sweb + "tik";
global.sdc = global.sweb + "dc";
global.snh = "https://nhentai.net/g/365296/";

/*============== PAYMENT ==============*/
global.payment = [["Tri3", "088215689772"]];

/*============== NOMOR ==============*/
global.nomorbot = "6282172622047";
global.nomorown = "6289503433262";
global.namebot = " 「 BLUECKKN BOT ⁩㊣ 」";
global.nameown = "BLUECKKN";
global.ownlink = `wa.me/${global.nomorbot}`;
/*============== STAFF ==============*/
global.owner = [["6289503433262", "BLUE CKKN", true]]; // Put your number here
global.mods = []; // Want some help?
global.prems = []; // Premium user bukan disini nambahinnya, ketik .addprem @user 10

/*============== API ==============*/
global.APIs = {
  // API Prefix
  // name: 'https://website'
  nrtm: "https://nurutomo.herokuapp.com",
  rey: "https://server-api-rey.herokuapp.com",
  xteam: "https://api.xteam.xyz",
  zahir: "https://zahirr-web.herokuapp.com",
  lol: "https://api.lolhuman.xyz",
  dhnjing: "https://dhnjing.xyz",
  neoxr: "https://neoxr-api.herokuapp.com",
  zeks: "https://api.zeks.me",
  pencarikode: "https://pencarikode.xyz",
  ana: "https://anabotofc.herokuapp.com/",
  amel: "https://melcanz.com",
  hardianto: "https://hardianto.xyz",
  botstyle: "https://botstyle-api.herokuapp.com",
  adiisus: "https://adiixyzapi.herokuapp.com",
  LeysCoder: "https://leyscoders-api.herokuapp.com",
  kanx: "https://kannxapi.herokuapp.com/",
};
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  "https://api.xteam.xyz": "a7112460aaec989a",
  "https://anabotofc.herokuapp.com/": "AnaBot",
  "https://api.lolhuman.xyz": "c37b848002a90a0acd119b25",
  "https://zahirr-web.herokuapp.com": "zahirgans",
  "https://api.zeks.me": "apivinz",
  "https://pencarikode.xyz": "pais",
  "https://melcanz.com": "gedFijw7",
  "https://neoxr-api.herokuapp.com": "yntkts",
  "https://server-api-rey.herokuapp.com": "apirey",
  "https://botstyle-api.herokuapp.com": "Fa2GhFnr",
  "https://hardianto.xyz": "hardianto",
  "https://leyscoders-api.herokuapp.com": "dappakntlll",
};
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
//GANTI SETERAH MU
global.wm = "                「 BLUECKKN BOT あ⁩ 」"; //Main Watermark
global.wm2 = "¸„٭⊹•~⍣°”ˆ˜¨ BLUECKKNBOT-Md¨˜ˆ”°⍣~•⊹٭„¸";
global.wm3 = "⫹⫺ BLUECKKN 𝗕𝗢𝗧";
global.botdate = `⫹⫺ 𝗗𝗮𝘁𝗲: ${week} ${date}`;
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`;
global.titlebot = "𝗥𝗣𝗚 | Whatsapp ʙᴏᴛ By BLUECKKN";
global.author = "       ┄┄┄┅┅❑ BLUECKKN ❑┅┅┄┄┄";

/*============== LOGO ==============*/
// INI JUGA GANTI SETERAH MU
global.thumb = "https://upload.blueckkn.repl.co/L4CyqphbX.jpg"; //Main Thumbnail
global.thumb2 = "https://upload.blueckkn.repl.co/tISnso4ap.jpg";
global.thumbbc = "https://upload.blueckkn.repl.co/L4CyqphbX.jpg"; //For broadcast
global.giflogo = "https://telegra.ph/file/4da26de483d484af684e8.mp4";

global.fla =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=";

/*============== TEXT ==============*/
global.wait = "```「▰▰▰▱▱▱▱▱▱▱」Loading...```";
global.eror = "*Server eror✘*";

/*=========== TYPE DOCUMENT ===========*/
global.dpptx =
  "application/vnd.openxmlformats-officedocument.presentationml.presentation";
global.ddocx =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
global.dxlsx =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
global.dpdf = "application/pdf";
global.drtf = "text/rtf";

global.thumbdoc = "https://upload.blueckkn.repl.co/ZrSrUebc7.jpg";

/*=========== FAKE SIZE ===========*/
global.fsizedoc = "99999999999999"; // default 10TB
global.fpagedoc = "999";

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = "❏═┅═━–〈"; //top
global.dmenub = "┊•"; //body
global.dmenub2 = "┊"; //body for info cmd on Default menu
global.dmenuf = "┗––––––––––✦"; //footer

// COMMAND MENU
global.dashmenu = "┅━━━━━═┅═❏ *DASHBOARD* ❏═┅═━━━━━┅";
global.cmenut = "❏––––––『"; //top
global.cmenuh = "』––––––"; //header
global.cmenub = "┊𓇬 "; //body
global.cmenuf = "┗━═┅═━––––––๑\n"; //footer
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "; //after
global.pmenus = "┊"; //pembatas menu selector

global.htki = "––––––『"; // Hiasan Titile (KIRI)
global.htka = "』––––––"; // Hiasan Title  (KANAN)
global.lopr = "Ⓟ"; //LOGO PREMIUM ON MENU.JS
global.lolm = "Ⓛ"; //LOGO FREE ON MENU.JS
global.htjava = "⫹⫺"; //hiasan Doang :v
global.hsquere = ["⛶", "❏", "⫹⫺"];

/*============== STICKER WM ==============*/
global.stickpack = ".";
global.stickauth = `By BLUECKKN BOT\nwa.me/${global.nomorbot}`;

global.multiplier = 38; // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: "📊",
      limit: "🎫",
      health: "❤️",
      exp: "✨",
      money: "💹",
      bank: "🏦",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🛍️",
      mythic: "🎁",
      legendary: "🗃️",
      superior: "💼",
      pet: "🔖",
      trash: "🗑",
      armor: "🥼",
      sword: "⚔️",
      pickaxe: "⛏️",
      fishingrod: "🎣",
      wood: "🪵",
      rock: "🪨",
      string: "🕸️",
      horse: "🐴",
      cat: "🐱",
      dog: "🐶",
      fox: "🦊",
      petFood: "🍖",
      iron: "⛓️",
      gold: "🪙",
      emerald: "❇️",
      upgrader: "🧰",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};
global.formatN = (n) =>
  ((Math.log10(n) / 3) | 0) == 0
    ? n
    : Number((n / Math.pow(10, ((Math.log10(n) / 3) | 0) * 3)).toFixed(1)) +
      ["", "K", "M", "B", "T"][(Math.log10(n) / 3) | 0];

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
