import { mkdirSync, writeFileSync } from 'fs';
import { Pixiv } from './Pixiv'

const pixiv = new Pixiv();

(async () => {
  //await pixiv.login("email/ID", "password");
  pixiv.staticLogin('YOUR Cookies', "A Real browser Agent");

  const folder = "D:/Images/.PIXIV/Ibaraki/"
  let page = 1;
  let tag = "茨木童子(Fate)";
  let artworks = (await pixiv.getIllustsByTag(tag, {mode: "safe", page: page}));

  while (artworks.length > 0) {
    console.log("PAGE " + page);
    for (let art of artworks) {
      console.log("|-" + art.id);
      try {
        const illust = await pixiv.getIllustByArtwork(art);
      if (illust.pageCount > 1) {
        mkdirSync(folder + illust.illustID, {recursive: true});
      }

      await new Promise<void>(resolve => {
        let r = 0;
        for (let i in illust.urls) {
          console.log("|---|- Illust " + (+i+1));
          pixiv.download(new URL(illust.urls[i].original)).then(buff => {
            writeFileSync(folder + (illust.pageCount > 1 ? illust.illustID + "/" : "") + illust.illustID + "-" + i + ".jpg", buff);
            r++;
            if (r == illust.pageCount) {
              console.log("|-" + page + "-|- DONE");
              resolve();
            }
          }).catch(console.log);
        }
      });
      } catch (e) {}
    }
    page++;
    artworks = (await pixiv.getIllustsByTag(tag, {mode: "safe", page: page}));
  }

  
})()