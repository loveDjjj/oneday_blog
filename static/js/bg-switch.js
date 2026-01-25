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

  function preload(url) {
    const img = new Image();
    img.src = url;
  }

  function applyBg(url) {
    document.documentElement.style.setProperty("--bg-url", `url("${url}")`);
  }

  // 第一张
  const first = pickRandomNoRepeat();
  preload(first);
  applyBg(first);

  setInterval(() => {
    const next = pickRandomNoRepeat();
    preload(next);
    applyBg(next);
  }, 120000);
})();
