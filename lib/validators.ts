import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z.string().refine((val) => /^\d(\.d{2})?$/.test(formatNumberWithDecimal(Number(val)), "Price must have exactly 2 decimal places"));

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
    price: z.number().min(0),
    rating: z.number().min(0),
    numReviews: z.number().min(0),
    price: currency,
});