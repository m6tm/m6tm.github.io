import type { Project } from '../../domain/entities/Project';
import type { ProjectRepository } from '../../domain/repositories/ProjectRepository';

/**
 * Mise en œuvre statique du dépôt de projets.
 */
export class StaticProjectRepository implements ProjectRepository {
    private projects: Project[] = [
        {
            id: 'linkyza',
            title: 'Linkyza - Plateforme de vente de produits digitaux',
            description: "Plateforme de vente de produits digitaux simple et rapide qui ambitionne de remplacer les plateformes de vente traditionnelles et de permettre d'intégrer de plus en plus d'options clés en main pour tout gérer en un seul endroit.",
            image: '/projects/linkyza.png',
            tags: ['Nextjs', 'Supabase', 'Docker', 'Inngest'],
            demoUrl: 'https://linkyza.vercel.app/',
            isPrivate: true,
            featured: true
        },
        {
            id: 'meetly',
            title: 'Meetly - AI Meeting Hub',
            description: 'Application de reunion en ligne assistee par IA avec enregistrement AWS S3, transcription Gemini AI, synthese et analyse des reunions.',
            image: '/projects/meetly-ai.png',
            tags: ['NextJs', 'Supabase', 'Livekit', 'Docker', 'Inngest'],
            demoUrl: 'https://meetly-six.vercel.app/',
            githubUrl: 'https://github.com/m6tm/meetly'
        },
        {
            id: 'medin-plus',
            title: 'Medin Plus - Reseau Medical',
            description: 'Application web de reseau social pour medecins avec partage de cas cliniques et collaboration professionnelle. Accès fermé et sécurisé disponible uniquement pour les medecins inscrits.',
            image: '/projects/medin-plus.png',
            tags: ['Angular', 'Laravel', 'Supabase'],
            demoUrl: 'https://www.medinplus.com/',
            isPrivate: true
        },
        {
            id: 'hugbot',
            title: 'Hubbot Chat AI - All in one chat',
            description: "Un chatbot qui intègre de plus en plus de réseaux et tunels de vente afin d'avoir l'information voulue sans avoir besoin de se rendre dans ses différentes plateformes. On peut suivre tout en un seul endroit.",
            image: '/projects/hugbot-ai.png',
            tags: ['Svelte', 'Huggin Face', 'Dexiejs', 'Supabase', 'Langchain'],
            demoUrl: 'https://hugbot-ai.vercel.app/',
            isPrivate: true
        },
        {
            id: 'fluidio',
            title: 'Fluidio Shop',
            description: "Plateforme e-commerce innovante connectant vendeurs, acheteurs et affiliés. Une expérience d'achat fluide avec géolocalisation et système d'affiliation intégré.",
            image: '/projects/fluidio/bannier.png',
            tags: ['Flutter', 'Supabase'],
            gallery: [
                { type: 'video', src: '/projects/fluidio/acheteur.mp4' },
                { type: 'video', src: '/projects/fluidio/affilie.mp4' },
                { type: 'image', src: '/projects/fluidio/acheteur.jpg' },
                { type: 'image', src: '/projects/fluidio/affilie.jpg' },
                { type: 'image', src: '/projects/fluidio/affilie_2.jpg' },
                { type: 'image', src: '/projects/fluidio/vendeur_1.jpg' },
                { type: 'image', src: '/projects/fluidio/vendeur_2.jpg' }
            ]
        }
    ];

    async findAll(): Promise<Project[]> {
        return this.projects;
    }
}
