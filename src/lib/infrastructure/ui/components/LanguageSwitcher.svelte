<script lang="ts">
  import { locale, setLocale } from "$lib/infrastructure/i18n";

  /**
   * Change la langue de l'application.
   */
  function switchLocale(newLocale: string): void {
    setLocale(newLocale);
  }
</script>

<div class="language-switcher">
  <button
    class="lang-btn"
    class:active={$locale === "fr"}
    onclick={() => switchLocale("fr")}
    aria-label="Français"
  >
    FR
  </button>
  <span class="lang-separator">|</span>
  <button
    class="lang-btn"
    class:active={$locale === "en"}
    onclick={() => switchLocale("en")}
    aria-label="English"
  >
    EN
  </button>
  <span class="lang-separator">|</span>
  <button
    class="lang-btn"
    class:active={$locale === "es"}
    onclick={() => switchLocale("es")}
    aria-label="Español"
  >
    ES
  </button>
</div>

<style>
  .language-switcher {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .lang-btn {
    background: none;
    border: none;
    color: var(--text-muted, #64748b);
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    transition: color 0.2s ease;
    font-weight: 500;
  }

  .lang-btn:hover {
    color: var(--text-primary, #f8fafc);
  }

  .lang-btn.active {
    color: var(--accent, #06b6d4);
  }

  .lang-separator {
    color: var(--text-muted, #64748b);
  }
</style>
