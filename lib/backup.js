import nodegit from "@figma/nodegit";

const commitAndPush = async () => {
  try {
    const repo = await nodegit.Repository.open(process.cwd());
    await addAndCommit(repo);
    const remote = await getRemote(repo);
    await pushToRemote(remote, repo);
    console.log("Backup berhasil");
  } catch (error) {
    console.log(error);
  }
};
const addAndCommit = async (repo) => {
  const index = await repo.refreshIndex();
  await index.addAll();
  await index.write();
  const sha = await index.writeTree();
  const head = await nodegit.Reference.nameToId(repo, "HEAD");
  const parent = await repo.getCommit(head);
  const author = nodegit.Signature.now("BOTGITBASH", "kk0298156@gmail.com");
  const committer = nodegit.Signature.now("BOTGITBASH", "kk0298156@gmail.com");
  const now = new Date();
  const message = `Backup project otomatis pada ${now.toLocaleDateString(now)}`;
  await await repo.createCommit("HEAD", author, committer, message, sha, [
    parent,
  ]);
};
const getRemote = async (repo) => {
  const remote = await nodegit.Remote.lookup(repo, "origin");
  return remote;
};
const pushToRemote = async (remote, repo) => {
  await remote.push(["refs/heads/master:refs/heads/master"], {
    callbacks: {
      credentials: function (url, userName) {
        // Ubah username dan personal access token dengan milikmu.
        return nodegit.Cred.userpassPlainNew("FongsiDev", process.env.tokengit);
      },
    },
  });
};
await commitAndPush();
