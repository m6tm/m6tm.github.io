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
          <div class="media-item-container">
            {#if item.type === "video"}
              <div class="media-badge-mini">Vidéo</div>
              <video
                src={item.src}
                controls
                playsinline
                preload="metadata"
                class="carousel-video"
              >
                <track kind="captions" />
              </video>
            {:else}
              <img
                src={item.src}
                alt="{title} - {index + 1}"
                class="carousel-image"
                loading="lazy"
              />
            {/if}
          </div>
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
    transition: transform 0.3s ease;
  }

  .media-item-container:hover {
    transform: translateY(-5px);
    border-color: rgba(99, 102, 241, 0.3);
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
</style>
