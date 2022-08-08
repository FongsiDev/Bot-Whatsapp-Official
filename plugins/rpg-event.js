const rewards = {
  exp: 7000,
  money: 100000,
  potion: 5,
  legendary: 5,
  mythic: 4,
  limit: 5,
};

const cooldown = 2592000000;
let handler = async (m) => {
  let user = global.db.data.users[m.sender];
  if (new Date() - user.lastmonthly < cooldown)
    throw `You have already claimed this special crate claim, wait for *${(
      user.lastmonthly +
      cooldown -
      new Date()
    ).toTimeString()}*`;
  let text = "";
  for (let reward of Object.keys(rewards))
    if (reward in user) {
      user[reward] += rewards[reward];
      text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`;
    }
  conn.sendButton(
    m.chat,
    "*––––––『 EVENT 』––––––*",
    text.trim(),
    null,
    [
      ["Inventory", ".inv"],
      ["Menu", ".menu"],
    ],
    m
  );
  user.lastmonthly = new Date() * 1;
};
handler.help = ["special"];
handler.tags = ["rpg"];
handler.command = /^(special)$/i;

handler.cooldown = cooldown;

export default handler;
