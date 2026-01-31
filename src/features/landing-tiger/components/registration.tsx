import { z } from "zod";

export const registrationSchema = z.object({
    nombre: z
        .string()
        .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
        .max(50, { message: "El nombre no puede exceder los 50 caracteres" }),
    telefono: z
        .string()
        .regex(/^0?9\d{8}$/, {
            message: "Ingresá un número válido (ej: 0981 123 456)",
        }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;