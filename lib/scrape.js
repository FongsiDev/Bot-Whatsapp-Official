import axios from "axios";
import cheerio from "cheerio";
import fetch from "node-fetch";
import https from "https";
import FormData from "form-data";
import Jimp from "jimp";

function convertAngka(number) {
  const data = String(number).split("").reverse();
  let combine = "";
  for (let i = 0; i < data.length; i++) {
    if ((i + 1) % 3 == 0 && i != data.length - 1) {
      data[i] = `.${data[i]}`;
    }
  }
  combine = `${data.reverse().join("")}`;
  return combine;
}

async function zippydl(url) {
  return new Promise((resolve, reject) => {
    axios.get(urls).then(({ data }) => {
      const $ = cheerio.load(data);
      const li = $.html();
      const po = $("#dlbutton").next().html();
      const le = po.split(";")[0];
      const lo = le.split("document.getElementById('dlbutton').href =")[1];
      const result = `${urls.split("/v")[0]}${eval(lo)}`;
      const ho = $("#lrbox").text().replace(/\n/g, "");
      const ext = ho.split("Name:")[1].split("Size:")[0].split(".")[1];
      const hasil = {
        title: ho.split("Name:")[1].split("Size:")[0].trim(),
        extension: ext,
        filesize: ho.split("Size:")[1].split("Uploaded:")[0].trim(),
        upload: ho.split("Uploaded:")[1].split("          ")[0].trim(),
        link: result,
      };
      resolve(hasil);
    });
  });
}

async function trustpositif(url) {
  if (!url) return false;
  let agent = new https.Agent({ rejectUnauthorized: false });
  url = Array.isArray(url) ? encodeURIComponent(url.join("\n")) : url;
  let { data } = await axios({
    url: "https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home",
    method: "POST",
    httpsAgent: agent,
    data: {
      name: url,
    },
  });
  let result = {};
  for (let i of data.values) {
    result[i.Domain] = i.Status === "Ada";
  }
  return result;
}
async function processing(urlPath, method) {
  return new Promise(async (resolve, reject) => {
    let Methods = ["enhance", "recolor", "dehaze"];
    Methods.includes(method) ? (method = method) : (method = Methods[0]);
    let buffer,
      Form = new FormData(),
      scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
    Form.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=uttf-8",
    });
    Form.append("image", Buffer.from(urlPath), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    });
    Form.submit(
      {
        url: scheme,
        host: "inferenceengine" + ".vyro" + ".ai",
        path: "/" + method,
        protocol: "https:",
        headers: {
          "User-Agent": "okhttp/4.9.3",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
        },
      },
      function (err, res) {
        if (err) reject();
        let data = [];
        res
          .on("data", function (chunk, resp) {
            data.push(chunk);
          })
          .on("end", () => {
            resolve(Buffer.concat(data));
          });
        res.on("error", (e) => {
          reject();
        });
      }
    );
  });
}
export { zippydl, trustpositif, processing };
