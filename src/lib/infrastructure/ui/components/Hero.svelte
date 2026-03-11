<script lang="ts">
  import { onMount } from "svelte";
  import { _, locale } from "svelte-i18n";

  // Ordre du titre selon la langue (fullstack toujours avec gradient)
  const titleOrders: Record<string, string[]> = {
    en: ["fullstack", "title"],
    fr: ["title", "fullstack"],
    es: ["title", "fullstack"],
  };

  $: titleOrder = titleOrders[$locale ?? "en"] || titleOrders["en"];

  /**
   * Animation des nombres dans les statistiques.
   */
  function animateValue(
    obj: HTMLElement,
    start: number,
    end: number,
    duration: number,
  ) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  onMount(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const endValue = parseInt(
            target.getAttribute("data-count") || "0",
            10,
          );
          animateValue(target, 0, endValue, 2000);
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".stat-number[data-count]")
      .forEach((el) => observer.observe(el));
  });
</script>

<section class="hero" id="accueil">
  <div class="hero-bg">
    <div class="hero-gradient"></div>
    <div class="hero-grid"></div>
  </div>
  <div class="hero-wrapper">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        {$_('hero.available')}
      </div>
      <h1 class="hero-title">
        {#each titleOrder as key}
          <span class="title-line" class:gradient-text={key === 'fullstack'}>{$_(`hero.${key}`)}</span>
        {/each}
      </h1>
      <p class="hero-description">
        {$_('hero.description')}
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">
          <span>{$_('hero.viewProjects')}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#contact" class="btn btn-secondary">{$_('hero.contactMe')}</a>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number" data-count="3">0</span>
          <span class="stat-label">{$_('hero.stats.years')}</span>
        </div>
        <div class="stat">
          <span class="stat-number" data-count="10">0</span>
          <span class="stat-label">{$_('hero.stats.projects')}</span>
        </div>
        <div class="stat">
          <span class="stat-number-2">2</span>
          <span class="stat-label">{$_('hero.stats.companies')}</span>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="code-window">
        <div class="window-header">
          <div class="window-dots">
            <span></span><span></span><span></span>
          </div>
          <span class="window-title">developer.js</span>
        </div>
        <div class="window-content">
          <pre><code
              ><span class="code-keyword">const</span> <span
                class="code-variable">developer</span
              > = {"{"}
  <span class="code-property">name</span>: <span class="code-string"
                >"MABOA Daniel Emmanuel"</span
              >,
  <span class="code-property">role</span>: <span class="code-string"
                >"{$_('hero.codeRole')}"</span
              >,
  <span class="code-property">skills</span>: [
    <span class="code-string">"NextJs"</span>,
    <span class="code-string">"Angular"</span>,
    <span class="code-string">"Flutter"</span>,
    <span class="code-string">"Docker"</span>
  ],
  <span class="code-property">passion</span>: <span class="code-string"
                >"{$_('hero.passion')}"</span
              >
{"}"};</code
            ></pre>
        </div>
      </div>
    </div>
  </div>
</section>
