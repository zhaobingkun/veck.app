(function () {
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  function renderLeaderboard(data) {
    var body = document.querySelector('[data-leaderboard-body]');
    if (!body || !data || !Array.isArray(data.entries)) return;

    var title = document.querySelector('[data-leaderboard-title]');
    var updated = document.querySelector('[data-leaderboard-updated]');

    if (title && data.title) {
      title.textContent = data.title;
    }

    if (updated && data.updated_at) {
      updated.textContent = 'Updated ' + data.updated_at + '.';
    }

    body.innerHTML = '';

    data.entries.slice(0, 10).forEach(function (entry, index) {
      var row = document.createElement('tr');
      var rankCell = document.createElement('td');
      var playerCell = document.createElement('td');
      var killsCell = document.createElement('td');

      rankCell.textContent = '#' + String(index + 1);
      playerCell.textContent = entry.player || 'Unknown';
      killsCell.textContent = String(entry.kills || 0);

      row.appendChild(rankCell);
      row.appendChild(playerCell);
      row.appendChild(killsCell);
      body.appendChild(row);
    });
  }

  var leaderboardBody = document.querySelector('[data-leaderboard-body]');
  if (leaderboardBody && window.fetch) {
    window.fetch('/assets/data/leaderboard.json', { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('Leaderboard request failed');
        return response.json();
      })
      .then(renderLeaderboard)
      .catch(function () {});
  }

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
