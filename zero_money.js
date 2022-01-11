import { scan_recursive } from "scan_recursive.js";

/** @param {import(".").NS} ns */
export function zero_money(ns, scan_results) {
  let exclusions = ["home"];
  let zero_money_hosts = [];
  let x = 0;
  while (x < 25) {
    exclusions.push("pserv-" + x);
    x++;
  }
  let host;

  for (let i in scan_results) {
    host = scan_results[i];
    if (ns.getServerMaxMoney(host) == 0 && !exclusions.includes(host)) {
      zero_money_hosts.push(host);
    }
  }

  return zero_money_hosts;
}

export async function main(ns) {
  let zero_money_hosts = zero_money(ns, scan_recursive(ns, "home", ["home"]));
  let host;
  for (let i in zero_money_hosts) {
    host = zero_money_hosts[i];
    ns.tprint(ns.getServerRequiredHackingLevel(host) + ": " + host);
  }
}
