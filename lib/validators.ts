import { z } from "zod";

export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters'),
    category: z.string().min(3, 'Category must be at least 3 characters'),
    brand: z.string().min(3, 'Brand must be at least 3 characters'),
    stock: z.coerce.number().min(0),
    images: z.array(z.string()).min(1, 'Product must have at least one image'),
    isFeatured: z.boolean().optional(),
    banner: z.string().nullable(),
    description: z.string().min(1),
    price: z.string().min(1, 'Price is required'), // Simple string validation
    rating: z.number().min(0), // Keep as number for validation
    numReviews: z.number().min(0),
});