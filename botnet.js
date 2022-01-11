import { scan_recursive } from "scan_recursive.js";
import { zero_ram } from "zero_ram.js";
import { auto_highest_capital } from "auto_highest_capital.js";
import { port_crack } from "port_crack.js";

/** @param {import(".").NS} ns */
export async function botnet(ns, target, scan_results, zero_ram_hosts) {
  let script = "getpaid.js";
  let targetMoneyThreshold = ns.getServerMaxMoney(target) * 0.75;
  let targetSecurityThreshold = ns.getServerMinSecurityLevel(target) + 5;
  const protected_hosts = ["home"].concat(zero_ram_hosts);
  let threads;
  let host;
  let i;
  for (i in scan_results) {
    host = scan_results[i];
    if (!ns.hasRootAccess(host)) {
      port_crack(ns, host);
    }
    if (!protected_hosts.includes(host)) {
      // ns.killall(host);
      threads = Math.floor(ns.getServerMaxRam(host) / ns.getScriptRam(script));
      await ns.scp(script, host);
      ns.exec(
        script,
        host,
        threads,
        target,
        targetMoneyThreshold,
        targetSecurityThreshold
      );
    }
  }
}

export async function main(ns) {
  let script = "getpaid.js";
  let scan_results = scan_recursive(ns, "home", ["home"]);
  await botnet(
    ns,
    ns.args[0] ? ns.args[0] : auto_highest_capital(ns, scan_results),
    scan_results,
    zero_ram(ns, scan_results, ns.getScriptRam(script))
  );
}
