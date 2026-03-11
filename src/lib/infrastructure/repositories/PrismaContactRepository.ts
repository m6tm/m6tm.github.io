import type { Contact, CreateContactData } from '../../domain/entities/Contact';
import type { ContactRepository } from '../../domain/repositories/ContactRepository';
import { prisma } from '../database/prisma';

/**
 * Mise en œuvre du dépôt de contacts avec Prisma.
 */
export class PrismaContactRepository implements ContactRepository {
    async save(data: CreateContactData): Promise<Contact> {
        const contact = await prisma.contact.create({
            data: {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
            },
        });

        return {
            id: contact.id,
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message,
            createdAt: contact.createdAt,
        };
    }

    async findAll(): Promise<Contact[]> {
        const contacts = await prisma.contact.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        return contacts.map((contact) => ({
            id: contact.id,
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message,
            createdAt: contact.createdAt,
        }));
    }

    async findById(id: string): Promise<Contact | null> {
        const contact = await prisma.contact.findUnique({
            where: { id },
        });

        if (!contact) {
            return null;
        }

        return {
            id: contact.id,
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message,
            createdAt: contact.createdAt,
        };
    }
}
