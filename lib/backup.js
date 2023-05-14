import { exec } from "child_process";
async function backup() {
  if (!process.env.tokengit) return;
  if (!process.env.repo) return;
  exec(`git config --global user.name "BOTGITBASH"`);
  exec(`git config --global user.email "kk0298156@gmail.com"`);
  let e = await exec(
    `npm version patch --force && git add . && git commit -m "Agak lain" && git push --force --quiet "https://${process.env.tokengit}@github.com/${process.env.repo}"`
  );
  console.log("Backup done", e);
}
export default backup;
