<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/youtubeposter.js"><img src="https://img.shields.io/npm/v/youtubeposter.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/youtubeposter.js"><img src="https://img.shields.io/npm/dt/youtubeposter.js.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/youtubeposter.js/"><img src="https://nodei.co/npm/youtubeposter.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>


# **YoutubePoster.js**
>
> *This means, that it logs new Videos, or Streams and sends them to a Channel, you can define the Name, Link, User, and more!*
> *It is very fast and a scraper, so you don't need an API KEY.*
> *Also it is up to Date and includes JOSH, so you can decide if you wanna use the DEFAULT, JSON DB, or SQLITE, or Mongoos, so it works on repl.it too!*

## **Installation** 
```sh
npm install youtubeposter.js@latest
```

```js
const YT = require("youtubeposter.js");
//Suggesting to require it once the bot is online, to reduce bugs...
client.on("ready", () => client.YTP = new YT.YoutubePoster());
//Send message or data
YT.on("notified", data => console.log(data))

//use the methods
client.YTP.<Method>(<Options>); //returns -> Promise -> <OBJECT/ARRAY -- CHANNEL DATA>
//The logging is the package doing for you, you just need to use the setChannel() function in order to set the first channel which should get listened to!
```

## 📫 **Join our [Discord Server](https://discord.gg/COO2) for Support**

***

# 🗂 **For more help view [Documentation](https://github.com/fongsidev/YoutubePoster/wiki)**

# [🧾 See the **Table of Content**, before you START!](https://github.com/fongsidev/YoutubePoster/wiki/🧾-Table-of-Content)
***

## 😎 **Features**
> 
> - ⭐️ **No Api Key needed - scraping**
> - 🛠 **Easy to use** 
> - 👀 **Faster then light**
> - 💪 **Up to Date** 
> - 🤙 **Infinite Channels, with infite amount of options**
> - 🤖 **Flexible**

***

## 🧠 **Methods**
> 
> - [**See all Methods**](https://github.com/fongsidev/YoutubePoster/wiki/Methods)

***

## 🥰 **Examples**
> 
> - [**Basic Example Bot**](https://github.com/fongsidev/YoutubePoster/wiki/Basic-Example-Bot)
> - [**Example with all Commands**](https://github.com/fongsidev/YoutubePoster/wiki/Example-with-all-Commands)

***

## 🤩 **Responses**
> 
> - [**See all Responses**](https://github.com/fongsidev/YoutubePoster/wiki/Responses)
