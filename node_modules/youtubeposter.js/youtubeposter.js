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

/**
 * Youtube Poster Pro ( no use api ) beta
 * Credit By Fongsi
 **/

// ************* IMPORT EXTERNAL MODULES *************  //
const CronJob = require("cron").CronJob;
const Parser = require("rss-parser");
const rss = require("rss-converter");
const parser = new Parser();
const EventEmitter = require("events");
const { youtubeSearch } = require("@bochilteam/scraper");
const Enmap = require("enmap");
const colors = require("colors");
const Util = require("./lib/Util.js");
const CI = require("./lib/channelInfo.js");
const { replaceContents } = require("./lib/Util.js");
let cooldown = false;
//======================= Y O U T U B E  P O S T E R =======================
class YoutubePoster extends EventEmitter {
  constructor(options = {}) {
    super();
    this.options = {
      loop_delays_in_min: 5,
      message:
        "**{authorname}** Posted: **{videotitle}**, as `{videoauthorname}`\n{videourl}",
    };
    this.ytp_log = ` >-YouTube-Poster-< `.dim.red;
    this.warn_log = `[WARN] `.yellow;
    this.info_log = `[INFO] `.cyan;
    this.success_log = `[SUCCESS] `.green;
    this.YTP_DB = new Enmap({ name: "Youtube-Poster" });
    if (
      (!this.options.loop_delays_in_min || !this.options.loop_delays_in_min) &&
      this.options.loop_delays_in_min != 0
    )
      throw new Error("No Loop Delay added (YTP.options.loop_delays_in_min)");
    if (typeof this.options.loop_delays_in_min != "number")
      throw new Error("(YTP.options.loop_delays_in_min) is not a Number");
    setInterval(() => {
      this.check();
    }, 3000);
  }
  /** Check the Videos, and if there is a valid video or not
   * @param
   */
  async checkVideos(youtubeChannel, ChannelDATA) {
    try {
      let lastVideos = await this.getLatestVideos(youtubeChannel);
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
  async check() {
    return new Promise(async (res, rej) => {
      try {
        //get the Keys
        var keys = await this.YTP_DB.keyArray();
        keys.forEach(async (key) => {
          //get the Channels from the key
          var allChannels = await this.YTP_DB.get(`${key}`, `channels`);
          //if no channels defined yet, return
          if (!allChannels || allChannels.length == 0) return;
          //loop through all yt channels
          allChannels.forEach(async (ChannelDATA, index) => {
            try {
              //If there is no Channellink return
              if (!ChannelDATA.YTchannel) return;
              //get the latest Youtube Channel Information (name, id, etc.)
              let channelInfos = await this.getChannelInfo(
                ChannelDATA.YTchannel
              );
              //if no channelInfos return
              if (!channelInfos) return;
              //get the latest video
              let video = await this.checkVideos(channelInfos.url, ChannelDATA);
              let video_2 = (await youtubeSearch(video.link)).video[0];
              //if no video found, return error
              if (!video) return; //not a latest video posted
              //send the Message
              let e = {
                video,
                video_2: video_2 ? video_2 : null,
                channelInfos,
                ChannelDATA,
                msg: replaceContents(
                  ChannelDATA.message,
                  video,
                  channelInfos,
                  ChannelDATA
                ),
              };
              await this.emit("notified", e);
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
              await this.YTP_DB.set(
                `${ChannelDATA.ChannelSend}`,
                allChannels,
                `channels`
              );
            } catch (e) {
              console.log(String(e).grey);
            }
          });
        });
      } catch (e) {
        rej(e);
      }
    });
  }
  async setChannel(
    ChannelLink,
    ChannelSend,
    Notification = this.options.message,
    preventDuplicates = true
  ) {
    return new Promise(async (res, rej) => {
      try {
        if (!ChannelLink)
          return rej("A String is required for the ChannelLink");
        if (typeof ChannelLink !== "string")
          return rej(
            `Passed in ${typeof ChannelLink} but a String would be required for the ChannelLink`
          );
        if (!Util.isValidURL(ChannelLink))
          return rej(`${ChannelLink} is not a Valid URL (YT)`);
        if (!ChannelSend)
          return rej("A ChannelSend with Guild Information is required!");
        if (!this.YTP_DB.has(ChannelSend)) {
          this.YTP_DB.ensure(ChannelSend, {
            channels: [],
          });
        }
        let channels = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        let CHdata = channels.find(
          (v) =>
            v.YTchannel.split("/")[v.YTchannel.split("/").length - 1] ==
            ChannelLink.split("/")[ChannelLink.split("/").length - 1]
        );
        if (preventDuplicates && CHdata) {
          rej(
            `Channel already setup for the Guild: ${ChannelSend} yet:\n` +
              JSON.stringify(CHdata, null, 3)
          );
          return;
        }
        let newChannelData = {
          YTchannel: ChannelLink,
          ChannelSend: ChannelSend,
          oldvid: "",
          alrsent: [],
          message: Notification,
        };
        channels.push(newChannelData);
        this.YTP_DB.set(`${ChannelSend}`, channels, `channels`);
        let data = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        var Obj = {};
        Obj = newChannelData;
        Obj.allChannels = data;
        return res(Obj);
      } catch (e) {
        return rej(e);
      }
    });
  }
  async getChannel(ChannelSend, ChannelLink) {
    return new Promise(async (res, rej) => {
      try {
        if (!ChannelSend)
          return rej("A String is required for the ChannelSend");
        if (!ChannelSend || typeof ChannelSend !== "string")
          return rej(
            `Passed in ${typeof ChannelSend} but a String would be required for the ChannelSend`
          );
        if (!ChannelLink)
          return rej("A String is required for the ChannelLink");
        if (typeof ChannelLink !== "string")
          return rej(
            `Passed in ${typeof ChannelLink} but a String would be required for the ChannelLink`
          );
        if (!Util.isValidURL(ChannelLink))
          return rej(`${ChannelLink} is not a Valid URL (YT)`);
        if (!this.YTP_DB.has(ChannelSend)) {
          this.YTP_DB.ensure(ChannelSend, {
            channels: [],
          });
        }
        let channels = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        let CHdata = channels.find(
          (v) =>
            v.YTchannel.split("/")[v.YTchannel.split("/").length - 1] ==
            ChannelLink.split("/")[ChannelLink.split("/").length - 1]
        );
        if (!CHdata) {
          CHdata = "Channel not setup yet";
          return rej(CHdata);
        }
        return res(CHdata);
      } catch (error) {
        return rej(error);
      }
    });
  }
  async getChannelInfo(ChannelLink) {
    return new Promise(async (res, rej) => {
      try {
        if (!ChannelLink)
          return rej("A String is required for the ChannelLink");
        if (typeof ChannelLink !== "string")
          return rej(
            `Passed in ${typeof ChannelLink} but a String would be required for the ChannelLink`
          );
        if (!Util.isValidURL(ChannelLink))
          return rej(`${ChannelLink} is not a Valid URL (YT)`);
        let channel = await CI.channelInfo(ChannelLink);
        if (!channel) return rej("NO INFORMATION FOUND");
        return res(channel);
      } catch (error) {
        return rej(error);
      }
    });
  }
  async getLatestVideos(ChannelLink) {
    return new Promise(async (res, rej) => {
      try {
        if (!ChannelLink)
          return rej("A String is required for the ChannelLink");
        if (typeof ChannelLink !== "string")
          return rej(
            `Passed in ${typeof ChannelLink} but a String would be required for the ChannelLink`
          );
        if (!Util.isValidURL(ChannelLink))
          return rej(`${ChannelLink} is not a Valid URL (YT)`);
        let channel = await CI.channelInfo(ChannelLink);
        if (!channel) return rej("NO CHANNEL INFORMATION FOUND");
        let content = await rss.toJson(
          `https://www.youtube.com/feeds/videos.xml?channel_id=${channel.id}`
        );
        //    console.log(JSON.stringify(content, null, 3))
        content = content.items.map((v) => {
          var OBJ = {};
          OBJ.title = v.title;
          OBJ.link = v.link;
          OBJ.pubDate = v.published;
          OBJ.author = v.author;
          OBJ.description = v.media_group.media_description;
          OBJ.thumbnail = v.media_group.media_thumbnail_url;
          OBJ.views = v.media_group.media_community.media_statistics_views;
          OBJ.id = v.yt_videoId;
          OBJ.isoDate = v.updated;
          return OBJ;
        });
        let tLastVideos = content.sort((a, b) => {
          let aPubDate = new Date(a.pubDate || 0).getTime();
          let bPubDate = new Date(b.pubDate || 0).getTime();
          return bPubDate - aPubDate;
        });
        if (tLastVideos.length == 0) return rej("No Videos posted yet");
        return res(tLastVideos);
      } catch (error) {
        return rej(error);
      }
    });
  }
  async editChannel(
    ChannelLink,
    ChannelSend,
    Notification = this.options.message
  ) {
    return new Promise(async (res, rej) => {
      try {
        if (!ChannelLink)
          return rej("A String is required for the ChannelLink");
        if (typeof ChannelLink !== "string")
          return rej(
            `Passed in ${typeof ChannelLink} but a String would be required for the ChannelLink`
          );
        if (!Util.isValidURL(ChannelLink))
          return rej(`${ChannelLink} is not a Valid URL (YT)`);
        if (!ChannelSend)
          return rej("A ChannelSend with Guild Information is required!");
        if (!this.YTP_DB.has(ChannelSend)) {
          this.YTP_DB.ensure(ChannelSend, {
            channels: [],
          });
        }
        let channels = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        let CHdata = channels.find(
          (v) =>
            v.YTchannel.split("/")[v.YTchannel.split("/").length - 1] ==
            ChannelLink.split("/")[ChannelLink.split("/").length - 1]
        );
        let index = channels.findIndex(
          (v) =>
            v.YTchannel.split("/")[v.YTchannel.split("/").length - 1] ==
            ChannelLink.split("/")[ChannelLink.split("/").length - 1]
        );
        if (!CHdata) {
          rej("Channel not setup yet");
          return;
        }
        let newCHdata = {
          YTchannel: ChannelLink,
          ChannelSend: ChannelSend,
          oldvid: CHdata.oldvid,
          alrsent: CHdata.alrsent,
          message: Notification,
        };
        //remove item from the channels array which we got
        channels[index] = newCHdata;
        //set the new channels
        this.YTP_DB.set(`${ChannelSend}`, channels, `channels`);
        let data = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        var Obj = {};
        Obj = newCHdata;
        Obj.allChannels = data;
        Obj.beforeEditChannel = CHdata;
        return res(Obj);
      } catch (error) {
        return rej(error);
      }
    });
  }
  async deleteChannel(ChannelSend, ChannelLink) {
    return new Promise(async (res, rej) => {
      try {
        if (!ChannelLink)
          return rej("A String is required for the ChannelLink");
        if (typeof ChannelLink !== "string")
          return rej(
            `Passed in ${typeof ChannelLink} but a String would be required for the ChannelLink`
          );
        if (!ChannelSend)
          return rej("A String is required for the ChannelSend");
        if (!ChannelSend || typeof ChannelSend !== "string")
          return rej(
            `Passed in ${typeof ChannelSend} but a String would be required for the ChannelSend`
          );
        if (!Util.isValidURL(ChannelLink))
          return rej(`${ChannelLink} is not a Valid URL (YT)`);
        if (!this.YTP_DB.has(ChannelSend)) {
          this.YTP_DB.ensure(ChannelSend, {
            channels: [],
          });
        }
        let channels = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        let CHdata = channels.find(
          (v) =>
            v.YTchannel.split("/")[v.YTchannel.split("/").length - 1] ==
            ChannelLink.split("/")[ChannelLink.split("/").length - 1]
        );
        let index = channels.findIndex(
          (v) =>
            v.YTchannel.split("/")[v.YTchannel.split("/").length - 1] ==
            ChannelLink.split("/")[ChannelLink.split("/").length - 1]
        );
        if (!CHdata) {
          rej("Channel not setup yet");
          return;
        }
        //remove item from the channels array which we got
        channels.splice(index, 1);
        //set the new channels
        this.YTP_DB.set(`${ChannelSend}`, channels, `.channels`);
        let data = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        var Obj = {};
        Obj.allChannels = data;
        Obj.deletedChannel = CHdata;
        return res(Obj);
      } catch (error) {
        return rej(error);
      }
    });
  }
  async getAllChannels(ChannelSend) {
    return new Promise(async (res, rej) => {
      try {
        if (!ChannelSend)
          return rej("A String is required for the ChannelSend");
        if (!ChannelSend || typeof ChannelSend !== "string")
          return rej(
            `Passed in ${typeof ChannelSend} but a String would be required for the ChannelSend`
          );
        if (!this.YTP_DB.has(ChannelSend)) {
          this.YTP_DB.ensure(ChannelSend, {
            channels: [],
          });
        }
        let channels = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        return res(channels);
      } catch (error) {
        return rej(error);
      }
    });
  }
  async deleteAllChannels(ChannelSend) {
    return new Promise(async (res, rej) => {
      try {
        if (!ChannelSend)
          return rej("A String is required for the ChannelSend");
        if (!ChannelSend || typeof ChannelSend !== "string")
          return rej(
            `Passed in ${typeof ChannelSend} but a String would be required for the ChannelSend`
          );
        let olddata = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        this.YTP_DB.set(ChannelSend, {
          channels: [],
        });
        let data = this.YTP_DB.get(`${ChannelSend}`, `channels`);
        const Obj = {};
        Obj.allChannels = data;
        Obj.deletedChannels = olddata;
        return res(Obj);
      } catch (error) {
        return rej(error);
      }
    });
  }
}

module.exports = {
  YoutubePoster,
  version: require("./package.json").version,
};