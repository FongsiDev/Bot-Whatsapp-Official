import { exec } from "child_process";
async function backup() {
  if (!process.env.tokengit) return;
  if (!process.env.repo) return;
  const str = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
  await exec("git config --global user.name 'BOTGITBASH'");
  await exec("git config --global user.email 'kk0298156@gmail.com'");
  await exec("mv .gitignore .gitignore.bak");
  await exec("npm version patch --force");
  await exec("git add .");
  await exec("git add .");
  await exec(`git commit -m "Backup Time ${str}"`);
  await exec(
    `git push --force --quiet "https://${process.env.tokengit}@github.com/${process.env.repo}"`
  );
  await exec("mv .gitignore.bak .gitignore");
  console.log("Backup done");
}
export default backup;
