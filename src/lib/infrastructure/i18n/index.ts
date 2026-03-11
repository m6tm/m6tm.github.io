import { init, register, getLocaleFromNavigator, locale as localeStore } from 'svelte-i18n';

const defaultLocale = 'fr';

/**
 * Configuration de l'internationalisation.
 */
register('fr', () => import('./locales/fr.json'));
register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

init({
    fallbackLocale: defaultLocale,
    initialLocale: getLocaleFromNavigator() || defaultLocale,
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
 * Récupère la langue stockée en localStorage ou retourne la langue par défaut.
 */
export function getStoredLocale(): string {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('locale');
        if (stored && ['fr', 'en', 'es'].includes(stored)) {
            return stored;
        }
    }
    return defaultLocale;
}

export { localeStore as locale };
