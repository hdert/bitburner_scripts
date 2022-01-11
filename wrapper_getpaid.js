import { auto_highest_capital } from "auto_highest_capital.js";
import { scan_recursive } from "scan_recursive.js";

/** @param {import(".").NS} ns */
export async function main(ns) {
  let target = ns.args[0]
    ? ns.args[0]
    : auto_highest_capital(ns, scan_recursive(ns, "home", ["home"]));
  ns.run(
    "getpaid.js",
    Math.floor(
      (ns.getServerMaxRam("home") - 15) / ns.getScriptRam("getpaid.js")
    ),
    target,
    ns.getServerMaxMoney(target) * 0.75,
    ns.getServerMinSecurityLevel(target) + 5
  );
}
