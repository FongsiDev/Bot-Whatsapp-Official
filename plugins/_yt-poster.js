import { youtube_poster, isValidURL, channelInfo } from "../lib/poster-yt.js";
import { youtubeSearch } from "@bochilteam/scraper";
import db from "../lib/database.js";

export async function all(m) {
  if (!m.isGroup) return;
  let yt = db.data.ytposter[m.chat];
  if (!yt) return !0;
  if (yt) {
    yt.channels.forEach(async (key) => {
      let rss = await channelInfo(key);
      let yt_ = await youtube_poster(rss.id);
      if (yt_ && yt) {
        let vid_ = (await youtubeSearch(yt_.title)).video;
        vid_.forEach(async (vid) => {
          if (vid.title == yt_.title) {
            let {
              title,
              description,
              thumbnail,
              videoId,
              durationH,
              viewH,
              publishedTime,
            } = vid;
            const url = "https://www.youtube.com/watch?v=" + videoId;
            await this.sendHydrated(
              m.chat,
              `
*_${yt_.author.name}_* telah upload video baru!

📌 *Title:* ${title}
🔗 *Url:* ${url}
🖹 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `.trim(),
              author,
              thumbnail,
              url,
              "📺Go To Youtube!",
              null,
              null,
              [
                ["Audio 🎧", `/yta ${url} yes`],
                ["Video 🎥", `/ytv ${url} yes`],
                ["Youtube Search🔎", `/yts ${url}`],
              ],
              m
            );
          }
        });
      }
    });
  }
}