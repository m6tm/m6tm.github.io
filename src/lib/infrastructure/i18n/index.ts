import { init, register, getLocaleFromNavigator, locale as localeStore, dictionary } from 'svelte-i18n';
import { get } from 'svelte/store';
import type { Project } from '$lib/domain/entities/Project';

const defaultLocale = 'en';
const supportedLocales = ['fr', 'en', 'es'];

/**
 * Configuration de l'internationalisation.
 */
register('fr', () => import('./locales/fr.json'));
register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

/**
 * Détecte la langue du navigateur et retourne une langue supportée.
 * Si la langue détectée n'est pas supportée, retourne l'anglais par défaut.
 */
function detectNavigatorLocale(): string {
    const navigatorLocale = getLocaleFromNavigator();
    if (!navigatorLocale) {
        return defaultLocale;
    }
    
    // Vérifie si la langue complète est supportée (ex: 'en-US')
    if (supportedLocales.includes(navigatorLocale)) {
        return navigatorLocale;
    }
    
    // Extrait le code de langue principal (ex: 'en' depuis 'en-US')
    const primaryLanguage = navigatorLocale.split('-')[0];
    if (supportedLocales.includes(primaryLanguage)) {
        return primaryLanguage;
    }
    
    return defaultLocale;
}

init({
    fallbackLocale: defaultLocale,
    initialLocale: detectNavigatorLocale(),
});

/**
 * Change la langue de l'application.
 * @param newLocale - Le code de la nouvelle langue (fr, en, es)
 */
export function setLocale(newLocale: string): void {
    localeStore.set(newLocale);
    if (typeof window !== 'undefined') {
        localStorage.setItem('locale', newLocale);
    }
}

/**
 * Récupère la langue stockée en localStorage.
 * Si aucune langue n'est stockée (première visite), détecte la langue du navigateur.
 * Si la langue détectée n'est pas supportée, retourne l'anglais par défaut.
 */
export function getStoredLocale(): string {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('locale');
        if (stored && supportedLocales.includes(stored)) {
            return stored;
        }
        // Première visite : détecte la langue du navigateur
        return detectNavigatorLocale();
    }
    return defaultLocale;
}

export { localeStore as locale };

/**
 * Récupère les données traduites d'un projet pour la locale courante.
 * @param projectId - L'identifiant du projet
 * @returns Les données traduites du projet ou undefined si non trouvées
 */
function getProjectData(projectId: string): Record<string, any> | undefined {
    const currentLocale = get(localeStore) || defaultLocale;
    const dict = get(dictionary) as Record<string, Record<string, any>> | undefined;

    const localeDict = dict?.[currentLocale];
    if (!localeDict) return undefined;

    const projectData = localeDict['projectData'] as Record<string, Record<string, any>> | undefined;
    if (!projectData) return undefined;

    return projectData[projectId];
}

/**
 * Récupère la traduction d'un projet depuis le dictionnaire.
 * @param projectId - L'identifiant du projet
 * @param field - Le champ à traduire (title, description, etc.)
 * @returns La traduction ou undefined si non trouvée
 */
function getProjectTranslation(projectId: string, field: string): string | undefined {
    const projectData = getProjectData(projectId);
    if (!projectData) return undefined;

    return projectData[field] as string | undefined;
}

/**
 * Récupère un tableau traduit depuis le dictionnaire.
 * @param projectId - L'identifiant du projet
 * @param field - Le champ tableau à traduire
 * @returns Le tableau traduit ou undefined si non trouvé
 */
function getProjectArrayTranslation(projectId: string, field: string): string[] | undefined {
    const projectData = getProjectData(projectId);
    if (!projectData) return undefined;

    return projectData[field] as string[] | undefined;
}

/**
 * Récupère les stackDetails traduits depuis le dictionnaire.
 * @param projectId - L'identifiant du projet
 * @returns Les stackDetails traduits ou undefined si non trouvé
 */
function getProjectStackDetailsTranslation(projectId: string): { category: string; items: string[] }[] | undefined {
    const projectData = getProjectData(projectId);
    if (!projectData) return undefined;

    return projectData['stackDetails'] as { category: string; items: string[] }[] | undefined;
}

/**
 * Récupère les credentials traduits depuis le dictionnaire.
 * @param projectId - L'identifiant du projet
 * @returns Les credentials traduits ou undefined si non trouvé
 */
function getProjectCredentialsTranslation(projectId: string): { role: string }[] | undefined {
    const projectData = getProjectData(projectId);
    if (!projectData) return undefined;

    return projectData['credentials'] as { role: string }[] | undefined;
}

/**
 * Retourne un projet avec ses données traduites selon la locale courante.
 * @param project - Le projet source
 * @returns Le projet avec les champs traduits
 */
export function getTranslatedProject(project: Project): Project {
    const title = getProjectTranslation(project.id, 'title');
    const description = getProjectTranslation(project.id, 'description');
    const longDescription = getProjectTranslation(project.id, 'longDescription');
    const features = getProjectArrayTranslation(project.id, 'features');
    const stackDetails = getProjectStackDetailsTranslation(project.id);
    const credentials = getProjectCredentialsTranslation(project.id);

    const translatedCredentials = project.credentials?.map((credential, index) => ({
        ...credential,
        role: credentials?.[index]?.role || credential.role
    }));

    return {
        ...project,
        title: title || project.title,
        description: description || project.description,
        longDescription: longDescription || project.longDescription,
        features: features || project.features,
        stackDetails: stackDetails || project.stackDetails,
        credentials: translatedCredentials || project.credentials
    };
}
