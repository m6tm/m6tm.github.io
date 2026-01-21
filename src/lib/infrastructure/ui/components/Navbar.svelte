<script lang="ts">
  import { onMount } from "svelte";

  let scrolled = $state(false);
  let mobileMenuOpen = $state(false);

  /**
   * Initialisation de l'effet de défilement sur la barre de navigation.
   */
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });

  /**
   * Basculement du menu mobile.
   */
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  /**
   * Fermeture du menu mobile.
   */
  function closeMobileMenu() {
    mobileMenuOpen = false;
    document.body.style.overflow = "";
  }
</script>

<nav class="navbar" class:scrolled id="navbar">
  <div class="nav-container">
    <a href="#accueil" class="nav-logo">
      <span class="logo-text">MABOA Daniel</span><span class="logo-accent"
        >.</span
      >
    </a>
    <button
      class="nav-toggle"
      onclick={toggleMobileMenu}
      aria-label="Menu"
      class:active={mobileMenuOpen}
    >
      <span class="hamburger"></span>
    </button>
    <!-- Desktop Menu -->
    <ul class="nav-menu nav-menu-desktop">
      <li><a href="#accueil" class="nav-link">Accueil</a></li>
      <li><a href="#about" class="nav-link">A propos</a></li>
      <li><a href="#skills" class="nav-link">Compétences</a></li>
      <li><a href="#projects" class="nav-link">Projets</a></li>
      <li><a href="#contact" class="nav-link nav-cta">Contact</a></li>
    </ul>
  </div>
</nav>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="mobile-menu-overlay"
  class:active={mobileMenuOpen}
  onclick={closeMobileMenu}
></div>

<!-- Mobile Menu Sidebar -->
<div class="mobile-menu" class:active={mobileMenuOpen}>
  <div class="mobile-menu-header">
    <a href="#accueil" class="nav-logo">
      <span class="logo-text">MABOA Daniel</span><span class="logo-accent"
        >.</span
      >
    </a>
    <span class="mobile-menu-subtitle">Développeur FullStack</span>
    <button
      class="mobile-menu-close"
      onclick={closeMobileMenu}
      aria-label="Fermer"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div class="mobile-menu-nav">
    <span class="mobile-menu-label">NAVIGATION</span>
    <ul class="mobile-menu-list">
      <li>
        <a href="#accueil" class="mobile-nav-link" onclick={closeMobileMenu}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Accueil</span>
          <svg
            class="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#about" class="mobile-nav-link" onclick={closeMobileMenu}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
          <span>A propos</span>
          <svg
            class="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#skills" class="mobile-nav-link" onclick={closeMobileMenu}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span>Compétences</span>
          <svg
            class="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#projects" class="mobile-nav-link" onclick={closeMobileMenu}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8" />
            <path d="M12 17v4" />
          </svg>
          <span>Projets</span>
          <svg
            class="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
  <div class="mobile-menu-footer">
    <a href="#contact" class="mobile-menu-cta" onclick={closeMobileMenu}>
      <span>Me contacter</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>
