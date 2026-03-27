import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HODINY = [
  { den: 'Pondelok', cas: '16:00 — 21:00' },
  { den: 'Utorok', cas: '16:00 — 21:00' },
  { den: 'Streda', cas: '16:00 — 21:00' },
  { den: 'Štvrtok', cas: '16:00 — 21:00' },
  { den: 'Piatok', cas: '16:00 — 21:00' },
  { den: 'Sobota', cas: 'ZATVORENÉ' },
  { den: 'Nedeľa', cas: 'ZATVORENÉ' },
]

export default function OtvaracieHodinyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          schedule
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Otváracie hodiny
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          AEROBIC CENTRUM
        </p>
      </section>

      {/* Kontakt */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center">
          <h2 className="font-headline text-2xl font-bold mb-4">Vážení klienti</h2>
          <p className="text-on-surface-variant text-lg mb-6">
            Akékoľvek otázky zasielajte na e-mail:{' '}
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold">
              vfit.petrzalka@gmail.com
            </a>
          </p>
          <p className="text-on-surface-variant text-lg mb-4">Tešíme sa na Vás.</p>
          <p className="font-bold text-primary">Kolektív V-FIT</p>
          <p className="text-on-surface-variant mt-6">
            Tel. na recepciu:{' '}
            <a href="tel:+421903174885" className="text-primary font-bold">0903/174 885</a>
          </p>
        </div>
      </section>

      {/* Upozornenie */}
      <section className="py-8 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-8 border border-outline-variant/10 text-center">
          <span className="material-symbols-outlined text-tertiary text-3xl mb-3 block">warning</span>
          <p className="text-on-surface-variant font-bold">
            NOVINKA od januára 2023 — v dňoch sviatkov je V-FIT ZATVORENÉ.
          </p>
        </div>
      </section>

      {/* Otváracie hodiny */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10 text-center">
          Vstup do V-FIT — KAŽDÝ DEŇ
        </h2>
        <div className="max-w-xl mx-auto">
          {HODINY.map((item) => {
            const zatvorene = item.cas === 'ZATVORENÉ'
            return (
              <div
                key={item.den}
                className={`flex items-center justify-between py-5 px-6 rounded-xl mb-2 ${
                  zatvorene ? 'bg-tertiary-container/10' : 'bg-surface-container-low'
                }`}
              >
                <span className="font-bold text-lg">{item.den}</span>
                <span
                  className={`font-bold text-lg ${
                    zatvorene ? 'text-tertiary' : 'text-primary'
                  }`}
                >
                  {item.cas}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Oznámenie */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">info</span>
            Oznámenie
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Oznamujeme Vám, že dňom 6. 8. 2010 došlo k zmene názvu H-FIT na V-FIT.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Ďakujeme za pochopenie všetkým našim členkám — klientkám a veríme, že aj naďalej po zmene názvu nášho športovo-relaxačného centra na V-FIT, o.z., nám ostanete verné.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            S pozdravom Petrášová Helena — športový manažér V-FIT, o.z., Bratislava
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
