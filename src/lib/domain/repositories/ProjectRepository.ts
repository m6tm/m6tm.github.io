import type { Project } from '../entities/Project';

/**
 * Interface pour le dépôt de projets.
 */
export interface ProjectRepository {
    /**
     * Récupère tous les projets.
     */
    findAll(): Promise<Project[]>;
}
