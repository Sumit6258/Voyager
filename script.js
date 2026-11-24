(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const IMG = 'assets/images/', NAME = {v1: 'Voyager 1', v2: 'Voyager 2', both: 'Both Voyagers'};
const DEF = {v1: 'https://www.jpl.nasa.gov/missions/voyager-1/', v2: 'https://www.jpl.nasa.gov/missions/voyager-2/', both: 'https://science.nasa.gov/mission/voyager/'};
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));

/* Timeline: rendered from data/timeline.js */
const tl = $('#tl'); let divided = false;
tl.innerHTML = (window.TIMELINE || []).map(m => {
  const pre = m.future && !divided ? (divided = true, '<li class="both now" data-c="both"><p class="mono">Everything below is an estimate or projection</p></li>') : '';
  const credit = m.credit || (m.art ? 'Artist’s concept · NASA/JPL-Caltech' : 'NASA/JPL-Caltech');
  const alt = m.alt || `${m.title}, ${m.date}: ${NAME[m.craft]}${m.art ? ' (illustration)' : ''}`;
  return pre + `<li class="${m.craft}${m.major ? ' ctr' : ''}${m.future ? ' fut' : ''}" data-c="${m.craft}">
<p class="mono">${m.future ? 'Projection · ' : ''}${m.date} · ${NAME[m.craft]}</p>
<h3><button class="hit" type="button" aria-expanded="false">${m.title}</button></h3>
<p>${m.text}</p>
<p class="src"><a href="${m.src || DEF[m.craft]}" target="_blank" rel="noopener">NASA source ↗</a>${m.link ? ` · <a href="${m.link[1]}">${m.link[0]}</a>` : ''}</p>
<figure class="pvw ph" data-f="${m.img}"><img src="${IMG + m.img}" alt="${esc(alt)}" width="1600" height="1000" loading="lazy" decoding="async"><figcaption>${esc(m.title)} · ${credit}</figcaption></figure></li>`;
}).join('');
tl.addEventListener('click', e => {
  const b = e.target.closest('.hit');
  if (b) b.setAttribute('aria-expanded', b.closest('li').classList.toggle('open'));
});
$$('.flt button').forEach(b => b.onclick = () => {
  $$('.flt button').forEach(x => x.setAttribute('aria-pressed', x === b));
  $$('#tl > li').forEach(li => li.hidden = !(b.dataset.f === 'all' || li.dataset.c === 'both' || li.dataset.c === b.dataset.f));
});

/* Slow reveals */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), {rootMargin: '0px 0px -8% 0px'}) : null;
$$('.rv').forEach(el => io ? io.observe(el) : el.classList.add('in'));

/* Mobile menu */
const mb = $('.mb'), nl = $('.nl');
mb.onclick = () => mb.setAttribute('aria-expanded', nl.classList.toggle('open'));
nl.onclick = e => { if (e.target.tagName === 'A') { nl.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); } };

/* Lightbox */
const lb = $('#lb'), lbi = $('img', lb);
document.addEventListener('click', e => {
  if (e.target.closest('#lb')) return lb.close();
  const t = e.target.closest('[data-lb]'), i = t && $('img', t);
  if (i && !i.closest('.missing')) { lbi.src = i.currentSrc || i.src; lbi.alt = i.alt; $('p', lb).textContent = t.dataset.lb; lb.showModal(); }
});

/* Video: nothing loads from YouTube until the visitor presses play */
const vid = $('#vid');
vid.onclick = () => { vid.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/hh7wfElw4g0?autoplay=1&rel=0" title="VOYAGER 1: The Story of the Next 10 Trillion Years | 4K" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>'; };

/* Morse flasher: VGR. Dot = 1 unit, dash = 3, gap in a letter = 1, gap between letters = 3. */
const U = 250, WORD = [['V', '...-'], ['G', '--.'], ['R', '.-.']];
const fl = $('#fl'), warn = $('#warn'), live = $('#live'), stopBtn = $('#stop'), gs = $$('.g span', fl);
const soft = matchMedia('(prefers-reduced-motion: reduce)').matches;
let run = false, tm;
const sleep = ms => new Promise(r => { tm = setTimeout(r, ms); });
const mark = i => gs.forEach((s, k) => s.classList.toggle('on', k === i));
$('#send').onclick = () => warn.showModal();
$('#no').onclick = () => warn.close();
$('#go').onclick = () => { warn.close(); start($('#rep').checked); };
stopBtn.onclick = () => stop();
async function start(repeat) {
  run = true; fl.hidden = false; fl.classList.toggle('soft', soft); stopBtn.textContent = 'STOP';
  document.body.style.overflow = 'hidden'; stopBtn.focus(); live.textContent = 'Signal started.';
  try { if (fl.requestFullscreen) await fl.requestFullscreen(); } catch (e) {}
  await sleep(900);
  while (run) {
    for (let i = 0; i < 3 && run; i++) {
      mark(i);
      const code = WORD[i][1];
      for (let j = 0; j < code.length && run; j++) {
        fl.classList.add('lit'); await sleep(code[j] === '.' ? U : 3 * U);
        fl.classList.remove('lit'); if (j < code.length - 1) await sleep(U);
      }
      if (i < 2) await sleep(3 * U);
    }
    mark(-1);
    if (!repeat) break;
    await sleep(6 * U);
  }
  if (run) { run = false; stopBtn.textContent = 'CLOSE'; live.textContent = 'Signal complete.'; }
}
function stop() {
  run = false; clearTimeout(tm); fl.classList.remove('lit'); mark(-1); fl.hidden = true; document.body.style.overflow = '';
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  live.textContent = 'Signal stopped.'; $('#send').focus();
}
addEventListener('keydown', e => { if (e.key === 'Escape' && !fl.hidden) stop(); });
document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && !fl.hidden) stop(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && !fl.hidden) stop(); });
})();
