<script lang="ts">
  import type { Project } from "$lib/domain/entities/Project";
  import MediaCarousel from "./MediaCarousel.svelte";

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
        aria-label="Fermer la modale"
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
              <div
                style="margin-top: 2rem; background: rgba(16, 185, 129, 0.05); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(16, 185, 129, 0.1);"
              >
                <h4
                  style="font-size: 1.1rem; color: var(--success); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.6rem;"
                >
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
                  Objectifs et Points Forts
                </h4>
                <ul
                  style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;"
                >
                  {#each project.features as feature}
                    <li
                      style="display: flex; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;"
                    >
                      <strong style="color: var(--success);">✓</strong>
                      {feature}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}

            <!-- Architecture Hexagonale Highlight -->
            <div class="architecture-box">
              <span class="architecture-title"
                >Mon standard : L'Architecture Hexagonale</span
              >
              <p class="architecture-text">
                J'utilise cette architecture pour séparer proprement la logique
                métier (le cœur de l'app) des outils techniques (bases de
                données, interfaces). C'est comme construire une maison dont on
                peut changer la décoration ou le type de climatiseur sans
                toucher aux murs porteurs : l'application est plus stable,
                facile à tester et prête à évoluer.
              </p>
            </div>

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
                  Accès Démo
                </div>

                <p
                  style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.5rem; font-style: italic;"
                >
                  Cette version de démonstration fonctionne sans backend
                  persistant. Utilisez les identifiants suivants pour tester les
                  différents rôles :
                </p>

                <div class="demo-grid">
                  {#each project.credentials as cred}
                    <div class="credential-card">
                      <span class="credential-label">{cred.role}</span>
                      <span class="credential-value">{cred.email}</span>
                    </div>
                  {/each}
                  <div class="credential-card">
                    <span class="credential-label">Mot de passe (Tous)</span>
                    <span class="credential-value">test123</span>
                  </div>
                </div>
              </div>
            {/if}

            <!-- Download Button -->
            <div style="margin-top: 3rem;">
              <button
                class="btn btn-primary btn-full"
                style="height: 56px; font-size: 1.1rem; border-radius: var(--radius-xl); background: linear-gradient(135deg, #6366f1 0%, #d946ef 100%);"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Télécharger l'application
              </button>
            </div>

            <!-- La galerie est retirée d'ici pour être mise plus bas -->
          </div>

          <!-- Colonne Droite : Infos & Liens -->
          <aside class="modal-sidebar">
            <div class="modal-info-card">
              <div class="info-item">
                <span class="info-label">Type de Projet</span>
                <span class="info-value">Développement Full-Stack</span>
              </div>
              <div class="info-item">
                <span class="info-label">Technologies Clés</span>
                <div
                  class="modal-hero-tags"
                  style="margin-top: 0.5rem; flex-wrap: wrap;"
                >
                  {#each project.tags as tag}
                    <span
                      style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1); color: var(--text-secondary)"
                      >{tag}</span
                    >
                  {/each}
                </div>
              </div>

              <div class="modal-actions">
                {#if project.demoUrl}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    class="btn btn-primary btn-full"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Voir la démo live
                  </a>
                {/if}
                {#if project.githubUrl}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    class="btn btn-secondary btn-full"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path>
                    </svg>
                    Code Source
                  </a>
                {/if}
              </div>
            </div>
          </aside>
        </div>

        {#if project.gallery && project.gallery.length > 0}
          <div
            class="gallery-section-full"
            style="margin-top: 4rem; width: 100%;"
          >
            <h3 class="modal-section-title">Aperçus du projet</h3>
            <MediaCarousel items={project.gallery} title={project.title} />
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
