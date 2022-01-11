import { scan_recursive } from "scan_recursive.js";

/** @param {import(".").NS} ns */
export function auto_highest_capital(ns, scan_results, offset = 0) {
  let hack_level = ns.getHackingLevel();
  let hostname = "home";
  let capital = 0;
  let i;
  for (i in scan_results) {
    if (
      ns.getServerRequiredHackingLevel(scan_results[i]) <=
      hack_level + offset
    ) {
      if (ns.getServerMaxMoney(scan_results[i]) > capital) {
        hostname = scan_results[i];
        capital = ns.getServerMaxMoney(scan_results[i]);
      }
      if (
        ns.getServerMaxMoney(scan_results[i]) == capital &&
        ns.getHackingLevel(scan_results[i]) < ns.getHackingLevel(hostname)
      ) {
        hostname = scan_results[i];
        capital = ns.getServerMaxMoney(scan_results[i]);
      }
    }
  }
  return hostname;
}

export async function main(ns) {
  let hostname = auto_highest_capital(
    ns,
    scan_recursive(ns, "home", ["home"]),
    ns.args[0]
  );
  ns.tprint(ns.getServerMaxMoney(hostname) * 10 ** -9 + "E9: " + hostname);
}
