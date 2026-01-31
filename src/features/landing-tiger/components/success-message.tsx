import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";
import { useLanding } from "@/providers/landing";

export function SuccessMessage() {
    const { closeDrawer } = useLanding();

    return (
        <div className="flex flex-col items-center justify-center py-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-amber-400">¡Listo!</h3>
            <p className="text-zinc-400">
                Un agente de Tiger Fortuna se va a comunicar con vos en el momento para
                crear tu usuario y explicarte cómo empezar.
            </p>
            <DrawerClose asChild>
                <Button
                    className="mt-6 bg-gradient-to-r from-amber-500 to-orange-600 font-semibold text-black hover:from-amber-400 hover:to-orange-500"
                    onClick={closeDrawer}
                >
                    Cerrar
                </Button>
            </DrawerClose>
        </div>
    );
}