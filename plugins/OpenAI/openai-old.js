import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
  if (!text) throw "[!] Masukkan teks.";
  const configuration = new Configuration({
    apiKey: global.openai || process.env.openai,
  });
  const openai = new OpenAIApi(configuration);
  let error = 0;
  m.reply("Looking for a data source....");
  function ai() {
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      })
      .then((response) => {
        conn.reply(m.chat, response.data.choices[0].text, m);
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
handler.help = ["ai-old", "openai-old"];
handler.tags = ["openai", "fun"];
handler.command = /^(ai-old|openai-old)$/i;
export default handler;
