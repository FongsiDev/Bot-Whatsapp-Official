import uploadFile from "../../lib/uploadFile.js";
import uploadImage from "../../lib/uploadImage.js";
import fs from "fs";
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
📊 *S I Z E :* ${await fileInfoSize(media)}
📛 *E x p i r e d :* ${isTele ? "No Expiry Date" : "Unknown"}`);
  }
  return ap();
};
handler.help = ["upload (reply media)", "tourl (reply media)"];
handler.tags = ["tools", "limitmenu"];
handler.command = /^(tourl|upload)$/i;
handler.limit = true;
export default handler;

function fileInfoSize(path) {
  return new Promise(async (resolve, reject) => {
    fs.stat(path, (err, fileStats) => {
      if (err) {
        return resolve("N/A");
      } else {
        const bytes = fileStats.size;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes == 0) {
          return resolve("N/A");
        }
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        if (i == 0) {
          return resolve(bytes + " " + sizes[i]);
        }
        return resolve((bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]);
      }
    });
  });
}
//FG - JB Made By 𝙁𝘾 么 Glitch Editz#0433
