import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

// Base schema without the transformed fields
const baseProductSchema = insertProductSchema.omit({ price: true, rating: true });

// Product type that matches what Prisma actually returns
export type Product = z.infer<typeof baseProductSchema> & {
    id: string;
    price: string; // Prisma client transforms Decimal to string
    rating: string; // Prisma client transforms Decimal to string
    createdAt: Date;
}