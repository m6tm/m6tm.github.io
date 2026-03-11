<script lang="ts">
  import "../app.css";
  import "../media-viewer.css";
  import { onMount } from "svelte";
  import { locale, getStoredLocale, setLocale } from "$lib/infrastructure/i18n";
  import { _ } from "svelte-i18n";

  let { children } = $props();

  /**
   * Initialisation de la langue au chargement.
   */
  onMount(() => {
    const storedLocale = getStoredLocale();
    setLocale(storedLocale);
  });
</script>

{@render children()}
