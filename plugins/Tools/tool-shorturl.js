import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, args }) => {
  let text = `— *S H O R T E D  U R L* —`;
  let caption = "Silahkan Pilih Type Urlnya kak";
  if (!args[0]) return m.reply("Linknya mana?");
  if (!args[0].startsWith("https://"))
    throw "Masukan Url Dengan Awalan *https://*";

  //TINY
  let tiny = await (
    await fetch(API("https://tinyurl.com", "/api-create.php", { url: args[0] }))
  ).text();
  text += `\nTiny: ${tiny}`;
  //--------------

  //LINKPOI
  let poi = await (
    await fetch(API("https://linkpoi.ga", "/api.php", { url: args[0] }))
  ).text();
  text += `\nLinkPoi: ${JSON.parse(poi.toString().trim()).shorturl.replace(
    "/",
    "/"
  )}`;
  //------------

  //OuO
  let ouo = await (
    await fetch(API("http://ouo.io", "/api/AIu5NC09", { s: args[0] }))
  ).text();
  text += `\nOuO IO: ${ouo}`;
  //------------

  //LinkIndo
  let linkindo = await (
    await fetch(
      API("https://linkindo.com", "/api", {
        api: "30dcefae00c8bd5d66b34c0be49067b088429fa1",
        url: args[0],
        format: "text",
      })
    )
  ).text();
  text += `\nLink Indo: ${linkindo}`;
  //------------

  //IsGD
  let isgd = await (
    await fetch(
      API("https://is.gd", "/create.php", {
        url: args[0],
        format: "simple",
      })
    )
  ).text();
  text += `\nIS.GD: ${isgd}`;
  //------------

  //CuttLy
  let cuttly = await (
    await fetch("https://cutt.ly/scripts/shortenUrl.php", {
      headers: {
        accept: "*/*",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "x-requested-with": "XMLHttpRequest",
      },
      referrer: "https://cutt.ly/",
      referrerPolicy: "same-origin",
      body: `url=${args[0]}&domain=0`,
      method: "POST",
      mode: "cors",
      credentials: "omit",
    })
  ).text();
  text += `\nCutt.LY: ${cuttly}`;
  //------------
  m.reply(text);
};
handler.help = ["short <url>"];
handler.tags = ["internet", "limitmenu"];
handler.command = /^(short(url)?)$/i;
handler.limit = true;
export default handler;