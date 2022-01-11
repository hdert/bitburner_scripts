/** @param {import(".").NS} ns */
export function scan_recursive(ns, target, hosts) {
  let i;
  const scan_result = ns.scan(target);
  for (i in scan_result) {
    if (!hosts.includes(scan_result[i])) {
      hosts.push(scan_result[i]);
      hosts = scan_recursive(ns, scan_result[i], hosts);
    }
  }
  return hosts;
}

export async function main(ns) {
  let scan_results = scan_recursive(ns, "home", ["home"]);
  ns.tprint(scan_results);
}
