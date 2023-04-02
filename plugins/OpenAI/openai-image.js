import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
  if (!text) throw "[!] Masukkan teks.";
  const configuration = new Configuration({
    apiKey: global.openai,
  });
  const openai = new OpenAIApi(configuration);
  let error = 0;
  function ai() {
    openai
      .createImage({
        prompt: text,
        n: 1,
        //    size: "1024x1024"
      })
      .then((response) => {
        return conn.sendFile(m.chat, response.data.data[0].url, "", ``, m);
      })
      .catch((e) => {
        console.log(e);
        if (error > 4) {
          throw "Sebentar ada kesalahan pada bot!";
				  return !0;
        }
        error++;
        return ai();
      });
  }
  return ai();
};
handler.help = ["ai-image", "openai-image"];
handler.tags = ["openai", "fun"];
handler.command = /^(ai-image|openai-image)$/i;
export default handler;
