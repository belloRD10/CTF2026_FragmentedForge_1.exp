(function () {
  "use strict";

  var chamberIndex = {
    position: "SECOND",
    integrity: "3d81a4f2c0",
    payload: "X2g0bnQzcjVfdW4xdDM="
  };

  var line = [];

  function banner(text, style) {
    console.log("%c" + text, style || "color:#c9a227;font-weight:bold");
    line.push(text);
  }

  function runScan() {
    var output = document.getElementById("output");

    line.length = 0;
    console.clear();

    banner("FRAGMENT FORGE :: FIELD LAB", "color:#c9a227;font-weight:bold;font-size:14px");
    banner("rig online, chamber index unsealed");
    banner("position -> " + chamberIndex.position);
    banner("integrity -> " + chamberIndex.integrity);
    banner("payload -> " + chamberIndex.payload);
    banner("payload is Base64; decode before assembling");

    if (output) {
      output.textContent = line.join("  |  ");
    }
  }

  function seedReceipt() {
    document.cookie = "archive_fragment=X3RoM19wMTNjMzV9; path=/; SameSite=Lax";
  }

  function boot() {
    var trigger = document.querySelector("[data-action='scan']");
    if (trigger) {
      trigger.addEventListener("click", runScan);
    }
    seedReceipt();
    console.log("[FRAGMENT FORGE] Field lab loaded. The rig wrote a receipt into the browser.");
    console.log("[FRAGMENT FORGE] Press RUN FORENSIC SCAN to unseal the chamber index.");
  }

  window.runScan = runScan;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
