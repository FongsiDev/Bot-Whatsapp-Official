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
        conn.reply(m.chat, response.data.choices[0].message?.content, m);
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
handler.help = ["ai", "openai"];
handler.tags = ["openai", "fun"];
handler.command = /^(ai|openai)$/i;
export default handler;
