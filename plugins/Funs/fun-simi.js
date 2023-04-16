import fetch from "node-fetch";
import { simtalk } from "simsimi-api";
let handler = async (m, { text, args }) => {
  if (!args[0]) throw `Use example .simi halo`;
  let api = await simtalk(text, "id");
  m.reply(api.message);
};
handler.command = ["simi"];
handler.tags = ["fun"];
handler.help = ["simi"];

export default handler;