(function () {
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  function requestFullscreen(el) {
    if (!el) return;
    var fn = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (fn) fn.call(el);
  }

  var buttons = document.querySelectorAll('[data-fullscreen-btn]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var selector = btn.getAttribute('data-fullscreen-target');
      var target = selector ? document.querySelector(selector) : null;
      if (!target) return;
      requestFullscreen(target);
    });
  });
})();
