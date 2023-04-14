import uploadFile from "../../lib/uploadFile.js";
import uploadImage from "../../lib/uploadImage.js";

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw "No media found";
  let media = await q.download(true);
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  async function ap() {
    let link = await (isTele ? uploadImage : uploadFile)(media);
    if (typeof link !== "string") return ap();
    m.reply(`📮 *L I N K :*
${link}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* ${isTele ? "No Expiry Date" : "Unknown"}`);
  }
  return ap();
};
handler.help = ["upload (reply media)", "tourl (reply media)"];
handler.tags = ["tools", "limitmenu"];
handler.command = /^(tourl|upload)$/i;
handler.limit = true;
export default handler;
//FG - JB Made By 𝙁𝘾 么 Glitch Editz#0433
