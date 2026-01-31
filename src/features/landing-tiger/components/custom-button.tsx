import { Button } from "@/components/ui/button";

export const CustomButton = ({ isSubmitting }: { isSubmitting: boolean }) =>
    <Button
        type="submit"
        form="tiger-fortuna-form"
        disabled={isSubmitting}
        className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-600 py-6 text-lg font-bold text-black transition-all hover:from-amber-400 hover:to-orange-500 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-70"
    >
        {isSubmitting ? (
            <span className="flex items-center gap-2">
                <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                >
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