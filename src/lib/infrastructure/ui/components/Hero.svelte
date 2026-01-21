<script lang="ts">
  import { onMount } from "svelte";

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
        Disponible pour de nouveaux projets
      </div>
      <h1 class="hero-title">
        <span class="title-line">Développeur</span>
        <span class="title-line gradient-text">Fullstack</span>
      </h1>
      <p class="hero-description">
        Développeur FullStack avec plus de 3 ans d'expérience dans la conception
        et le déploiement d'applications web et mobiles performantes. Expert en
        optimisation des processus via CI/CD et Docker.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">
          <span>Voir mes projets</span>
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
        <a href="#contact" class="btn btn-secondary">Me contacter</a>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number" data-count="3">0</span>
          <span class="stat-label">Années d'expérience</span>
        </div>
        <div class="stat">
          <span class="stat-number" data-count="8">0</span>
          <span class="stat-label">Projets réalisés</span>
        </div>
        <div class="stat">
          <span class="stat-number-2">2</span>
          <span class="stat-label">Entreprises</span>
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
                >"FullStack Developer"</span
              >,
  <span class="code-property">skills</span>: [
    <span class="code-string">"NextJs"</span>,
    <span class="code-string">"Angular"</span>,
    <span class="code-string">"Flutter"</span>,
    <span class="code-string">"Docker"</span>
  ],
  <span class="code-property">passion</span>: <span class="code-string"
                >"Building innovative products"</span
              >
{"}"};</code
            ></pre>
        </div>
      </div>
    </div>
  </div>
</section>
