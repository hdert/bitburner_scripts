import { scan_recursive } from "scan_recursive.js";

/** @param {import(".").NS} ns */
export async function main(ns) {
  let scan_results = scan_recursive(ns, "home", ["home"]);

  for (i in scan_results) {
    ns.tprint(scan_results[i] + ": " + ns.compan);
  }
}
