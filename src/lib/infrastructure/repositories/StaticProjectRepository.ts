import type { Project } from '../../domain/entities/Project';
import type { ProjectRepository } from '../../domain/repositories/ProjectRepository';

/**
 * Mise en œuvre statique du dépôt de projets.
 */
export class StaticProjectRepository implements ProjectRepository {
    private projects: Project[] = [
        {
            id: 'facturello',
            title: 'Facturello - Facturation simplifiée pour freelances',
            description: "Micro-SaaS de facturation pour freelances et solopreneurs : factures élégantes, paiements en ligne multi-providers (NotchPay, KPay, PayPal), relances automatiques et assistant IA intégré pour gérer toute son activité en un seul endroit.",
            image: '/projects/facturello.png',
            tags: ['Astro', 'Svelte', 'Tailwind CSS', 'Supabase', 'Prisma', 'Inngest', 'Vercel'],
            demoUrl: 'https://facturello.work',
            isPrivate: true,
            featured: true,
            features: [
                "Création de factures professionnelles en 60 secondes",
                "Paiements en ligne multi-providers (NotchPay, KPay, PayPal) avec webhooks et déduplication des transactions",
                "Relances automatiques des factures en retard par email",
                "Assistant IA conversationnel avec RAG documentaire et serveur MCP",
                "Abonnements à plans payants avec upgrade/downgrade automatique",
                "MFA et passkeys WebAuthn pour une authentification renforcée"
            ],
            longDescription: "Facturello est bien plus qu'un outil de facturation : une plateforme complète pour freelances et solopreneurs. Elle permet de créer des factures élégantes, d'encaisser en ligne via plusieurs providers de paiement (NotchPay, KPay, PayPal), d'automatiser les relances de factures en retard, de gérer ses clients et de s'abonner à des plans payants. Un assistant IA conversationnel (LangChain/LangGraph, RAG, serveur MCP) assiste la rédaction et l'analyse. L'application repose sur Astro 7 pour le rendu, Svelte 5 pour l'interactivité, Tailwind CSS 4 pour l'interface, et Supabase avec Prisma 7 pour la persistance des données.",
            stackDetails: [
                {
                    category: "Frontend & Performance",
                    items: [
                        "Astro 7 : Rendu statique et hydratation partielle pour des performances optimales",
                        "Svelte 5 : Composants interactifs réactifs avec runes",
                        "Tailwind CSS 4 : Styling utilitaire moderne et responsive"
                    ]
                },
                {
                    category: "Backend, Données & Paiements",
                    items: [
                        "Supabase : Authentification (MFA, passkeys WebAuthn), PostgreSQL et stockage",
                        "Prisma 7 : ORM type-safe avec migrations structurées",
                        "NotchPay, KPay & PayPal : Paiements en ligne avec webhooks et déduplication",
                        "Inngest : Relances automatiques et expiration d'abonnements"
                    ]
                },
                {
                    category: "IA & Automatisation",
                    items: [
                        "LangChain & LangGraph : Assistant IA conversationnel avec RAG documentaire",
                        "Emails transactionnels avec Resend",
                        "Génération de PDF professionnels",
                        "Déploiement Vercel, image Docker disponible"
                    ]
                }
            ]
        },
        {
            id: 'linkyza',
            title: 'Linkyza - Plateforme de vente de produits digitaux',
            description: "Plateforme de vente de produits digitaux et de cours en ligne pensée pour l'Afrique : boutiques multi-vendeurs, checkout avec paiement NotchPay (FCFA), livraison digitale et système de commissions intégré.",
            image: '/projects/linkyza.png',
            tags: ['Next.js 16', 'TypeScript', 'Supabase', 'Prisma', 'Inngest', 'NotchPay'],
            demoUrl: 'https://linkyza.vercel.app/',
            isPrivate: true
        },
        {
            id: 'k-sport',
            title: 'K-Sport Agency',
            description: "Agence de management sportif spécialisée dans l'accompagnement d'athlètes de haut niveau (football, basketball et plus). Gestion de carrière, négociation et développement d'image.",
            image: '/projects/k-sportagency.png',
            tags: ['SvelteKit', 'Tailwind CSS', 'Supabase', 'SEO'],
            demoUrl: 'https://k-sportagency.com/',
            features: [
                "Management de carrière global et stratégique",
                "Recherche et négociation de contrats professionnels",
                "Gestion de l'image et communication médiatique",
                "Conseil stratégique et accompagnement personnalisé"
            ],
            longDescription: "K-Sport est une agence de management sportif dédiée à l'accompagnement, au développement et à la valorisation de la carrière des athlètes, avec une vision moderne, stratégique et humaine du sportif professionnel. Fondée avec l'ambition de révéler et de structurer les talents, K-Sport intervient comme un partenaire de confiance auprès des athlètes, de leurs familles et des clubs.",
            stackDetails: [
                {
                    category: "Mission & Vision",
                    items: [
                        "Optimisation de la progression sportive de l'athlète",
                        "Sécurisation et orientation des choix de carrière",
                        "Développement de la visibilité et de l'image de marque",
                        "Facilitation d'opportunités avec les clubs internationaux"
                    ]
                },
                {
                    category: "Expertise métier",
                    items: [
                        "Management de carrière : Gestion globale du terrain aux choix stratégiques",
                        "Négociation : Recherche active de clubs et contrats avec agents agréés",
                        "Image & Com : Développement de la visibilité médiatique et digitale",
                        "Conseil : Accompagnement personnalisé à chaque étape du parcours"
                    ]
                }
            ],
        },
        {
            id: 'meetly',
            title: 'Meetly - AI Meeting Hub',
            description: "Plateforme de visioconférence assistée par IA : réunions instantanées ou planifiées, salles LiveKit avec enregistrement S3, transcription Gemini AI, résumés intelligents, gestion d'équipes et analytics.",
            image: '/projects/meetly-ai.png',
            tags: ['Next.js', 'Supabase', 'LiveKit', 'Gemini AI', 'Inngest', 'AWS S3'],
            demoUrl: 'https://meetly-six.vercel.app/',
            githubUrl: 'https://github.com/m6tm/meetly',
            hidden: true
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
            title: 'Hugbot Chat AI - All in one chat',
            description: "Application de chat IA multi-modèles : discutez avec les meilleurs LLM (Hugging Face, OpenAI, Gemini, Claude) depuis une interface unique, avec base de connaissances RAG, notifications Telegram et mode invité.",
            image: '/projects/hugbot-ai.png',
            tags: ['SvelteKit', 'Hugging Face', 'Supabase', 'Prisma', 'LangChain', 'Inngest'],
            demoUrl: 'https://hugbot-ai.vercel.app/',
            isPrivate: true
        },
        {
            id: 'fluidio',
            title: 'Fluidio Shop',
            description: "Marketplace e-commerce full-stack connectant vendeurs, acheteurs et affiliés : app mobile Flutter, API Flask, temps réel WebSocket, paiements mobile money (Orange Money, MTN MoMo) et géolocalisation des boutiques.",
            image: '/projects/fluidio/bannier.png',
            tags: ['Flutter', 'Flask', 'PostgreSQL', 'Socket.IO', 'Redis', 'Docker'],
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
                "Trois espaces utilisateurs (acheteur, vendeur, affilié) avec conversion de profil",
                "Boutiques privées : code boutique, QR code, deep links et thème personnalisable",
                "Paiements Orange Money et MTN MoMo avec webhooks et notifications push",
                "Messagerie temps réel : conversations, indicateur de frappe, accusés de lecture",
                "Programme d'affiliation : parrainage, commissions et retraits",
                "Géolocalisation des boutiques et produits en temps réel"
            ],
            longDescription: "Fluidio Shop est une marketplace multi-acteurs conçue pour le marché camerounais, et plus largement l'Afrique centrale. L'écosystème comprend une app mobile Flutter (espaces acheteur, vendeur et affilié à thèmes dédiés), une API Flask en architecture hexagonale (~25 modules métier), un service temps réel (messagerie, présence, notifications) et une orchestration Docker multi-environnements. Les paiements s'appuient sur Orange Money et MTN MoMo avec confirmation par webhook et notification push.",
            stackDetails: [
                {
                    category: "Backend & Infrastructure",
                    items: [
                        "API Flask 3 en architecture hexagonale : JWT, rate limiting, documentation Swagger",
                        "PostgreSQL hébergé sur Supabase avec migrations Alembic/SQLAlchemy",
                        "Orchestration Docker multi-environnements (dev, staging, prod)",
                        "Emails transactionnels Resend et jobs d'arrière-plan Inngest"
                    ]
                },
                {
                    category: "Temps réel",
                    items: [
                        "Socket.IO / Soketi (protocole Pusher) avec adaptateur Redis pour le scaling horizontal",
                        "Firebase Cloud Messaging pour les notifications push",
                        "Messagerie, présence et notifications multi-canal"
                    ]
                },
                {
                    category: "Application Mobile",
                    items: [
                        "Flutter : BLoC pour la gestion d'état, GoRouter, injection de dépendances GetIt",
                        "Isar : base de données locale pour le mode hors-ligne",
                        "Client Pusher pour les événements temps réel, biométrie (Face ID / empreinte)"
                    ]
                },
                {
                    category: "Géolocalisation & Expérience Utilisateur",
                    items: [
                        "OpenStreetMap (flutter_map, geolocator, geocoding) : cartes interactives sans dépendance propriétaire",
                        "FL Chart : tableaux de bord vendeurs et affiliés",
                        "QR codes (qr_flutter, mobile_scanner) : boutiques et validation rapide",
                        "Multimédia : image picker, messages vocaux (record/just_audio), lecteur vidéo"
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
        },
        {
            id: 'pepites-academy',
            title: 'Pépites Academy',
            description: "Plateforme complète de gestion d'académie de football : site web et back-office (SvelteKit), API REST (Flask), app mobile de terrain (Flutter) avec scan QR des présences, bulletins et SMS — le pôle formation de K-Sport Agency.",
            image: '/projects/pepites-acedemy.png',
            tags: ['SvelteKit', 'Flask', 'Flutter', 'NestJS', 'PostgreSQL', 'Docker'],
            demoUrl: 'https://pepites-academy.vercel.app/',
            features: [
                "Back-office complet : académiciens, encadreurs, séances, présences, bulletins",
                "Scan QR des entrées et sorties au stade",
                "App mobile de terrain : annotations, ateliers, bulletins PDF avec graphiques radar",
                "Module SMS (passerelle NEXAH) avec import CSV/Excel et envois groupés",
                "Notifications push Firebase et emails transactionnels (Resend)",
                "Mode hors-ligne avec synchronisation résiliente (web et mobile)"
            ],
            longDescription: "Pépites Academy est passée d'un site vitrine à une plateforme complète de gestion d'académie en quatre composants : un site web SvelteKit avec back-office (académiciens, séances, présences, bulletins, candidatures, SMS), une API REST Flask documentée Swagger, une app mobile Flutter dédiée au terrain (scan QR des présences, annotations, bulletins PDF) et un microservice temps réel NestJS/Socket.io. Tous les composants suivent une architecture hexagonale.",
            stackDetails: [
                {
                    category: "Site Web & Back-office",
                    items: [
                        "SvelteKit 2 / Svelte 5, Tailwind CSS 4, éditeur riche TipTap",
                        "Dexie (IndexedDB) : données de secours et mode hors-ligne",
                        "Scan QR web (html5-qrcode), imports/exports Excel (xlsx)",
                        "Déploiement Vercel"
                    ]
                },
                {
                    category: "API REST",
                    items: [
                        "Flask 3, SQLAlchemy, PostgreSQL/Supabase, authentification JWT",
                        "Documentation Swagger (Flasgger) et rate limiting",
                        "Backend de stockage interchangeable (SQLite, PostgreSQL, MySQL, MongoDB)",
                        "SMS via passerelle NEXAH, emails transactionnels Resend"
                    ]
                },
                {
                    category: "Application Mobile",
                    items: [
                        "Flutter : scan QR (mobile_scanner), base locale sqflite, synchro résiliente",
                        "Firebase Messaging pour les notifications push, authentification biométrique",
                        "Bulletins PDF avec graphiques radar (fl_chart, pdf, printing)"
                    ]
                },
                {
                    category: "Temps réel",
                    items: [
                        "Microservice NestJS 11 avec gateways Socket.io",
                        "Redis prévu pour le scaling horizontal"
                    ]
                }
            ],
        },
        {
            id: 'poweralert',
            title: 'PowerAlert - Desktop Battery Monitoring',
            description: "Solution desktop moderne et performante pour surveiller la batterie de votre ordinateur : alertes intelligentes aux seuils configurables, dashboard de santé (cycles, usure, température, consommation) et historique analytique. Conçue avec Tauri et Rust.",
            image: '/projects/poweralert/poweralert.jpeg',
            gallery: [
                { type: 'image', src: '/projects/poweralert/dashboard.png' },
                { type: 'image', src: '/projects/poweralert/notification.png' },
                { type: 'image', src: '/projects/poweralert/tray.png' }
            ],
            tags: ['Tauri', 'Rust', 'Astro', 'TypeScript'],
            githubUrl: 'https://github.com/m6tm/poweralert',
            featured: false,
            features: [
                "Surveillance précise et temps réel du niveau de batterie",
                "Alertes intelligentes pour les seuils critiques et de fin de charge",
                "Dashboard de santé de la batterie : cycles, usure, température et consommation en watts",
                "Historique analytique de la batterie avec persistance locale",
                "Option de lancement automatique au démarrage système (Windows)",
                "Accès rapide via une icône dédiée dans la barre des tâches (Systray)",
                "Architecture hexagonale robuste et hautement testable"
            ],
            longDescription: "PowerAlert est une application desktop premium conçue pour maximiser l'autonomie et la durée de vie de votre batterie. En combinant la puissance de Rust pour les accès système bas niveau et la flexibilité d'Astro pour l'interface utilisateur, elle offre une expérience utilisateur fluide et moderne. Son architecture, basée sur les principes de la Clean Architecture, garantit une maintenance simplifiée et une robustesse à toute épreuve.",
            stackDetails: [
                {
                    category: "Architecture Logicielle",
                    items: [
                        "Clean Architecture (Hexagonale) : Séparation stricte du domaine, de l'application et de l'infrastructure.",
                        "Ports & Adaptateurs : Découplage total des services externes et de l'interface utilisateur.",
                        "Inversion de Dépendances : Favorise la testabilité et l'évolution modulaire du système."
                    ]
                },
                {
                    category: "Stack de Développement",
                    items: [
                        "Tauri 2.10 & Rust : moteur backend léger, sécurisé et performant (crates battery, tokio).",
                        "Astro 6 : framework moderne pour une UI ultra-rapide et responsive.",
                        "TypeScript : typage fort et meilleure fiabilité du code frontend.",
                        "Pnpm : gestionnaire de paquets optimisé pour la rapidité."
                    ]
                }
            ],
            downloadUrl: '/projects/poweralert/PowerAlert_1.2.0_x64-setup.exe',
            downloadSize: '2.1 Mo'
        },
    ];

    async findAll(): Promise<Project[]> {
        return this.projects.filter(p => !p.hidden);
    }

}
