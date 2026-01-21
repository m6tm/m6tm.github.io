/**
 * Entité représentant un projet du portfolio.
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    isPrivate?: boolean;
    featured?: boolean;
    gallery?: { type: 'image' | 'video', src: string }[];
}
