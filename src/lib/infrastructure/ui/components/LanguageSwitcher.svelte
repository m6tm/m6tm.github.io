<script lang="ts">
  import { locale, setLocale } from "$lib/infrastructure/i18n";

  const languages = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  let activeIndex = $derived(
    Math.max(0, languages.findIndex((lang) => lang.code === $locale))
  );

  /**
   * Change la langue de l'application.
   */
  function switchLocale(newLocale: string): void {
    setLocale(newLocale);
  }
</script>

<div class="language-switcher" role="group" aria-label="Sélection de la langue">
  <div class="lang-indicator" style="--active-index: {activeIndex}"></div>
  {#each languages as lang}
    <button
      class="lang-btn"
      class:active={$locale === lang.code}
      onclick={() => switchLocale(lang.code)}
      aria-label={lang.code === "fr"
        ? "Français"
        : lang.code === "en"
          ? "English"
          : "Español"}
    >
      {lang.label}
    </button>
  {/each}
</div>

<style>
  .language-switcher {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.25rem;
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
  }

  .lang-indicator {
    position: absolute;
    top: 0.25rem;
    bottom: 0.25rem;
    left: 0.25rem;
    width: calc((100% - 0.5rem) / 3);
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    box-shadow: var(--shadow-md);
    transform: translate3d(calc(var(--active-index) * 100%), 0, 0);
    transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 0;
    pointer-events: none;
    will-change: transform;
  }

  .lang-btn {
    position: relative;
    z-index: 1;
    width: 2.5rem;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0.375rem 0;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: var(--radius-full);
    transition: color var(--transition-fast);
  }

  .lang-btn:hover {
    color: var(--text-primary);
  }

  .lang-btn.active {
    color: var(--accent);
  }
</style>
