import { canLevelUp } from "../lib/levelling.js";
import { levelup } from "../lib/canvas.js";

export async function before(m) {
  let user = global.db.data.users[m.sender];
  if (!user.autolevelup) return !0;
  let before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    let teks = `.             ${user.role}`;
    let str = `
*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]`.trim();
    try {
      const img = await levelup(teks, user.level);
      this.sendButton(m.chat, str, botdate, img, [["Profile", ".pp"]], m);
    } catch (e) {
      this.sendButton(m.chat, str, botdate, img, [["Profile", ".pp"]], m);
    }
  }
}
