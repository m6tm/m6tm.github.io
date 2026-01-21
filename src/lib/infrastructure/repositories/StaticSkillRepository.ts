import type { SkillCategory } from '../../domain/entities/Skill';
import type { SkillRepository } from '../../domain/repositories/SkillRepository';

/**
 * Mise en œuvre statique du dépôt de compétences.
 */
export class StaticSkillRepository implements SkillRepository {
    private categories: SkillCategory[] = [
        {
            id: 'frontend',
            name: 'Frontend',
            icon: 'frontend',
            skills: ['NextJs', 'Angular', 'React Native', 'Flutter', 'Tailwindcss', 'TypeScript', 'HTML5', 'CSS3/SCSS']
        },
        {
            id: 'backend',
            name: 'Backend',
            icon: 'backend',
            skills: ['Node.js', 'Express', 'AdonisJs', 'Python', 'Flask', 'Laravel', 'Springboot']
        },
        {
            id: 'database',
            name: 'Base de données',
            icon: 'database',
            skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'Supabase', 'Prisma']
        },
        {
            id: 'devops',
            name: 'DevOps & Tools',
            icon: 'devops',
            skills: ['Docker', 'Git', 'Github Action', 'GCP', 'AWS S3', 'Cypress', 'Playwright']
        }
    ];

    async findAllCategories(): Promise<SkillCategory[]> {
        return this.categories;
    }
}
