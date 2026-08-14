<script lang="ts">
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  let mobileMenuOpen = $state(false);

  /**
   * Basculement du menu mobile.
   */
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }

  /**
   * Fermeture du menu mobile.
   */
  function closeMobileMenu() {
    mobileMenuOpen = false;
    document.body.style.overflow = "";
  }

  /**
   * Gestion de la touche Echap pour fermer le menu mobile.
   */
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") closeMobileMenu();
  }

  onMount(() => {
    return () => {
      document.body.style.overflow = "";
    };
  });
</script>

<svelte:window onkeydown={handleKeyDown} />

<nav class="navbar" id="navbar">
  <div class="nav-pill">
    <a href="#accueil" class="nav-logo">
      <span>MABOA Daniel</span><span class="logo-accent">.</span>
    </a>

    <button
      class="nav-toggle"
      onclick={toggleMobileMenu}
      aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      class:active={mobileMenuOpen}
      aria-expanded={mobileMenuOpen}
    >
      <span class="hamburger"></span>
    </button>

    <!-- Desktop Menu -->
    <ul class="nav-menu nav-menu-desktop">
      <li><a href="#accueil" class="nav-link">{$_('nav.home')}</a></li>
      <li><a href="#about" class="nav-link">{$_('nav.about')}</a></li>
      <li><a href="#skills" class="nav-link">{$_('nav.skills')}</a></li>
      <li><a href="#projects" class="nav-link">{$_('nav.projects')}</a></li>
      <li><a href="#contact" class="nav-link nav-cta">{$_('nav.contact')}</a></li>
    </ul>

    <div class="nav-actions">
      <div class="nav-language-switcher desktop">
        <LanguageSwitcher />
      </div>
      <ThemeToggle />
    </div>
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
    <a href="#accueil" class="nav-logo" onclick={closeMobileMenu}>
      <span>MABOA Daniel</span><span class="logo-accent">.</span>
    </a>
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <div class="mobile-menu-nav">
    <span class="mobile-menu-label">Navigation</span>
    <ul class="mobile-menu-list">
      <li>
        <a
          href="#accueil"
          class="mobile-nav-link"
          onclick={closeMobileMenu}
          style="--index: 0"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>{$_('nav.home')}</span>
          <svg
            class="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#about"
          class="mobile-nav-link"
          onclick={closeMobileMenu}
          style="--index: 1"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
          </svg>
          <span>{$_('nav.about')}</span>
          <svg
            class="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#skills"
          class="mobile-nav-link"
          onclick={closeMobileMenu}
          style="--index: 2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span>{$_('nav.skills')}</span>
          <svg
            class="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#projects"
          class="mobile-nav-link"
          onclick={closeMobileMenu}
          style="--index: 3"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          <span>{$_('nav.projects')}</span>
          <svg
            class="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </li>
    </ul>
  </div>
  <div class="mobile-menu-footer">
    <div style="display: flex; justify-content: center;">
      <LanguageSwitcher />
    </div>
    <a
      href="#contact"
      class="mobile-menu-cta"
      onclick={closeMobileMenu}
    >
      <span>{$_('nav.contact')}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
  </div>
</div>
