import logo from "@/assets/logo.png";

export function Header() {
    const WHATSAPP_GROUP_URL = import.meta.env.VITE_WHATSAPP_GROUP_1;
    return (
        <header className="">
            {/* Glow effect */}
            <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[120px]" />

            <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
                {/* Logo / Brand */}
                <div className="mb-8 flex items-center justify-center gap-3 sm:mb-12">
                    <img
                        className="max-w-100 object-contain px-10"
                        src={logo}
                        alt="tiger fortuna logo"
                    />
                </div>

                {/* Hero Content */}
                <div className="text-center">
                    <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                        El casino online que{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                            más paga
                        </span>{" "}
                        💸
                    </h2>

                    {/* Pasos para empezar */}
                    <div className="mx-auto mt-10 max-w-2xl">
                        <p className="mb-8 text-xl font-semibold text-amber-400">
                            👉 Cómo empezar a jugar:
                        </p>

                        <div className="space-y-6 text-left">
                            {/* Paso 1 */}
                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
                                <p className="text-lg text-zinc-200">
                                    <span className="mr-2 text-xl">1️⃣</span>
                                    Hacé una transferencia al Alias:{" "}
                                    <span className="font-bold text-amber-400">0971442269</span>
                                </p>
                                <p className="mt-2 text-zinc-400">
                                    💰 Monto mínimo <span className="font-semibold text-white">10.000 Gs</span>
                                </p>
                            </div>

                            {/* Paso 2 */}
                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
                                <p className="mb-4 text-lg text-zinc-200">
                                    <span className="mr-2 text-xl">2️⃣</span>
                                    Ingresá al grupo oficial desde acá
                                </p>
                                <a
                                    href={WHATSAPP_GROUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-green-500"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Unite al Grupo de WhatsApp
                                </a>
                            </div>

                            {/* Paso 3 */}
                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
                                <p className="text-lg text-zinc-200">
                                    <span className="mr-2 text-xl">3️⃣</span>
                                    Enviá tu comprobante en el grupo
                                </p>
                                <p className="mt-2 text-zinc-400">
                                    📩 Al enviarlo, escribí el mensaje:
                                </p>
                                <p className="mt-2 rounded-lg bg-zinc-800 px-4 py-2 font-semibold text-amber-400">
                                    👉 "Quiero mi usuario"
                                </p>
                            </div>
                        </div>

                        {/* Resultado */}
                        <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-950/20 p-5 text-center">
                            <p className="text-lg text-zinc-200">
                                <span className="mr-2">⏱</span>
                                En minutos, un administrador te envía tu{" "}
                                <span className="font-semibold text-amber-400">usuario, contraseña y créditos cargados</span>.
                            </p>
                            <p className="mt-2 text-xl font-bold text-white">
                                ¡Listo! Ya podés jugar, divertirte y ganar.
                            </p>
                        </div>

                        {/* Recargas */}
                        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                            <p className="mb-3 text-lg font-semibold text-zinc-200">
                                <span className="mr-2">🔁</span>
                                Para recargas:
                            </p>
                            <p className="text-zinc-400">
                                Hacé la transferencia y enviá el comprobante con el mensaje
                            </p>
                            <p className="mt-2 rounded-lg bg-zinc-800 px-4 py-2 font-semibold text-amber-400">
                                👉 "Recarga de crédito"
                            </p>
                            <p className="mt-3 text-sm text-zinc-500">
                                Saldo acreditado al instante.
                            </p>
                        </div>

                        {/* Tagline final */}
                        <p className="mt-10 text-xl font-bold text-white">
                            🔥 Jugá, divertite y ganá dinero real en tiempo real
                        </p>
                        <p className="mt-2 text-2xl font-black text-amber-400">
                            Tiger Fortuna 🎰💰
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}