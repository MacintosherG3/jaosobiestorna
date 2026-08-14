const verses = [
  ["„Kto odkłada wszystko na później, ten później ma wszystko naraz.”","Pat. 4:20"],
  ["„Jeżeli coś działa, nie poprawiaj tego pięć minut przed terminem.”","Księga Deployu 2:7"],
  ["„Nie każdy problem wymaga odpowiedzi. Czasem wymaga wyciszenia powiadomień.”","Pat. 8:12"],
  ["„Aura nie bierze się z krzyku. Aura bierze się z tego, że nie musisz krzyczeć.”","List do Ziomeczków 1:9"],
  ["„Najpierw backup. Potem odwaga.”","Księga Administratora 3:2"],
  ["„Błogosławieni ogarnięci, albowiem to oni przeczytali instrukcję.”","Pat. 5:5"],
  ["„Nie ufaj decyzji podjętej na 2% baterii.”","Apokryf Powerbanka 7:1"]
];

const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

const btn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
btn?.addEventListener("click", () => {
  links.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(links.classList.contains("open")));
});
links?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

document.querySelectorAll(".copy-prayer").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.text);
      const old = button.textContent;
      button.textContent = "Skopiowano. Amen.";
      setTimeout(() => button.textContent = old, 1500);
    } catch {
      button.textContent = "Amen.";
    }
  });
});

document.querySelector("#newVerse")?.addEventListener("click", () => {
  const [text, ref] = verses[Math.floor(Math.random() * verses.length)];
  document.querySelector("#scriptureText").textContent = text;
  document.querySelector("#scriptureRef").textContent = ref;
});

const dialog = document.querySelector("#conversionDialog");
document.querySelector("#convertBtn")?.addEventListener("click", () => {
  dialog.showModal();
  const followers = document.querySelector("#followers");
  const current = parseInt(followers.textContent.replace(/\s/g,""), 10);
  followers.textContent = (current + 1).toLocaleString("pl-PL");
});
document.querySelector("#closeDialog")?.addEventListener("click", () => dialog.close());

document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const id = a.getAttribute("href");
  const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({behavior:"smooth", block:"start"});
}));
