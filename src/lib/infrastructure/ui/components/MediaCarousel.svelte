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
  let selectedMedia = $state<MediaItem | null>(null);

  function openFullscreen(item: MediaItem) {
    selectedMedia = item;
    document.body.style.overflow = "hidden";
  }

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
        spaceBetween: 16,
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
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
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
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
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
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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

    <div class="swiper-pagination"></div>
  </div>

  <button bind:this={prevBtn} class="carousel-nav-btn prev" aria-label="Précédent">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
  <button bind:this={nextBtn} class="carousel-nav-btn next" aria-label="Suivant">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
</div>

<!-- Lightbox -->
{#if selectedMedia}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="lightbox-overlay" onclick={closeFullscreen}>
    <button class="lightbox-close" onclick={closeFullscreen} aria-label="Fermer">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
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
        <video src={selectedMedia.src} controls autoplay class="lightbox-media"></video>
      {:else}
        <img src={selectedMedia.src} alt="Vue plein écran" class="lightbox-media" />
      {/if}
    </div>
  </div>
{/if}

<style>
  .media-carousel-wrapper {
    width: 100%;
    position: relative;
    padding: 10px 0 44px;
  }

  .media-item-container {
    width: 100%;
    aspect-ratio: 9/16;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-md);
    position: relative;
    transition: transform var(--transition-base), border-color var(--transition-base),
      box-shadow var(--transition-base);
    cursor: zoom-in;
    padding: 0;
    display: block;
    outline: none;
  }

  .media-item-container:hover {
    transform: translateY(-6px) scale(1.01);
    border-color: var(--accent);
    box-shadow: var(--shadow-lg);
  }

  .media-item-container:hover .zoom-overlay {
    opacity: 1;
  }

  .zoom-overlay {
    position: absolute;
    inset: 0;
    background: var(--accent-subtle);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: 5;
    color: var(--accent);
  }

  .play-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 52px;
    height: 52px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    z-index: 4;
    box-shadow: var(--shadow-lg);
    padding-left: 4px;
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
    background: var(--accent);
    color: #ffffff;
    padding: 3px 8px;
    border-radius: var(--radius-sm);
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    z-index: 10;
  }

  .carousel-nav-btn {
    position: absolute;
    top: calc(50% - 22px);
    width: 40px;
    height: 40px;
    background: var(--bg-secondary);
    backdrop-filter: blur(8px);
    border: 1px solid var(--border);
    color: var(--text-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: background-color var(--transition-fast), color var(--transition-fast),
      transform var(--transition-fast), border-color var(--transition-fast);
  }

  .carousel-nav-btn:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #ffffff;
    transform: scale(1.1);
  }

  .carousel-nav-btn.prev {
    left: -20px;
  }
  .carousel-nav-btn.next {
    right: -20px;
  }

  :global(.swiper-pagination) {
    bottom: 0 !important;
  }

  :global(.swiper-pagination-bullet) {
    background: var(--text-muted) !important;
    opacity: 0.4 !important;
  }

  :global(.swiper-pagination-bullet-active) {
    background: var(--accent) !important;
    opacity: 1 !important;
    width: 20px !important;
    border-radius: var(--radius-full) !important;
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
      aspect-ratio: 4/5;
    }
  }

  /* Lightbox Styles */
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    backdrop-filter: blur(12px);
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
    box-shadow: var(--shadow-xl);
    object-fit: contain;
  }

  .lightbox-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
    z-index: 3010;
  }

  .lightbox-close:hover {
    background: var(--accent);
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

  @media (prefers-reduced-motion: reduce) {
    .media-item-container {
      transition: none;
    }
  }
</style>
