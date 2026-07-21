document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS Animation
  AOS.init({
    duration: 800,
    easing: "slide",
    once: true,
    offset: 50,
  });

  // Sticky Navbar
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  // Initialize OWL Carousel for Testimonials
  if (jQuery && $(".our-exam-vouchers").length) {
    $(".our-exam-vouchers").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      // center: true,

      responsive: {
        0: { items: 1, dots: true, },
        768: { items: 2, dots: true, },
        992: { items: 3 },
        1200: { items: 4 },
      },
    });
  }
  if (jQuery && $(".testimonials-carousel").length) {
    $(".testimonials-carousel").owlCarousel({
      loop: true,
      fade: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      center: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsive: {
        0: { items: 1, nav: false, dots: true, },
        768: { items: 1, nav: false, dots: true, },
        992: { items: 2 },
      },
    });
  }

  // Initialize Hero Carousel with Fade Effect
  if (jQuery && $(".hero-carousel").length) {
    $(".hero-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      dots: true,
      fade: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
    });
  }

  // ── Student Success: Animated Counters ──────────────────────────────
  const animateCounter = (el, target, duration = 1800) => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = start >= 1000 ? start.toLocaleString() : start;
    }, 16);
  };

  const statNumbers = document.querySelectorAll(".success-stat-number");
  if (statNumbers.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 },
    );

    statNumbers.forEach((el) => observer.observe(el));
  }

  // ── Student Success: Duplicate marquee for seamless loop ────────────
  const track = document.querySelector(".success-marquee-track");
  if (track) {
    const cards = Array.from(track.children);
    // Clone all original cards and append for infinite scroll
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });
  }
});
