import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PowerJogaPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          self_improvement
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          POWER JOGA
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Milí naši klienti V-FITu
        </p>
      </section>

      {/* Popis */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <h2 className="font-headline text-3xl font-bold mb-6">
            Harmónia tela, psychiky a mysli
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Cieľom pravidelného cvičenia Power jogy je harmónia tela, psychiky a mysli.
            Power joga uvoľní, posilní a zaťaží súmerne svaly celého tela. Odstráni sa dysbalancia
            (nerovnováha svalov), ktorou v súčasnej dobe trpí väčšina populácie.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Zlepšuje flexibilitu, silu, zachováva prirodzenú hybnosť kĺbov, vyrovnáva skoliotické
            držanie tela, zlepšuje hybnosť a pružnosť chrbtice. Power joga je aj veľmi vhodná na
            chudnutie. Keď budete Power jogu cvičiť pravidelne a disciplinovane, k úbytku váhy
            dôjde viditeľne v priebehu prvých dvoch mesiacov.
          </p>
        </div>
      </section>

      {/* Kurz */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
          <h3 className="font-headline text-2xl font-bold mb-2">
            Power joga pre mierne pokročilých aj pokročilých
          </h3>
          <span className="inline-block text-sm text-on-surface-variant bg-primary/5 rounded-full px-3 py-1 mb-6">
            aj pre mužov — zlepšuje držanie tela — lektor Helena
          </span>
          <div className="bg-primary/5 rounded-xl p-6 mb-6">
            <p className="text-3xl font-black text-primary mb-1">100 €</p>
            <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
              UTOROK
            </span>
            <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-primary text-base">schedule</span>
              od 18:00
            </span>
            <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">
              24.3.26 — 26.5.26
            </span>
          </div>
        </div>
      </section>

      {/* Prihlášky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-4">Prijímame prihlášky</h2>
          <p className="text-surface-variant mb-6">
            Jedna cvičebná hodina trvá 50 min. Neváhajte preto so zaplatením kurzu. Zaplatením je istota miesta v kurze.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary-fixed font-bold">
              vfit.petrzalka@gmail.com
            </a>
            <span className="text-surface-variant hidden md:inline">·</span>
            <p className="text-surface-variant">
              mobil (doobeda, inak SMS) do 14h.:{' '}
              <a href="tel:+421903174885" className="text-primary-fixed font-bold">+421 903 17 48 85</a>
            </p>
          </div>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block">
            <p className="text-surface-variant text-sm mb-1">Úhrada kurzovného na účet:</p>
            <p className="font-mono font-bold text-lg text-surface-bright">
              SK38 0200 0000 0027 8709 3958
            </p>
            <p className="text-surface-variant text-sm mt-2">
              VS — termín kurzu, poznámka — typ kurzu a meno a priezvisko
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
