import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NACINIE = [
  'Fit lopta',
  'rehabilitačný válec',
  'BOSU',
  'Flexibar',
  'Gumy',
  'elastické pásy',
  'overbally',
  'ježci',
  'loptičky',
  'činky',
]

export default function PilatesPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          sports_gymnastics
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          PILATES
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Pre zdravie a pohodu — milí naši klienti V-FITu
        </p>
      </section>

      {/* Úvod */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <h2 className="font-headline text-3xl font-bold mb-6">
            PILATES pre ZDRAVIE a POHODU
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Metóda Pilates určená pre všetky ženy, ktoré chcú ostať zdravé a myslia na svoje zdravie,
            aj pre ženy po pôrode. Máte diastázu (rozestup brušných svalov po pôrode)? Príďte do kurzu
            PILATES. Pre každého, kto má diastázu, je Pilates a SM systém veľmi vhodný.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Vyformujte si telo, upevnite zdravie a zbavte sa bolestí pohybového systému cvičeniami
            PILATES. Pilates je tréningovým prostriedkom na spevnenie svalov a rozvoj celkovej
            pohyblivosti a koordinácie pohybov.
          </p>
        </div>
      </section>

      {/* Mamičky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="material-symbols-outlined text-tertiary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              pregnant_woman
            </span>
            <h2 className="font-headline text-2xl font-bold">Pre mamičky po pôrode</h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Mamičky, dieťatko je na svete, ale pociťujete bolesti chrbta, nabraté kilá neodchádzajú?
            Prípadne sa rýchlo zbavíte nadbytočných kilogramov, len to bruško akosi stále ovísa?
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Práve pre vás je vhodné začať čo najskôr cvičenie PILATES pre začiatočníkov
            v <strong>PONDELOK o 18 h</strong>. Nemusíte sa obávať, že stratíte mliečko, pretože plynulé,
            koordinované cvičenie Pilates osviežuje telo i myseľ a podporuje i laktáciu.
          </p>
          <p className="text-on-surface-variant leading-relaxed font-bold">
            Odporúčame cvičiť mamičkám po ukončení šestonedelia a po cisárskom reze po desiatich týždňoch.
          </p>
        </div>
      </section>

      {/* Motivácia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 text-center">
          <span
            className="material-symbols-outlined text-primary text-4xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            medication
          </span>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto italic">
            Než zoberiete tabletky proti bolesti, radšej si poďte zacvičiť pod vedením kvalifikovanej
            lektorky Pilates a Pilates Medical. <strong>Cvičte Pilates namiesto liekov.</strong>
          </p>
        </div>
      </section>

      {/* Kurzy */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10">Nové kurzy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pilates a Zdravý chrbát */}
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <h3 className="font-headline text-xl font-bold mb-4">
              PILATES a Zdravý chrbát
            </h3>
            <span className="inline-block text-sm text-on-surface-variant bg-primary/5 rounded-full px-3 py-1 mb-4">
              aj pre mužov
            </span>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Kurz pre zdravie tela a proti bolesti svalového aparátu a spevnenie svalstva najmä pre
              začiatočníkov, alebo aj pre tých, ktorí potrebujú ešte doplnok k inému kurzu. Kurz zameraný
              na správne nastavenie chrbtice v jednotlivých pohyboch a na bezpečné prevedenie pozícií.
              Lekcie sú vedené v pomalšom tempe a s jednoduchšími pozíciami.
            </p>
            <div className="bg-primary/5 rounded-xl p-6 mb-4">
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
                od 17:00
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">
                24.3.26 — 26.5.26
              </span>
            </div>
          </div>

          {/* Pilates MP a pokročilí */}
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <h3 className="font-headline text-xl font-bold mb-4">
              PILATES pre mierne pokročilých aj pokročilých
            </h3>
            <span className="inline-block text-sm text-on-surface-variant bg-primary/5 rounded-full px-3 py-1 mb-4">
              cvičenie aj s náčiním — lektor Helena
            </span>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Kurz pre pokročilejšie cvičenky s využitím rôzneho náčinia pod vedením lektorky Heleny.
            </p>
            <div className="bg-primary/5 rounded-xl p-6 mb-4">
              <p className="text-3xl font-black text-primary mb-1">100 €</p>
              <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
                STREDA
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-base">schedule</span>
                od 18:00
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">
                18.3.26 — 20.5.26
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Fyzio-Pilates */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            Novinka
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            FYZIO-PILATES
          </h2>
          <span className="inline-block text-sm text-on-surface-variant bg-surface-container rounded-full px-3 py-1 mb-6">
            aj pre mužov
          </span>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Efektívna metóda je kombináciou rehabilitačných princípov Pilatesovej metódy, Fyzio-jogy,
            Tvárovej jogy a je zostavená lektorom priamo na zdravotné problémy.
          </p>
          <p className="text-primary font-bold text-lg">
            Dôležité je funkčné brucho = Zdravý chrbát.
          </p>
        </div>
      </section>

      {/* Pomôcky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">inventory_2</span>
          Používané náčinie
        </h2>
        <div className="flex flex-wrap gap-3">
          {NACINIE.map((item) => (
            <span
              key={item}
              className="bg-surface-container-low border border-outline-variant/10 rounded-full px-5 py-3 text-sm font-bold"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Prihlášky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-4">
            Prijímame prihlášky
          </h2>
          <p className="text-surface-variant mb-6">
            Jedna cvičebná hodina trvá 50 min. Neváhajte preto so zaplatením kurzu. Zaplatením je istota miesta v kurze.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary-fixed font-bold">
              vfit.petrzalka@gmail.com
            </a>
            <span className="text-surface-variant hidden md:inline">·</span>
            <p className="text-surface-variant">
              mobil (doobeda, inak SMS):{' '}
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
            <p className="text-surface-variant text-sm mt-1">
              Ďalšie info: tel. 0903/174 885 — 10:00 — 14:00 h.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
