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
    let conversationLog = [
      { role: "system", content: "You are a friendly chatbot." },
    ];
    conversationLog.push({
      role: "user",
      content: text,
    });
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversationLog,
      })
      .then((response) => {
        let res = response.data.choices[0].message?.content;
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
handler.help = ["ai-new", "openai-new"];
handler.tags = ["openai", "fun"];
handler.command = /^(ai-new|openai-new)$/i;
handler.isPrems = true;
export default handler;
