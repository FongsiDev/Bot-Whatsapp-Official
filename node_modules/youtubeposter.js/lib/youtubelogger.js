/*
    MIT License

    Copyright (c) 2022 Fongsi#1557

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

// ************* IMPORT EXTERNAL MODULES *************  //
const CronJob = require("cron").CronJob;
// ************ IMPORT FILE DATA ************* //
const { replaceContents } = require("./Util.js");
let cooldown = false;

module.exports = (YTP) => {
  if (
    (!YTP.options.loop_delays_in_min || !YTP.options.loop_delays_in_min) &&
    YTP.options.loop_delays_in_min != 0
  )
    throw new Error("No Loop Delay added (YTP.options.loop_delays_in_min)");
  if (typeof YTP.options.loop_delays_in_min != "number")
    throw new Error("(YTP.options.loop_delays_in_min) is not a Number");
  var Jobyoutube = new CronJob(
    `*${YTP.options.loop_delays_in_min == 0 ? "/15" : ""} *${
      YTP.options.loop_delays_in_min != 0
        ? "/" + YTP.options.loop_delays_in_min
        : ""
    } * * * *`,
    async function () {
      if (!cooldown) check();
    },
    null,
    true,
    "America/Los_Angeles"
  );
  Jobyoutube.start();

  /** Check the Videos, and if there is a valid video or not
   * @param
   */
  async function checkVideos(youtubeChannel, ChannelDATA) {
    try {
      let lastVideos = await YTP.getLatestVideos(youtubeChannel);
      // If there isn't any video in the youtube channel, return
      if (!lastVideos || !lastVideos[0]) return false;
      // If the last video is the same as the last saved, return
      if (
        ChannelDATA.oldvid &&
        (ChannelDATA.oldvid === lastVideos[0].id ||
          ChannelDATA.oldvid.includes(lastVideos[0].id))
      )
        return false;
      if (ChannelDATA.alrsent && ChannelDATA.alrsent.includes(lastVideos[0].id))
        return false;
      return lastVideos[0];
    } catch {
      return false;
    }
  }

  /** Check all Database entries for latest Upload + Send it
   * @param
   */
  async function check() {
    return new Promise(async (res, rej) => {
      //get the Keys
      var keys = await YTP.YTP_DB.keyArray();
      keys.forEach(async (key) => {
        //get the Channels from the key
        var allChannels = await YTP.YTP_DB.get(`${key}`, `channels`);
        //if no channels defined yet, return
        if (!allChannels || allChannels.length == 0) return;
        //loop through all yt channels
        allChannels.forEach(async (ChannelDATA, index) => {
          try {
            //If there is no Channellink return
            if (!ChannelDATA.YTchannel) return;
            //get the latest Youtube Channel Information (name, id, etc.)
            let channelInfos = await YTP.getChannelInfo(ChannelDATA.YTchannel);
            //if no channelInfos return
            if (!channelInfos) return;
            //get the latest video
            let video = await checkVideos(channelInfos.url, ChannelDATA);
            //if no video found, return error
            if (!video) return; //not a latest video posted
            //send the Message
            await res(
              replaceContents(
                ChannelDATA.message,
                video,
                channelInfos,
                ChannelDATA
              )
            );
            //set the new old vid to the latest send video
            ChannelDATA.oldvid = video.id;
            //push the data in the already sent ones, so it's never repeating again, if a reupload and delete after, etc.
            ChannelDATA.alrsent.push(video.id);
            //if the already sent starts to get to big, remove the end of it
            if (ChannelDATA.alrsent.length > 5) {
              ChannelDATA.alrsent.pop();
            }
            //replace item in the
            allChannels[index] = ChannelDATA;
            //set the new channels
            await YTP.YTP_DB.set(
              `${ChannelDATA.ChannelSend}`,
              allChannels,
              `channels`
            );
          } catch (e) {
            console.log(String(e).grey);
          }
        });
      });
    });
  }
};