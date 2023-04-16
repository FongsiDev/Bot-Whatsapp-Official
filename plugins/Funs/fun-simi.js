import axios from "axios";
let handler = async (m, { text, args }) => {
  if (!args[0]) throw `Use example .simi halo`;
  let api = await simtalk(text);
  m.reply(api.message);
};
handler.command = ["simi"];
handler.tags = ["fun"];
handler.help = ["simi"];

export default handler;

async function simtalk(text) {
  const params = new URLSearchParams();
  params.append("text", text);
  params.append("lc", "id");
  const { data } = await axios({
    method: "POST",
    url: "https://api.simsimi.vn/v2/simtalk",
    data: params,
  });
  return data;
}