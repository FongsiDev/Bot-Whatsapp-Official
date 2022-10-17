import { canLevelUp } from "../lib/levelling.js";

export function before(m) {
  let user = global.db.data.users[m.sender];
  if (!user.autolevelup) return !0;
  let before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;

  if (before !== user.level) {
    let role = (Object.entries(global.roles)
    .sort((a, b) => b[1] - a[1])
    .find(([, minLevel]) => user.level > minLevel) || Object.entries(global.roles)[0])[0];
    user.role = role;
    m.reply(
      `
🎉ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ${this.getName(m.sender)} ʟᴇᴠᴇʟ ᴜᴩ﹗
• 📉 ᴩʀᴇᴠɪᴏᴜs ʟᴇᴠᴇʟ : ${before}
• 📈 ɴᴇᴡ ʟᴇᴠᴇʟ : ${user.level}
• 🎎 ʀᴏʟᴇ : ${user.role}
gunakan *.profile* untuk mengecek
	`.trim()
    );
  }
}
