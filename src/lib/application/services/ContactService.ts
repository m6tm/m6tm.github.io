import { httpClient, HttpError } from '../../infrastructure/http/HttpClient';
import type { CreateContactData, Contact } from '../../domain/entities/Contact';

/**
 * Réponse de l'API contact.
 */
interface ContactApiResponse {
    success: boolean;
    data?: {
        id: string;
        message: string;
    };
    error?: string;
}

/**
 * Service pour gérer les contacts via l'API.
 */
export class ContactService {
    private endpoint = '/api/contact';

    /**
     * Envoie un message de contact.
     */
    async sendMessage(data: CreateContactData): Promise<{ success: boolean; message: string }> {
        try {
            const response = await httpClient.post<ContactApiResponse>(this.endpoint, data);

            if (response.data.success && response.data.data) {
                return {
                    success: true,
                    message: response.data.data.message,
                };
            }

            return {
                success: false,
                message: response.data.error || 'Une erreur est survenue',
            };
        } catch (error) {
            if (error instanceof HttpError) {
                const apiError = error.data as ContactApiResponse | undefined;
                return {
                    success: false,
                    message: apiError?.error || error.message,
                };
            }

            return {
                success: false,
                message: 'Une erreur réseau est survenue',
            };
        }
    }

    /**
     * Récupère tous les contacts (admin).
     */
    async getAll(): Promise<Contact[]> {
        const response = await httpClient.get<ContactApiResponse & { contacts: Contact[] }>(this.endpoint);
        return response.data.contacts ?? [];
    }
}

/**
 * Instance par défaut du service de contact.
 */
export const contactService = new ContactService();
