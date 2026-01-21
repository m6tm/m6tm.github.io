import type { Project } from '../../domain/entities/Project';
import type { ProjectRepository } from '../../domain/repositories/ProjectRepository';

/**
 * Cas d'utilisation pour récupérer tous les projets.
 */
export class GetProjects {
    constructor(private projectRepository: ProjectRepository) {}

    /**
     * Exécute le cas d'utilisation.
     */
    async execute(): Promise<Project[]> {
        return this.projectRepository.findAll();
    }
}
