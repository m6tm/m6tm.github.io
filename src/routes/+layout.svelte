<script lang="ts">
  import "../app.css";
  import "../media-viewer.css";
  import { onMount } from "svelte";
  import { locale, getStoredLocale, setLocale, waitLocale } from "$lib/infrastructure/i18n";

  let { children } = $props();
  let isReady = $state(false);

  /**
   * Initialisation de la langue au chargement.
   */
  onMount(async () => {
    const storedLocale = getStoredLocale();
    
    // Si la langue stockée est différente de la langue par défaut ('en'),
    // on la définit et on attend que le dictionnaire soit chargé.
    if (storedLocale !== 'en') {
      setLocale(storedLocale);
      await waitLocale(storedLocale);
    } else {
      // Pour l'anglais, les messages sont déjà chargés de manière synchrone
      setLocale('en');
    }
    
    isReady = true;
  });
</script>

<!-- Pendant l'hydratation, le contenu reste dans le DOM (même wrapper) pour que les
     observers et les références soient conservés ; seule l'opacité change. -->
<div class="layout-content" class:ready={isReady}>
  {@render children()}
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  .layout-content {
    opacity: 0;
    transition: opacity 0.25s ease-out;
  }

  .layout-content.ready {
    opacity: 1;
  }
</style>
