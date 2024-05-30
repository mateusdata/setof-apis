import { z } from "zod";

export  const taskSchema = z.object({
    user_id: z.number(),
    title: z.string(),
    description: z.string()
})