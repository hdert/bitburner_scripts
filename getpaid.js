/** @param {import(".").NS} ns */
export async function get_paid(
  ns,
  target,
  money_threshold,
  security_threshold
) {
  while (true) {
    if (ns.getServerSecurityLevel(target) > security_threshold) {
      await ns.weaken(target);
    } else if (ns.getServerMoneyAvailable(target) < money_threshold) {
      await ns.grow(target);
    } else {
      await ns.hack(target);
    }
  }
}

export async function main(ns) {
  await get_paid(ns, ns.args[0], ns.args[1], ns.args[2]);
}
