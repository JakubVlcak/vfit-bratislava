import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AkciePage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-primary text-on-primary text-xs font-bold tracking-widest uppercase mb-6">
            Cenové akcie &amp; novinky
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tighter mb-6">
            Akcie vo <span className="text-primary italic">V-FIT</span>
          </h1>
          <p className="text-xl text-on-surface-variant/70 font-medium max-w-2xl">
            Cvičte v našich zdravotných kurzoch namiesto liekov. Choďte k nám do
            V-FIT cvičiť a ušetríte za lekára.
          </p>
        </section>

        {/* Rehabilitačný program */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-on-background rounded-lg p-10 relative overflow-hidden">
            <div className="bloom-effect -right-20 -bottom-20 opacity-20" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider mb-4">
                Rehabilitačný program
              </span>
              <h2 className="font-headline text-3xl font-extrabold text-surface-bright tracking-tight mb-4">
                Pre všetkých aj pre mužov
              </h2>
              <p className="text-surface-variant mb-2">
                <strong className="text-surface-bright">Individuálne.</strong>{' '}
                Cena 25 € za 50 min. lekciu. Termín dohodou.
              </p>
              <p className="text-surface-variant mb-6">
                Máte problém ako kašeľ a ťažkosti s dýchaním, bolesť v
                končatinách, pocit únavy a slabosti, po rehabilitácii máte stále
                problémy?
              </p>
              <p className="text-surface-variant mb-6">
                Kombinácie rôznych cvičení — Joga, Pilates, SM systém,
                rehabilitačné cvičenia. Používame aj pomôcky — válec, ježky,
                penové loptičky, balančné plošiny, elastický pás a iné.
              </p>
              <div className="p-4 rounded-lg bg-surface/10 text-sm text-surface-variant">
                <span className="material-symbols-outlined text-base align-middle mr-2 text-primary-fixed">
                  self_improvement
                </span>
                <strong>Dôležité je aj správne dýchanie.</strong> Dýchaním
                okysličujeme telo a mozog lepšie pracuje, svaly sú pružnejšie.
                Niektoré svaly potrebujú pre svoju činnosť nádych, niektoré
                výdych. Nijaké ale nie sú „bez dychu".
              </div>
            </div>
          </div>
        </section>

        {/* SM Systém */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="relative bg-tertiary-container/10 border border-tertiary/20 rounded-lg p-10 overflow-hidden">
            <div className="bloom-effect -right-20 -top-20 opacity-10" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold uppercase tracking-wider mb-4">
                Stála novinka
              </span>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
                SM Systém pre všetkých
              </h2>
              <p className="text-on-surface-variant font-medium mb-6 max-w-3xl">
                Jednoduché kondičné i rehabilitačné cvičenie pre každého.
                Jedná sa o liečebné cvičenie so špeciálnym lanom.
              </p>
              <p className="text-on-surface-variant mb-6 max-w-3xl">
                Máte bolestivé ramená, lakte, kolená, členky, bedrové kĺby,
                skoliózu, guľatý chrbát, diastázu, oslabené brušné svaly, výrez
                platničky, ploché nohy, haluxy, ste po úraze?
              </p>
              <p className="text-on-surface-variant mb-6 max-w-3xl">
                Liečebná telesná výchova výrazne prispieva k zlepšeniu fyzickej
                sily, zlepšuje držanie tela a odstráni bolesti chrbta. Tento
                kurz je práve pre vás. Vhodné aj pre tehotné, ale len osobitne v
                kurze SM systém pre tehotné.
              </p>
            </div>
          </div>
        </section>

        {/* Rehabilitačné cvičenia + Cenník */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8">
            Rehabilitačné cvičenia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface-container-high rounded-lg p-8 text-center">
              <p className="text-sm text-on-surface-variant font-medium mb-2">
                40 minút
              </p>
              <p className="font-headline text-4xl font-extrabold text-primary">
                16 €
              </p>
            </div>
            <div className="bg-surface-container-high rounded-lg p-8 text-center">
              <p className="text-sm text-on-surface-variant font-medium mb-2">
                50 minút
              </p>
              <p className="font-headline text-4xl font-extrabold text-primary">
                20 €
              </p>
            </div>
          </div>
          <div className="p-5 rounded-lg bg-primary-container/10 border border-primary/10">
            <span className="material-symbols-outlined text-primary text-2xl align-middle mr-2">
              lightbulb
            </span>
            <strong>Novinka:</strong> Stačí zavolať a povedať váš zdravotný
            problém. Nájdeme riešenie.
          </div>
        </section>

        {/* Masáže & Wellness */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-surface-container-low rounded-lg p-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
              spa
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
              Masáže, rehabilitácie, individuálne tréningy
            </h2>
            <p className="text-on-surface-variant mb-4">
              V priestoroch V-FIT v <strong>PIATOK od 16 do 21 h.</strong>, ale
              aj v týždni podľa dohody na objednávku.
            </p>
            <p className="text-on-surface-variant mb-4">
              Aj iné druhy masáží podľa vášho výberu. Nájdete ceny aj druhy v
              kolonke Masáže a Wellness a Pedikúra a Manikúra.
            </p>
          </div>
        </section>

        {/* Permanentka */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-on-background rounded-lg p-10 relative overflow-hidden text-center">
            <div className="bloom-effect -left-20 -top-20 opacity-20" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider mb-4">
                Akcia
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-surface-bright tracking-tight mb-4">
                Permanentka LEN 19,99 €
              </h2>
              <p className="text-surface-variant mb-2">na bežný mesiac</p>
              <p className="text-surface-variant max-w-xl mx-auto mb-6">
                Vstup do posilňovne každý deň. Cez víkend si doma odpočiňte
                alebo choďte na prechádzku. Donúťte svoje telo chodiť pravidelne
                do fitness a pravidelne ho posilňovať alebo popracovať na
                zdravotnom probléme.
              </p>
            </div>
          </div>
        </section>

        {/* Helena */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Cvičenia sa uskutočnia pod vedením{' '}
              <strong className="text-on-surface">Heleny Petrášovej</strong>,
              ktorá je terapeut metódy SM systém, absolventka Školy SM systému
              MUDr. Smíška, lektor Pilates Medical, lektor Školy chrbta, lektor
              Gravid jogy a Pilates pre tehotné, fitness tréner a masér.
              Všetko robí pre vaše zdravie.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-on-surface font-medium text-left mb-8">
              Zdravie je len vo vašich rukách, tak poďme cvičiť.
            </blockquote>
            <p className="text-on-surface-variant font-medium">
              Za kolektív V-FIT Bratislava
              <br />
              Petrášová Helena — 0903/174885 do 14 h.
            </p>
          </div>
        </section>

        {/* Prihlášky */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-10 text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-2">
              Prihlášky
            </h2>
            <p className="text-on-surface-variant mb-6">
              Príďte do V-FIT — športovo-relaxačného centra, Gercenova 8/F, BA
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
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
                0903/174 885
                <span className="text-on-surface-variant/50 text-sm font-normal">
                  (do 14 h. alebo SMS)
                </span>
              </a>
            </div>
            <a
              href="https://www.v-fit.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              www.v-fit.sk
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
