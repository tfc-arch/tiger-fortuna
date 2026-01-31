import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useLanding } from "@/providers/landing";
import { RegistrationForm } from "./registration-form";

export function RegistrationDrawer() {
  const { drawerOpen, setDrawerOpen } = useLanding();

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerContent className="border-zinc-800 bg-zinc-900">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle className="text-center text-2xl font-bold text-white">
              📝 Creá tu usuario ahora
            </DrawerTitle>
            <DrawerDescription className="text-center text-zinc-400">
              Dejanos tu nombre y tu número de WhatsApp. Un agente de Tiger
              Fortuna se va a comunicar con vos en el momento.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <RegistrationForm />
          </div>
          <DrawerFooter className="border-t border-zinc-800 pt-4">
            <p className="text-center text-xs text-zinc-500">
              Solo para mayores de 18 años. Jugá con responsabilidad.
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}