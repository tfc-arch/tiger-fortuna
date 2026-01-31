import { useState, useRef, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// ─────────────────────────────────────────────────────────────
// Schema de validación
// ─────────────────────────────────────────────────────────────
const formSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(50, { message: "El nombre no puede exceder los 50 caracteres" }),
  telefono: z
    .string()
    .regex(/^\+?\d{8,15}$/, {
      message: "Ingresá un teléfono válido (8-15 dígitos, puede empezar con +)",
    }),
});

type FormData = z.infer<typeof formSchema>;

// ─────────────────────────────────────────────────────────────
// Datos de secciones
// ─────────────────────────────────────────────────────────────
const BONO_BULLETS = [
  "🎰 100% en tu primer depósito hasta $50.000",
  "🎁 50 giros gratis en tragamonedas premium",
  "⚡ Activación instantánea, sin códigos",
];

const FEATURES = [
  {
    icon: "🔒",
    title: "Seguridad Garantizada",
    description: "Encriptación de última generación y protección de datos 24/7",
  },
  {
    icon: "💳",
    title: "Pagos Rápidos",
    description: "Retiros procesados en menos de 24 horas a tu cuenta",
  },
  {
    icon: "🎮",
    title: "+500 Juegos",
    description: "Slots, ruleta, blackjack y más de los mejores proveedores",
  },
  {
    icon: "🏆",
    title: "Soporte VIP",
    description: "Atención personalizada en español las 24 horas",
  },
];

