/** @param {import(".").NS} ns */
export async function main(ns) {
  ns.tprint(document);
  // eval("ns.bypass(document)");
  Number.prototype.toExponential = function () {
    return "";
  };
}
