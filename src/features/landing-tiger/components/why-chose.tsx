import { SECTIONS } from "../constans";

export const WhyChose = () =>
    <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center sm:mb-16">
                <h3 className="text-3xl font-bold sm:text-4xl">
                    ¿Por qué elegir{" "}
                    <span className="text-amber-400">Tiger Fortuna</span>?
                </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {SECTIONS.map((feature, index) => (
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