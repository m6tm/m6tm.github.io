<script lang="ts">
  import { _ } from "svelte-i18n";
  import { locale } from "$lib/infrastructure/i18n";

  // Mapping des CV disponibles par langue
  const cvFiles: Record<string, string> = {
    fr: "/maboa_daniel_emmanuel_fr.pdf",
    en: "/maboa_daniel_emmanuel_en.pdf",
    es: "/maboa_daniel_emmanuel_en.pdf", // Fallback vers anglais
  };

  // CV à télécharger selon la langue (fallback anglais)
  $: cvPath = cvFiles[$locale ?? "en"] || cvFiles["en"];
</script>

<section class="section about" id="about">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">{$_('about.tag')}</span>
      <h2 class="section-title">{$_('about.title')}</h2>
    </div>
    <div class="about-content">
      <div class="about-image">
        <div class="image-frame">
          <img
            src="/poster.png"
            alt={$_('about.altImage')}
            class="about-photo"
          />
        </div>
        <div class="experience-badge">
          <span class="exp-number">3+</span>
          <span class="exp-text">{$_('about.experienceBadge')}</span>
        </div>
      </div>
      <div class="about-text">
        <p class="about-intro">
          {$_('about.intro')}
        </p>
        <p>
          {$_('about.paragraph1')}
        </p>
        <p>
          {$_('about.paragraph2')}
        </p>
        <div class="about-highlights">
          <div class="highlight">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>{$_('about.highlights.cleanCode')}</span>
          </div>
          <div class="highlight">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>{$_('about.highlights.performance')}</span>
          </div>
          <div class="highlight">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>{$_('about.highlights.agile')}</span>
          </div>
        </div>
        <div class="about-actions">
          <a href="#contact" class="btn btn-primary">
            {$_('about.discussProject')}
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
          <div class="cv-buttons">
            <a
              href={cvPath}
              download
              class="btn btn-secondary"
            >
              <span>{$_('about.downloadCv')}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
