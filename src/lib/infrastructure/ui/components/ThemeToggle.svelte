<script lang="ts">
  import { onMount } from "svelte";

  let theme = $state<"dark" | "light">("dark");
  let mounted = $state(false);
  let buttonRef = $state<HTMLButtonElement>();
  let isAnimating = $state(false);

  /**
   * Applique le thème sur la balise <html>.
   */
  function applyTheme(newTheme: "dark" | "light") {
    document.documentElement.setAttribute("data-theme", newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  }

  const themeColors: Record<"dark" | "light", string> = {
    dark: "#0a0a0b",
    light: "#fafaf9",
  };

  /**
   * Crée et anime l'overlay de transition entre les thèmes.
   */
  function animateThemeTransition(newTheme: "dark" | "light") {
    if (!buttonRef || typeof document === "undefined") {
      theme = newTheme;
      applyTheme(newTheme);
      return;
    }

    isAnimating = true;
    const rect = buttonRef.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    // Compute the exact radius needed to cover the whole viewport from the button origin
    const distances = [
      Math.hypot(originX, originY),
      Math.hypot(window.innerWidth - originX, originY),
      Math.hypot(originX, window.innerHeight - originY),
      Math.hypot(window.innerWidth - originX, window.innerHeight - originY),
    ];
    const maxRadius = Math.ceil(Math.max(...distances));

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "-1";
    overlay.style.pointerEvents = "none";
    overlay.style.backgroundColor = themeColors[newTheme];
    overlay.style.clipPath = `circle(0px at ${originX}px ${originY}px)`;
    overlay.style.transition = "clip-path 0.9s cubic-bezier(0.16, 1, 0.3, 1)";

    // Insert behind page content but in front of the theme background layer
    document.body.appendChild(overlay);

    // Force the initial clip-path to be applied before animating
    overlay.getBoundingClientRect();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.clipPath = `circle(${maxRadius}px at ${originX}px ${originY}px)`;
      });
    });

    overlay.addEventListener(
      "transitionend",
      () => {
        theme = newTheme;
        applyTheme(newTheme);
        overlay.remove();
        isAnimating = false;
      },
      { once: true }
    );
  }

  /**
   * Bascule entre clair et sombre.
   */
  function toggleTheme() {
    if (isAnimating) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    animateThemeTransition(newTheme);
  }

  onMount(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored ?? (prefersDark ? "dark" : "light");
    theme = initialTheme;
    applyTheme(theme);
    mounted = true;
  });
</script>

<button
  bind:this={buttonRef}
  class="theme-toggle"
  class:animating={isAnimating}
  onclick={toggleTheme}
  aria-label={theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre"}
  title={theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre"}
>
  {#if !mounted}
    <!-- Sun icon placeholder to avoid layout shift -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  {:else if theme === "dark"}
    <!-- Moon icon -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  {:else}
    <!-- Sun icon -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    color: var(--text-secondary);
    cursor: pointer;
    transition: color var(--transition-fast), background-color var(--transition-fast),
      border-color var(--transition-fast);
  }

  .theme-toggle:hover {
    color: var(--accent);
    background: var(--bg-tertiary);
    border-color: var(--accent);
  }

  .theme-toggle.animating {
    pointer-events: none;
  }
</style>
