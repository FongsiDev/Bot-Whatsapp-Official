export function before(m) {
  let user = db.data.users[m.sender];
  let level = user.level;
  let role = (Object.entries(roles)
    .sort((a, b) => b[1] - a[1])
    .find(([, minLevel]) => level > minLevel) || Object.entries(roles)[0])[0];
  user.role = role;
  return !0;
}
