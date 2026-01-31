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

import logo from "@/assets/logo.png"
import { saveNewUser } from "./api/save-new-user";

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
    .regex(/^0?9\d{8}$/, {
      message: "Ingresá un número válido (ej: 0981 123 456)",
    }),
});

type FormData = z.infer<typeof formSchema>;

// ─────────────────────────────────────────────────────────────
// Datos de secciones
// ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: "⚡",
    title: "Registro Rápido y Gratuito",
    description: "Nuestros agentes crean tu cuenta de forma rápida y totalmente gratuita",
  },
  {
    icon: "📱",
    title: "Jugá Desde Cualquier Lugar",
    description: "Acceso fácil desde celular, tablet o computadora",
  },
  {
    icon: "💸",
    title: "Recargas Instantáneas",
    description: "Recargas de créditos al instante para que no pares de jugar",
  },
  {
    icon: "💬",
    title: "Atención por WhatsApp",
    description: "Atención personalizada por WhatsApp, con operadores reales",
  },
];

const INFO_POINTS = [
  "El acceso se gestiona a través de nuestros agentes, con atención rápida y personalizada",
  "Las recargas y el cobro de premios se realizan mediante transferencias",
  "Las promociones cuentan con bases y condiciones, que podés consultar con tu agente",
  "Plataforma destinada exclusivamente a personas responsables y mayores de edad",
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
    console.log({data});
    
    setIsSubmitting(true);
    saveNewUser({
      fullName: data.nombre,
      phoneNumber: data.telefono,
    })
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
          <h3 className="mb-2 text-2xl font-bold text-amber-400">
            ¡Listo!
          </h3>
          <p className="text-zinc-400">
            Un agente de Tiger Fortuna se va a comunicar con vos en el momento para crear tu usuario y explicarte cómo empezar.
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
                  placeholder="Completá tu nombre"
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
            "CREAR USUARIO"
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
            <img className="max-w-100 object-contain px-10" src={logo} alt="tiger fortuna logo" />
          </div>

          {/* Hero Content */}
          <div className="text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Creá tu usuario y empezá a{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                divertirte
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
              Creá tu usuario en pocos minutos y empezá a divertirte con todos los juegos disponibles en nuestra plataforma.
              Jugá con dinero real, ganá y cobrá al instante, de forma simple y segura.
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
                        📝 Creá tu usuario ahora
                      </DrawerTitle>
                      <DrawerDescription className="text-center text-zinc-400">
                        Dejanos tu nombre y tu número de WhatsApp. Un agente de Tiger Fortuna se va a comunicar con vos en el momento.
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
              <div className="mb-4 flex items-center gap-3">
                <span className="text-4xl">🎁</span>
                <span className="rounded-full bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-400">
                  BONO EXCLUSIVO
                </span>
              </div>
              <h3 className="mb-6 text-3xl font-bold sm:text-4xl">
                Bono de Bienvenida
              </h3>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Aprovechá nuestro bono de bienvenida, que se activa automáticamente con tu primera recarga.
              </p>
              <p className="mt-4 text-xl font-semibold text-amber-400">
                ¡Duplicamos tu saldo para que arranques a jugar con más chances desde el primer momento!
              </p>

              <p className="mt-8 text-sm text-zinc-500">
                * Aplican bases y condiciones. Consultá con tu agente para más detalles.
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
      {/* INFORMACIÓN IMPORTANTE */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <h3 className="text-xl font-bold sm:text-2xl">Información importante</h3>
            </div>
            <p className="mb-6 text-zinc-400">Para que tengas una buena experiencia:</p>
            <ul className="space-y-4">
              {INFO_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-1 text-amber-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* ATENCIÓN Y ACOMPAÑAMIENTO */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Atención clara y acompañamiento
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Nuestro equipo te va a acompañar en todo el proceso para que empieces a jugar sin vueltas y con total confianza.
            </p>
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
            ¿Listo para empezar?
          </h3>
          <p className="mt-4 text-lg text-zinc-400">
            Dejanos tus datos y un agente te contacta en el momento
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
              <img className="max-w-50 object-contain px-10" src={logo} alt="tiger fortuna logo" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500 sm:gap-4">
              <span className="rounded bg-zinc-800 px-2 py-1 font-bold">
                +18
              </span>
              <span>|</span>
              <span>Juego responsable</span>
              <span>|</span>
              <span>Solo mayores de edad</span>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Tiger Fortuna. Todos los derechos reservados. Jugá con responsabilidad.
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
            Creá tu usuario
          </Button>
        </DrawerTrigger>
        <DrawerContent className="border-zinc-800 bg-zinc-900">
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle className="text-center text-2xl font-bold text-white">
                📝 Creá tu usuario ahora
              </DrawerTitle>
              <DrawerDescription className="text-center text-zinc-400">
                Dejanos tu nombre y tu número de WhatsApp. Un agente de Tiger Fortuna se va a comunicar con vos en el momento.
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
    </div>
  );
}