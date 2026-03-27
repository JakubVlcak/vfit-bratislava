import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PRICING = [
  { persons: '1 osoba', price: '25 €' },
  { persons: '2 osoby', price: '36 €' },
  { persons: '3 osoby', price: '45 €' },
  { persons: '4 osoby', price: '50 €' },
]

export default function KruhovyTreningPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block py-1 px-4 rounded-full bg-primary text-on-primary text-xs font-bold tracking-widest uppercase">
              Novinka
            </span>
            <span className="inline-block py-1 px-4 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold tracking-widest uppercase">
              Hit roku
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tighter mb-6">
            Kruhový <span className="text-primary italic">tréning</span>
          </h1>
          <p className="text-xl text-on-surface-variant/70 font-medium max-w-2xl">
            Kurz ŠPECIÁL — maximálne pre 1–4 ženy. 50 minútový intenzívny
            kruhový tréning vždy s lektorom.
          </p>
        </section>

        {/* Key highlights */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-on-background rounded-lg p-8 relative overflow-hidden">
              <div className="bloom-effect -right-20 -bottom-20 opacity-20" />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4 block">
                  local_fire_department
                </span>
                <h3 className="font-headline text-2xl font-bold text-surface-bright mb-2">
                  Odbúravač tuku
                </h3>
                <p className="text-surface-variant text-sm">
                  Rýchly a nekompromisný spôsob, ako zredukovať tuk, formovať
                  svaly a rozvíjať kondíciu.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-lg p-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                person
              </span>
              <h3 className="font-headline text-2xl font-bold mb-2">
                Osobný prístup
              </h3>
              <p className="text-on-surface-variant text-sm">
                Tréner sa vám venuje celý čas. Maximálne 4 osoby na tréning.
              </p>
            </div>
            <div className="bg-surface-container-low rounded-lg p-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                groups
              </span>
              <h3 className="font-headline text-2xl font-bold mb-2">
                Pre všetky ženy
              </h3>
              <p className="text-on-surface-variant text-sm">
                Bez rozdielu veku či váhy. Pre začiatočníčky aj pokročilé
                cvičenky.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8">
            Cenník za tréning
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRICING.map((item) => (
              <div
                key={item.persons}
                className="bg-surface-container-high rounded-lg p-6 text-center"
              >
                <p className="text-sm text-on-surface-variant font-medium mb-2">
                  {item.persons}
                </p>
                <p className="font-headline text-3xl font-extrabold text-primary">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-on-surface-variant mt-4">
            Čas a deň podľa dohody. Úhrady vopred.
          </p>
        </section>

        {/* Description */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="max-w-3xl">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8">
              Ako funguje kruhový tréning?
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                Kruhový tréning predstavuje spôsob, ktorým je možné zredukovať
                tuk, formovať svaly a súčasne rozvíjať kondíciu. Jeho výhoda
                spočíva aj v tom, že je na rozdiel od dosť jednotvárneho
                aeróbneho tréningu pomerne pestrý. Navyše jeho účinnosť je
                preverená viacročnou praxou.
              </p>
              <p>
                Celý systém bol navrhnutý tak, aby sa pri cvičení krv
                nezadržiavala na jednom mieste, ale obiehala celým telom.
              </p>
              <p>
                Princíp kruhového tréningu spočíva v cvičení viacerých cvikov s
                nízkymi váhami v neprerušovanom slede za sebou. Používajú sa
                rôzne pomôcky ako sú činky, overbally, expandery, či flexibary,
                pričom sa vykonáva vždy jedna séria na určitú svalovú partiu.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-on-surface font-medium">
                V jednom cykle sa precvičí komplexne celé telo. Ide teda o veľmi
                efektívny typ tréningu, ktorý úspešne tvaruje vaše telo.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Sign up */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-10 text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
              Prihlášky individuálne
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:vfit.petrzalka@gmail.com"
                className="inline-flex items-center gap-2 signature-gradient text-on-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">email</span>
                vfit.petrzalka@gmail.com
              </a>
              <a
                href="tel:+421903174885"
                className="inline-flex items-center gap-2 bg-surface-container-highest text-primary px-8 py-4 rounded-full font-bold hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined">call</span>
                0903/174885
                <span className="text-on-surface-variant/50 text-sm font-normal">
                  (do 14 h. inak SMS)
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
