import { scan_recursive } from "scan_recursive.js";
import { auto_highest_capital } from "auto_highest_capital.js";
import { botnet } from "botnet.js";
import { zero_ram } from "zero_ram.js";
import { port_crack } from "port_crack.js";

/** @param {import(".").NS} ns */
export async function main(ns) {
  let script = "getpaid.js";
  let script_ram = ns.getScriptRam(script);
  let scan_results = scan_recursive(ns, "home", ["home"]);
  let target = ns.args[0] ? ns.args[0] : auto_highest_capital(ns, scan_results);
  port_crack(ns, target);
  let maxRamPowerOfTwo = 1;
  let funds = ns.getServerMoneyAvailable("home");
  while (ns.getPurchasedServerCost(2 ** maxRamPowerOfTwo) * 25 <= funds) {
    maxRamPowerOfTwo++;
  }
  let ram = ns.args[1] ? ns.args[1] : 2 ** (maxRamPowerOfTwo - 1);
  let threads = Math.floor(ram / script_ram);

  let serverPurchaseLimit = ns.getPurchasedServerLimit();

  let i = 0;
  ns.tprint("Purchasing " + serverPurchaseLimit + " Servers.");
  ns.tprint("Server ram: " + ram);
  ns.tprint(
    "Indiviudal Server runs " +
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

  while (i < serverPurchaseLimit) {
    ns.purchaseServer("pserv-" + i, ram);
    i++;
  }

  await ns.sleep(2000);

  await botnet(
    ns,
    target,
    scan_results,
    zero_ram(ns, scan_results, script_ram)
  );
}
