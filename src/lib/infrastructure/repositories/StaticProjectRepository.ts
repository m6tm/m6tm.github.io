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
            tagJustifications: {
                'Astro': "Je l'ai choisi pour son hydratation partielle : les pages se chargent quasi instantanément, car le JavaScript n'est embarqué que là où j'ai besoin d'interactivité.",
                'Svelte': "J'aime sa compacité : des composants compilés sans virtual DOM, ça me donne une interface réactive et très légère.",
                'Tailwind CSS': "Je l'utilise pour itérer vite : tout le design system tient dans le markup, responsive inclus, sans feuilles de style à maintenir.",
                'Supabase': "Ça m'a évité de monter un backend : auth, PostgreSQL et stockage sont gérés, je me concentre sur le produit.",
                'Prisma': "Je ne me passe plus de son typage : le schéma me sert de contrat et mes évolutions restent sûres.",
                'Inngest': "Je l'intègre pour tout ce qui doit tourner en tâche de fond : relances et expirations se déclenchent seules, avec reprise sur échec.",
                'Vercel': "Je déploie sans y penser : chaque push est en production en quelques minutes, zéro configuration."
            },
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
            tagJustifications: {
                'Next.js 16': "Je l'ai pris pour l'App Router et le rendu hybride : la marketplace reste bien référencée tout en offrant des interactions riches.",
                'TypeScript': "Avec ~40 modèles métier, je ne prends pas de risque : le typage strict me permet de refactoriser l'esprit tranquille.",
                'Supabase': "J'ai regroupé l'essentiel au même endroit : PostgreSQL managé, auth et stockage de fichiers dans un seul service.",
                'Prisma': "Le schéma dépasse 40 modèles, et Prisma me garde type-safe de bout en bout avec des migrations maîtrisées.",
                'Inngest': "Je m'en sers pour fiabiliser les paiements : synchronisation des transactions et emails, avec retries automatiques.",
                'NotchPay': "C'est la passerelle pensée pour l'Afrique : paiements Mobile Money en FCFA et payouts vendeurs, je n'ai rien trouvé d'aussi adapté."
            },
            demoUrl: 'https://linkyza.vercel.app/',
            isPrivate: true
        },
        {
            id: 'k-sport',
            title: 'K-Sport Agency',
            description: "Agence de management sportif spécialisée dans l'accompagnement d'athlètes de haut niveau (football, basketball et plus). Gestion de carrière, négociation et développement d'image.",
            image: '/projects/k-sportagency.png',
            tags: ['SvelteKit', 'Tailwind CSS', 'Supabase', 'SEO'],
            tagJustifications: {
                'SvelteKit': "Je voulais un site premium et très rapide : le rendu serveur et les transitions fluides font le job.",
                'Tailwind CSS': "J'ai construit l'identité visuelle avec : un design system utilitaire, cohérent du premier au dernier écran.",
                'Supabase': "Pour un site vitrine, pas besoin de backend dédié : je gère contenus et formulaires directement avec.",
                'SEO': "J'y ai passé du temps exprès : balises, sitemap et performances soignés pour que clubs et athlètes nous trouvent."
            },
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
            tagJustifications: {
                'Next.js': "J'ai aimé garder une seule base de code : l'app et ses API routes vivent ensemble, ça simplifie tout.",
                'Supabase': "Je m'appuie dessus pour l'auth OAuth, la 2FA et PostgreSQL : réunions, équipes et enregistrements y trouvent leur place.",
                'LiveKit': "J'ai choisi du WebRTC open source et auto-hébergeable : pas de dépendance à un service de visio propriétaire.",
                'Gemini AI': "Je l'utilise pour transcrire et résumer les réunions automatiquement, directement via l'API Gemini.",
                'Inngest': "Ça orchestre mon pipeline transcription puis résumé en asynchrone, sans que je gère les pannes à la main.",
                'AWS S3': "J'y stocke les enregistrements : durable, économique, et les URLs pré-signées sécurisent l'accès."
            },
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
            tagJustifications: {
                'Angular': "Pour une application métier complexe, je préfère sa structure typée : ça reste maintenable sur la durée.",
                'Laravel': "Je connais bien son écosystème PHP : mature, avec un ORM expressif, parfait pour l'API.",
                'Supabase': "Les données médicales sont sensibles : auth managée et RLS pour bien isoler chaque médecin."
            },
            demoUrl: 'https://www.medinplus.com/',
            isPrivate: true
        },
        {
            id: 'hugbot',
            title: 'Hugbot Chat AI - All in one chat',
            description: "Application de chat IA multi-modèles : discutez avec les meilleurs LLM (Hugging Face, OpenAI, Gemini, Claude) depuis une interface unique, avec base de connaissances RAG, notifications Telegram et mode invité.",
            image: '/projects/hugbot-ai.png',
            tags: ['SvelteKit', 'Hugging Face', 'Supabase', 'Prisma', 'LangChain', 'Inngest'],
            tagJustifications: {
                'SvelteKit': "Je voulais une expérience de chat instantanée : sa réactivité fine et ses données serveur intégrées s'y prêtent parfaitement.",
                'Hugging Face': "Ça me donne accès aux meilleurs LLM open source (DeepSeek, Qwen, Llama) via une API unique et économique.",
                'Supabase': "Je persiste les conversations et l'auth avec : tout arrive en temps quasi réel sans backend maison.",
                'Prisma': "J'ai gardé un modèle de données limpide : conversations, messages, paramètres — rien de superflu.",
                'LangChain': "Je m'en sers pour le RAG : embeddings, récupération de contexte et orchestration des prompts, sans tout réinventer.",
                'Inngest': "Je l'ai branché pour synchroniser les paramètres et notifier, sans jamais bloquer l'utilisateur."
            },
            demoUrl: 'https://hugbot-ai.vercel.app/',
            isPrivate: true
        },
        {
            id: 'fluidio',
            title: 'Fluidio Shop',
            description: "Marketplace e-commerce full-stack connectant vendeurs, acheteurs et affiliés : app mobile Flutter, API Flask, temps réel WebSocket, paiements mobile money (Orange Money, MTN MoMo) et géolocalisation des boutiques.",
            image: '/projects/fluidio/bannier.png',
            tags: ['Flutter', 'Flask', 'PostgreSQL', 'Soketi', 'Redis', 'Docker'],
            tagJustifications: {
                'Flutter': "Je ne voulais pas écrire deux apps : une seule base Dart me donne Android et iOS avec des performances natives.",
                'Flask': "Je l'ai choisi léger et modulaire : l'architecture hexagonale me permet de faire grandir l'API proprement.",
                'PostgreSQL': "Pour des commandes, commissions et stocks, je veux de l'intégrité : ses contraintes relationnelles me la garantissent.",
                'Soketi': "Je l'héberge moi-même : du temps réel compatible Pusher sans payer chaque connexion.",
                'Redis': "Je le mets entre les instances : cache et messagerie partagés pour le service temps réel.",
                'Docker': "Ça me garantit que dev, staging et prod sont identiques, et je déploie en une commande."
            },
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
                        "Soketi (serveur WebSocket compatible protocole Pusher) avec adaptateur Redis pour le scaling horizontal",
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
            tagJustifications: {
                'SvelteKit': "J'ai réuni le site public et le back-office dans une seule app : rapide, et bien référencée.",
                'Flask': "J'ai exposé tous les modules métier en REST, avec Swagger : les autres composants s'y branchent facilement.",
                'Flutter': "Sur le terrain, le réseau n'est pas garanti : j'ai conçu l'app hors-ligne d'abord, les présences se scannent même sans réseau.",
                'NestJS': "Je l'ai ajouté pour le temps réel : un microservice modulaire, prêt à se brancher sur un bus d'événements.",
                'PostgreSQL': "Présences et bulletins ne souffrent aucune erreur : j'ai besoin de ses garanties d'intégrité.",
                'Docker': "Je reproduis le même backend du dev à la prod : fini les « ça marchait sur ma machine »."
            },
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
            tagJustifications: {
                'Tauri': "Je voulais une app de 2 Mo, pas un Chromium embarqué : le webview du système suffisait largement.",
                'Rust': "Pour accéder à la batterie en bas niveau, je voulais de la fiabilité : pas de fuite mémoire, pas de crash.",
                'Astro': "C'est une app qui vit en tâche de fond : je lui ai fait une interface quasi sans JavaScript, discrète et rapide.",
                'TypeScript': "Ça me sécurise les échanges entre l'interface et les commandes Rust via les IPC de Tauri."
            },
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
