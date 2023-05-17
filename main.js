process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with->
dotenv.config();
import "./config.js";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
import glob from "glob";
import path, { join, resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { platform } from "process";
//import YT from "youtubeposter.js";
import chokidar from "chokidar";
import ffmpeg from "fluent-ffmpeg";
/*import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
*/
import JSONdb from "simple-json-db";
import { Boom } from "@hapi/boom";
global.__filename = function filename(
  pathURL = import.meta.url,
  rmPrefix = platform !== "win32"
) {
  return rmPrefix
    ? /file:\/\/\//.test(pathURL)
      ? fileURLToPath(pathURL)
      : pathURL
    : pathToFileURL(pathURL).toString();
};
global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
};
global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};
import * as ws from "ws";
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch,
  watchFile,
} from "fs";
import yargs from "yargs";
import { spawn, exec } from "child_process";
import lodash from "lodash";
import chalk from "chalk";
import pino from "pino";
import syntaxerror from "syntax-error";
import { tmpdir } from "os";
import { format } from "util";
import { makeWASocket, protoType, serialize } from "./lib/simple_test.js";
import { Low, JSONFile } from "lowdb";
import { mongoDB, mongoDBV2 } from "./lib/mongoDB.js";
import store from "./lib/store.js";
import cloudDBAdapter from "./lib/cloudDBAdapter.js";
const { DisconnectReason, fetchLatestBaileysVersion, useMultiFileAuthState } = (
  await import("@adiwajshing/baileys")
).default;
const { CONNECTING } = ws;
const { chain } = lodash;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

protoType();
serialize();

global.API = (name, path = "/", query = {}, apikeyqueryname) =>
  (name in global.APIs ? global.APIs[name] : name) +
  path +
  (query || apikeyqueryname
    ? "?" +
      new URLSearchParams(
        Object.entries({
          ...query,
          ...(apikeyqueryname
            ? {
                [apikeyqueryname]:
                  global.APIKeys[
                    name in global.APIs ? global.APIs[name] : name
                  ],
              }
            : {}),
        })
      )
    : "");
global.timestamp = {
  start: new Date(),
};

const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.prefix = new RegExp(
  "^[" +
    (opts["prefix"] || "‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-").replace(
      /[|\\{}()[\]^$+*?.\-\^]/g,
      "\\$&"
    ) +
    "]"
);

global.db = new Low(
  /https?:\/\//.test(opts["db"] || "")
    ? new cloudDBAdapter(opts["db"])
    : /mongodb(\+srv)?:\/\//i.test(opts["db"])
    ? opts["mongodbv2"]
      ? new mongoDBV2(opts["db"])
      : new mongoDB(opts["db"])
    : new JSONFile(`${opts._[0] ? opts._[0] + "_" : ""}database.json`)
);
global.db_bc = new JSONdb(`./database.bak.json`);
global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(async function () {
        if (!global.db.READ) {
          clearInterval(this);
          resolve(
            global.db.data == null ? global.loadDatabase() : global.db.data
          );
        }
      }, 1 * 1000)
    );
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read().catch(console.error);
  global.db.READ = null;
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {}),
  };
  global.db.chain = chain(global.db.data);
  try {
    exec(
      `cp database.bak.json ${opts._[0] ? opts._[0] + "_" : ""}database.json`
    );
  } catch (e) {
    null;
  }
};
loadDatabase();

global.authFile = `${
  opts._[0] || opts["multi"] ? "session" : "session.data.json"
}`;
const { state, saveState, saveCreds } = opts["multi"]
  ? await useMultiFileAuthState(`./${authFile}`)
  : store.useSingleFileAuthState(global.authFile);
const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      levelFirst: true,
      ignore: "hostname",
      translateTime: true,
    },
  },
}).child({ class: "baileys" });
const { version, isLatest } = await fetchLatestBaileysVersion();

