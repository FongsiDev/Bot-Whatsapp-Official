/*
    MIT License

    Copyright (c) 2021 Tomato6966 (chris.pre03@gmail.com)

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

module.exports.delay = delay;
module.exports.size = size;
module.exports.isValidURL = isValidURL;
module.exports.replaceContents = replaceContents;
module.exports.timeSince = timeSince;
module.exports.nFormatter = nFormatter;


/** Check the Size of an Array / Object
  * @param {ARRAY/OBJECT} obj To Check 
*/ 
function size(obj) {
    if(Array.isArray(obj)) {
        return obj.length;
    } else {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }
};

/** Format Date Ago
  * @param {NUMBER} Date
*/
var DURATION_IN_SECONDS = {
  epochs: ['year', 'month', 'day', 'hour', 'minute'],
  year: 31536000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};

function getDuration(seconds) {
  var epoch, interval;
  for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
    epoch = DURATION_IN_SECONDS.epochs[i];
    interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: epoch
      };
    }
  }
};

function timeSince(date) {
  var seconds = Math.floor((new Date() - new Date(date)) / 1000);
  var duration = getDuration(seconds);
  var suffix = (duration.interval > 1 || duration.interval === 0) ? 's' : '';
  return duration.interval + ' ' + duration.epoch + suffix;
};

/** Format Size Number to K, M, G
 * @param {NUMBER} Format
*/
function nFormatter(num) {
     if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
     }
     return num;
}

/** Check if the Link is a valid youtube Channel Link or not
  * @param {STRING} url To Check 
*/ 
function isValidURL(url){
    return url.match(/^https?:\/\/(www\.)?youtube\.com\/(channel\/UC[\w-]{21}[AQgw]|(c\/|user\/)?[\w-]+)$/) != null
}


/** Sleep for some Time
  * @param {NUMBER} delayInms To wait
*/ 
function delay(delayInms) {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  } catch (_) { }
}

/** Replaces the string content with video meta data
  * @param {NUMBER} delayInms String to replace
  * @param {OBJECT | VIDEO} video Data for replace
  * @param {OBJECT | channelInfos} channelInfos Data for replace
  * @param {OBJECT | ChannelDATA} ChannelDATA Data for replace
*/ 
function replaceContents(txt, video, channelInfos, ChannelDATA) {
    return String(txt).replace(/{videourl}/ig, video.link)
        .replace(/{video}/ig, video.link)
        .replace(/{url}/ig, video.link)
        .replace(/{link}/ig, video.link)
        .replace(/{vid}/ig, video.link)
        .replace(/{uri}/ig, video.link)

        .replace(/{videotitle}/ig, video.title)
        .replace(/{name}/ig, video.title)
        .replace(/{title}/ig, video.title)

        .replace(/{videoauthorname}/ig, channelInfos.name)
        .replace(/{authorname}/ig, channelInfos.name)
        .replace(/{author}/ig, channelInfos.name)
        .replace(/{channel}/ig, channelInfos.name)
        .replace(/{channelname}/ig, channelInfos.name)
        .replace(/{creator}/ig, channelInfos.name)
        .replace(/{creatorname}/ig, channelInfos.name);
}
