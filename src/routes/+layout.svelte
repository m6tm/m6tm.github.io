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

{#if isReady}
  {@render children()}
{:else}
  <!-- Pendant l'hydratation, on affiche le contenu brut (qui correspond au HTML statique) -->
  <div style="visibility: hidden">
    {@render children()}
  </div>
{/if}

<style>
  /* Empêche le flash de contenu si nécessaire */
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
