/**
 * Portfolio - Scripts
 * Gestion des interactions et animations
 */

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initMobileMenu();
  initScrollAnimations();
  initCounterAnimation();
  initContactForm();
  initSmoothScroll();
  initGoToTop();
  initProductModal();
  initMediaViewer();
});

/**
 * Navigation - Effet scroll
 */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Menu Mobile
 */
function initMobileMenu() {
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");
  var mobileMenuClose = document.getElementById("mobileMenuClose");
  var mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  var mobileNavLinks = document.querySelectorAll(
    ".mobile-nav-link, .mobile-menu-cta"
  );

  if (!navToggle || !navMenu) return;

  function openMenu() {
    navToggle.classList.add("active");
    navMenu.classList.add("active");
    if (mobileMenuOverlay) mobileMenuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  navToggle.addEventListener("click", openMenu);

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", closeMenu);
  }

  mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });
}

/**
 * Animations au scroll (Intersection Observer)
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elements a animer
  var animatedElements = [
    ".section-header",
    ".skill-category",
    ".project-card",
    ".about-image",
    ".about-text",
    ".contact-info",
    ".contact-form",
  ];

  animatedElements.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.classList.add("fade-in");
      observer.observe(el);
    });
  });

  // Animation des stats
  var stats = document.querySelectorAll(".stat");
  stats.forEach(function (stat, index) {
    stat.classList.add("fade-in");
    stat.style.transitionDelay = index * 0.1 + "s";
    observer.observe(stat);
  });
}

/**
 * Animation des compteurs
 */
function initCounterAnimation() {
  var counters = document.querySelectorAll(".stat-number[data-count]");
  var animated = new Set();

  var observerOptions = {
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !animated.has(entry.target)) {
        animated.add(entry.target);
        animateCounter(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(function (counter) {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  var target = parseInt(element.getAttribute("data-count"), 10);
  var duration = 2000;
  var step = target / (duration / 16);
  var current = 0;

  function updateCounter() {
    current += step;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(updateCounter);
}

/**
 * Formulaire de contact
 */
function initContactForm() {
  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var formData = new FormData(form);
    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = "<span>Envoi en cours...</span>";
    submitBtn.disabled = true;

    // Simulation d'envoi
    setTimeout(function () {
      submitBtn.innerHTML = "<span>Message envoy&eacute; !</span>";
      submitBtn.style.background =
        "linear-gradient(135deg, #10b981 0%, #059669 100%)";

      form.reset();

      setTimeout(function () {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = "";
      }, 3000);
    }, 1500);
  });

  // Animation focus des inputs
  var inputs = form.querySelectorAll("input, textarea");
  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  });
}

/**
 * Smooth Scroll pour les ancres
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return;

      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var navHeight = document.getElementById("navbar").offsetHeight;
        var targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/**
 * Go to Top Button
 */
function initGoToTop() {
  var goToTopBtn = document.getElementById("goToTop");
  if (!goToTopBtn) return;

  function toggleButton() {
    if (window.pageYOffset > 400) {
      goToTopBtn.classList.add("visible");
    } else {
      goToTopBtn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleButton, { passive: true });

  goToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  toggleButton();
}

/**
 * Effet de typing pour le code (optionnel)
 */
function initTypingEffect() {
  var codeContent = document.querySelector(".window-content code");
  if (!codeContent) return;

  var originalHTML = codeContent.innerHTML;
  var text = codeContent.textContent;
  codeContent.innerHTML = "";

  var index = 0;
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = originalHTML;

  function type() {
    if (index < text.length) {
      codeContent.innerHTML = originalHTML.substring(
        0,
        originalHTML.indexOf(text.charAt(index)) + index + 1
      );
      index++;
      setTimeout(type, 30);
    }
  }

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      type();
      observer.disconnect();
    }
  });

  observer.observe(codeContent);
}

/**
 * Parallax subtil sur le hero
 */
function initParallax() {
  var heroVisual = document.querySelector(".hero-visual");
  if (!heroVisual) return;

  window.addEventListener(
    "scroll",
    function () {
      var scrolled = window.pageYOffset;
      var rate = scrolled * 0.3;

      if (scrolled < window.innerHeight) {
        heroVisual.style.transform = "translateY(" + rate + "px)";
      }
    },
    { passive: true }
  );
}

/**
 * Gestion du theme (optionnel pour extension future)
 */
var ThemeManager = {
  init: function () {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  },

  toggle: function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  },
};

/**
 * Utilitaire - Debounce
 */
function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

/**
 * Utilitaire - Throttle
 */
