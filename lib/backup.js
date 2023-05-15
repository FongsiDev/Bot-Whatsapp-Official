import { exec } from "child_process";
async function backup() {
  if (!process.env.tokengit) return;
  if (!process.env.repo) return;
  const str = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
  await exec("git config --global user.name 'BOTGITBASH'");
  await exec("git config --global user.email 'kk0298156@gmail.com'");
  let txt = "echo 'Start Backup'";
  txt += " && ";
  /*txt += "npm version patch --force";
  txt += " && ";*/
  txt += "git add .";
  txt += " && ";
  txt += `git commit -m "Backup Time ${str}"`;
  txt += " && ";
  txt += "git push --force --quiet";
  txt += " ";
  txt +=
    "'https://" +
    process.env.tokengit +
    "@github.com/" +
    process.env.repo +
    "'";
  txt += " && ";
  txt += "git push --force --quiet";
  txt += " ";
  txt +=
    "'https://" +
    process.env.tokengit +
    "@github.com/" +
    process.env.repo2 +
    "'";
  txt += " && ";
  txt += "echo 'Backup Done'";
  await exec(txt);
}
export default backup;