console.log(
  `Type State: ${opts["multi"] ? "MultiFileAuth" : "SingleFileAuth"}`
);
console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
const connectionOptions = {
  version,
  logger: pino({ level: "silent" }),
  printQRInTerminal: true,
  connectTimeoutMs: 60_000,
  keepAliveIntervalMs: 1000,
  defaultQueryTimeoutMs: 0,
  syncFullHistory: true,
  markOnlineOnConnect: true,
  generateHighQualityLinkPreview: true,
  patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(
      message.buttonsMessage ||
      message.templateMessage ||
      message.listMessage
    );
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadataVersion: 2,
              deviceListMetadata: {},
            },
            ...message,
          },
        },
      };
    }
    return message;
  },
  getMessage: async (key) => {
    if (store) {
      const msg = await store.loadMessage(key.remoteJid, key.id);
      return msg.message || undefined;
    }
    return {
      conversation: `hello, i'm ${namebot_1}`,
    };
  },
  browser: ["WhatsApp Multi Device", "Safari", "6.6.1"],
  auth: state,
  // logger: pino({ prettyPrint: { levelFirst: true, ignore: 'hostname', translateTime: true },  prettifier: require('pino-pretty') }),
  // logger: P({ level: 'trace' })
};

global.conn = makeWASocket(connectionOptions);
conn.isInit = false;

/*
global.YT = new YT.YoutubePoster({ loop_delays_in_min: 60000 });
global.YT.on("notified", async (data) => {
  await conn.sendButton(
    data.ChannelDATA.ChannelSend,
    `
*${htki} YOUTUBE NOTIFIKASI ${htka}*
*_${data.video.author.name}_* telah upload video baru!
${htjava} *Title:* ${data.video.title}
📤 *Published:* ${data.video.pubDateText}${
      data.video.link == data.video_2.url
        ? `\n⌚ *Duration:* ${data.video_2?.durationH}`
        : ""
    }
👁️ *Views:* ${data.video.viewsText}
🔗 *Url:* ${data.video.link}
📔 *Description:* ${
      data.video.description?.length
        ? data.video.description.split("\n").join(" ").substr(0, 105) + "..."
        : data.video.description
    }
  `.trim(),
    wm,
    data.video.thumbnail,
    [
      ["🎶 Audio", `!yta ${data.video.link} yes`],
      ["🎥 Video", `!ytv ${data.video.link} yes`],
      ["🔎 Youtube Search", `!yts ${data.video.link}`],
    ],
    null,
    fakes
  ).catch(() => { return; });;
});
*/
if (!opts["test"]) {
  setInterval(async () => {
    if (global.db.data) {
      await db_bc.JSON(global.db.data);
      setTimeout(async () => {
        await db_bc.sync();
      }, 5000);
      await global.db.write().catch(console.error);
      try {
        (await import("./lib/backup.js")).default();
      } catch (e) {
        null;
      }
    }
    if (opts["autocleartmp"])
      try {
        await clearTmp();
      } catch (e) {
        console.error(e);
        console.log(chalk.cyanBright("Failded clear tmp"));
      }
  }, 60 * 1000);
  if (opts["server"]) (await import("./server.js")).default(PORT, global.conn);
}

/* Clear */
async function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, "./tmp")];
  const filename = [];
  tmp.forEach((dirname) =>
    readdirSync(dirname).forEach((file) => filename.push(join(dirname, file)))
  );
  return filename.map((file) => {
    const stats = statSync(file);
    if (
      filename.length >= 1 &&
      stats.isFile() &&
      Date.now() - stats.mtimeMs >= 1000 * 60 * 3
    ) {
      return unlinkSync(file); // 3 minutes
      console.log(chalk.cyanBright("Successfully clear tmp"));
    }
    return false;
  });
}

/* Update */

