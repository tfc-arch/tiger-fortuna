import { CTAButton } from "./cta-button";

export function CTASection() {
    return (
        <section className="relative py-16 sm:py-24">
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 to-transparent" />
            <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold sm:text-4xl">¿Listo para empezar?</h3>
                <p className="mt-4 text-lg text-zinc-400">
                    Dejanos tus datos y un agente te contacta en el momento
                </p>
                <div className="mt-8">
                    <CTAButton />
                </div>
            </div>
        </section>
    );
}