import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldError, FieldGroup } from "@/components/ui/field";
import { registrationSchema, type RegistrationFormData } from "./registration";
import { saveNewUser } from "../api";
import { SuccessMessage } from "./success-message";
import { useLanding } from "@/providers/landing";


function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
    return (
        <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-600 py-6 text-lg font-bold text-black transition-all hover:from-amber-400 hover:to-orange-500 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-70"
        >
            {isSubmitting ? (
                <span className="flex items-center gap-2">
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Procesando...
                </span>
            ) : (
                "CREAR USUARIO"
            )}
        </Button>
    );
}

export function RegistrationForm() {
    const { isSubmitting, submitSuccess, setSubmitting, setSuccess } = useLanding();

    const form = useForm<RegistrationFormData>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            nombre: "",
            telefono: "",
        },
    });

    const onSubmit = async (data: RegistrationFormData) => {
        setSubmitting(true);

        await saveNewUser({
            fullName: data.nombre,
            phoneNumber: data.telefono,
        });

        setSubmitting(false);
        setSuccess(true);
    };

    if (submitSuccess) {
        return <SuccessMessage />;
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="space-y-6">
                <Controller
                    name="nombre"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="tiger-form-nombre" className="text-zinc-200">
                                Nombre
                            </FieldLabel>
                            <Input
                                {...field}
                                autoFocus
                                id="tiger-form-nombre"
                                placeholder="Completá tu nombre"
                                aria-invalid={fieldState.invalid}
                                aria-describedby={fieldState.invalid ? "nombre-error" : undefined}
                                className="border-zinc-700 bg-zinc-900/80 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
                            />
                            {fieldState.invalid && (
                                <FieldError
                                    id="nombre-error"
                                    errors={[fieldState.error]}
                                    className="text-red-400"
                                />
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="telefono"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="tiger-form-telefono" className="text-zinc-200">
                                Número de WhatsApp
                            </FieldLabel>
                            <Input
                                {...field}
                                id="tiger-form-telefono"
                                type="tel"
                                placeholder="0981 123 456"
                                aria-invalid={fieldState.invalid}
                                aria-describedby={fieldState.invalid ? "telefono-error" : undefined}
                                className="border-zinc-700 bg-zinc-900/80 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
                            />
                            {fieldState.invalid && (
                                <FieldError
                                    id="telefono-error"
                                    errors={[fieldState.error]}
                                    className="text-red-400"
                                />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>

            <SubmitButton isSubmitting={isSubmitting} />
        </form>
    );
}