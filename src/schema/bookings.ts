import { z } from "zod";

export const createBookingSchema = z.object({
  tour_id: z.number().int(),
  user_id: z.number().int(),
  quantity: z.number().int().min(1).default(1),
});

// No update schema — usually bookings are not edited
// but you can add if required

// Infer type
export type CreateBookingInput = z.infer<typeof createBookingSchema>;
