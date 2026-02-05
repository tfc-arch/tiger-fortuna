export const WelcomeBonus = () =>
    <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-amber-950/30 p-8 shadow-2xl sm:p-12">
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