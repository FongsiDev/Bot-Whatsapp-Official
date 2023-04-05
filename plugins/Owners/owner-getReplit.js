import fs from "fs";
let handler = async (m, { conn, text }) => {
	let url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
  if (/(\/\/|\.)undefined\./.test(url)) url = "Gk pakai Replit" 
  return m.reply(`Server: ${url}\nUsername: ${process.env.REPL_OWNER || "Gk pakai Replit"}`)
};
handler.help = ["getreplit"];
handler.tags = ["owner"];
handler.command = /^(getreplit)$/i;

handler.owner = true;

export default handler;
