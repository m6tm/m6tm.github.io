import { json, type RequestHandler } from '@sveltejs/kit';
import { SaveContact } from '$lib/application/use-cases/SaveContact';
import { PrismaContactRepository } from '$lib/infrastructure/repositories/PrismaContactRepository';

const contactRepository = new PrismaContactRepository();
const saveContactUseCase = new SaveContact(contactRepository);

/**
 * Handler POST pour soumettre un formulaire de contact.
 */
export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = await request.json();

        const contact = await saveContactUseCase.execute({
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
        });

        return json(
            {
                success: true,
                data: {
                    id: contact.id,
                    message: 'Message envoyé avec succès',
                },
            },
            { status: 201 }
        );
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Une erreur est survenue';

        return json(
            {
                success: false,
                error: message,
            },
            { status: 400 }
        );
    }
};
