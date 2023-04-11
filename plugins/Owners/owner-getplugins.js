import glob from "glob";
import fs from "fs";
let handler = async (m, { usedPrefix, command, text }) => {
  if (!text)
    throw `where is the text?\n\nexempel: ${usedPrefix + command} menu`;
  const listPlugins = Object.keys(global.plugins).map((v) =>
    v.replace(/^.*[\\\/]/, "").replace(/\.js/, "")
  );
  if (!listPlugins.includes(text)) {
    return m.reply(
      `
'${text}' not found!\n
${listPlugins
  .map((v) => v)
  .join("\n")
  .trim()}
`.trim()
    );
  }
  const filename = glob.sync(`./plugins/**/${text}.js`);
  m.reply(fs.readFileSync(filename[0], "utf8"));
};
handler.help = ["getplugin"].map((v) => v + " [filename]");
handler.tags = ["owner"];
handler.command = /^(getplugin|get ?plugin|gp)$/i;

handler.owner = true;

export default handler;
