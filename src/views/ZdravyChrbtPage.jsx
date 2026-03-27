import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ZdravyChrbtPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-6xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>healing</span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">ZDRAVÝ CHRBÁT</h1>
      </section>

      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <h2 className="font-headline text-3xl font-bold mb-6">Kurz ZDRAVÝ CHRBÁT</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
            Rehabilitačno-relaxačné cvičenie s prvkami Pilatesa, FIT loptou, s Overballom, ježkom, rôznymi loptičkami a iné.
            Cvičenie na odstránenie bolestí chrbta a prevencia.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Bolí Vás chrbát, kĺby, máte skoliózu, lordózu alebo iný zdravotný problém? Tak tento kurz je práve pre Vás.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <h3 className="font-headline text-xl font-bold mb-4">ZDRAVÝ CHRBÁT</h3>
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-3xl font-black text-primary mb-1">100 €</p>
              <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-base">calendar_today</span>PONDELOK
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-base">schedule</span>od 18:00
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">16.3.26 — 25.5.26</span>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <h3 className="font-headline text-xl font-bold mb-2">JOGA pre ZDRAVÝ CHRBÁT</h3>
            <span className="inline-block text-sm text-on-surface-variant bg-tertiary/10 rounded-full px-3 py-1 mb-4">Novinka — aj pre mužov</span>
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-3xl font-black text-primary mb-1">100 €</p>
              <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-base">calendar_today</span>ŠTVRTOK
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-base">schedule</span>od 18:00
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">8.1.26 — 12.3.26</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-4">Prijímame prihlášky</h2>
          <p className="text-surface-variant mb-6">Jedna cvičebná hodina trvá 50 min.</p>
          <a href="tel:+421903174885" className="text-primary-fixed font-bold">+421 903 17 48 85</a>
          <p className="text-surface-variant text-sm mt-2">doobeda, inak SMS</p>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block mt-6">
            <p className="font-mono font-bold text-lg text-surface-bright">SK38 0200 0000 0027 8709 3958</p>
            <p className="text-surface-variant text-sm mt-2">VS — termín kurzu, poznámka — typ kurzu a meno a priezvisko</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