function throttle(func, limit) {
  var inThrottle;
  return function () {
    var context = this;
    var args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function () {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Product Modal & Carousel
 */
function initProductModal() {
  const modalOverlay = document.getElementById("productModal");
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector(".modal-close");
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  const modalContainer = modalOverlay.querySelector(".modal-container");

  // Open Modal
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close Modal
  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // Carousel Logic (Swiper)
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        // Medium screens (>= 768px)
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        // Large screens (>= 1024px)
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // Extra Large screens (>= 1280px)
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }
}

/**
 * Media Viewer (Lightroom style)
 */
function initMediaViewer() {
  const viewerOverlay = document.getElementById("mediaViewer");
  if (!viewerOverlay) return;

  const viewerImage = viewerOverlay.querySelector(".viewer-image");
  const viewerVideoContainer = viewerOverlay.querySelector(
    ".viewer-video-container"
  );
  const viewerVideo = viewerOverlay.querySelector(".viewer-video");
  const closeBtn = viewerOverlay.querySelector(".viewer-close");

  // Video Controls
  const playPauseBtn = viewerOverlay.querySelector(".play-pause-btn");
  const iconPlay = playPauseBtn.querySelector(".icon-play");
  const iconPause = playPauseBtn.querySelector(".icon-pause");
  const progressBarContainer = viewerOverlay.querySelector(
    ".progress-bar-container"
  );
  const progressFill = viewerOverlay.querySelector(".progress-fill");
  const timeDisplay = viewerOverlay.querySelector(".time-display");
  const volumeBtn = viewerOverlay.querySelector(".volume-btn");
  const iconVolumeHigh = volumeBtn.querySelector(".icon-volume-high");
  const iconVolumeMute = volumeBtn.querySelector(".icon-volume-mute");
  const volumeSlider = viewerOverlay.querySelector(".volume-slider");
  const fullscreenBtn = viewerOverlay.querySelector(".fullscreen-btn");

  // Open Viewer Delegation
  document.addEventListener("click", function (e) {
    const slide = e.target.closest(".swiper-slide");
    if (
      slide &&
      !e.target.closest(".swiper-button-next") &&
      !e.target.closest(".swiper-button-prev")
    ) {
      const img = slide.querySelector("img");
      const video = slide.querySelector("video");

      if (img) {
        openImageViewer(img.src);
      } else if (video) {
        openVideoViewer(video.src);
      }
    }
  });

  function openImageViewer(src) {
    viewerImage.src = src;
    viewerImage.style.display = "block";
    viewerVideoContainer.style.display = "none";
    viewerVideo.pause();
    displayViewer();
  }

  function openVideoViewer(src) {
    viewerVideo.src = src;
    viewerImage.style.display = "none";
    viewerVideoContainer.style.display = "block";
    displayViewer();
    // Reset controls
    resetVideoControls();
  }

  function displayViewer() {
    viewerOverlay.classList.add("active");
    // Ensure it's above everything
    viewerOverlay.style.zIndex = "3000";
  }

  function closeViewer() {
    viewerOverlay.classList.remove("active");
    viewerVideo.pause();
    setTimeout(() => {
      viewerImage.src = "";
      viewerVideo.src = "";
    }, 300);
  }

  // Close Events
  closeBtn.addEventListener("click", closeViewer);
  viewerOverlay.addEventListener("click", function (e) {
    if (
      e.target === viewerOverlay ||
      e.target.classList.contains("viewer-content")
    ) {
      closeViewer();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && viewerOverlay.classList.contains("active")) {
      closeViewer();
    }
  });

  // Video Controls Logic
  function togglePlay() {
    if (viewerVideo.paused) {
      viewerVideo.play();
    } else {
      viewerVideo.pause();
    }
  }

  function updatePlayButton() {
    if (viewerVideo.paused) {
      iconPlay.style.display = "block";
      iconPause.style.display = "none";
    } else {
      iconPlay.style.display = "none";
      iconPause.style.display = "block";
    }
  }

  playPauseBtn.addEventListener("click", togglePlay);
  viewerVideo.addEventListener("play", updatePlayButton);
  viewerVideo.addEventListener("pause", updatePlayButton);
  viewerVideo.addEventListener("click", togglePlay);

  // Progress
  viewerVideo.addEventListener("timeupdate", function () {
    const percent = (viewerVideo.currentTime / viewerVideo.duration) * 100;
    progressFill.style.width = percent + "%";

    // Time Display
    const currentMins = Math.floor(viewerVideo.currentTime / 60);
    const currentSecs = Math.floor(viewerVideo.currentTime % 60);
    const durationMins = Math.floor(viewerVideo.duration / 60) || 0;
    const durationSecs = Math.floor(viewerVideo.duration % 60) || 0;

    timeDisplay.textContent = `${currentMins}:${
      currentSecs < 10 ? "0" : ""
    }${currentSecs} / ${durationMins}:${
      durationSecs < 10 ? "0" : ""
    }${durationSecs}`;
  });

  progressBarContainer.addEventListener("click", function (e) {
    const rect = progressBarContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    viewerVideo.currentTime = pos * viewerVideo.duration;
  });

  // Volume
  volumeSlider.addEventListener("input", function (e) {
    viewerVideo.volume = e.target.value;
    updateVolumeIcon();
  });

  volumeBtn.addEventListener("click", function () {
    if (viewerVideo.volume > 0) {
      viewerVideo.dataset.lastVolume = viewerVideo.volume;
      viewerVideo.volume = 0;
      volumeSlider.value = 0;
    } else {
      viewerVideo.volume = viewerVideo.dataset.lastVolume || 1;
      volumeSlider.value = viewerVideo.volume;
    }
    updateVolumeIcon();
  });

  function updateVolumeIcon() {
    if (viewerVideo.volume === 0) {
      iconVolumeHigh.style.display = "none";
      iconVolumeMute.style.display = "block";
    } else {
      iconVolumeHigh.style.display = "block";
      iconVolumeMute.style.display = "none";
    }
  }

  function resetVideoControls() {
    progressFill.style.width = "0%";
    iconPlay.style.display = "block";
    iconPause.style.display = "none";
    viewerVideo.volume = 1;
    volumeSlider.value = 1;
    updateVolumeIcon();
  }

  // Fullscreen
  fullscreenBtn.addEventListener("click", function () {
    if (viewerVideo.requestFullscreen) {
      viewerVideo.requestFullscreen();
    } else if (viewerVideo.webkitRequestFullscreen) {
      viewerVideo.webkitRequestFullscreen();
    } else if (viewerVideo.msRequestFullscreen) {
      viewerVideo.msRequestFullscreen();
    }
  });
}
