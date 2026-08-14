<script lang="ts">
  import { onMount } from "svelte";
  import { _, locale } from "svelte-i18n";

  const titleOrders: Record<string, string[]> = {
    en: ["fullstack", "title"],
    fr: ["title", "fullstack"],
    es: ["title", "fullstack"],
  };

  $: titleOrder = titleOrders[$locale ?? "en"] || titleOrders["en"];

  /**
   * Animation des nombres dans les statistiques.
   */
  function animateValue(obj: HTMLElement, end: number, duration: number) {
    const start = 0;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      obj.textContent = Math.floor(easeOut * (end - start) + start).toString();
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const endValue = parseInt(target.getAttribute("data-count") || "0", 10);
            animateValue(target, endValue, 2000);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".stat-number[data-count]").forEach((el) => observer.observe(el));
  });
</script>

<div class="hero" id="accueil">
  <div class="hero-bg">
    <div class="hero-gradient"></div>
    <div class="hero-grid"></div>
  </div>
  <div class="hero-wrapper">
    <div class="hero-content">
      <h1 class="hero-title reveal stagger-1">
        {#each titleOrder as key}
          <span class="title-line" class:accent={key === 'fullstack'}>
            {$_(`hero.${key}`)}
          </span>
        {/each}
      </h1>
      <p class="hero-description reveal stagger-2">
        {$_('hero.description')}
      </p>
      <div class="hero-actions reveal stagger-3">
        <a href="#projects" class="btn btn-primary">
          <span>{$_('hero.viewProjects')}</span>
          <span class="btn-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </a>
        <a href="#contact" class="btn btn-secondary">{$_('hero.contactMe')}</a>
      </div>
      <div class="hero-stats reveal stagger-4">
        <div class="stat">
          <span class="stat-number" data-count="5">0</span>
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
    <div class="hero-visual reveal-right stagger-2">
      <div class="code-window-shell">
        <div class="code-window">
          <div class="window-header">
            <div class="window-dots">
              <span></span><span></span><span></span>
            </div>
            <span class="window-title">developer.js</span>
          </div>
          <div class="window-content">
            <pre><code
><span class="code-keyword">const</span> <span class="code-variable">developer</span> = {"{"}
  <span class="code-property">name</span>: <span class="code-string">"MABOA Daniel Emmanuel"</span>,
  <span class="code-property">role</span>: <span class="code-string">"{$_('hero.codeRole')}"</span>,
  <span class="code-property">skills</span>: [
    <span class="code-string">"NextJs"</span>,
    <span class="code-string">"Angular"</span>,
    <span class="code-string">"Flutter"</span>,
    <span class="code-string">"Docker"</span>
  ],
  <span class="code-property">passion</span>: <span class="code-string">"{$_('hero.passion')}"</span>
{"}"};</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
