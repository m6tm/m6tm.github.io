<script lang="ts">
  import { onDestroy } from "svelte";
  import Swiper from "swiper";
  import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  interface MediaItem {
    type: "image" | "video";
    src: string;
    poster?: string;
  }

  let { items, title = "" } = $props<{
    items: MediaItem[];
    title?: string;
  }>();

  let swiperContainer = $state<HTMLElement>();
  let swiperInstance: Swiper | null = null;
  let nextBtn = $state<HTMLElement>();
  let prevBtn = $state<HTMLElement>();

  // État du visualiseur plein écran
  let selectedMedia = $state<MediaItem | null>(null);

  /**
   * Ouvre le média en plein écran
   */
  function openFullscreen(item: MediaItem) {
    selectedMedia = item;
    // Empêcher le défilement du corps pendant que la modale est ouverte
    document.body.style.overflow = "hidden";
  }

  /**
   * Ferme le visualiseur
   */
  function closeFullscreen() {
    selectedMedia = null;
    document.body.style.overflow = "";
  }

  $effect(() => {
    if (swiperContainer && items.length > 0 && nextBtn && prevBtn) {
      if (swiperInstance) swiperInstance.destroy();

      swiperInstance = new Swiper(swiperContainer, {
        modules: [Navigation, Pagination, Autoplay, Keyboard],
        slidesPerView: 1,
        spaceBetween: 15,
        loop: items.length > 4,
        keyboard: { enabled: true },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
        grabCursor: true,
      });
    }
  });

  onDestroy(() => {
    if (swiperInstance) swiperInstance.destroy();
  });
</script>

<div class="media-carousel-wrapper">
  <div class="swiper" bind:this={swiperContainer}>
    <div class="swiper-wrapper">
      {#each items as item, index}
        <div class="swiper-slide">
          <button
            class="media-item-container"
            onclick={() => openFullscreen(item)}
            aria-label="Voir en plein écran"
          >
            {#if item.type === "video"}
              <div class="media-badge-mini">Vidéo</div>
              <video
                src={item.src}
                playsinline
                preload="metadata"
                class="carousel-video"
                muted
              >
                <track kind="captions" />
              </video>
              <div class="play-overlay">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            {:else}
              <img
                src={item.src}
                alt="{title} - {index + 1}"
                class="carousel-image"
                loading="lazy"
              />
            {/if}
            <div class="zoom-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
          </button>
        </div>
      {/each}
    </div>

    <!-- Pagination -->
    <div class="swiper-pagination"></div>
  </div>

  <!-- Boutons de navigation -->
  <button
    bind:this={prevBtn}
    class="carousel-nav-btn prev"
    aria-label="Précédent"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
  <button
    bind:this={nextBtn}
    class="carousel-nav-btn next"
    aria-label="Suivant"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
</div>

<!-- Lightbox / Visualiseur Plein Écran -->
{#if selectedMedia}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="lightbox-overlay" onclick={closeFullscreen}>
    <button
      class="lightbox-close"
      onclick={closeFullscreen}
      aria-label="Fermer"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
      {#if selectedMedia.type === "video"}
        <!-- svelte-ignore a11y_media_has_caption -->
        <video src={selectedMedia.src} controls autoplay class="lightbox-media"
        ></video>
      {:else}
        <img
          src={selectedMedia.src}
          alt="Vue plein écran"
          class="lightbox-media"
        />
      {/if}
    </div>
  </div>
{/if}

<style>
  .media-carousel-wrapper {
    width: 100%;
    position: relative;
    padding: 10px 0 40px; /* Espace pour les boutons et pagination */
  }

  .media-item-container {
    width: 100%;
    /* Ratio typique pour une application mobile dans une galerie */
    aspect-ratio: 9/16;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: #05070a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: zoom-in;
    padding: 0;
    display: block;
    outline: none;
  }

  .media-item-container:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: var(--primary);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  }

  .media-item-container:hover .zoom-overlay {
    opacity: 1;
  }

  .zoom-overlay {
    position: absolute;
    inset: 0;
    background: rgba(99, 102, 241, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 5;
  }

  .play-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: rgba(99, 102, 241, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 4;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    padding-left: 5px;
  }

  .carousel-image,
  .carousel-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .media-badge-mini {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--primary);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    z-index: 10;
  }

  .carousel-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-100%); /* Ajusté car pagination en bas */
    width: 36px;
    height: 36px;
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 50;
    transition: all 0.3s ease;
  }

  .carousel-nav-btn:hover {
    background: var(--primary);
    transform: translateY(-100%) scale(1.1);
  }

  .carousel-nav-btn.prev {
    left: -18px;
  }
  .carousel-nav-btn.next {
    right: -18px;
  }

  :global(.swiper-pagination) {
    bottom: 0 !important;
  }

  :global(.swiper-pagination-bullet-active) {
    background: var(--primary) !important;
    width: 20px !important;
    border-radius: 5px !important;
  }

  @media (max-width: 1200px) {
    .carousel-nav-btn.prev {
      left: 0;
    }
    .carousel-nav-btn.next {
      right: 0;
    }
  }

  @media (max-width: 640px) {
    .media-item-container {
      aspect-ratio: 4/5; /* Plus grand verticalement pour les apps mobiles */
    }
  }

  /* Lightbox Styles */
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(5, 7, 10, 0.95);
    backdrop-filter: blur(15px);
    z-index: 3000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    cursor: zoom-out;
  }

  .lightbox-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
  }

  .lightbox-media {
    max-width: 95%;
    max-height: 90vh;
    border-radius: var(--radius-lg);
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
    object-fit: contain;
  }

  .lightbox-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 3010;
  }

  .lightbox-close:hover {
    background: var(--primary);
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    .lightbox-overlay {
      padding: 1rem;
    }

    .lightbox-close {
      top: 1rem;
      right: 1rem;
      width: 44px;
      height: 44px;
    }
  }
</style>
