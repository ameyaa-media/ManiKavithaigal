import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export const printRequestSchema = z.object({
    bookTitle: z.string().min(1, "Book title is required"),
    quantity: z.number().min(1, "Quantity must be at least 1").max(100, "Maximum 100 copies"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    address: z.string().min(10, "Address must be at least 10 characters"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    postalCode: z.string().min(5, "Postal code is required"),
    country: z.string().min(2, "Country is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type PrintRequestData = z.infer<typeof printRequestSchema>;
