(function () {
  "use strict";

  var EXAMINED_KEY = "ff_case_examined";
  var cards = document.querySelectorAll("[data-examine]");

  function readExamined() {
    try {
      return JSON.parse(sessionStorage.getItem(EXAMINED_KEY) || "[]");
    } catch (err) {
      return [];
    }
  }

  function writeExamined(list) {
    try {
      sessionStorage.setItem(EXAMINED_KEY, JSON.stringify(list));
    } catch (err) {
      return;
    }
  }

  function refresh() {
    var seen = readExamined();
    Array.prototype.forEach.call(cards, function (card) {
      if (seen.indexOf(card.getAttribute("data-examine")) !== -1) {
        card.classList.add("seen");
      }
    });
  }

  Array.prototype.forEach.call(cards, function (card) {
    card.addEventListener("click", function () {
      var id = card.getAttribute("data-examine");
      var seen = readExamined();
      var at = seen.indexOf(id);
      if (at === -1) {
        seen.push(id);
      } else {
        seen.splice(at, 1);
      }
      writeExamined(seen);
      refresh();
    });
  });

  refresh();
})();
