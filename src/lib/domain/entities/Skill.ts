/**
 * Entité représentant une compétence technique.
 */
export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'devops';
}

/**
 * Interface pour les catégories de compétences avec leurs icônes.
 */
export interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    skills: string[];
}
