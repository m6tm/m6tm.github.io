<script lang="ts">
  import { StaticProjectRepository } from "$lib/infrastructure/repositories/StaticProjectRepository";
  import { GetProjects } from "$lib/application/use-cases/GetProjects";
  import type { Project } from "$lib/domain/entities/Project";
  import { _ } from "svelte-i18n";
  import { locale, getTranslatedProject } from "$lib/infrastructure/i18n";

  let { onOpenDetails } = $props<{
    onOpenDetails: (project: Project) => void;
  }>();

  const projectRepository = new StaticProjectRepository();
  const getProjectsUseCase = new GetProjects(projectRepository);

  let projects = $state<Project[]>([]);
  let translatedProjects = $state<Project[]>([]);

  $effect(() => {
    getProjectsUseCase.execute().then((data) => (projects = data));
  });

  $effect(() => {
    $locale;
    translatedProjects = projects.map((p) => getTranslatedProject(p));
  });

  /**
   * Met à jour la position du spotlight au survol d'une carte.
   */
  function handleMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
</script>

<div class="section projects reveal" id="projects">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">{$_('projects.title')}</h2>
      <p class="section-description">
        {$_('projects.description')}
      </p>
    </div>
    <div class="projects-grid">
      {#each translatedProjects as project}
        <article
          class="project-card"
          class:featured={project.featured}
          onmousemove={handleMouseMove}
        >
          <div class="project-image">
            <img src={project.image} alt={project.title} class="project-img" />
          </div>
          <div class="project-content">
            <div class="project-tags">
              {#each project.tags.slice(0, 4) as tag}
                <span>{tag}</span>
              {/each}
            </div>
            <h3 class="project-title">{project.title}</h3>
            <p class="project-description">{project.description}</p>
            <div class="project-links">
              {#if project.demoUrl}
                <a href={project.demoUrl} target="_blank" class="project-link">
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  {$_('projects.visit')}
                </a>
              {/if}
              {#if project.githubUrl}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  class="project-link"
                >
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
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                  {$_('projects.code')}
                </a>
              {/if}
              {#if project.isPrivate}
                <span class="project-link project-link-disabled">
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  {$_('projects.private')}
                </span>
              {/if}
              {#if project.gallery && project.gallery.length > 0}
                <button
                  class="project-link"
                  onclick={() => onOpenDetails(project)}
                >
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
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                    <path
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  {$_('projects.viewDetails')}
                </button>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div>
