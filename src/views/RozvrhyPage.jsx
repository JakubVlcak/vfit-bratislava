import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const KURZY_SPECIAL = [
  {
    badge: 'Kurz špeciál 1',
    title: 'BODY WORK — FORMUJ SVOJE TELO',
    subtitle: 'Kurz vhodný pre náročnejších',
    den: 'UTOROK',
    cas: 'od 19:00',
    termin: '24.3.26 — 26.5.26',
    description:
      'Lektorka je živé striebro. Akčná, veselá a empatická. Rýchlejším tempom sa zbavíte tukových vankúšikov a posilníte a spevníte všetky svalové partie tela. Lektorka používa aj moderné pomôcky — Bosu, Fit lopty, stepy, činky, elastické pásy, overbally a iné. Zabavíte sa a najmä kvalitne zacvičíte. Vhodné aj pre ženy po pôrode, pre mladšie ženy aj ženy v neskoršom veku.',
  },
  {
    badge: 'Kurz špeciál 2',
    title: 'FIT — Body Work — zdravie a kondícia',
    subtitle: 'Vhodné aj pre staršiu generáciu',
    den: 'ŠTVRTOK',
    cas: 'od 19:00',
    termin: '19.3.26 — 21.5.26',
    description:
      'Lektorka je živé striebro. Akčná, veselá a empatická, ale vie pracovať aj v miernejšom tempe, ale účinnom cvičení. Zameriavame sa na zlepšenie a udržanie pohybového aparátu s použitím rôzneho náčinia. Zoštíhlite si pás, odstránite celulitídu, odstránite bolesti chrbta, získate ladné pohyby a držanie tela.',
  },
]

const KURZY_ROZVRH = [
  { title: 'PILATES a ZDRAVÝ CHRBÁT', note: 'aj pre mužov', den: 'UTOROK', cas: '17:00', termin: '24.3.26 — 26.5.26' },
  { title: 'ZDRAVÝ CHRBÁT', note: '', den: 'PONDELOK', cas: '18:00', termin: '16.3.26 — 25.5.26' },
  { title: 'JOGA pre ZDRAVÝ CHRBÁT', note: 'aj pre mužov', den: 'ŠTVRTOK', cas: '18:00', termin: '19.3.26 — 21.5.26' },
  { title: 'SM SYSTÉM — mierne pokročilí', note: 'aj pre mužov', den: 'PONDELOK', cas: '19:00', termin: '16.3.26 — 25.5.26' },
  { title: 'SM SYSTÉM — mierne pokročilí', note: 'aj pre mužov', den: 'STREDA', cas: '19:00', termin: '18.3.26 — 20.5.26' },
  { title: 'SM SYSTÉM — mierne pokročilí', note: 'aj pre mužov', den: 'ŠTVRTOK', cas: '17:00', termin: '19.3.26 — 21.5.26' },
  { title: 'SM SYSTÉM — začiatočníci', note: 'aj pre mužov', den: 'ŠTVRTOK', cas: '16:00', termin: '19.3.26 — 21.5.26' },
  { title: 'PILATES pre MP aj pokročilých', note: '', den: 'STREDA', cas: '18:00', termin: '18.3.26 — 20.5.26' },
  { title: 'POWER JOGA', note: 'aj pre mužov', den: 'UTOROK', cas: '18:00', termin: '24.3.26 — 26.5.26' },
  { title: 'JOGA pre Zdravý chrbát', note: 'aj pre mužov', den: 'ŠTVRTOK', cas: '20:00', termin: '19.3.26 — 21.5.26' },
]

const SM_DETI_BENEFITS = [
  'základy správneho držania tela',
  'cvičenie na posilnenie chrbtových svalov',
  'prevencia bolesti chrbta',
  'podpora zdravého rastu a vývoja',
]

