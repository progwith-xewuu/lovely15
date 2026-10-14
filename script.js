/* ===== CONFIG: edit everything personal here =====
 names: change sender/partner. relationshipStartDate: YYYY-MM-DD.
 memories/timeline images: put files in images/ and edit paths. Add items by copying an object.
 letter.content: your letter (first line is typed). song.audioSrc: path to your own audio file. */
const CONFIG = {
  names: { sender: "Munchkin", partner: "Starlit" },
  relationshipStartDate: "2026-05-15",
  monthsaryTitle: "Happy 5th Month, Baby!",
  letter: { title: "A Letter From My Heart", content:
"My Starlit,\nBaby, five months na pala akong nanliligaw sa’yo, and ang dami na rin nating pinagdaanan in those months. Hindi naman naging perfect lahat. May mga tampuhan, arguments, misunderstandings, at times na pareho tayong nagkukulang. Pero despite all of that, nandito pa rin ako, willing na intindihin ka at ayusin ang mga bagay na kailangan nating ayusin.\n\n I know na hindi ako perfect, and I'm sorry sa mga times na nagkukulang ako o hindi ko naipaparamdam nang maayos kung gaano ka kahalaga sa akin. Sorry rin, baby, kung lately napapadalas na akong maging busy at minsan hindi ko nabibigay sa’yo yung time and attention na deserve mo. Ayokong maramdaman mong napapabayaan kita or hindi ka na priority sa akin. Kahit maraming ginagawa, I still want you to know na mahalaga ka sa akin, and I'll do my best na mas maayos kong ma-balance ang time ko para sa’yo at sa mga responsibilities ko.\n\n Thank you, baby, sa time, effort, at sa pagkakataong ibinigay mo sa akin para mas makilala ka. Kahit may mga disagreements tayo, I hope na patuloy pa rin nating piliing intindihin ang isa't isa. Hindi naman natin kailangang maging perfect. Ang importante, willing tayong matuto, mag-adjust, at ayusin ang mga bagay kapag may problema.\n\n Honestly, I'm happy na umabot tayo sa fifth month na ito. Gusto ko pa kitang makilala nang mas malalim, makasama sa simpleng moments, at gumawa ng mas marami pang memories with you. Hindi ko alam kung ano ang mangyayari sa future, pero gusto kong ipagpatuloy kung ano man ang meron tayo ngayon.\n\n And baby, may itatanong lang sana ako sa’yo bago matapos itong letter ko.\n\n PWEDE BA MAGING TAYO?\n\n joke lang, five months na akong nanliligaw, baka naman pwede mo na akong sagutin? Joke lang, pero alam mo namang sana soon.\n\n Happy 5th month, baby! Thank you for being part of these past months. I hope na mas marami pa tayong memories na mabuo together. I'm happy na ikaw ang nakilala ko, and I'm looking forward sa mga susunod pang buwan natin.\n\n I love you, baby.\n\nWith all my love," },
  song: { title: "Celeste", artist: "Tothapi", caption: "Every time I hear this, I think of you and us.", audioSrc: "Celeste (Full Band Version) [exi6u6Gp5nE].mp3", coverImage: "album_photo.png" },
  memories: [
    { image: "firstmeet.png", caption: "The day that made me smile.", date: "Our special day" },
    { image: "curte.png", caption: "My favorite memory with you.", date: "Another special day" },
    { image: "meandher.png", caption: "Just us being ourselves.", date: "A quiet afternoon" },
    { image: "flower.png", caption: "A moment I wish I could relive.", date: "A day to remember" },
    { image: "potobot.png", caption: "Another page in our story.", date: "One more chapter" },
    { image: "stolen.png", caption: "My favorite person.", date: "Always" }],
  reasons: [
    { title: "Your Smile", icon: "smile", message: "Even the hardest day feels lighter when I see you smile." },
    { title: "Your Kindness", icon: "heart", message: "The way you care about the little things tells me so much about your heart." },
    { title: "Your Comfort", icon: "sparkles", message: "Being with you makes the world feel a little less heavy." },
    { title: "Our Conversations", icon: "mail", message: "Even the simplest conversation with you becomes my favorite part of the day." },
    { title: "The Little Things", icon: "gift", message: "I remember the small things you do, because they mean more than you realize." },
    { title: "Choosing Each Other", icon: "check", message: "I love that we keep learning, growing, and making memories together." },
    { title: "Your Laugh", icon: "smile", message: "Hidden reason: your laugh is the sound I would pick out of any crowd.", hidden: true },
    { title: "Your Patience", icon: "heart", message: "Hidden reason: you give me room to be myself, and that is rare.", hidden: true },
    { title: "Your Presence", icon: "sparkles", message: "Hidden reason: even silence with you feels like home.", hidden: true }],
  timeline: [
    { date: "2026-02-07", title: "The Day We Met", description: "The beginning of something special.", story: "medyo nakakahiya talaga kapag kaharap mo crush mo e", image: "firstmeet.png" },
    { date: "2025-06-29", title: "Our First Conversation", description: "Words that did not end.", story: "Nag pa edit siya sakin" },
    { date: "2025-06-29", title: "Our First Date", description: "Nervous, happy, and unforgettable.", story: "Nakakamiss mag laro kasama ka sana starcity or ek naman" },
    { date: "2025-06-29", title: "The Day We Became Official", description: "We chose each other.", story: "Araw na nag tanong kung pede ba with ring" },
    { date: "2026-05-18", title: "A Memory That Makes Us Laugh", description: "Still funny every time i remember.", story: "FIRST KISS LAPLAPAN AGAD AGDGSHDAHAH MISS NA AYOS" }],
  openWhenLetters: [
    { title: "Open When You Miss Me", message: "Close your eyes. I am holding your hand and reminding you that you are loved." },
    { title: "Open When You Feel Sad", message: "This feeling will pass. Until it does, I am on your side." },
    { title: "Open When You Need Comfort", message: "Breathe slowly. You are safe, and you are not alone." },
    { title: "Open When You Cannot Sleep", message: "Rest your mind. Tomorrow I will still be here, still yours." },
    { title: "Open When You Need to Smile", message: "Remember the silly moments we share. I am smiling too." },
    { title: "Open When You Need a Reminder of How Much I Love You", message: "More than words can hold, and more every day." }],
  surprises: { giftMessage: "You will always be someone very special to me.", giftImage: "images/final-photo.jpg",
    finalMessage: "If I could choose again, I would still choose you.", finalImage: "images/final-photo.jpg" }
};

