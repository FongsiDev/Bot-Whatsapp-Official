let handler = async (m, { conn }) => {
  //-----PRICE
  //sewa
  let sh = "5";
  let sn = "10";
  let ss = "25";
  let sp = "40";
  let sv = "65";
  //premium
  let ph = "5";
  let pn = "15";
  let pp = "45";
  let pv = "65";
  let ppm = "70";
  let info = `
*${htki} PAYMENT ${htka}*

©2022 FangzBot Official 
`;
  const sections = [
    {
      title: `✃ sᴇᴡᴀ`,
      rows: [
        { title: "💳Dana", rowId: ".dana", description: "Bayar melalui Dana" },
        {
          title: "💳Gopay",
          rowId: ".gopay",
          description: "Bayar melalui Gopay",
        },
        { title: "💳Ovo", rowId: ".ovo", description: "Bayar melalui Ovo" },
        {
          title: "💳Motion Pay",
          rowId: ".motionpay",
          description: "Bayar melalui Motion Pay",
        },
        {
          title: "💵 Pulsa Smartfren",
          rowId: ".pulsasmartfren",
          description: "Bayar melalui pulsa",
        },
        {
          title: "💵 Pulsa Tri3",
          rowId: ".pulsastri",
          description: "Bayar melalui pulsa",
        },
      ],
    },
  ];

  const listMessage = {
    text: " ",
    footer: info,
    title: null,
    buttonText: "C E K",
    sections,
  };
  await conn.sendMessage(m.chat, listMessage, { quoted: m });
  //conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
};

handler.help = ["pay", "payment"];
handler.tags = ["main"];
handler.command = /^(pay(ment)?|payment)$/i;
handler.private = true;

export default handler;
