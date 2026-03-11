<script lang="ts">
  import type { Project } from "$lib/domain/entities/Project";
  import MediaCarousel from "./MediaCarousel.svelte";
  import { _ } from "svelte-i18n";

  let { project, onclose } = $props<{
    project: Project | null;
    onclose: () => void;
  }>();

  /**
   * Empêche la fermeture quand on clique sur le contenu de la modale.
   */
  function handleModalClick(event: MouseEvent) {
    event.stopPropagation();
  }

  /**
   * Gestion de la touche Echap pour fermer.
   */
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") onclose();
  }
</script>

<svelte:window onkeydown={handleKeyDown} />

{#if project}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay" class:active={project} onclick={onclose}>
    <div class="modal-container" onclick={handleModalClick}>
      <!-- Bouton de fermeture -->
      <button
        class="modal-close"
        onclick={onclose}
        aria-label={$_('projects.modal.close')}
      >
        <svg
          width="24"
          height="24"
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

      <!-- Section Hero / Bannière -->
      <div class="modal-hero">
        <img src={project.image} alt={project.title} class="modal-hero-img" />
        <div class="modal-hero-overlay"></div>
        <div class="modal-hero-content">
          <div class="modal-hero-tags">
            {#each project.tags as tag}
              <span>{tag}</span>
            {/each}
          </div>
          <h2 class="modal-hero-title">{project.title}</h2>
        </div>
      </div>

      <!-- Corps de la modale -->
      <div class="modal-body">
        <div class="modal-grid">
          <!-- Colonne Gauche : Description -->
          <div class="modal-main">
            <div class="modal-description">
              <p>{project.longDescription || project.description}</p>
            </div>

            <!-- Points clés / Caractéristiques -->
            {#if project.features && project.features.length > 0}
              <div class="features-container">
                <h4 class="features-header">
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {$_('projects.modal.features')}
                </h4>
                <ul class="features-list">
                  {#each project.features as feature}
                    <li class="feature-item">
                      <strong class="feature-check">✓</strong>
                      {feature}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}

            <!-- Architecture Hexagonale Highlight -->
            <div class="architecture-box">
              <span class="architecture-title"
                >{$_('projects.modal.architecture.title')}</span
              >
              <p class="architecture-text">
                {$_('projects.modal.architecture.description')}
              </p>
            </div>
          </div>
          <!-- Fin modal-main -->

          <!-- Sidebar transférée ici pour rester groupée avec le haut -->
          <aside class="modal-sidebar">
            <div class="modal-info-card">
              <div class="info-item">
                <span class="info-label">{$_('projects.modal.projectType')}</span>
                <span class="info-value">{$_('projects.modal.fullStack')}</span>
              </div>
              <div class="info-item">
                <span class="info-label">{$_('projects.modal.keyTechnologies')}</span>
                <div class="modal-hero-tags sidebar-tags">
                  {#each project.tags as tag}
                    <span class="sidebar-tag-item">{tag}</span>
                  {/each}
                </div>
              </div>
              <div class="modal-actions">
                {#if project.demoUrl}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    class="btn btn-primary btn-full">{$_('projects.modal.viewDemo')}</a
                  >
                {/if}
              </div>
            </div>
          </aside>
        </div>
        <!-- Fin modal-grid -->

        <!-- Galerie en PLEINE LARGEUR -->
        {#if project.gallery && project.gallery.length > 0}
          <div class="gallery-section-full">
            <h3 class="modal-section-title">{$_('projects.modal.gallery')}</h3>
            <MediaCarousel items={project.gallery} title={project.title} />
          </div>
        {/if}

        <!-- Suite du contenu -->
        <div class="modal-main-extended">
          <!-- Detailed Stack Category by Category -->
          {#if project.stackDetails}
            {#each project.stackDetails as category}
              <div class="stack-category-box">
                <h4 class="stack-category-title">
                  {category.category}
                </h4>
                <ul class="stack-items-list">
                  {#each category.items as item}
                    <li class="stack-item">
                      <span class="stack-dot"></span>
                      <span>
                        {#if item.includes(":")}
                          <strong>{item.split(":")[0]}:</strong>{item.split(
                            ":",
                          )[1]}
                        {:else}
                          {item}
                        {/if}
                      </span>
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          {/if}

          <!-- Demo Access Section -->
          {#if project.credentials}
            <div class="demo-access-box">
              <div class="demo-badge">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                  ></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                {$_('projects.modal.demoAccess')}
              </div>

              <p class="demo-intro-text">
                {$_('projects.modal.demoIntro')}
              </p>

              <div class="demo-grid">
                {#each project.credentials as cred}
                  <div class="credential-card">
                    <span class="credential-label">{cred.role}</span>
                    <span class="credential-value">{cred.email}</span>
                  </div>
                {/each}
                <div class="credential-card">
                  <span class="credential-label">{$_('projects.modal.password')}</span>
                  <span class="credential-value">test123</span>
                </div>
              </div>
            </div>
          {/if}

          <!-- Download Button -->
          {#if project.downloadUrl}
            <div class="download-container">
              <a
                href={project.downloadUrl}
                class="btn-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <div class="download-text">
                  <span
                    >{$_('projects.modal.download')} <span class="download-text-title"
                      >{project.title}</span
                    ></span
                  >
                  {#if project.downloadSize}
                    <span class="file-size">{project.downloadSize}</span>
                  {/if}
                </div>
              </a>
            </div>
          {/if}
        </div>
      </div>
      <!-- Fin modal-body -->
    </div>
    <!-- Fin modal-container -->
  </div>
  <!-- Fin modal-overlay -->
{/if}
