// ===================== ABLEST STUDIO — main.js =====================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- header solid-on-scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var setSolid = function () {
      if (window.scrollY > 40) header.classList.add('solid');
      else header.classList.remove('solid');
    };
    setSolid();
    window.addEventListener('scroll', setSolid, { passive: true });
  }

  /* ---------- mobile menu ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.primary-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('open');
      header.classList.toggle('menu-open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        header.classList.remove('menu-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- generic horizontal carousel (project rail) ---------- */
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('[data-track]');
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    if (!track) return;
    var step = function () {
      var card = track.querySelector('[data-track] > *');
      return card ? card.getBoundingClientRect().width + 38 : 400;
    };
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
  });

  /* ---------- capabilities carousel (dots/progress + drag) ---------- */
  document.querySelectorAll('[data-cap-carousel]').forEach(function (root) {
    var track = root.querySelector('.cap-track');
    var bar = root.querySelector('.bar');
    var indexEl = root.querySelector('[data-cap-index]');
    var slides = track.querySelectorAll('.cap-slide');
    var prev = root.querySelector('[data-cap-prev]');
    var next = root.querySelector('[data-cap-next]');
    var total = slides.length;

    function updateProgress() {
      var i = Math.round(track.scrollLeft / track.clientWidth);
      i = Math.max(0, Math.min(total - 1, i));
      if (bar) bar.style.width = ((i + 1) / total * 100) + '%';
      if (indexEl) indexEl.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
    }
    track.addEventListener('scroll', function () {
      window.requestAnimationFrame(updateProgress);
    }, { passive: true });
    updateProgress();

    if (next) next.addEventListener('click', function () { track.scrollBy({ left: track.clientWidth, behavior: 'smooth' }); });
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }); });
  });

  /* ---------- process timeline (hover/click swaps image) ---------- */
  document.querySelectorAll('[data-process]').forEach(function (root) {
    var steps = root.querySelectorAll('.process-step');
    var img = root.querySelector('.process-media img');
    steps.forEach(function (step) {
      step.addEventListener('click', function () {
        steps.forEach(function (s) { s.classList.remove('active'); });
        step.classList.add('active');
        var src = step.getAttribute('data-img');
        if (img && src) {
          img.style.opacity = 0;
          setTimeout(function () { img.src = src; img.style.opacity = 1; }, 220);
        }
      });
    });
  });

  /* ---------- before / after slider ---------- */
  document.querySelectorAll('.ba-slider').forEach(function (slider) {
    var after = slider.querySelector('.ba-after');
    var handle = slider.querySelector('.ba-handle');
    function setPos(x) {
      var rect = slider.getBoundingClientRect();
      var pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
      after.style.clipPath = 'inset(0 0 0 ' + (pct * 100) + '%)';
      handle.style.left = (pct * 100) + '%';
    }
    var dragging = false;
    slider.addEventListener('pointerdown', function (e) { dragging = true; setPos(e.clientX); });
    window.addEventListener('pointermove', function (e) { if (dragging) setPos(e.clientX); });
    window.addEventListener('pointerup', function () { dragging = false; });
    slider.addEventListener('touchmove', function (e) { setPos(e.touches[0].clientX); }, { passive: true });
  });

  /* ---------- lightbox ---------- */
  document.querySelectorAll('.zoomable').forEach(function (img) {
    img.addEventListener('click', function () {
      var overlay = document.createElement('div');
      overlay.className = 'lb-overlay';
      var big = document.createElement('img');
      big.src = img.getAttribute('data-full') || img.src;
      big.alt = img.alt;
      var close = document.createElement('button');
      close.className = 'lb-close';
      close.innerHTML = '&times;';
      overlay.appendChild(big);
      overlay.appendChild(close);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';
      function closeLB() { overlay.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); }
      function onKey(e) { if (e.key === 'Escape') closeLB(); }
      overlay.addEventListener('click', function (e) { if (e.target === overlay || e.target === close) closeLB(); });
      document.addEventListener('keydown', onKey);
    });
  });

  /* ---------- work archive filter ---------- */
  var filterRow = document.querySelector('.filter-row');
  if (filterRow) {
    var items = document.querySelectorAll('.work-grid .wg-item');
    filterRow.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterRow.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        items.forEach(function (item) {
          var cats = (item.getAttribute('data-categories') || '').split(',');
          item.style.display = (cat === 'all' || cats.indexOf(cat) !== -1) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- contact form (Formspree) ---------- */
  var form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'SENDING…';
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.style.display = 'none';
          document.querySelector('.form-success').style.display = 'block';
        } else {
          status.textContent = 'Something went wrong — please email hello@ableststudio.com directly.';
          btn.textContent = 'SUBMIT INQUIRY';
        }
      }).catch(function () {
        status.textContent = 'Something went wrong — please email hello@ableststudio.com directly.';
        btn.textContent = 'SUBMIT INQUIRY';
      });
    });
  }

  /* ---------- hero video play/pause toggle ---------- */
  document.querySelectorAll('[data-video-toggle]').forEach(function (btn) {
    var vid = document.getElementById(btn.getAttribute('data-video-toggle'));
    if (!vid) return;
    btn.addEventListener('click', function () {
      if (vid.paused) { vid.play(); btn.classList.add('playing'); }
      else { vid.pause(); btn.classList.remove('playing'); }
    });
  });

});
