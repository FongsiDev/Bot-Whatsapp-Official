# Simsimi

![GitHub repo size](https://img.shields.io/github/repo-size/Leanhtruonggggg/simsimi?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Leanhtruonggggg/simsimi?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Leanhtruonggggg/simsimi?style=for-the-badge)

<p align="center">
  <img alt="@simsimi-api" style="width: 150px;" src="https://raw.githubusercontent.com/Leanhtruonggggg/simsimi/main/unnamed.png">
</p>
<div align="center">
  <h3>SimSimi-Api</h3>
  <p>Unofficial <a href="https://simsimi.vn">SimSimi</a> API <a href="https://nodejs.org">NodeJS</a><br>It's Free!</p>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/simsimi-api">NPM</a> | <a href="https://github.com/Leanhtruonggggg/simsimi/">Repository</a> | <a href="https://t.me/simsimiapi">Report Bug</a>
</div>

## Free Simsimi Talk API

## Prerequisites

Before starting, make sure you've met the following requirements:
* `Node.js v16.x`

## Installation 📑

Install latest version from NPM:

```
npm i simsimi-api
```

## Test package
```
npm test
```
## Usage

```
const simsimi = require('simsimi-api');

function sim(message, language) {
  simsimi.simtalk(message, language).then((response) => {
    console.log(response);
  });
}

sim("hi", "en");
```

## Response 📨
```
{
    "status": "success",
    "id": 0,
    "text": "hi",
    "message": "đéo ai yêu mày đâu liuliu",
    "language": "vn",
    "donate": {
        "paypal": "cloneek5@gmail.com"
    },
    "contact": "https://t.me/simsimiapi",
    "ip": "2402:800:6215:ec7d:7963:c487:82dd:ae50"
}
```

If it doesn't know how to answer, or text has emojis
```
{
  detail: 'I do not know how to answer. Teach me the answer.'
  }
```
```
{
  detail: 'Emoticons can not be understood.'
  }
```
## Arguments

```
await sim.simtalk(text, language);
```

text: Actual text to ask, must be string.
<br>
language: Language you want to talk, see [Here](langCodes.md) for more.
<br>

[⬆ Back to the top](#simsimi)<br>