export function before(m) {
  let user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    conn.sendButtonDoc(
      m.chat,
      `Kamu berhenti AFK!\nAlasan: ${
        user.afkReason ? user.afkReason : "No Reason"
      }\nSelama ${(new Date() - user.afk).toTimeString()} Yang Lalu
  `,
      wm,
      "Hai Kak",
      "Ya",
      m,
      fakeig
    );
    user.afk = -1;
    user.afkReason = "";
  }
  let jids = [
    ...new Set([
      ...(m.mentionedJid || []),
      ...(m.quoted ? [m.quoted.sender] : []),
    ]),
  ];
  for (let jid of jids) {
    let user = global.db.data.users[jid];
    if (!user) continue;
    let afkTime = user.afk;
    if (!afkTime || afkTime < 0) continue;
    let reason = user.afkReason || "";
    conn.sendButtonDoc(
      m.chat,
      `Jangan tag dia!\nDia sedang AFK.\nAlasan: ${
        reason ? reason : "No Reason"
      }\nSelama ${(new Date() - afkTime).toTimeString()} Yang Lalu
  `,
      wm,
      "Maaf Kak",
      "Ya",
      m,
      fakeig
    );
  }
  return true;
}
//Made By BlueCkkn