/* ===== helpers ===== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ICONS = {
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>', play: '<path d="M6 3l14 9-14 9z"/>',
  pause: '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>', left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>',
  up: '<path d="m5 12 7-7 7 7M12 19V5"/>', menu: '<path d="M4 6h16M4 12h16M4 18h16"/>', sparkles: '<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/>',
  smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>', gift: '<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>', volume: '<path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7"/>', lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'
};
const icon = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ICONS.heart}</svg>`;
const setIcons = (r = document) => $$("i[data-i]", r).forEach(e => { e.innerHTML = icon(e.dataset.i); });
const setBtnIcon = (b, n) => { b.innerHTML = icon(n); };
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const img = (src, alt) => `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
/* Failed images show a labeled placeholder instead of a broken icon */
function guardImages(root = document) {
  $$("img", root).forEach(i => { if (i.dataset.g) return; i.dataset.g = 1;
    i.addEventListener("error", () => { const d = document.createElement("span"); d.textContent = "Photo to be added"; i.replaceWith(d); }); });
}

/* ===== names, titles, hero ===== */
function fillText() {
  const { sender, partner } = CONFIG.names;
  $("#title").textContent = CONFIG.monthsaryTitle; document.title = CONFIG.monthsaryTitle;
  ["#nPartner", "#cP"].forEach(s => $(s).textContent = partner); ["#nSender", "#cS"].forEach(s => $(s).textContent = sender);
  $("#cSign").textContent = sender; $("#letterTitle").textContent = CONFIG.letter.title;
  $("#giftText").textContent = CONFIG.surprises.giftMessage; $("#lastMsg").textContent = CONFIG.surprises.finalMessage;
  $("#giftImg").src = CONFIG.surprises.giftImage; $("#finalImg").src = CONFIG.surprises.finalImage;
  const f = $(".floaters");
  if (!reduce) for (let i = 0; i < 8; i++) { const s = document.createElement("span"); s.style.cssText = `left:${i * 13 + 4}%;animation-delay:${-i * 1.6}s;animation-duration:${11 + i}s`; s.innerHTML = icon("heart"); f.append(s); }
}

