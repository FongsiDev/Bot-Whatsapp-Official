import cp, { exec as _exec } from "child_process";
import { promisify } from "util";

let handler = async (m, { conn, isOwner, command, text }) => {
  if (conn.user.jid != conn.user.jid) return;
  try {
    cp.exec(command.trimStart() + " " + text.trimEnd(), (error, stdout) => {
      let result = stdout || error;
      return m.reply(result);
    });
  } catch (e) {
    return m.reply(e);
  }
};
handler.customPrefix = /^[$] /;
handler.command = new RegExp();
handler.rowner = true;
export default handler;