async function connectionUpdate(update) {
  const {
    receivedPendingNotifications,
    connection,
    lastDisconnect,
    isOnline,
    isNewLogin,
  } = update;
  if (isNewLogin) conn.isInit = true;
  if (connection == "connecting")
    console.log(
      chalk.redBright("⚡ Mengaktifkan Bot, Mohon tunggu sebentar...")
    );
  if (connection == "open") {
    await console.log(chalk.green("✅ Tersambung"));
    return await this.sendButton(
      global.logs.stats,
      `Bot Successfully Connected\nServer: ${
        process.env.REPL_OWNER || "Tak ada replit"
      }`,
      author,
      null,
      [["Sabar Commandnya Lagi Reload", "y"]],
      null
    );
  }
  if (isOnline == true) console.log(chalk.green("Status Aktif"));
  if (isOnline == false) console.log(chalk.red("Status Mati"));
  if (receivedPendingNotifications)
    console.log(chalk.yellow("Menunggu Pesan Baru"));
  if (connection == "close")
    console.log(chalk.red("⏱️ koneksi terputus & mencoba menyambung ulang..."));
  global.timestamp.connect = new Date();
  if (
    lastDisconnect &&
    lastDisconnect.error &&
    lastDisconnect.error.output &&
    lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut &&
    conn.ws.readyState !== CONNECTING
  ) {
    console.log(global.reloadHandler(true));
  }
  if (global.db.data == null) await global.loadDatabase();
}
/*
async function connectionUpdate(update) {
  const { connection, lastDisconnect, isNewLogin } = update;
  if (isNewLogin) conn.isInit = true;
  const code =
    lastDisconnect?.error?.output?.statusCode ||
    lastDisconnect?.error?.output?.payload?.statusCode;
  if (
    code &&
    code !== DisconnectReason.loggedOut &&
    conn?.ws.readyState !== CONNECTING
  ) {
    console.log(await global.reloadHandler(true).catch(console.error));
    global.timestamp.connect = new Date();
  }
  if (global.db.data == null) loadDatabase();
  if (connection === "close") {
    let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
    if (reason === DisconnectReason.badSession) {
      console.log(`Bad Session File, Please Delete Session and Scan Again`);
      conn.logout();
    } else if (reason === DisconnectReason.connectionClosed) {
      console.log("Connection closed, reconnecting....");
      //start();
    } else if (reason === DisconnectReason.connectionLost) {
      console.log("Connection Lost from Server, reconnecting...");
      //start();
    } else if (reason === DisconnectReason.connectionReplaced) {
      console.log(
        "Connection Replaced, Another New Session Opened, Please Close Current Session First"
      );
      conn.logout();
    } else if (reason === DisconnectReason.loggedOut) {
      console.log(`Device Logged Out, Please Scan Again And Run.`);
      conn.logout();
    } else if (reason === DisconnectReason.restartRequired) {
      console.log("Restart Required, Restarting...");
      //start();
    } else if (reason === DisconnectReason.timedOut) {
      console.log("harukaection TimedOut, Reconnecting...");
      //start();
    } else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`);
  }
  if (connection == "open") {
    console.log(chalk.yellow("Successfully connected by " + author));
  }
  console.log("Update Connection\n", JSON.stringify(update, null, 4));
  if (update.receivedPendingNotifications) {
    return await this.sendButton(
      global.logs.stats,
      `Bot Successfully Connected\nServer: ${
        process.env.REPL_OWNER || "Tak ada replit"
      }`,
      author,
      null,
      [["Sabar Commandnya Lagi Reload", "y"]],
      null
    );
  }
}
*/
process.on("unhandledRejection", (reason, p) => {
  console.log(" [AntiCrash] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [AntiCrash] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [AntiCrash] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", () => {
  null;
});
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (restatConn) {
  try {
    const Handler = await import(`./handler.js?update=${Date.now()}`).catch(
      console.error
    );
    if (Object.keys(Handler || {}).length) handler = Handler;
  } catch (e) {
    console.error(e);
  }
  if (restatConn) {
    const oldChats = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, { chats: oldChats });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.Database);
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("presence.update", conn.presenceUpdate);
    conn.ev.off("connection.update", conn.connectionUpdate);
    if (!opts["multi"]) conn.ev.off("creds.update", conn.credsUpdate);
  }

  conn.welcome =
    "👋 Hallo @user\n\n                *W E L C O M E*\n⫹⫺ In @subject\n\n⫹⫺ Read *DESCRIPTION*\n@desc";
  conn.bye = "👋 Byee @user\n\n                *G O O D B Y E*";
  conn.spromote = "*@user* Sekarang jadi admin!";
  conn.sdemote = "*@user* Sekarang bukan lagi admin!";
  conn.sDesc = "Deskripsi telah diubah menjadi \n@desc";
  conn.sSubject = "Judul grup telah diubah menjadi \n@subject";
  conn.sIcon = "Icon grup telah diubah!";
  conn.sRevoke = "Link group telah diubah ke \n@revoke";
  conn.sAnnounceOn =
    "Group telah di tutup!\nsekarang hanya admin yang dapat mengirim pesan.";
  conn.sAnnounceOff =
    "Group telah di buka!\nsekarang semua peserta dapat mengirim pesan.";
  conn.sRestrictOn = "Edit Info Grup di ubah ke hanya admin!";
  conn.sRestrictOff = "Edit Info Grup di ubah ke semua peserta!";

  conn.handler = handler.handler.bind(global.conn);
  conn.Database = handler.Database.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.presenceUpdate = handler.presenceUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  if (!opts["multi"]) conn.credsUpdate = saveState.bind(global.conn, true);

  conn.ev.on("messages.upsert", conn.Database);
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("presence.update", conn.presenceUpdate);
  opts["multi"]
    ? conn.ev.on("creds.update", async () => {
        await saveCreds();
      })
    : conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};