/* ===== counter: calendar-accurate months ===== */
function diffParts(start, now) {
  let months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  const anchor = m => new Date(start.getFullYear(), start.getMonth() + m, start.getDate(), start.getHours(), start.getMinutes());
  if (anchor(months) > now) months--;
  const ms = now - anchor(months), days = Math.floor(ms / 864e5);
  return { months, days, hours: Math.floor(ms / 36e5) % 24, mins: Math.floor(ms / 6e4) % 60, secs: Math.floor(ms / 1e3) % 60, total: Math.floor((now - start) / 864e5) };
}
function initCounter() {
  const start = new Date(CONFIG.relationshipStartDate + "T00:00:00"), box = $("#count");
  if (isNaN(start)) { box.textContent = "Add a valid relationship date (YYYY-MM-DD) in script.js."; return; }
  const tick = () => {
    const now = new Date();
    if (start > now) { box.innerHTML = "<p>Our story begins on " + start.toDateString() + ".</p>"; $("#heroDur").textContent = ""; return; }
    const p = diffParts(start, now), cell = (n, l) => `<div><b>${n}</b><span>${l}</span></div>`;
    box.innerHTML = cell(p.total, "days together") + cell(p.months, "months") + cell(p.days, "extra days") + cell(p.hours, "hours") + cell(p.mins, "minutes") + cell(p.secs, "seconds");
    $("#heroDur").textContent = `${p.months} months and ${p.days} days together`;
  };
  tick(); setInterval(tick, 1000);
}

/* ===== envelope and letter ===== */
let typed = false;
function openLetter() {
  const env = $("#env"); env.classList.add("open"); $("#envBtn").setAttribute("aria-expanded", "true");
  const [first, ...rest] = CONFIG.letter.content.split("\n"), fl = $("#firstLine");
  $("#letterRest").textContent = rest.join("\n"); $("#sign").textContent = CONFIG.names.sender; $("#letterRest").classList.add("opened");
  if (!typed && !reduce) { typed = true; let i = 0; const t = setInterval(() => { fl.textContent = first.slice(0, ++i); if (i >= first.length) clearInterval(t); }, 70); } else fl.textContent = first;
}
function closeLetter() { $("#env").classList.remove("open"); $("#envBtn").setAttribute("aria-expanded", "false"); }
function initLetter() {
  $("#envBtn").addEventListener("click", openLetter); $("#closeLetter").addEventListener("click", closeLetter);
  $("#reopenLetter").addEventListener("click", openLetter);
  const go = () => { $("#letter").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); setTimeout(openLetter, reduce ? 0 : 600); };
  $("#openLetter").addEventListener("click", go); $("#heroEnv").addEventListener("click", go); $("#again").addEventListener("click", go);
}

