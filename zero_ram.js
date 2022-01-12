import { scan_recursive } from "scan_recursive.js";

/** @param {import(".").NS} ns */
export function zero_ram(ns, scan_results, script_ram = 1.6) {
  const zero_ram_hosts = [];

  for (let i in scan_results) {
    if (ns.getServerMaxRam(scan_results[i]) < script_ram) {
      zero_ram_hosts.push(scan_results[i]);
    }
  }
  return zero_ram_hosts;
}

export async function main(ns) {
  let script = "getpaid.js";
  let zero_ram_hosts = zero_ram(
    ns,
    scan_recursive(ns, "home", ["home"]),
    ns.getScriptRam(script)
  );
  let host;
  for (let i in zero_ram_hosts) {
    host = zero_ram_hosts[i];
    ns.tprint(host);
  }
}
