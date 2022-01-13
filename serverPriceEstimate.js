/** @param {import(".").NS} ns */
export async function main(ns) {
  let script = "getpaid.js";
  let maxRamPowerOfTwo = 1;
  let funds = ns.getServerMoneyAvailable("home");
  while (
    ns.getPurchasedServerCost(2 ** maxRamPowerOfTwo) * 25 <= funds ||
    2 ** (maxRamPowerOfTwo - 1) == ns.getPurchasedServerLimit()
  ) {
    maxRamPowerOfTwo++;
  }
  let ram = ns.args[0]
    ? 2 ** ns.args[0] * 2 ** (maxRamPowerOfTwo - 1)
    : 2 ** (maxRamPowerOfTwo - 1);
  if (ram > ns.getPurchasedServerMaxRam()) {
    ram = ns.getPurchasedServerMaxRam();
  }
  let threads = Math.floor(ram / ns.getScriptRam(script));

  let serverPurchaseLimit = ns.getPurchasedServerLimit();

  let i = 0;
  ns.tprint("Purchasing " + serverPurchaseLimit + " Servers.");
  ns.tprint("Server ram: " + ram);
  ns.tprint(
    "Individual Server runs " +
      threads +
      " of " +
      script +
      " that takes " +
      ns.getScriptRam(script) +
      "GiB of ram, for a total of " +
      ns.getScriptRam(script) * threads +
      "GiB ram used, or " +
      ((ns.getScriptRam(script) * threads) / ram) * 100 +
      "% of total ram used."
  );
  ns.tprint(
    "This will cost $" +
      ns.getPurchasedServerCost(ram) +
      " per server, or $" +
      ns.getPurchasedServerCost(ram) * serverPurchaseLimit +
      " total."
  );
}
