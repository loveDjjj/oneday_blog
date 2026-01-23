(function () {
  const bgs = window.__BGS__ || [];
  if (bgs.length === 0) return;

  let last = null;

  function pickRandomNoRepeat() {
    if (bgs.length === 1) return bgs[0];

    let pick;
    do {
      pick = bgs[Math.floor(Math.random() * bgs.length)];
    } while (pick === last);

    last = pick;
    return pick;
  }

  function applyBg(url) {
    document.documentElement.style.setProperty("--bg-url", `url("${url}")`);
  }

  applyBg(pickRandomNoRepeat());

  setInterval(() => {
    applyBg(pickRandomNoRepeat());
  }, 120000);
})();
