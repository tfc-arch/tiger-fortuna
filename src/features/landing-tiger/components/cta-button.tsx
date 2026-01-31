import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { useLanding } from "@/providers/landing";


type CTAButtonProps = Omit<ComponentProps<typeof Button>, "variant"> & {
    variant?: "primary" | "floating";
};

export function CTAButton({
    variant = "primary",
    className,
    children = "Creá tu usuario ahora",
    ...props
}: CTAButtonProps) {
    const { openDrawer } = useLanding();

    const baseStyles =
        "bg-gradient-to-r from-amber-500 to-orange-600 font-bold text-black shadow-2xl shadow-amber-500/30 transition-all hover:scale-105 hover:from-amber-400 hover:to-orange-500";

    const variants = {
        primary: "group relative overflow-hidden px-8 py-7 text-lg hover:shadow-amber-500/40",
        floating:
            "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-6 py-6 shadow-amber-500/40 hover:scale-110 sm:bottom-8 sm:right-8",
    };

    return (
        <Button
            size="lg"
            className={cn(baseStyles, variants[variant], className)}
            onClick={openDrawer}
            {...props}
        >
            {variant === "primary" ? (
                <>
                    <span className="relative z-10">{children}</span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full" />
                </>
            ) : (
                children
            )}
        </Button>
    );
}