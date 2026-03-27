import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BENEFITS_TEHOTENSTVE = [
  'zabezpečujú optimálny priebeh tehotenstva a pôrod',
  'podporujú zdravý vývoj bábätka',
  'posilňujú svaly panvového dna',
  'slúžia ako prevencia proti bolestiam krížovej chrbtice a predčasnému otváraniu krčka maternice',
  'uľahčujú a urýchľujú pôrod',
]

const BENEFITS_PO_PORODE = [
  'spevňujú ochabnuté brušné svaly a tým postupne zužujú pás a formujú postavu',
  'zrelaxujú chrbticu po celodennom nosení Vášho bábätka',
]

export default function SmSystemTehotnePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-tertiary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          pregnant_woman
        </span>
        <span className="inline-block py-1 px-4 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold tracking-widest uppercase mb-6">
          Novinka
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          SM Systém pre tehotné
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Aj tehotné potrebujú cvičiť! Individuálne cvičenie pre budúce mamičky.
        </p>
      </section>

      {/* Popis */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <h2 className="font-headline text-3xl font-bold mb-6">
            Pre tehotné ideálne na odstránenie bolestí chrbta
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Cvičenie odstraňuje bolesti hlavy a regeneruje chrbticu. Posilnenie svalov panvového dna a prevencia predčasného otvárania krčka maternice.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Jedná sa o liečebné cvičenie so špeciálnym lanom. Lano (originálne) si môžete u nás zakúpiť súčasne s kurzom (30 €), alebo si prineste svoje, ak ste si už niekde obstarali.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Skutočnou pomocou pre chrbticu je len pravidelné cvičenie s lanom. Nestačí cvičiť len raz týždenne na kurze SM systém, ale cvičiť doma aspoň 10 — 15 minút denne. Vhodné je zakúpiť si aj špeciálnu štvorcovú podložku (30 €), ktorá sa kľačaním nedeformuje.
          </p>
        </div>
      </section>

      {/* Cenník */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-4xl">payments</span>
          Cenník
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center">
            <p className="text-3xl font-black text-primary mb-2">21 €</p>
            <p className="text-on-surface-variant text-sm">40 min. / lekcia</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center">
            <p className="text-3xl font-black text-primary mb-2">25 €</p>
            <p className="text-on-surface-variant text-sm">50 min. / lekcia</p>
          </div>
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center">
            <p className="text-3xl font-black text-primary mb-2">100 €</p>
            <p className="text-on-surface-variant text-sm">Individuálny kurz — 5 týždňov</p>
          </div>
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center">
            <p className="text-3xl font-black text-primary mb-2">200 €</p>
            <p className="text-on-surface-variant text-sm">Individuálny kurz — 10 týždňov</p>
          </div>
        </div>
        <p className="text-on-surface-variant text-sm mt-6 text-center">
          Deň: podľa dohovoru. Termín po dohode s lektorom.
        </p>
      </section>

      {/* 5 lekcií info */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center">
          <span
            className="material-symbols-outlined text-primary text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            school
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            Naučíte sa za 5 lekcií
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Zostavu, ktorú praktikujete až do pôrodu doma. Alebo si môžete kurz predĺžiť vo V-FIT.
            A po pôrode môžete pokračovať kurzom SM systému a uchovávať si zdravie ďalej.
          </p>
        </div>
      </section>

      {/* Benefity */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                pregnant_woman
              </span>
              Počas tehotenstva
            </h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Cviky SM systému je vhodné cvičiť po celú dobu tehotenstva, pretože:
            </p>
            <ul className="space-y-3">
              {BENEFITS_TEHOTENSTVE.map((b) => (
                <li key={b} className="flex items-start gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">done</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                child_care
              </span>
              Po pôrode
            </h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Zároveň pomáhajú dostať sa po pôrode do formy:
            </p>
            <ul className="space-y-3">
              {BENEFITS_PO_PORODE.map((b) => (
                <li key={b} className="flex items-start gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">done</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pomôcky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
          <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">inventory_2</span>
            Pomôcky
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            Vo V-FIT Bratislava cvičíme SM systém s tehuľkami — lekcie, pri ktorých využívame originál laná, podložky aj palice.
          </p>
        </div>
      </section>

      {/* Prihláška a úhrada */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-6">Prihlášky a úhrada</h2>
          <p className="text-surface-variant mb-4">
            Prihláste sa a vopred uhraďte na účet.
          </p>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block mb-6">
            <p className="font-mono font-bold text-lg text-surface-bright">
              SK38 0200 0000 0027 8709 3958
            </p>
          </div>
          <p className="text-surface-variant text-sm mb-6">
            Poznámka: Teh SM S + Priezvisko
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary-fixed font-bold">
              vfit.petrzalka@gmail.com
            </a>
            <span className="text-surface-variant hidden md:inline">·</span>
            <a href="tel:+421903174885" className="text-primary-fixed font-bold">
              0903/174 885
            </a>
            <span className="text-surface-variant hidden md:inline">·</span>
            <p className="text-surface-variant text-sm">do 14 h.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
