/** @param {import(".").NS} ns */
export function port_crack(ns, target) {
  if (!ns.hasRootAccess(target)) {
    let serverPortCount = ns.getServerNumPortsRequired(target);
    let portsOpened = 0;
    if (serverPortCount >= 1) {
      ns.brutessh(target);
      portsOpened++;
    }
    if (serverPortCount >= 2) {
      if (ns.fileExists("ftpcrack.exe")) {
        ns.ftpcrack(target);
        portsOpened++;
      }
    }
    if (serverPortCount >= 3) {
      if (ns.fileExists("relaysmtp.exe")) {
        ns.relaysmtp(target);
        portsOpened++;
      }
    }
    if (serverPortCount >= 4) {
      if (ns.fileExists("httpworm.exe")) {
        ns.httpworm(target);
        portsOpened++;
      }
    }
    if (serverPortCount >= 5) {
      if (ns.fileExists("sqlinject.exe")) {
        ns.sqlinject(target);
        portsOpened++;
      }
    }
    if (serverPortCount <= portsOpened) {
      ns.nuke(target);
    }
  }
}

export async function main(ns) {
  port_crack(ns, ns.args[0]);
}
