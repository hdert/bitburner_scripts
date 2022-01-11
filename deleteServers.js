/** @param {import(".").NS} ns */
export function delete_servers(ns) {
  let i = 0;
  while (i < 25) {
    if (ns.serverExists("pserv-" + i)) {
      ns.scriptKill("getpaid.js", "pserv-" + i);
      ns.deleteServer("pserv-" + i);
    }
    i++;
  }
}

export async function main(ns) {
  delete_servers(ns);
}