/* ===== modal (native dialog: focus trap + Escape built in) ===== */
const dlg = $("#dlg"); let lastFocus = null, galleryIdx = -1;
function openDialog(html) { lastFocus = document.activeElement; $("#dBody").innerHTML = html; guardImages(dlg); if (!dlg.open) dlg.showModal(); document.body.style.overflow = "hidden"; }
dlg.addEventListener("close", () => { document.body.style.overflow = ""; galleryIdx = -1; lastFocus && lastFocus.focus(); });
$("#dClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

/* ===== gallery + lightbox ===== */
function showPhoto(i) {
  const m = CONFIG.memories, n = m.length; galleryIdx = (i + n) % n; const p = m[galleryIdx];
  openDialog(`${img(p.image, p.caption)}<p class="script">${esc(p.caption)}</p><p class="small">${esc(p.date)}</p><div class="dlg-nav"><button class="icon-btn" data-d="-1" aria-label="Previous photo">${icon("left")}</button><button class="icon-btn" data-d="1" aria-label="Next photo">${icon("right")}</button></div>`);
  $$(".dlg-nav button", dlg).forEach(b => b.addEventListener("click", () => showPhoto(galleryIdx + +b.dataset.d)));
}
function initGallery() {
  $("#gallery").innerHTML = CONFIG.memories.map((m, i) => `<button class="p" data-i="${i}" aria-label="Open photo: ${esc(m.caption)}"><span class="ph">${img(m.image, m.caption)}</span><span class="script">${esc(m.caption)}</span></button>`).join("");
  $$("#gallery .p").forEach(b => b.addEventListener("click", () => showPhoto(+b.dataset.i))); guardImages($("#gallery"));
  document.addEventListener("keydown", e => { if (galleryIdx < 0 || !dlg.open) return; if (e.key === "ArrowLeft") showPhoto(galleryIdx - 1); if (e.key === "ArrowRight") showPhoto(galleryIdx + 1); });
}

/* ===== reasons ===== */
function initReasons() {
  const list = CONFIG.reasons, box = $("#cards");
  box.innerHTML = list.map((r, i) => `<button class="card${r.hidden ? " hide" : ""}" aria-expanded="false" data-i="${i}"><h3>${icon(r.icon)}${esc(r.title)}</h3><span class="more"><span>${esc(r.message)}</span></span></button>`).join("");
  $$(".card", box).forEach(c => c.addEventListener("click", () => c.setAttribute("aria-expanded", c.getAttribute("aria-expanded") === "false")));
  $$(".card .more", box).forEach(m => { m.innerHTML = `<div>${m.innerHTML}</div>`; });
  const hidden = () => $$(".card.hide", box), prog = () => { const h = hidden().length; $("#reasonProg").textContent = `${list.length - h} of ${list.length} reasons revealed`; $("#moreReason").disabled = !h; };
  $("#moreReason").addEventListener("click", () => { const c = hidden()[0]; if (c) { c.classList.remove("hide"); c.setAttribute("aria-expanded", "true"); c.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" }); } prog(); });
  prog();
}

/* ===== song ===== */
const fmt = s => isFinite(s) ? Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0") : "0:00";
function initSong() {
  const s = CONFIG.song; $("#songTitle").textContent = s.title; $("#songArtist").textContent = s.artist; $("#songCap").textContent = s.caption;
  $("#cover").style.backgroundImage = `url("${s.coverImage}")`; const btn = $("#playBtn"), msg = $("#songMsg"); setBtnIcon(btn, "play"); setIcons($(".pl"));
  const off = t => { msg.textContent = t; [btn, $("#seek"), $("#vol")].forEach(e => e.disabled = true); };
  if (!s.audioSrc) return off("The song has not been added yet. Set song.audioSrc in script.js.");
  const a = new Audio(s.audioSrc); a.preload = "metadata"; a.volume = .8;
  a.addEventListener("error", () => off("The audio file could not be loaded."));
  a.addEventListener("timeupdate", () => { $("#seek").value = a.duration ? a.currentTime / a.duration * 100 : 0; $("#time").textContent = `${fmt(a.currentTime)} / ${fmt(a.duration)}`; });
  a.addEventListener("play", () => { $("#vinyl").classList.add("spin"); setBtnIcon(btn, "pause"); btn.setAttribute("aria-label", "Pause"); });
  const stop = () => { $("#vinyl").classList.remove("spin"); setBtnIcon(btn, "play"); btn.setAttribute("aria-label", "Play"); };
  a.addEventListener("pause", stop); a.addEventListener("ended", stop);
  btn.addEventListener("click", () => a.paused ? a.play().catch(() => off("Playback was blocked. Try again.")) : a.pause());
  $("#seek").addEventListener("input", e => { if (a.duration) a.currentTime = e.target.value / 100 * a.duration; });
  $("#vol").addEventListener("input", e => { a.volume = e.target.value; });
}

/* ===== timeline ===== */
function initTimeline() {
  $("#tl").innerHTML = CONFIG.timeline.map((t, i) => `<li><button data-i="${i}" aria-label="Read the story: ${esc(t.title)}"><span class="small">${esc(t.date)}</span><h3>${esc(t.title)}</h3><span>${esc(t.description)}</span></button></li>`).join("");
  $$("#tl button").forEach(b => b.addEventListener("click", () => { const t = CONFIG.timeline[b.dataset.i];
    openDialog(`<p class="small">${esc(t.date)}</p><h3>${esc(t.title)}</h3>${t.image ? img(t.image, t.title) : ""}<p class="dlg-p">${esc(t.story || t.description)}</p>`); }));
}

/* ===== open-when letters ===== */
function initOpenWhen() {
  $("#mini").innerHTML = CONFIG.openWhenLetters.map((l, i) => `<button class="mn" data-i="${i}">${icon("mail").replace("<svg", '<svg width="18" height="18"')}${esc(l.title)}</button>`).join("");
  $$(".mn").forEach(b => { b.querySelector("svg").outerHTML = `<i>${b.querySelector("svg").outerHTML}</i>`; });
  $$(".mn").forEach(b => b.addEventListener("click", () => { const l = CONFIG.openWhenLetters[b.dataset.i];
    openDialog(`<h3>${esc(l.title)}</h3><div class="rule"></div><p class="dlg-p opened">${esc(l.message)}</p><p class="script">${esc(CONFIG.names.sender)}</p>`); }));
}

/* ===== gift and final surprise ===== */
function initGift() {
  const g = $("#giftBtn"), msg = $("#giftMsg"), tg = $("#giftToggle"); let busy = false;
  $(".petals", g).innerHTML = Array.from({ length: 8 }, (_, i) => `<i style="--x:${(i - 4) * 22}px;animation-delay:${i * .08}s"></i>`).join("");
  const toggle = () => { if (busy) return; const open = g.classList.contains("open");
    if (open) { g.classList.remove("open"); msg.classList.remove("show"); g.setAttribute("aria-expanded", "false"); tg.textContent = "Open the Gift"; return; }
    busy = true; g.classList.add("shake"); setTimeout(() => { g.classList.remove("shake"); g.classList.add("open"); g.setAttribute("aria-expanded", "true"); tg.textContent = "Close the Gift";
      setTimeout(() => { msg.classList.add("show"); busy = false; }, reduce ? 0 : 500); }, reduce ? 0 : 600); };
  g.addEventListener("click", toggle); tg.addEventListener("click", toggle);
  $("#last").addEventListener("click", () => { $("#lastMsg").classList.toggle("show"); });
}

/* ===== navigation, progress, observers ===== */
function initNav() {
  const menu = $("#menu"), mb = $("#menuBtn"); setBtnIcon(mb, "menu");
  mb.addEventListener("click", () => { const o = menu.classList.toggle("open"); mb.setAttribute("aria-expanded", o); mb.setAttribute("aria-label", o ? "Close menu" : "Open menu"); });
  $$("a", menu).forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); }));
  const bar = $("#progress"), top = $("#top");
  addEventListener("scroll", () => { const h = document.documentElement; bar.style.width = (scrollY / (h.scrollHeight - innerHeight) * 100 || 0) + "%"; top.classList.toggle("show", scrollY > 600); }, { passive: true });
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));
  const links = $$("a", menu), so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section").forEach(s => so.observe(s));
  const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } }), { threshold: .2 });
  $$("#tl li").forEach(li => ro.observe(li));
}

/* ===== init ===== */
document.addEventListener("DOMContentLoaded", () => {
  setIcons(); fillText(); initCounter(); initLetter(); initGallery(); initReasons(); initSong(); initTimeline(); initOpenWhen(); initGift(); initNav();
  setIcons(); [$("#top"), $("#dClose")].forEach(b => b.querySelector("i") && setIcons(b)); guardImages();
  setBtnIcon($("#top"), "up"); setBtnIcon($("#dClose"), "x");
});
