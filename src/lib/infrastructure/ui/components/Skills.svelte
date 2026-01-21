<script lang="ts">
  import { StaticSkillRepository } from "$lib/infrastructure/repositories/StaticSkillRepository";
  import { GetSkillCategories } from "$lib/application/use-cases/GetSkillCategories";
  import type { SkillCategory } from "$lib/domain/entities/Skill";

  const skillRepository = new StaticSkillRepository();
  const getSkillCategoriesUseCase = new GetSkillCategories(skillRepository);

  let categories = $state<SkillCategory[]>([]);

  $effect(() => {
    getSkillCategoriesUseCase.execute().then((data) => (categories = data));
  });
</script>

<section class="section skills" id="skills">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Compétences</span>
      <h2 class="section-title">Mon arsenal technique</h2>
      <p class="section-description">
        Des technologies modernes pour construire des applications robustes et
        évolutives
      </p>
    </div>
    <div class="skills-grid">
      {#each categories as category}
        <div class="skill-category">
          <div class="category-icon {category.id}">
            {#if category.id === "frontend"}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            {:else if category.id === "backend"}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <circle cx="6" cy="6" r="1" />
                <circle cx="6" cy="18" r="1" />
              </svg>
            {:else if category.id === "database"}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            {:else}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            {/if}
          </div>
          <h3>{category.name}</h3>
          <div class="skill-tags">
            {#each category.skills as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
