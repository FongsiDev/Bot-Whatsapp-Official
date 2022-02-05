const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
const axios = require("axios");
const fs = require("fs");
const ms = require("parse-ms");
const toMs = require("ms");
const util = require("util");
const { exec } = require("child_process");
let nama = "Fongsi";
const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
const welkom = JSON.parse(fs.readFileSync("./database/welcome.json"));
const _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));
const _premium = JSON.parse(fs.readFileSync("./database/premium.json"));
const premium = require("./lib/premium");

async function starts() {
  /* [ CLIENT & APP SERVER ]*/

  const client = new WAConnection();
  client.version = [2, 2143, 3];
  client.logger.level = "warn";
  fs.existsSync("./database/session.json") &&
    client.loadAuthInfo("./database/session.json");
  require("./app")(client);
  await client.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync(
    "./database/session.json",
    JSON.stringify(client.base64EncodedAuthInfo(), null, "\t")
  );

  /* [ WELCOME MESSAGE ]*/

  client.on("group-participants-update", async (anu) => {
    if (!welkom.includes(anu.jid)) return;
    let tz = `❏`;
    function getJeneng(jid) {
      let v =
        jid === client.user.jid
          ? client.user
          : client.contacts[jid] || { notify: jid.replace(/@.+/, "") };
      let PhoneNumber = jid.split("@")[0];
      return v.notify || "+" + PhoneNumber;
    }
    const memJid = anu.participants[0];
    const pushnem = getJeneng(memJid);
    try {
      const mdata = await client.groupMetadata(anu.jid);
      v1 = client.contacts[memJid] || { notify: memJid.replace(/@.+/, "") };
      anu_user = v1.vname || v1.notify || memJid.split("@")[0];

      const iniGc = anu.jid.endsWith("@g.us");
      const jumlahMem = iniGc ? mdata.participants : "";
      time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
      if (anu.action == "add") {
        try {
          pp_user = await client.getProfilePicture(num);
        } catch (e) {
          pp_user =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }
        try {
          ppimg = `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${time_wel}&memcount=${
            jumlahMem.length
          }&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`;
        } catch (e) {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        const response = await axios.get(ppimg, {
          responseType: "arraybuffer",
        });
        const buffer = Buffer.from(response.data, "utf-8");
        let nnnyz2 = buffer;
        const nnnyz3 = await client.prepareMessage(
          mdata.id,
          nnnyz2,
          MessageType.location,
          { thumbnail: nnnyz2 }
        );
        let nnnyz4 = nnnyz3.message["ephemeralMessage"]
          ? nnnyz3.message.ephemeralMessage
          : nnnyz3;
        const nnnyz5 = [
          {
            buttonId: "welcome",
            buttonText: { displayText: "WELCOME" },
            type: 1,
          },
        ];
        const nnnyz6 = {
          contentText: `[ *SELAMAT DATANG* ]\n${tz} *NAME* : @${
            memJid.split("@")[0]
          }\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${
            jumlahMem.length
          }`,
          footerText: `© botz by ${nama} || 2022`,
          buttons: nnnyz5,
          headerType: 6,
          locationMessage: nnnyz4.message.locationMessage,
        };
        client.sendMessage(mdata.id, nnnyz6, MessageType.buttonsMessage, {
          caption: "whatsapp",
          contextInfo: {
            text: "BOTZ16",
            forwardingScore: 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            mentionedJid: [memJid],
          },
          sendEphemeral: true,
        });
      }
      if (anu.action == "remove") {
        try {
          pp_user = await client.getProfilePicture(num);
        } catch (e) {
          pp_user =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }
        try {
          ppimg = `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${time_wel}&memcount=${
            jumlahMem.length
          }&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`;
        } catch (e) {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        const response = await axios.get(ppimg, {
          responseType: "arraybuffer",
        });
        const buffer = Buffer.from(response.data, "utf-8");
        let nnnyz2 = buffer;
        const nnnyz3 = await client.prepareMessage(
          mdata.id,
          nnnyz2,
          MessageType.location,
          { thumbnail: nnnyz2 }
        );
        let nnnyz4 = nnnyz3.message["ephemeralMessage"]
          ? nnnyz3.message.ephemeralMessage
          : nnnyz3;
        const nnnyz5 = [
          {
            buttonId: "goodbye",
            buttonText: { displayText: "BYEEEE" },
            type: 1,
          },
        ];
        const nnnyz6 = {
          contentText: `[ *SELAMAT TINGGAL* ]\n${tz} *NAME* : @${
            memJid.split("@")[0]
          }\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${
            jumlahMem.length
          }`,
          footerText: `© botz by ${nama} || 2022`,
          buttons: nnnyz5,
          headerType: 6,
          locationMessage: nnnyz4.message.locationMessage,
        };
        client.sendMessage(mdata.id, nnnyz6, MessageType.buttonsMessage, {
          caption: "whatsapp",
          contextInfo: {
            text: "BOTZ16",
            forwardingScore: 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            mentionedJid: [memJid],
          },
          sendEphemeral: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
  });

  /* [ CMD STICKER ]*/

  const addCmd = (id, command) => {
    const obj = { id: id, chats: command };
    _scommand.push(obj);
    fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
  };

  const getCommandPosition = (id) => {
    let position = null;
    Object.keys(_scommand).forEach((i) => {
      if (_scommand[i].id === id) {
        position = i;
      }
    });
    if (position !== null) {
      return position;
    }
  };

  const getCmd = (id) => {
    let position = null;
    Object.keys(_scommand).forEach((i) => {
      if (_scommand[i].id === id) {
        position = i;
      }
    });
    if (position !== null) {
      return _scommand[position].chats;
    }
  };

  const checkSCommand = (id) => {
    let status = false;
    Object.keys(_scommand).forEach((i) => {
      if (_scommand[i].id === id) {
        status = true;
      }
    });
    return status;
  };

  /* [ FUNCTION ]*/

  function clean(text) {
    if (typeof text !== "string")
      text = require("util").inspect(text, { depth: 0 });
    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  /* [ MESSAGE BOT ]*/

  client.on("chat-update", async (msg) => {
    try {
      if (!msg.hasNewMessage) return;
      msg = msg.messages.all()[0];
      if (!msg.message) return;
      msg.message =
        Object.keys(msg.message)[0] === "ephemeralMessage"
          ? msg.message.ephemeralMessage.message
          : msg.message;
      if (msg.key && msg.key.remoteJid == "status@broadcast") return;
      const content = JSON.stringify(msg.message);
      const from = msg.key.remoteJid;
      const type = Object.keys(msg.message)[0];
      const {
        text,
        extendedText,
        contact,
        location,
        liveLocation,
        image,
        video,
        sticker,
        document,
        audio,
        product,
      } = MessageType;
      const cmd =
        type === "conversation" && msg.message.conversation
          ? msg.message.conversation
          : type == "imageMessage" && msg.message.imageMessage.caption
          ? msg.message.imageMessage.caption
          : type == "videoMessage" && msg.message.videoMessage.caption
          ? msg.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            msg.message.extendedTextMessage.text
          ? msg.message.extendedTextMessage.text
          : "".slice(1).trim().split(/ +/).shift().toLowerCase();
      const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#z$%^&.?/\\©^z+*@,;]/.test(cmd)
        ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#z$%^&.?/\\©^z+*,;]/gi)
        : "-";
      body =
        type === "conversation" && msg.message.conversation.startsWith(prefix)
          ? msg.message.conversation
          : type == "imageMessage" &&
            msg.message.imageMessage.caption.startsWith(prefix)
          ? msg.message.imageMessage.caption
          : type == "videoMessage" &&
            msg.message.videoMessage.caption.startsWith(prefix)
          ? msg.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            msg.message.extendedTextMessage.text.startsWith(prefix)
          ? msg.message.extendedTextMessage.text
          : type == "listResponseMessage" &&
            msg.message[type].singleSelectReply.selectedRowId
          ? msg.message[type].singleSelectReply.selectedRowId
          : type == "buttonsResponseMessage" &&
            msg.message[type].selectedButtonId
          ? msg.message[type].selectedButtonId
          : type == "stickerMessage" &&
            getCmd(msg.message[type].fileSha256.toString("base64")) !== null &&
            getCmd(msg.message[type].fileSha256.toString("base64")) !==
              undefined
          ? getCmd(msg.message[type].fileSha256.toString("base64"))
          : "";
      budy =
        type === "conversation"
          ? msg.message.conversation
          : type === "extendedTextMessage"
          ? msg.message.extendedTextMessage.text
          : "";
      selectedButton =
        type == "buttonsResponseMessage"
          ? msg.message.buttonsResponseMessage.selectedButtonId
          : "";
      responseButton =
        type == "listResponseMessage"
          ? msg.message.listResponseMessage.title
          : "";
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
      const args = body.trim().split(/ +/).slice(1);
      const getGroupAdmins = (participants) => {
        admins = [];
        for (let i of participants) {
          i.isAdmin ? admins.push(i.jid) : "";
        }
        return admins;
      };
      const botNumber = client.user.jid;
      const isGroup = from.endsWith("@g.us"); //Jangan di ubah
      number = msg.participant ? msg.participant : client.user.jid;
      const sender = isGroup ? number : msg.key.remoteJid;
      const groupMetadata = isGroup ? await client.groupMetadata(from) : "";
      const groupName = isGroup ? groupMetadata.subject : "";
      const groupId = isGroup ? groupMetadata.jid : "";
      const groupMembers = isGroup ? groupMetadata.participants : "";
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
      const isGroupAdmins = groupAdmins.includes(sender) || false;
      const isOwner = botNumber === sender;
      //===================[ MESSAGE ]====================//
      emote = [
        "😁",
        "😆",
        "😉",
        "😋",
        "😎",
        "😍",
        "😘",
        "🥴",
        "🤩",
        "🤪",
        "🤫",
        "😗",
        "😚",
        "☺",
        "🙂",
        "🤗",
        "🤥",
        "🤔",
        "😐",
        "😣",
        "😮",
        "😝",
        "🙃",
        "😲",
        "😤",
        "☹️",
        "😦",
        "😬",
        "😳",
        "😡",
      ];
      const emoji = emote[Math.floor(Math.random() * emote.length)];

      nay1 = {
        key: {
          fromMe: false,
          participant: `0@s.whatsapp.net`,
          ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
        },
        message: {
          extendedTextMessage: {
            text: `${nama} TELAH TERVERIFIKASI\nBOT BY FONGSI [ EMOTE : ${emoji} ]`,
            contextInfo: { participant: `0@s.whatsapp.net` },
          },
        },
      };

      const mention_reply = msg.message?.extendedTextMessage
        ? msg.message.extendedTextMessage.contextInfo.participant
        : "";
      const txt = msg.message.conversation;
      const isAntiLink = isGroup ? antilink.includes(from) : false;
      const isWelkom = isGroup ? welkom.includes(from) : false;
      const isAntiVirtex = isGroup ? antivirtex.includes(from) : false;
      const isPremium = premium.checkPremiumUser(sender, _premium);
      const isMention =
        msg.message.extendedTextMessage === undefined ||
        msg.message.extendedTextMessage === null ||
        msg.message?.extendedTextMessage
          ? msg.message.extendedTextMessage
          : null;

      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      const isQuoted =
        type === "extendedTextMessage" &&
        content.includes("quotedMessage") &&
        !content.includes(botNumber);

      /* [ FORMS ]*/
      const sendKontak = (from, nomor, nama, org = "") => {
        const vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          "FN:" +
          nama +
          "\n" +
          "ORG:" +
          org +
          "\n" +
          "TEL;type=CELL;type=VOICE;waid=" +
          nomor +
          ":+" +
          nomor +
          "\n" +
          "END:VCARD";
        dha.sendMessage(
          from,
          { displayname: nama, vcard: vcard },
          MessageType.contact,
          { quoted: mek }
        );
      };
      const reply = (teks) => {
        client.sendMessage(from, teks, text, { quoted: msg });
      };
      const sendMsg = (teks) => {
        client.sendMessage(from, teks, text);
      };
      const sendText = (teks) => {
        client.sendMessage(from, text, MessageType.text);
      };
      const buttonSend = async (menu, buttons, footerText = "") => {
        buttonsMessage = {
          contentText: menu,
          footerText,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          from,
          { buttonsMessage },
          { quoted: nay1 }
        );
        return client.relayWAMessage(prep);
      };
      const buttonSendf = (cmd, textcmd) => {
        list = [];
        nombor = 1;
        startnum = 0;
        for (let x of cmd) {
          const yy = {
            buttonId: `${prefix}${x}`,
            buttonText: {
              displayText: textcmd[startnum++],
            },
          };
          list.push(yy);
        }
        return list;
      };
      const listmsg = (title, desc, list, footerText = "") => {
        let po = client.prepareMessageFromContent(
          from,
          {
            listMessage: {
              title: title,
              description: desc,
              buttonText: "Pilih Disini",
              footerText,
              listType: "SINGLE_SELECT",
              sections: list,
            },
          },
          {}
        );
        return client.relayWAMessage(po, { waitForAck: true });
      };
      const listmsgf = (cmdmenu, textcmd, desc = "") => {
        list = [];
        nombor = 1;
        startnum = 0;
        for (let x of cmdmenu) {
          const yy = {
            title: "List Button Menu " + nombor++,
            rows: [
              {
                title: textcmd[startnum++],
                description: desc,
                rowId: `${prefix}${x}`,
              },
            ],
          };
          list.push(yy);
        }
        return list;
      };
      const mentions = (teks, memberr, id) => {
        id == null || id == undefined || id == false
          ? client.sendMessage(from, teks.trim(), extendedText, {
              contextInfo: { mentionedJid: memberr },
            })
          : client.sendMessage(from, teks.trim(), extendedText, {
              quoted: msg,
              contextInfo: { mentionedJid: memberr },
            });
      };

      /* [ COMMAND'S ]*/

      switch (command) {
        case "welcome":
          if (!isGroup) return reply("Bukqn grop");
          if (!isGroupAdmins) return reply("Elu Bukan Admin");
          if (args.length < 1) return;
          if (Number(args[0]) === 1) {
            if (isWelkom) return reply("Udah aktif um");
            welkom.push(from);
            fs.writeFileSync("./database/welcome.json", JSON.stringify(welkom));
            reply("Sukses mengaktifkan fitur welcome di group ini ✓");
          } else if (Number(args[0]) === 0) {
            welkom.splice(from, 1);
            fs.writeFileSync("./database/welcome.json", JSON.stringify(welkom));
            reply("Sukses menonaktifkan fitur welcome di group ini ✔");
          } else {
            reply("1 untuk mengaktifkan, 0 untuk menonaktifkan");
          }
          break;
        case "welcomeon":
          if (!isGroup) return reply("Bukqn grop");
          if (!isGroupAdmins) return reply("Elu Bukan Admin");
          if (isWelkom) return reply("Udah aktif um");
          welkom.push(from);
          fs.writeFileSync("./database/welcome.json", JSON.stringify(welkom));
          reply("Sukses mengaktifkan fitur welcome di group ini ✓");
          break;
        case "welcomeoff":
          if (!isGroup) return reply("Bukqn grop");
          if (!isGroupAdmins) return reply("Elu Bukan Admin");
          welkom.splice(from, 1);
          fs.writeFileSync("./database/welcome.json", JSON.stringify(welkom));
          reply("Sukses menonaktifkan fitur welcome di group ini ✔");
          break;
        case "antilink":
          if (!isGroup) return;
          if (!isGroupAdmins) return reply("Elu Bukan Admin");
          if (args.length < 1) return;
          if (Number(args[0]) === 1) {
            if (isAntiLink) return reply("Mode Antilink sudah aktif");
            antilink.push(from);
            fs.writeFileSync(
              "./database/antilink.json",
              JSON.stringify(antilink)
            );
            reply("Sukses mengaktifkan mode anti link di group ini");
          } else if (Number(args[0]) === 0) {
            antilink.splice(from, 1);
            fs.writeFileSync(
              "./database/antilink.json",
              JSON.stringify(antilink)
            );
            reply("Sukes menonaktifkan mode anti link di group ini");
          } else {
            reply("1 untuk mengaktifkan, 0 untuk menonaktifkan");
          }
          break;
        case "antivirtex":
          if (!isGroup) return;
          if (!isGroupAdmins) return reply("Elu Bukan Admin");
          if (args.length < 1) return;
          if (Number(args[0]) === 1) {
            if (isAntiVirtex) return reply("Mode Anti Virtex sudah aktif");
            antivirtex.push(from);
            fs.writeFileSync(
              "./database/antivirtex.json",
              JSON.stringify(antivirtex)
            );
            reply("Sukses mengaktifkan mode anti virtex di group ini");
          } else if (Number(args[0]) === 0) {
            antivirtex.splice(from, 1);
            fs.writeFileSync(
              "./database/antivirtex.json",
              JSON.stringify(antivirtex)
            );
            reply("Sukes menonaktifkan mode anti virtex di group ini");
          } else {
            reply("1 untuk mengaktifkan, 0 untuk menonaktifkan");
          }
          break;
        case "tagall":
          if (!isGroup) return reply(await random(mess.only.group));
          if (!isGroupAdmins) return reply(await random(mess.only.admin));
          members_id = [];
          teks = args.length > 1 ? body.slice(8).trim() : "";
          teks += "\n\n";
          for (let mem of groupMembers) {
            teks += `*#* @${mem.jid.split("@")[0]}\n`;
            members_id.push(mem.jid);
          }
          mentions(teks, members_id, true);
          break;
        case "kick":
          if (!isGroup) return;
          if (!isGroupAdmins) return reply("Elu Bukan Admin");
          if (!isBotGroupAdmins) return reply("Boy Harus Admin");
          if (!isMention) return reply("Tag target yang ingin di tendang!");
          if (isQuoted) {
            teks = "*Mengeluarkan :* " + mention_reply.split("@")[0];
            mentions(teks, mention_reply, true);
            client.groupRemove(from, [mention_reply]).catch();
          } else {
            mentioned =
              msg.message.extendedTextMessage.contextInfo.mentionedJid;
            teks = "*Mengeluarkan :* ";
            for (let _ of mentioned) {
              teks += `@${_.split("@")[0]}\n`;
            }
            mentions(teks, mentioned, true);
            mentioned.map((v) => {
              client.groupRemove(from, [v]).catch();
            });
          }
          break;
        case "listadmin":
          if (!isGroup) return;
          teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`;
          no = 0;
          for (let admon of groupAdmins) {
            no += 1;
            teks += `[${no.toString()}] @${admon.split("@")[0]}\n`;
          }
          mentions(teks, groupAdmins, true);
          break;
        case "linkgc":
          if (!isGroup) return;
          if (!isGroupAdmins) return reply("Elu Bukan Admin");
          if (!isBotGroupAdmins) return reply("Boy Harus Admin");
          linkgc = await client.groupInviteCode(from);
          reply("https://chat.whatsapp.com/" + linkgc);
          break;
        case "leave":
          if (!isOwner) return;
          client.groupLeave(from);
          break;
        case "shutdown":
          if (!isOwner) return;
          reply("Shutdown Bot In 3 Second....");
          setTimeout(() => {
            client.close();
          }, 3000);
          break;
        case "join":
          if (!isOwner) return;
          if (isGroup) return reply("GUNAKAN FITUR INI DI PESAN PRIBADI");
          try {
            ini_url = args[0];
            if (args.length < 1) return reply(`LINK NYA MANA??`);
            var codeInvite = ini_url.split("https://chat.whatsapp.com/")[1];
            if (!codeInvite) return reply("pastikan link sudah benar!");
            var response = await client.acceptInvite(codeInvite);
            reply("SUKSES!!!");
          } catch {
            reply("LINK ERROR!");
          }
          break;
        case "addcmd":
        case "setcmd":
          if (!isPremium)
            return reply(
              `Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`
            );
          if (isQuotedSticker) {
            if (!args[0])
              return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
            var kodenya =
              msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
                "base64"
              );
            addCmd(kodenya, "#" + args[0]);
            reply("Done!");
          } else {
            reply("tag stickenya");
          }
          break;
        case "delcmd":
          if (!isPremium)
            return reply(
              `Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`
            );
          if (!isQuotedSticker)
            return reply(`Penggunaan : ${command} tagsticker`);
          var kodenya =
            msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          _scommand.splice(getCommandPosition(kodenya), 1);
          fs.writeFileSync(
            "./database/scommand.json",
            JSON.stringify(_scommand)
          );
          reply("Done!");
          break;
        case "listcmd":
          let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
          let cemde = [];
          for (let i of _scommand) {
            cemde.push(i.id);
            teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
          }
          mentions(teksnyee, cemde, true);
          break;
        case "premium":
          if (!isOwner) return;
          if (args[0] === "add") {
            if (msg.message.extendedTextMessage != undefined) {
              mentioned =
                msg.message.extendedTextMessage.contextInfo.mentionedJid;

              premium.addPremiumUser(mentioned[0], args[2], _premium);
              reply(
                `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${
                  mentioned[0]
                }\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${
                  ms(toMs(args[2])).hours
                } hour(s) ${ms(toMs(args[2])).minutes} minute(s)`
              );
            } else {
              premium.addPremiumUser(
                args[1] + "@s.whatsapp.net",
                args[2],
                _premium
              );
              reply(
                `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${
                  args[1]
                }@s.whatsapp.net\n➸ *Expired*: ${
                  ms(toMs(args[2])).days
                } day(s) ${ms(toMs(args[2])).hours} hour(s) ${
                  ms(toMs(args[2])).minutes
                } minute(s)`
              );
            }
          } else if (args[0] === "del") {
            if (msg.message.extendedTextMessage != undefined) {
              mentioned =
                msg.message.extendedTextMessage.contextInfo.mentionedJid;
              _premium.splice(
                premium.getPremiumPosition(mentioned[0], _premium),
                1
              );
              fs.writeFileSync(
                "./database/premium.json",
                JSON.stringify(_premium)
              );
              reply("Berhasil");
            } else {
              _premium.splice(
                premium.getPremiumPosition(
                  args[1] + "@s.whatsapp.net",
                  _premium
                ),
                1
              );
              fs.writeFileSync(
                "./database/premium.json",
                JSON.stringify(_premium)
              );
              reply("Berhasil");
            }
          } else {
            reply("premium add/del _@tag|nomor");
          }
          break;
        case "premiumcheck":
        case "cekpremium":
          if (!isPremium) return reply("Hanya Member premium yg bisa cek ini");
          const cekExp = ms(
            (await premium.getPremiumExpired(sender, _premium)) - Date.now()
          );
          reply(
            `*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
          );
          break;
        case "listprem":
        case "listpremium":
          let txt4 = `「 *PREMIUM USER LIST* 」\n\n`;
          let men = [];
          for (let i of _premium) {
            men.push(i.id);
            const checkExp = ms(i.expired - Date.now());
            txt4 += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${
              checkExp.days
            } day(s) ${checkExp.hours} hour(s) ${
              checkExp.minutes
            } minute(s)\n\n`;
          }
          mentions(txt4, men, true);
          break;
        case "belipremium":
        case "buypremium":
        case "sewabot":
          teksnya = `*── 「 PRICE LIST 」 ──*

*SHERLYNN SEWA BOT WA*
FITUR:ANTILINK,WELCOME,ADD,KICK,DEMOTE,DAN MASIH BANYAK LAGI

HARGA PERMANEN:~25k~ PROMO!!! *10K* MINAT? HUBUNGI OWNER`;
          reply(teksnya);
          break;
        case "return":
          if (!isOwner) return;
          try {
            var evaled = clean(await eval(budy.slice(8)));
            return client
              .sendMessage(from, evaled, text, { quoted: nay1 })
              .catch((e) => {
                client
                  .sendMessage(from, e, text, {
                    quoted: nay1,
                  })
                  .catch(() => {
                    null;
                  });
              });
          } catch (err) {
            e = String(err);
            reply(e);
          }
          break;
        case "restart":
          if (!isOwner) return;
          reply("Tunggu");
          exec(`node main`);
          reply("_Restarting Bot Success_");
          break;
        default:
          const tt = [
            "https://chat.whatsapp.com/",
            "http://chat.whatsapp.com/",
          ];
          const regEx = new RegExp(tt.join("|"), "gi");
          budy.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
          if (budy.match(regEx)) {
            if (!isGroup) return;
            if (isOwner) return;
            if (!isAntiLink) return;
            if (isGroupAdmins) return;
            var Kick = `${sender.split("@")[0]}@s.whatsapp.net`;
            reply(
              `「 *LINK TERDETEKSI* 」\n\n_Kamu Akan Di Kick Dari Group!!_`
            );
            setTimeout(() => {
              client.groupRemove(from, [Kick]).catch((e) => {
                reply(`*ERROR:* ${e}`);
              });
            }, 3000);
          }
          if (txt.length > 1500) {
            if (!isGroup) return;
            if (isOwner) return;
            if (!isAntiVirtex) return;
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`;
            reply(
              `「 *VIRTEX TEXT TERDETEKSI* 」\n\n_Kamu Akan Di Kick Dari Group!!_`
            );
            setTimeout(() => {
              client.groupRemove(from, [kic]).catch((e) => {
                reply(`*ERROR:* ${e}`);
              });
            }, 3000);
          }
      }
    } catch (e) {
      const emror = String(e);
      if (emror.includes("startsWith")) {
        return;
      }
      if (emror.includes("this.isZero")) {
        return;
      }
      console.log(e);
    }
  });
}
starts();