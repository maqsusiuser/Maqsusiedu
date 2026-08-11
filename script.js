// Maqsusi EduTech — shared site behavior

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var overlay = document.querySelector('.nav-overlay');
  if (toggle && nav && overlay) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      overlay.classList.toggle('open');
    });
    overlay.addEventListener('click', function () {
      nav.classList.remove('open');
      overlay.classList.remove('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        overlay.classList.remove('open');
      });
    });
  }

  // Scroll reveal animation
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form submission (Formspree)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var submitBtn = form.querySelector('button[type="submit"]');
      var data = new FormData(form);

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          status.textContent = "Thanks! Your message has been sent — we'll get back to you within a day.";
          status.classList.add('show');
        } else {
          response.json().then(function (json) {
            var msg = (json && json.errors && json.errors.length)
              ? json.errors.map(function (e) { return e.message; }).join(', ')
              : 'Something went wrong. Please email us directly at edu@maqsusi.com.';
            status.textContent = msg;
            status.style.background = '#fdecea';
            status.style.borderColor = '#f3b3ac';
            status.style.color = '#a32419';
            status.classList.add('show');
          }).catch(function () {
            window.location.href = form.dataset.mailtoFallback;
          });
        }
      }).catch(function () {
        // Network/config issue — fall back to opening the user's email client
        window.location.href = form.dataset.mailtoFallback;
      }).finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
    });
  }
});
