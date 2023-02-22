import fs from "fs";
import fetch from "node-fetch";
import moment from "moment-timezone";
import knights from "knights-canvas";
export async function all(m) {
  if (m.isBlocked) return;
  // ketika ada yang invite/kirim link grup di chat pribadi
  if (
    (m.mtype === "groupInviteMessage" ||
      m.text.startsWith("Undangan untuk bergabung") ||
      m.text.startsWith("Invitation to join") ||
      m.text.startsWith("Buka tautan ini")) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    this.sendButton(
      m.chat,
      `${wm}

        ╭━━━━「 SEWA 」
        ┊⫹⫺ Hemat: 5k/grup (1 minggu)
        ┊⫹⫺ Normal: 15k/grup (1 bulan)
        ┊⫹⫺ Standar: 30k/grup (2 bulan)
        ┊⫹⫺ Pro: 35k/grup (4 bulan)                                                      
        ┊⫹⫺ Vip: = 65k/grup (12 bulan)
        ╰═┅═━––––––๑
        
        ╭━━━━「 PREMIUM 」
        ┊⫹⫺ Hemat: 5k (1 minggu)
        ┊⫹⫺ Normal: 20k (1 bulan)
        ┊⫹⫺ Pro: 40k (4 bulan)
        ┊⫹⫺ Vip: 50k (8 bulan)                                               
        ┊⫹⫺ Permanent: = 70k (Unlimited)
        ╰═┅═━––––––๑
        
        ⫹⫺ PAYMENT:
        • Pulsa Telkomsel: []
        • Dana: []
        • Gopay: []
        • Ovo: []
        • Link Aja: []
        
        Nomor Owner :
        wa.me/6289503433262
        
        ▌│█║▌║▌║║▌║▌║█│▌
        
        #blueckkn
        `.trim(),
      wm,
      "Pemilik Bot",
      ".owner",
      m
    );
    await this.reply(
      global.logs.anticulik,
      `Ada Yang Mau Nyulik nih :v \n\ndari: @${
        m.sender.split("@")[0]
      } \n\npesan: ${m.text}`,
      m,
      { mentions: [m.sender] }
    );
  }
  return !0;
}
