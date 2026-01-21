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
    features?: string[];
    longDescription?: string;
    stackDetails?: { category: string, items: string[] }[];
    credentials?: { role: string, email: string }[];
    downloadUrl?: string;
    downloadSize?: string;
    hidden?: boolean;
}
