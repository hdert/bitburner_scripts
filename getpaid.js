/** @param {import(".").NS} ns */
export async function get_paid(ns, target, moneyThreshold, securityThreshold) {
  while (true) {
    if (ns.getServerSecurityLevel(target) > securityThreshold) {
      await ns.weaken(target);
    } else if (ns.getServerMoneyAvailable(target) < moneyThreshold) {
      await ns.grow(target);
    } else {
      await ns.hack(target);
    }
  }
}

export async function main(ns) {
  await get_paid(ns, ns.args[0], ns.args[1], ns.args[2]);
}
