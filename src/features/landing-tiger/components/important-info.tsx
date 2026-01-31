import { INFO_POINTS } from "../constans";

export const ImportantInfo = () =>
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