export default function RozvrhyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          calendar_month
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Rozvrhy
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Rozvrh cvičenia — rok 2026–2027
        </p>
      </section>

      {/* Motivácia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <h2 className="font-headline text-2xl font-bold mb-6">
            Milí naši klienti V-FITu — Nové kurzy od MARCA 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Neprestaňte sa hýbať, keď zostárnete. Zostárnete, keď sa prestanete hýbať.',
              'Keď nie je čas na cvičenie, máme čas na chorobu.',
              'Šport je základ zdravia a imunity ruku v ruke so zdravou stravou.',
              'Náš život je tak dlhý, ako budeme zdraví.',
              'Šport je prevenciou voči vážnym ochoreniam.',
            ].map((q) => (
              <div key={q} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">format_quote</span>
                <p className="text-on-surface-variant italic">{q}</p>
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant mt-8 leading-relaxed">
            Práve teraz je čas urobiť pre svoju postavu a zdravie niečo viac než len každodenný
            výstup na váhu. Potrebujete odbúrať tuky, spevniť telo a pritom cvičiť správne?
            Poďte sa prihlásiť do kurzov vo V-FIT Bratislava.
          </p>
        </div>
      </section>

      {/* Cenník */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Rozpis kurzov — dospelí</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <p className="text-4xl font-black text-primary-fixed">100 €</p>
              <p className="text-surface-variant text-sm mt-1">10 lekcií po 10 € / 50 min.</p>
            </div>
          </div>
          <div className="bg-surface-bright/10 rounded-xl p-6 max-w-lg mx-auto">
            <p className="text-surface-variant text-sm mb-2">
              <strong className="text-surface-bright">Zľava:</strong> Kto platí 2 kurzy má zľavu na každý kurz 5 €.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="bg-surface-bright/10 rounded-xl p-6">
              <span className="material-symbols-outlined text-primary-fixed text-2xl mb-2">card_giftcard</span>
              <p className="text-surface-variant text-sm">
                Každý člen, ktorý privedie nového člena, získa <strong className="text-surface-bright">10 € na ďalší kurz</strong>.
              </p>
            </div>
            <div className="bg-surface-bright/10 rounded-xl p-6">
              <span className="material-symbols-outlined text-primary-fixed text-2xl mb-2">confirmation_number</span>
              <p className="text-surface-variant text-sm">
                <strong className="text-surface-bright">2 vouchery</strong> na náhradku v prípade choroby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kurzy špeciál */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10">Kurzy špeciál</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {KURZY_SPECIAL.map((kurz) => (
            <div
              key={kurz.title}
              className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {kurz.badge}
              </span>
              <h3 className="font-headline text-xl font-bold mb-2">{kurz.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4">{kurz.subtitle}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
                  {kurz.den}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">schedule</span>
                  {kurz.cas}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">
                  {kurz.termin}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{kurz.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rozvrh kurzov */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10">Rozvrh kurzov</h2>
        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden">
          <div className="hidden md:grid grid-cols-4 bg-primary/5 px-6 py-4 font-bold text-sm">
            <span>Kurz</span>
            <span>Deň</span>
            <span>Čas</span>
            <span>Termín</span>
          </div>
          {KURZY_ROZVRH.map((kurz, i) => (
            <div
              key={`${kurz.title}-${kurz.den}`}
              className={`grid grid-cols-1 md:grid-cols-4 px-6 py-5 gap-2 md:gap-0 ${
                i % 2 === 0 ? '' : 'bg-primary/[0.02]'
              } border-t border-outline-variant/10`}
            >
              <div>
                <p className="font-bold text-sm">{kurz.title}</p>
                {kurz.note && (
                  <span className="text-xs text-on-surface-variant bg-primary/5 rounded-full px-2 py-0.5 inline-block mt-1">
                    {kurz.note}
                  </span>
                )}
              </div>
              <p className="text-on-surface-variant text-sm md:flex md:items-center">
                <span className="md:hidden font-bold mr-2">Deň:</span>{kurz.den}
              </p>
              <p className="text-on-surface-variant text-sm md:flex md:items-center">
                <span className="md:hidden font-bold mr-2">Čas:</span>{kurz.cas}
              </p>
              <p className="text-on-surface-variant text-sm md:flex md:items-center">
                <span className="md:hidden font-bold mr-2">Termín:</span>{kurz.termin}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SM Systém pre deti */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block py-1 px-4 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold tracking-widest uppercase">
              Novinka
            </span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4">
            SM SYSTÉM — pre DETI od 8 rokov
          </h2>
          <p className="text-on-surface-variant mb-4">
            Zlepšenie stavu tela a naučiť sa správne pohybovať. Nechcete ploché nohy, skoliózu, guľatý
            chrbát, bolesti chrbta, nesprávne držanie tela? Poďme spolu cvičiť.
          </p>
          <ul className="space-y-3 mb-8">
            {SM_DETI_BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">done</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="bg-surface-container rounded-xl p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Na cvičenie je potrebné si zakúpiť za 30 € aj lano navrhnuté špeciálne pre optimálne
              cvičenie SM systém, vyrábané podľa precíznych požiadaviek MUDr. Smíška z prvotriednych
              materiálov, alebo si prineste svoje. Z hygienických dôvodov lano nezapožičiavame.
            </p>
          </div>
          <p className="text-on-surface-variant text-sm mt-6">
            Ak máte o kurz záujem, napíšte e-mail na{' '}
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold">
              vfit.petrzalka@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Permanentky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">confirmation_number</span>
            Permanentky
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Vo V-FIT všetko prebieha formou kurzov. Ak je kurz otvorený, je možné chodiť aj na
            <strong> 5 vstupovú permanentku</strong> na kurzy v hodnote <strong>45 €</strong>.
            Alebo si doplatiť zostatok lekcií po <strong>8 €</strong>.
          </p>
        </div>
      </section>

      {/* Rehabilitačný program */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 border border-primary/10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Nové
          </span>
          <h2 className="font-headline text-2xl font-bold mb-4">
            Rehabilitačný program pre všetkých aj pre mužov
          </h2>
          <p className="text-on-surface-variant mb-2">Kurz individuálne.</p>
          <p className="text-3xl font-black text-primary">25 € <span className="text-base font-normal text-on-surface-variant">/ 50 min. lekcia</span></p>
          <p className="text-on-surface-variant text-sm mt-2">Termín dohodou.</p>
        </div>
      </section>

      {/* Hygiena */}
      <section className="py-8 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-xl p-6 border border-outline-variant/10 text-center">
          <span className="material-symbols-outlined text-tertiary text-2xl mb-2 block">cleaning_services</span>
          <p className="text-on-surface-variant text-sm">
            V platnosti zostáva zvýšená dezinfekcia dotykových plôch, kľúčiek, pomôcok, podložiek a strojov.
            Prekrytie horných dýchacích ciest nie je povinné pri cvičení.
          </p>
        </div>
      </section>

      {/* Prihlášky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-6">Prihlášky</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary-fixed font-bold">
              vfit.petrzalka@gmail.com
            </a>
            <span className="text-surface-variant hidden md:inline">·</span>
            <p className="text-surface-variant">
              telefonicky do 14 h. alebo SMS —{' '}
              <a href="tel:+421903174885" className="text-primary-fixed font-bold">0903/174 885</a>
            </p>
          </div>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block mb-8">
            <p className="text-surface-variant text-sm mb-1">Úhrady vopred na účet:</p>
            <p className="font-mono font-bold text-lg text-surface-bright">
              SK38 0200 0000 0027 8709 3958
            </p>
            <p className="text-surface-variant text-sm mt-2">do poznámky: priezvisko + kurz</p>
          </div>
          <div className="border-t border-surface-variant/20 pt-8 max-w-lg mx-auto">
            <p className="text-surface-variant text-sm mb-2">
              Tešíme sa na všetkých aj nových klientov. Kolektív V-FIT Bratislava
            </p>
            <p className="text-surface-variant text-sm">
              Za kolektív V-FIT — <strong className="text-surface-bright">Helena Petrášová</strong>,
              trénerka, lektorka, masérka, pedikérka
            </p>
            <p className="text-surface-variant text-sm mt-1">
              <a href="tel:+421903174885" className="text-primary-fixed">0903/174 885</a> do 14 h.
              {' · '}www.v-fit.sk
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
