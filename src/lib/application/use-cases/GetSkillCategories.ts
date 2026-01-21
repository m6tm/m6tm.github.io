import type { SkillCategory } from '../../domain/entities/Skill';
import type { SkillRepository } from '../../domain/repositories/SkillRepository';

/**
 * Cas d'utilisation pour récupérer toutes les catégories de compétences.
 */
export class GetSkillCategories {
    constructor(private skillRepository: SkillRepository) {}

    /**
     * Exécute le cas d'utilisation.
     */
    async execute(): Promise<SkillCategory[]> {
        return this.skillRepository.findAllCategories();
    }
}
