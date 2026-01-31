import logo from "@/assets/logo.png";
import { CTAButton } from "./cta-button";

export function Header() {
    return (
        <header className="relative overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[120px]" />

            <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
                <div className="mb-8 flex items-center justify-center gap-3 sm:mb-12">
                    <img
                        className="max-w-100 object-contain px-10"
                        src={logo}
                        alt="tiger fortuna logo"
                    />
                </div>

                <div className="text-center">
                    <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                        Creá tu usuario y empezá a{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                            divertirte
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
                        Creá tu usuario en pocos minutos y empezá a divertirte con todos los
                        juegos disponibles en nuestra plataforma. Jugá con dinero real, ganá
                        y cobrá al instante, de forma simple y segura.
                    </p>

                    <div className="mt-10">
                        <CTAButton />
                    </div>
                </div>
            </div>
        </header>
    );
}