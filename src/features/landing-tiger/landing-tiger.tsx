
export const LandingTigerFortuna = () => {

  const urlWhatsapp = import.meta.env.VITE_WHATSAPP_GROUP_1;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Background pattern */}
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

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-400">
            Acceso a comunidad privada de entretenimiento online
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Viví una experiencia interactiva en tiempo real junto a una{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              comunidad activa
            </span>{" "}
            todos los días 🎯
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Atención directa · Contenido exclusivo · Acceso inmediato
          </p>
        </div>
      </header>

      {/* Por qué unirte */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            ¿Por qué unirte a nuestro grupo?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: "🔒", text: "Comunidad privada y moderada" },
              { icon: "👥", text: "Miembros activos las 24 horas" },
              { icon: "📲", text: "Atención personalizada por WhatsApp" },
              { icon: "⚡", text: "Acceso rápido y sin vueltas" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-lg text-zinc-200">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-zinc-400">
            Un espacio pensado para quienes buscan una experiencia diferente, dinámica y organizada.
          </p>
        </div>
      </section>


      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-amber-950/30 p-8 text-center shadow-2xl sm:p-12">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
              Comunidad activa todos los días
            </h2>
            <p className="text-lg text-zinc-300">
              Cada día se suman nuevos miembros a nuestro grupo privado.
            </p>
            <p className="mt-2 text-zinc-400">
              El acceso es limitado para mantener el orden y la calidad de la comunidad.
            </p>
            <p className="mt-6 font-medium text-amber-400">
              👉 El contenido se comparte exclusivamente dentro del grupo oficial.
            </p>

            {/* CTA */}
            <a
              href={urlWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-green-500/30 transition-all hover:scale-105 hover:bg-green-500"
            >
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              UNIRME AL GRUPO PRIVADO
            </a>

            <p className="mt-6 text-sm text-zinc-500">
              Acceso gratuito · Sin compromiso · Cupos limitados
            </p>
          </div>
        </div>
      </section >

      {/* Tranquilidad y seguridad */}
      < section className="relative py-16 sm:py-24" >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
            Tranquilidad y seguridad
          </h2>
          <div className="space-y-4 text-lg text-zinc-300">
            <p className="flex items-center justify-center gap-3">
              <span className="text-green-500">✔️</span>
              No solicitamos datos sensibles
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-green-500">✔️</span>
              El acceso es 100% voluntario
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-green-500">✔️</span>
              Podés salir del grupo cuando quieras
            </p>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="border-t border-zinc-800 py-8" >
        <p className="text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Comunidad Privada. Todos los derechos reservados.
        </p>
      </footer >

      {/* Botón flotante WhatsApp */}
      <a
        href={urlWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-600 p-4 font-bold text-white shadow-2xl shadow-green-500/40 transition-all hover:scale-110 hover:bg-green-500 sm:bottom-8 sm:right-8 sm:px-6"
        aria-label="Unirme al grupo"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline">Unirme</span>
      </a >
    </div >
  )
};
