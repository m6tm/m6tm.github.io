<script lang="ts">
  import { onMount } from "svelte";
  import type { Project } from "../../../domain/entities/Project";
  import Swiper from "swiper";
  import { Navigation, Pagination } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  let { project, onclose } = $props<{
    project: Project | null;
    onclose: () => void;
  }>();
  let swiperContainer = $state<HTMLElement>();

  $effect(() => {
    if (project && project.gallery && swiperContainer) {
      new Swiper(swiperContainer, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: true,
        pagination: { clickable: true },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }
  });

  /**
   * Empêche la propagation du clic pour éviter de fermer le modal par erreur.
   */
  function handleModalClick(event: MouseEvent) {
    event.stopPropagation();
  }
</script>

{#if project}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay" class:active={project} onclick={onclose}>
    <div class="modal-container" onclick={handleModalClick}>
      <button class="modal-close" onclick={onclose} aria-label="Fermer">
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

      <div class="modal-content">
        <h2 class="modal-title">{project.title}</h2>
        <p class="modal-description">{project.description}</p>

        {#if project.gallery && project.gallery.length > 0}
          <div class="gallery-section">
            <h3 class="section-subtitle">Aperçus du projet</h3>
            <div class="swiper" bind:this={swiperContainer}>
              <div class="swiper-wrapper">
                {#each project.gallery as item}
                  <div class="swiper-slide">
                    <div class="media-card">
                      {#if item.type === "video"}
                        <video src={item.src} controls class="gallery-video">
                          <track kind="captions" />
                        </video>
                      {:else}
                        <img
                          src={item.src}
                          alt={project.title}
                          class="gallery-image"
                        />
                      {/if}
                    </div>
                  </div>
                {/each}
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
