import { z } from "zod";

export const createTourSchema = z.object({
  operator_id: z.number().int(),
  title: z.string().min(3),
  description: z.string().min(10),
  perks: z.array(z.string()).optional(),
  location: z.string().min(2),
  date: z.string().datetime(), // ISO string, will convert to Date in controller
  price: z.number().positive(),
  capacity: z.number().int().min(1),
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
});

export const updateTourSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  perks: z.array(z.string()).optional(),
  location: z.string().optional(),
  date: z.string().datetime().optional(),
  price: z.number().positive().optional(),
  capacity: z.number().int().min(1).optional(),
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
});

// Infer TypeScript types
export type CreateTourInput = z.infer<typeof createTourSchema>;
export type UpdateTourInput = z.infer<typeof updateTourSchema>;
