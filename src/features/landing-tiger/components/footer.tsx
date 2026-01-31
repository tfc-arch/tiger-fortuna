import logo from "@/assets/logo.png"

export const Footer = () =>
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
