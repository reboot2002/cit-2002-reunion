// Mobile nav toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Live countdown to the reunion (Friday 23 July 2027, 00:00 IST)
const cd = document.getElementById('countdown');
if (cd) {
  const target = new Date('2027-07-23T00:00:00+05:30').getTime();
  const tick = () => {
    const ms = Math.max(0, target - Date.now());
    const d = Math.floor(ms / 864e5);
    const h = Math.floor(ms % 864e5 / 36e5);
    const m = Math.floor(ms % 36e5 / 6e4);
    const s = Math.floor(ms % 6e4 / 1e3);
    cd.innerHTML = [[d, 'days'], [h, 'hours'], [m, 'mins'], [s, 'secs']]
      .map(([v, l]) => `<div><b>${String(v).padStart(2, '0')}</b><small>${l}</small></div>`).join('');
  };
  tick();
  setInterval(tick, 1000);
}
