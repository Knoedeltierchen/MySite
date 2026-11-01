// script.js
// Steuert das Hamburger-Menü oben rechts.

(function () {
  const knopf = document.getElementById('menue-knopf');
  const liste = document.getElementById('menue-liste');
  const spracheKnopf = document.getElementById('sprache-knopf');
  const hinweis = document.getElementById('sprach-hinweis');

  // Seiten ohne Menü (zum Beispiel 404.html) brauchen nichts davon
  if (!knopf || !liste) return;

  // Menü öffnen (true) oder schließen (false)
  function menueSetzen(offen) {
    knopf.setAttribute('aria-expanded', String(offen));
    knopf.setAttribute('aria-label', offen ? 'Menü schließen' : 'Menü öffnen');
    liste.hidden = !offen;
    if (!offen && hinweis) hinweis.hidden = true;
  }

  // Klick auf die drei Striche: Menü umschalten
  knopf.addEventListener('click', function () {
    menueSetzen(liste.hidden);
  });

  // Klick irgendwo außerhalb des Menüs: Menü schließen
  document.addEventListener('click', function (ereignis) {
    if (!liste.hidden && !ereignis.target.closest('.menue')) {
      menueSetzen(false);
    }
  });

  // Esc-Taste: Menü schließen und zurück zum Knopf springen
  document.addEventListener('keydown', function (ereignis) {
    if (ereignis.key === 'Escape' && !liste.hidden) {
      menueSetzen(false);
      knopf.focus();
    }
  });

  // PLATZHALTER: Language
  // Aktuell zeigt der Eintrag nur einen Hinweis. Hier kommt später die
  // Sprachauswahl hin, zum Beispiel ein Wechsel zwischen Deutsch und Englisch.
  if (spracheKnopf && hinweis) {
    spracheKnopf.addEventListener('click', function () {
      hinweis.hidden = false;
    });
  }
})();
