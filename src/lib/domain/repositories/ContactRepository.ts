import type { Contact, CreateContactData } from '../entities/Contact';

/**
 * Interface pour le dépôt de contacts.
 */
export interface ContactRepository {
    /**
     * Sauvegarde un nouveau contact.
     */
    save(data: CreateContactData): Promise<Contact>;

    /**
     * Récupère tous les contacts.
     */
    findAll(): Promise<Contact[]>;

    /**
     * Récupère un contact par son ID.
     */
    findById(id: string): Promise<Contact | null>;
}
