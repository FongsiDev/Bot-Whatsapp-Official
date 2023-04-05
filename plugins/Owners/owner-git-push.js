import cp from "child_process";
import { promisify } from "util";
let exec = promisify(cp.exec).bind(cp);
let { username_git, email_git, gh_token, repo_slug } = process.env;
let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
  if (!text)
    throw `uhm.. teksnya mana?\n\ncontoh\n${usedPrefix + command} main`;
  m.reply("Executing...");
  let o;
	try {
  		o = await exec(`git config user.name "${username_git}"`);
      o = await exec(`git config user.email "${email_git}"`);
      o = await exec('git add .'); 
      o = await exec(`git commit -m "${text}"`);
		  git_branch = await exec('git branch --show-current');
      o = await exec(`git push --force --quiet "https://${gh_token}@github.com/${repo_slug}.git" master:${git_branch} > /dev/null 2>&1`);
  } catch (e) {
    o = e;
  } finally {
    let { stdout, stderr } = o;
    if (stdout) m.reply(stdout);
    if (stderr) m.reply(stderr);
  }
};

handler.help = ["git-push"].map((v) => v + " <text>");
handler.tags = ["owner"];
handler.command = /^(git-push)$/i;
handler.owner = true;

export default handler;
