<script lang="ts">
  import { onMount } from "svelte";

  let visible = $state(false);

  /**
   * Gestion de la visibilité du bouton de retour en haut de page.
   */
  onMount(() => {
    const handleScroll = () => {
      visible = window.scrollY > 400;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  /**
   * Retourne en haut de la page de manière fluide.
   */
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<button
  class="go-to-top"
  class:visible
  onclick={scrollToTop}
  aria-label="Retour en haut"
>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
</button>
