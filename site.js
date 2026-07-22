/* Shared behavior for all pages: navigation, header state,
   back-to-top, accordions, scroll reveals, carousel, map.
   Sections guard on their elements, so pages load only what they have. */

(() => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // --- Mobile navigation ---
  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const primaryNav = document.getElementById("primary-nav");

  const closeNav = () => {
    header.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  };
  navToggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  primaryNav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeNav();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  // --- Header state + back-to-top visibility ---
  const backToTop = document.getElementById("back-to-top");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
    backToTop.classList.toggle("visible", window.scrollY > window.innerHeight);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  // --- Accordions (FAQ + bio) ---
  const wireAccordion = (buttonSelector, itemSelector) => {
    document.querySelectorAll(buttonSelector).forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(itemSelector);
        const open = item.classList.toggle("open");
        button.setAttribute("aria-expanded", String(open));
      });
    });
  };
  wireAccordion(".faq-question", ".faq-item");
  wireAccordion(".bio-button", ".person");

  // --- Reveal on scroll ---
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // --- Photo carousel (Swiper) ---
  const lowResFolderPath = "https://static.macso.org/output/low_res/_";
  const highResFolderPath =
    "https://static.macso.org/output/output/2024_contest__";
  const totalImages = 23;

  document.addEventListener("DOMContentLoaded", () => {
    const swiperWrapper = document.getElementById("photo-carousel");
    if (swiperWrapper && window.Swiper) {
      for (let i = 1; i <= totalImages; i++) {
        if (i === 11) continue; // image 11 is missing from the set
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        const img = document.createElement("img");
        img.src = `${lowResFolderPath}${i}.webp`;
        img.alt = `MACSO 2024 contest photo ${i}`;
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener(
          "load",
          () => {
            slide.classList.add("loaded");
            // Upgrade to the high-resolution version in the background
            const highRes = new Image();
            highRes.src = `${highResFolderPath}${i}.webp`;
            highRes.onload = () => {
              img.src = highRes.src;
            };
          },
          { once: true }
        );
        slide.appendChild(img);
        swiperWrapper.appendChild(slide);
      }

      new Swiper(".swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: reduceMotion
          ? false
          : {
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        },
      });
    }

    // --- Map (Leaflet) ---
    if (document.getElementById("map") && window.L) {
      const map = L.map("map", {
        attributionControl: false,
      }).setView([42.34322, -71.12534], 13);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic29jY2VyMTkwNCIsImEiOiJjbHoxenV1dHozYnNyMnFxN2hlZ3hpd2xqIn0.keWR6-XrQEo4UUs6BHkLsA",
        { attribution: "" }
      ).addTo(map);

      L.control
        .attribution({ position: "bottomright", prefix: false })
        .addAttribution(
          '&copy; <a href="https://www.mapbox.com/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        )
        .addTo(map);

      L.marker([42.34322, -71.12534])
        .addTo(map)
        .bindPopup(
          "<b>Brookline Teen Center</b><br>40 Aspinwall Ave, Brookline, MA 02446"
        )
        .openPopup();
    }
  });
})();
