import type { Contact, CreateContactData } from '../../domain/entities/Contact';
import type { ContactRepository } from '../../domain/repositories/ContactRepository';

/**
 * Cas d'utilisation pour sauvegarder un message de contact.
 */
export class SaveContact {
    constructor(private contactRepository: ContactRepository) {}

    /**
     * Exécute le cas d'utilisation.
     */
    async execute(data: CreateContactData): Promise<Contact> {
        // Validation des données
        this.validate(data);

        // Sauvegarde du contact
        return this.contactRepository.save(data);
    }

    /**
     * Valide les données du contact.
     */
    private validate(data: CreateContactData): void {
        if (!data.name || data.name.trim().length < 2) {
            throw new Error('Le nom doit contenir au moins 2 caractères');
        }

        if (!data.email || !this.isValidEmail(data.email)) {
            throw new Error('Email invalide');
        }

        if (!data.subject || data.subject.trim().length < 5) {
            throw new Error('Le sujet doit contenir au moins 5 caractères');
        }

        if (!data.message || data.message.trim().length < 10) {
            throw new Error('Le message doit contenir au moins 10 caractères');
        }
    }

    /**
     * Vérifie le format de l'email.
     */
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
