<script lang="ts">
  import { StaticSkillRepository } from "$lib/infrastructure/repositories/StaticSkillRepository";
  import { GetSkillCategories } from "$lib/application/use-cases/GetSkillCategories";
  import type { SkillCategory } from "$lib/domain/entities/Skill";
  import { _ } from "svelte-i18n";

  const skillRepository = new StaticSkillRepository();
  const getSkillCategoriesUseCase = new GetSkillCategories(skillRepository);

  let categories = $state<SkillCategory[]>([]);

  $effect(() => {
    getSkillCategoriesUseCase.execute().then((data) => (categories = data));
  });
</script>

<div class="section skills reveal" id="skills">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">{$_('skills.title')}</h2>
      <p class="section-description">
        {$_('skills.description')}
      </p>
    </div>
    <div class="skills-grid">
      {#each categories as category}
        <div class="skill-category">
          <div class="category-icon">
            {#if category.id === "frontend"}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            {:else if category.id === "backend"}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            {:else if category.id === "database"}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            {:else}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            {/if}
          </div>
          <h3>{$_(`skills.categories.${category.id}`)}</h3>
          <div class="skill-tags">
            {#each category.skills as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
