import { cpus as _cpus, totalmem, freemem } from "os";
import util from "util";
import os from "os";
import { performance } from "perf_hooks";
import { sizeFormatter } from "human-readable";
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
let handler = async (m, { conn, isRowner }) => {
  let _muptime;
  if (process.send) {
    process.send("uptime");
    _muptime =
      (await new Promise((resolve) => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  let muptime = clockString(_muptime);
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us")); //groups.filter(v => !v.read_only)
  const used = process.memoryUsage();
  const cpus = _cpus().map((cpu) => {
    cpu.total = Object.keys(cpu.times).reduce(
      (last, type) => last + cpu.times[type],
      0
    );
    return cpu;
  });
  const cpu = cpus.reduce(
    (last, cpu, _, { length }) => {
      last.total += cpu.total;
      last.speed += cpu.speed / length;
      last.times.user += cpu.times.user;
      last.times.nice += cpu.times.nice;
      last.times.sys += cpu.times.sys;
      last.times.idle += cpu.times.idle;
      last.times.irq += cpu.times.irq;
      return last;
    },
    {
      speed: 0,
      total: 0,
      times: {
        user: 0,
        nice: 0,
        sys: 0,
        idle: 0,
        irq: 0,
      },
    }
  );
  let old = performance.now();
  await m.reply(`${htjava} *T e s t i n g. . .*`);
  let neww = performance.now();
  let speed = neww - old;
  let txt = `${htjava} *P I N G*
  ${speed}ms
  
  ${htjava} *R U N T I M E* 
  ${muptime}
  ${readMore}
  ${htki} *CHATS* ${htka}
  • *${groupsIn.length}* Group Chats
  • *${groupsIn.length}* Groups Joined
  • *${groupsIn.length - groupsIn.length}* Groups Left
  • *${chats.length - groupsIn.length}* Personal Chats
  • *${chats.length}* Total Chats
  
  
  ${htki} *SERVER* ${htka}
  *🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
  *🔵 FreeRAM:* ${format(freemem())}
  
  *💻 Platform:* ${os.platform() == "android" ? "VPS-NASA-C982" : os.platform()}
  *🧿 Server:* ${os.hostname()}
  ${readMore}
  *${htjava} NodeJS Memory Usage*
  ${
    "```" +
    Object.keys(used)
      .map(
        (key, _, arr) =>
          `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${format(
            used[key]
          )}`
      )
      .join("\n") +
    "```"
  }
  
  ${
    cpus[0]
      ? `_Total CPU Usage_
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
          .map(
            (type) =>
              `- *${(type + "*").padEnd(6)}: ${(
                (100 * cpu.times[type]) /
                cpu.total
              ).toFixed(2)}%`
          )
          .join("\n")}
  
  _CPU Core(s) Usage (${cpus.length} Core CPU)_
  ${cpus
    .map(
      (cpu, i) =>
        `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
          cpu.times
        )
          .map(
            (type) =>
              `- *${(type + "*").padEnd(6)}: ${(
                (100 * cpu.times[type]) /
                cpu.total
              ).toFixed(2)}%`
          )
          .join("\n")}`
    )
    .join("\n\n")}`
      : ""
  }
  `
    /*await conn.sendHydrated(m.chat,`
${htjava} *P I N G*
${speed}ms

${htjava} *R U N T I M E* 
${muptime}
${readMore}
${htki} *CHATS* ${htka}
• *${groupsIn.length}* Group Chats
• *${groupsIn.length}* Groups Joined
• *${groupsIn.length - groupsIn.length}* Groups Left
• *${chats.length - groupsIn.length}* Personal Chats
• *${chats.length}* Total Chats


${htki} *SERVER* ${htka}
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

*💻 Platform:* ${os.platform()}
*🧿 Server:* ${os.hostname()}
${readMore}
*${htjava} NodeJS Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`,botdate, null, sgc, '🌎 GROUP OFFICIAL', null,null, [[null,null],[null,null],[null,null]], m) */
    .trim();
  m.reply(txt);
};
handler.help = ["ping", "speed"];
handler.tags = ["info", "tools"];

handler.command = /^(ping|speed|info)$/i;
export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    d,
    " *Days ☀️*\n ",
    h,
    " *Hours 🕐*\n ",
    m,
    " *Minute ⏰*\n ",
    s,
    " *Second ⏱️* ",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}
