import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const KRUHOVY_CENY = [
  { osoby: 'Jedna klientka', cena: '25 €' },
  { osoby: 'Dve klientky', cena: '36 €' },
  { osoby: 'Tri klientky', cena: '45 €' },
  { osoby: 'Štyri klientky', cena: '50 €' },
]

export default function AkcieDospeliPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          local_offer
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Akcie dospelí
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          V-FIT — športovo-relaxačné centrum, Gercenova 8/F, Petržalka-Dvory
        </p>
        <p className="text-on-surface-variant mt-2">
          <a href="tel:+421243426357" className="text-primary font-bold">02/4342 6357</a>
          {' · '}
          <span className="text-primary font-bold">www.v-fit.sk</span>
        </p>
      </section>

      {/* Kruhový tréning */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              Novinka
            </span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4">
            KRUHOVÝ TRÉNING pre ženy
          </h2>
          <p className="text-on-surface-variant text-sm mb-8">
            Prihlášky a úhrada vopred
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {KRUHOVY_CENY.map((item) => (
              <div
                key={item.osoby}
                className="bg-surface-container rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-black text-primary mb-2">{item.cena}</p>
                <p className="text-on-surface-variant text-sm">{item.osoby}</p>
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant text-sm text-center">za 50 min.</p>
        </div>
      </section>

      {/* Popis */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Rýchly a nekompromisní odbúravač tuku. Hodina je určená všetkým ženám bez rozdielu veku, či váhy. Je určená aj pre začiatočníčky aj pokročilé cvičenky.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Neváhajte a vyskúšajte tréning v posilňovni. Posilňovanie spevňuje svalstvo a tvaruje ho. Samozrejme je dôležitá aj strava.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-4">Záujemcovia sa hláste</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary-fixed font-bold">
              vfit.petrzalka@gmail.com
            </a>
            <span className="text-surface-variant hidden md:inline">·</span>
            <p className="text-surface-variant">
              do 14 h., alebo SMS —{' '}
              <a href="tel:+421903174885" className="text-primary-fixed font-bold">0903/174 885</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
