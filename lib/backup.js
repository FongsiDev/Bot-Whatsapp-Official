import { exec } from "child_process";
async function backup() {
  if (!process.env.tokengit) return;
  if (!process.env.repo) return;
  exec(`git config --global user.name "BOTGITBASH"`);
  exec(`git config --global user.email "kk0298156@gmail.com"`);
  exec(`npm version patch --force`);
  exec(`git add .`);
  exec(`git commit -m "Agak lain"`);
  exec(
    `git push --force --quiet "https://${process.env.tokengit}@github.com/${process.env.repo}"`
  );
  console.log("Backup done");
}
export default backup;
