export async function onlyLogged(req, res, next) {
  console.log("HOLAAAAAA LOGED");
  return next();
}

export async function onlyUnlogged(req, res, next) {
  console.log("HOLAAAAAA UNLOGED");
  return next();
}
