/**
 * Entité représentant un message de contact.
 */
export interface Contact {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
}

/**
 * Données pour créer un nouveau contact.
 */
export interface CreateContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
