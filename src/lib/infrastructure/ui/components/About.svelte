<script lang="ts">
  import { _ } from "svelte-i18n";
  import { locale } from "$lib/infrastructure/i18n";

  const cvFiles: Record<string, string> = {
    fr: "/maboa_daniel_emmanuel_fr.pdf",
    en: "/maboa_daniel_emmanuel_en.pdf",
    es: "/maboa_daniel_emmanuel_en.pdf",
  };

  $: cvPath = cvFiles[$locale ?? "en"] || cvFiles["en"];
</script>

<div class="section about reveal" id="about">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">{$_('about.title')}</h2>
    </div>
    <div class="about-content">
      <div class="about-image">
        <div class="image-shell">
          <div class="image-frame">
            <img
              src="/poster.png"
              alt={$_('about.altImage')}
              class="about-photo"
            />
          </div>
        </div>
        <div class="experience-badge">
          <span class="exp-number">5+</span>
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
            <span class="highlight-icon">
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
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span>{$_('about.highlights.cleanCode')}</span>
          </div>
          <div class="highlight">
            <span class="highlight-icon">
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
                <polyline points="13 2 13 9 20 9"></polyline>
                <path d="M13 9L5 17a2.828 2.828 0 0 0 4 4l10-10a4 4 0 0 0-5.657-5.657l-9.193 9.193"></path>
              </svg>
            </span>
            <span>{$_('about.highlights.performance')}</span>
          </div>
          <div class="highlight">
            <span class="highlight-icon">
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
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </span>
            <span>{$_('about.highlights.agile')}</span>
          </div>
        </div>
        <div class="about-actions">
          <a href="#contact" class="btn btn-primary">
            {$_('about.discussProject')}
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
          <a href={cvPath} download class="btn btn-secondary">
            <span>{$_('about.downloadCv')}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
