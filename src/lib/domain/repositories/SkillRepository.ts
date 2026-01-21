import type { SkillCategory } from '../entities/Skill';

/**
 * Interface pour le dépôt de compétences.
 */
export interface SkillRepository {
    /**
     * Récupère toutes les catégories de compétences.
     */
    findAllCategories(): Promise<SkillCategory[]>;
}
