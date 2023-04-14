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
      .then(async (response) => {
        let res = await response.data.choices[0].text;
        conn.sendButton(
          m.chat,
          res,
          author,
          null,
          [["Get Voice Bot", `/tts id ${res}`]],
          m
        );
        /*conn.send3ButtonDoc(
          m.chat,
          " ",
          await res,  
          "Tanya ke AI-NEW",
          `/ai-new ${text}`,
          "Get Voice Bot",
          `/tts id ${res}`,
          "\nAku Tak paham 🗿",
          "bilek",
          m
        );
        */
      })
      .catch((e) => {
        console.log(e);
        if (error > 4) {
          return throw "Sebentar ada kesalahan pada bot!";
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
handler.limit = true;
export default handler;
