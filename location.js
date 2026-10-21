// The location dropdown: Sign in takes the choice to the tracker (?location=), which fills it in on the
// request form and opens that location for an all-locations admin. Remembered on this device.
(() => {
  const sel = document.getElementById("loc"), links = [...document.querySelectorAll("a.signin")];
  links.forEach(a => { a.dataset.base = a.getAttribute("href"); });
  try { const saved = localStorage.getItem("welcome-location"); if (saved && [...sel.options].some(o => o.value === saved)) sel.value = saved; } catch (e) {}
  const update = () => {
    links.forEach(a => { a.href = a.dataset.base + "?location=" + encodeURIComponent(sel.value); });
    try { localStorage.setItem("welcome-location", sel.value); } catch (e) {}
  };
  sel.addEventListener("change", update);
  update();
})();
