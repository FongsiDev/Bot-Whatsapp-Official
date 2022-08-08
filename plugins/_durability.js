let handler = (m) => m;

handler.before = async function (m) {
  let user = db.data.users[m.sender];

  //Sword
  if (user.sword > 0) {
    if (user.sworddurability < 1) {
      user.sworddurability = 30;
      user.sword -= 1;
    }
  }
  if (user.sword == 0) {
    user.sworddurability = 0;
  }

  //pickaxe
  if (user.pickaxe > 0) {
    if (user.pickaxedurability < 1) {
      user.pickaxedurability = 30;
      user.pickaxe -= 1;
    }
  }
  if (user.pickaxe == 0) {
    user.pickaxedurability = 0;
  }

  //robo
  if (user.robo > 0) {
    if (user.robodurability < 1) {
      user.robodurability = 30;
      user.robo -= 1;
    }
  }
  if (user.robo == 0) {
    user.robodurability = 0;
  }

  //armor
  if (user.armor > 0) {
    if (user.armordurability < 1) {
      user.armordurability = 30;
      user.armor -= 1;
    }
  }
  if (user.armor == 0) {
    user.armordurability = 0;
  }
};
export default handler;
