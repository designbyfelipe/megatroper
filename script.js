document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  function setMenuState(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'FECHAR' : 'MENU';
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  if (toggle && nav) {
    nav.id = nav.id || 'primary-navigation';
    toggle.setAttribute('type', 'button');
    toggle.setAttribute('aria-controls', nav.id);
    toggle.addEventListener('click', function () {
      setMenuState(!nav.classList.contains('open'));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setMenuState(false);
        toggle.focus();
      }
    });
  }

  // simple client-side filter demo for /trabalhos/
  var filterInputs = document.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('[data-work]');
  if (filterInputs.length && cards.length) {
    function applyFilters() {
      var active = {};
      filterInputs.forEach(function (el) {
        if (el.value) active[el.dataset.filter] = el.value;
      });
      cards.forEach(function (card) {
        var visible = true;
        Object.keys(active).forEach(function (key) {
          if (card.dataset[key] !== active[key]) visible = false;
        });
        card.hidden = !visible;
      });
    }
    filterInputs.forEach(function (el) { el.addEventListener('change', applyFilters); });
  }
});
