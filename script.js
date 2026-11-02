// Aditya Hanif — personal site. Vanilla JS: footer year, mobile nav, portfolio filter.
(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll("#projectGrid .card");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-category") === f;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
})();
