import { PrismaClient } from "@/lib/generated/prisma";

// Ensure this only runs on the server
if (typeof window !== 'undefined') {
  throw new Error('Prisma client cannot be used on the client side');
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create a standard Prisma client
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
}).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