global.plugins = {};
const pluginFilter = (filename) => /\.js$/.test(filename);
async function filesInit() {
  const CommandsFiles = glob.sync("./plugins/**/*.js");
  for (let file of CommandsFiles) {
    try {
      const module = await import(file);
      global.plugins[file] = module.default || module;
    } catch (e) {
      conn.logger.error(e);
      delete global.plugins[file];
    }
  }
}
filesInit()
  .then(async (_) => {
    console.log(Object.keys(global.plugins));
    return await conn
      .sendButton(
        global.logs.stats,
        `Bot Successfully Reload Command`,
        author,
        null,
        [
          ["MENU", "/menu"],
          ["Get Session Bot", "/getsessi"],
        ],
        null
      )
      .catch(() => {
        return;
      });
  })
  .catch(console.error);

function FileEv(type, file) {
  const filename = async (file) => file.replace(/^.*[\\\/]/, "");
  console.log(file);
  switch (type) {
    case "delete":
      return delete global.plugins[file];
      break;
    case "change":
      try {
        (async () => {
          const module = await import(
            `${global.__filename(file)}?update=${Date.now()}`
          );
          global.plugins[file] = module.default || module;
        })();
      } catch (e) {
        conn.logger.error(
          `error require plugin '${filename(file)}\n${format(e)}'`
        );
      } finally {
        global.plugins = Object.fromEntries(
          Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b))
        );
      }
      break;
    case "add":
      try {
        (async () => {
          const module = await import(
            `${global.__filename(file)}?update=${Date.now()}`
          );
          global.plugins[file] = module.default || module;
        })();
      } catch (e) {
        conn.logger.error(
          `error require plugin '${filename(file)}\n${format(e)}'`
        );
      } finally {
        global.plugins = Object.fromEntries(
          Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b))
        );
      }
      break;
  }
}
function watchFiles() {
  let watcher = chokidar.watch("plugins/**/*.js", {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true,
    alwaysState: true,
  });
  const pluginFilter = (filename) => /\.js$/.test(filename);
  watcher
    .on("add", (path) => {
      conn.logger.info(`new plugin - '${path}'`);
      return FileEv("add", `./${path}`);
    })
    .on("change", (path) => {
      conn.logger.info(`updated plugin - '${path}'`);
      return FileEv("change", `./${path}`);
    })
    .on("unlink", (path) => {
      conn.logger.warn(`deleted plugin - '${path}'`);
      return FileEv("delete", `./${path}`);
    });
}
watchFiles();

await global.reloadHandler();
/* QuickTest */
async function _quickTest() {
  let test = await Promise.all(
    [
      spawn("ffmpeg"),
      spawn("ffprobe"),
      spawn("ffmpeg", [
        "-hide_banner",
        "-loglevel",
        "error",
        "-filter_complex",
        "color",
        "-frames:v",
        "1",
        "-f",
        "webp",
        "-",
      ]),
      spawn("convert"),
      spawn("magick"),
      spawn("gm"),
      spawn("find", ["--version"]),
    ].map((p) => {
      return Promise.race([
        new Promise((resolve) => {
          p.on("close", (code) => {
            resolve(code !== 127);
          });
        }),
        new Promise((resolve) => {
          p.on("error", (_) => resolve(false));
        }),
      ]);
    })
  );
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
  console.log(test);
  let s = (global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find,
  });

  Object.freeze(global.support);

  if (!s.ffmpeg)
    conn.logger.warn(
      "Please install ffmpeg for sending videos (pkg install ffmpeg)"
    );
  if (s.ffmpeg && !s.ffmpegWebp)
    conn.logger.warn(
      "Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)"
    );
  if (!s.convert && !s.magick && !s.gm)
    conn.logger.warn(
      "Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)"
    );
}

/* QuickTest */
_quickTest()
  .then(() => conn.logger.info("Quick Test Done"))
  .catch(console.error);
//FG - JB Made By 𝙁𝘾 么 Glitch Editz#0433
