let handler = (m) => m;

handler.before = function (m) {
  let user = global.db.data.users[m.sender];
  let role =
    user.level <= 2
      ? "Warrior V"
      : user.level >= 2 && user.level <= 4
      ? "Warrior V"
      : user.level >= 4 && user.level <= 6
      ? "Warrior IV"
      : user.level >= 6 && user.level <= 8
      ? "Warrior III"
      : user.level >= 8 && user.level <= 10
      ? "Warrior II"
      : user.level >= 10 && user.level <= 20
      ? "Warrior I"
      : user.level >= 20 && user.level <= 30
      ? "Elite V"
      : user.level >= 30 && user.level <= 40
      ? "Elite IV"
      : user.level >= 40 && user.level <= 50
      ? "Elite IiI"
      : user.level >= 50 && user.level <= 60
      ? "Elite II"
      : user.level >= 60 && user.level <= 70
      ? "Elite I"
      : user.level >= 70 && user.level <= 80
      ? "Master V"
      : user.level >= 80 && user.level <= 90
      ? "Master IV"
      : user.level >= 90 && user.level <= 100
      ? "Master III"
      : user.level >= 100 && user.level <= 110
      ? "Master II"
      : user.level >= 110 && user.level <= 120
      ? "Master I"
      : user.level >= 120 && user.level <= 130
      ? "Grand Master V"
      : user.level >= 130 && user.level <= 140
      ? "Grand Master IV"
      : user.level >= 140 && user.level <= 150
      ? "Grand Master III"
      : user.level >= 150 && user.level <= 160
      ? "Grand Master II"
      : user.level >= 160 && user.level <= 170
      ? "Grand Master I"
      : user.level >= 170 && user.level <= 180
      ? "Epic V"
      : user.level >= 180 && user.level <= 190
      ? "Epic IV"
      : user.level >= 190 && user.level <= 200
      ? "Epic III"
      : user.level >= 200 && user.level <= 210
      ? "Epic II"
      : user.level >= 210 && user.level <= 220
      ? "Epic I"
      : user.level >= 220 && user.level <= 230
      ? "Legend V"
      : user.level >= 230 && user.level <= 240
      ? "Legend IV"
      : user.level >= 240 && user.level <= 250
      ? "Legend III"
      : user.level >= 250 && user.level <= 260
      ? "Legend II"
      : user.level >= 260 && user.level <= 270
      ? "Legend I"
      : user.level >= 270 && user.level <= 280
      ? "Mythic V"
      : user.level >= 280 && user.level <= 290
      ? "Mythic IV"
      : user.level >= 290 && user.level <= 300
      ? "Mythic III"
      : user.level >= 300 && user.level <= 310
      ? "Mythic II"
      : user.level >= 310 && user.level <= 320
      ? "Mythic I"
      : user.level >= 320 && user.level <= 330
      ? "Mythic Glory V"
      : user.level >= 330 && user.level <= 340
      ? "Mythic Glory IV"
      : user.level >= 340 && user.level <= 350
      ? "Mythic Glory III"
      : user.level >= 350 && user.level <= 360
      ? "Mythic Glory II"
      : user.level >= 360 && user.level <= 370
      ? "Mythic Glory I"
      : user.level >= 370 && user.level <= 380
      ? "Empire V"
      : user.level >= 380 && user.level <= 390
      ? "Empire IV"
      : user.level >= 390 && user.level <= 400
      ? "Empire III"
      : user.level >= 400 && user.level <= 410
      ? "Empire II"
      : user.level >= 410 && user.level <= 420
      ? "Empire I"
      : user.level >= 420 && user.level <= 430
      ? "Eudaemon V"
      : user.level >= 430 && user.level <= 440
      ? "Eudaemon IV"
      : user.level >= 440 && user.level <= 450
      ? "Eudaemon III"
      : user.level >= 450 && user.level <= 460
      ? "Eudaemon II"
      : user.level >= 460 && user.level <= 470
      ? "Eudaemon I"
      : user.level >= 470 && user.level <= 480
      ? "Imortal V"
      : user.level >= 480 && user.level <= 490
      ? "Imortal IV"
      : user.level >= 490 && user.level <= 500
      ? "Imortal IV"
      : user.level >= 500 && user.level <= 600
      ? "Imortal III"
      : user.level >= 600 && user.level <= 700
      ? "Imortal III"
      : user.level >= 700 && user.level <= 800
      ? "Imortal II"
      : user.level >= 800 && user.level <= 900
      ? "Imortal II"
      : user.level >= 900 && user.level <= 1000
      ? "Imortal I"
      : "Imortal Top 10 ★";
  user.role = role;
  return true;
};

export default handler;
