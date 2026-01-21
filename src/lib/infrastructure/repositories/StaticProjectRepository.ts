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
            ],
            features: [
                "Système d'affiliation multicouches pour les partenaires",
                "Géolocalisation des boutiques et produits en temps réel",
                "Gestion complète des stocks et commandes pour les vendeurs",
                "Interface acheteur optimisée pour une navigation fluide",
                "Tableau de bord analytique détaillé pour le suivi des ventes"
            ],
            longDescription: "Pour bâtir cette plateforme e-commerce multi-acteurs (vendeurs, acheteurs, affiliés), j'ai sélectionné un ensemble de bibliothèques robustes axées sur la performance, la scalabilité et l'expérience utilisateur.",
            stackDetails: [
                {
                    category: "Architecture et Gestion d'État",
                    items: [
                        "BLoC (Business Logic Component) : Utilisation du design pattern BLoC pour une séparation stricte entre l'interface utilisateur et la logique métier, garantissant une application testable et maintenable.",
                        "GetIt : Mise en œuvre de l'injection de dépendances pour découpler les modules et faciliter la gestion des instances (services, dépôts).",
                        "Freezed & JsonSerializable : Génération de code pour des modèles de données immuables et une sérialisation JSON sécurisée."
                    ]
                },
                {
                    category: "Persistance et Réseau",
                    items: [
                        "Isar Database : Base de données NoSQL ultra-rapide pour le stockage local et le support du mode hors-ligne.",
                        "Dio & Http : Gestion avancée des appels API REST avec intercepteurs et gestion globale des erreurs.",
                        "Cached Network Image : Optimisation de la bande passante et de la fluidité via une mise en cache intelligente des images produits."
                    ]
                },
                {
                    category: "Géolocalisation et Cartographie",
                    items: [
                        "Flutter Map (OpenStreetMap) : Intégration de cartes interactives pour la localisation des points de vente sans dépendance aux services payants propriétaires.",
                        "Geolocator & Geocoding : Services de calcul de distance et de transformation d'adresses en coordonnées GPS."
                    ]
                },
                {
                    category: "Expérience Utilisateur (UX/UI)",
                    items: [
                        "FL Chart : Tableaux de bord analytiques interactifs pour le suivi des ventes et des commissions des affiliés.",
                        "Shimmer : Amélioration de la perception de vitesse via des indicateurs de chargement élégants.",
                        "QR Flutter : Système de génération de QR codes pour la validation rapide des transactions ou le partage de profils vendeurs."
                    ]
                },
                {
                    category: "Multimédia et Outils",
                    items: [
                        "Just Audio & Record : Support des messages vocaux ou descriptions audio au sein de la plateforme.",
                        "Image & File Picker : Gestion fluide de l'upload des catalogues produits et des documents d'identité.",
                        "Share Plus : Fonctionnalités de partage social pour booster le marketing d'affiliation."
                    ]
                }
            ],
            credentials: [
                { role: "Acheteur", email: "acheteur@test.com" },
                { role: "Vendeur", email: "vendeur@test.com" },
                { role: "Affilié", email: "affilie@test.com" }
            ],
            downloadUrl: '/projects/fluidio/fluidio-shop.apk',
            downloadSize: '63.8 Mo'
        }
    ];

    async findAll(): Promise<Project[]> {
        return this.projects;
    }
}