// ─────────────────────────────────────────────────────────────
// Componente Principal
// ─────────────────────────────────────────────────────────────
export const LandingTigerFortuna = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
    },
  });

  // Focus en el primer input al abrir el drawer
  useEffect(() => {
    if (drawerOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
    if (!drawerOpen) {
      setSubmitSuccess(false);
      form.reset();
    }
  }, [drawerOpen, form]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Datos del registro:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  // ─────────────────────────────────────────────────────────────
  // Formulario de Registro (usado en el Drawer)
  // ─────────────────────────────────────────────────────────────
  const RegistrationForm = () => {
    if (submitSuccess) {
      return (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="mb-4 text-6xl">🐅</div>
          <h3 className="mb-2 text-2xl font-bold text-amber-400">
            ¡Registro exitoso!
          </h3>
          <p className="text-zinc-400">
            Pronto te contactaremos para activar tu cuenta y bono de bienvenida.
          </p>
          <DrawerClose asChild>
            <Button
              className="mt-6 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold hover:from-amber-400 hover:to-orange-500"
              onClick={() => setDrawerOpen(false)}
            >
              Cerrar
            </Button>
          </DrawerClose>
        </div>
      );
    }

    return (
      <form id="tiger-fortuna-form" onSubmit={form.handleSubmit(onSubmit)}>
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
                  ref={firstInputRef}
                  id="tiger-form-nombre"
                  placeholder="Tu nombre completo"
                  aria-invalid={fieldState.invalid}
                  aria-describedby={fieldState.invalid ? "nombre-error" : undefined}
                  className="border-zinc-700 bg-zinc-900/80 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
                />
                {fieldState.invalid && (
                  <FieldError id="nombre-error" errors={[fieldState.error]} className="text-red-400" />
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
                  Teléfono
                </FieldLabel>
                <Input
                  {...field}
                  id="tiger-form-telefono"
                  type="tel"
                  placeholder="+54 11 1234-5678"
                  aria-invalid={fieldState.invalid}
                  aria-describedby={fieldState.invalid ? "telefono-error" : undefined}
                  className="border-zinc-700 bg-zinc-900/80 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
                />
                {fieldState.invalid && (
                  <FieldError id="telefono-error" errors={[fieldState.error]} className="text-red-400" />
                )}
              </Field>
            )}
          />
        </FieldGroup>

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
            "Registrarme ahora"
          )}
        </Button>
      </form>
    );
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      {/* Background con patrón sutil */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #d97706 20px,
            #d97706 21px
          )`,
        }}
      />

      {/* ─────────────────────────────────────────────────────────── */}
      {/* HERO SECTION */}
      {/* ─────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
          {/* Logo / Brand */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:mb-12">
            <span className="text-4xl sm:text-5xl">🐅</span>
            <h1 className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
              TIGER FORTUNA
            </h1>
          </div>

          {/* Hero Content */}
          <div className="text-center">
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Tu suerte empieza{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                ahora
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 sm:text-xl">
              Descubrí la emoción del juego online con los mejores bonos, pagos
              instantáneos y más de 500 juegos exclusivos.
            </p>

            {/* CTA Principal */}
            <div className="mt-10">
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-7 text-lg font-bold text-black shadow-2xl shadow-amber-500/30 transition-all hover:scale-105 hover:from-amber-400 hover:to-orange-500 hover:shadow-amber-500/40"
                  >
                    <span className="relative z-10">Creá tu usuario ahora</span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="border-zinc-800 bg-zinc-900">
                  <div className="mx-auto w-full max-w-md">
                    <DrawerHeader>
                      <DrawerTitle className="text-center text-2xl font-bold text-white">
                        🐅 Creá tu cuenta
                      </DrawerTitle>
                      <DrawerDescription className="text-center text-zinc-400">
                        Completá tus datos y empezá a jugar con tu bono de
                        bienvenida.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4 pb-4">
                      <RegistrationForm />
                    </div>
                    <DrawerFooter className="border-t border-zinc-800 pt-4">
                      <p className="text-center text-xs text-zinc-500">
                        Al registrarte aceptás los{" "}
                        <a href="#" className="text-amber-500 hover:underline">
                          Términos y Condiciones
                        </a>
                      </p>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* BONO DE BIENVENIDA */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-amber-950/30 p-8 shadow-2xl sm:p-12">
            {/* Decorative corner */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />

            <div className="relative">
              <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-400">
                BONO EXCLUSIVO
              </span>
              <h3 className="mb-8 text-3xl font-bold sm:text-4xl">
                Bono de Bienvenida
              </h3>

              <ul className="space-y-4">
                {BONO_BULLETS.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-zinc-300"
                  >
                    <span className="mt-1 text-xl">{bullet.slice(0, 2)}</span>
                    <span>{bullet.slice(3)}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-zinc-500">
                * T&C aplican. Bono sujeto a requisitos de apuesta. Solo mayores
                de 18 años.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* ¿POR QUÉ ELEGIR TIGER FORTUNA? */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h3 className="text-3xl font-bold sm:text-4xl">
              ¿Por qué elegir{" "}
              <span className="text-amber-400">Tiger Fortuna</span>?
            </h3>
            <p className="mt-4 text-zinc-400">
              Descubrí lo que nos hace diferentes
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {FEATURES.map((feature, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-amber-500/30 hover:bg-zinc-900 sm:p-8"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <span className="mb-4 inline-block text-4xl">
                    {feature.icon}
                  </span>
                  <h4 className="mb-2 text-xl font-bold">{feature.title}</h4>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* CTA FINAL */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold sm:text-4xl">
            ¿Listo para ganar?
          </h3>
          <p className="mt-4 text-lg text-zinc-400">
            Unite a miles de jugadores que ya disfrutan de Tiger Fortuna
          </p>
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button
                size="lg"
                className="mt-8 bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-7 text-lg font-bold text-black shadow-2xl shadow-amber-500/30 transition-all hover:scale-105 hover:from-amber-400 hover:to-orange-500"
              >
                Creá tu usuario ahora
              </Button>
            </DrawerTrigger>
          </Drawer>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* FOOTER */}
      {/* ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐅</span>
              <span className="font-bold text-amber-400">TIGER FORTUNA</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500 sm:gap-4">
              <span className="rounded bg-zinc-800 px-2 py-1 font-bold">
                +18
              </span>
              <span>|</span>
              <a href="#" className="hover:text-amber-400">
                Juego responsable
              </a>
              <span>|</span>
              <a href="#" className="hover:text-amber-400">
                Términos y condiciones
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Tiger Fortuna. Todos los derechos
            reservados. Jugá con responsabilidad.
          </p>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* BOTÓN FLOTANTE */}
      {/* ─────────────────────────────────────────────────────────── */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-6 font-bold text-black shadow-2xl shadow-amber-500/40 transition-all hover:scale-110 hover:from-amber-400 hover:to-orange-500 sm:bottom-8 sm:right-8"
            aria-label="Abrir formulario de registro"
          >
            <span className="hidden sm:inline">Creá tu usuario</span>
            <span className="sm:hidden">Registrate</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="border-zinc-800 bg-zinc-900">
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle className="text-center text-2xl font-bold text-white">
                🐅 Creá tu cuenta
              </DrawerTitle>
              <DrawerDescription className="text-center text-zinc-400">
                Completá tus datos y empezá a jugar con tu bono de bienvenida.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pb-4">
              <RegistrationForm />
            </div>
            <DrawerFooter className="border-t border-zinc-800 pt-4">
              <p className="text-center text-xs text-zinc-500">
                Al registrarte aceptás los{" "}
                <a href="#" className="text-amber-500 hover:underline">
                  Términos y Condiciones
                </a>
              </p>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}