import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const KURZY_SCHEDULE = [
  {
    title: 'BODY WORK — FORMUJ SVOJE TELO',
    badge: 'KURZ ŠPECIÁL 1',
    den: 'UTOROK',
    cas: 'od 19:00',
    datum: '24.3.26 — 26.5.26',
    popis:
      'Kurz vhodný pre náročnejších. Lektorka je živé striebro — akčná, veselá a empatická. Rýchlejším tempom sa zbavíte tukových vankúšikov a posilníte a spevníte všetky svalové partie tela. Lektorka používa aj moderné pomôcky — Bosu, Fit lopty, stepy, činky, elastické pásy, overbally a iné. Zabavíte sa a najmä kvalitne zacvičíte.',
    vhodne:
      'Vhodné aj pre ženy po pôrode, mladšie ženy, ktoré si potrebujú vyladiť svoju postavu, ale aj pre ženy v neskoršom veku, ktoré nemajú závažné zdravotné problémy.',
  },
  {
    title: 'FIT — Body work — zdravie a kondícia',
    badge: 'KURZ ŠPECIÁL 2',
    den: 'ŠTVRTOK',
    cas: 'od 19:00',
    datum: '19.3.26 — 21.5.26',
    popis:
      'Lektorka je živé striebro — akčná, veselá a empatická, ale vie pracovať aj v miernejšom tempe, ale účinnom cvičení. Zameriavame sa na zlepšenie a udržanie pohybového aparátu s použitím rôzneho náčinia — ľahké činky, válce, Bosu, Fit lopty, tyče, overbally a elastické pásy.',
    vhodne:
      'Vhodné aj pre staršiu generáciu na posilnenie tela. Zoštíhlite si pás, odstránite celulitídu, odstránite bolesti chrbta, získate ladné pohyby a držanie tela. Naučíte sa, ako používať ľudské telo, aby bolo ZDRAVÉ, ŠTÍHLE a NEBOLELO.',
  },
]

const KURZY_REGULAR = [
  { title: 'PILATES a ZDRAVÝ CHRBÁT', subtitle: 'aj pre mužov', den: 'UTOROK', cas: '17:00', datum: '24.3.26 — 26.5.26' },
  { title: 'ZDRAVÝ CHRBÁT', subtitle: '', den: 'PONDELOK', cas: '18:00', datum: '16.3.26 — 25.5.26' },
  { title: 'JOGA pre ZDRAVÝ CHRBÁT', subtitle: 'aj pre mužov', den: 'ŠTVRTOK', cas: '18:00', datum: '19.3.26 — 21.5.26' },
  { title: 'SM SYSTÉM — mierne pokročilí', subtitle: 'aj pre mužov', den: 'PONDELOK', cas: '19:00', datum: '16.3.26 — 25.5.26' },
  { title: 'SM SYSTÉM — mierne pokročilí', subtitle: 'aj pre mužov', den: 'STREDA', cas: '19:00', datum: '18.3.26 — 20.5.26' },
  { title: 'SM SYSTÉM — mierne pokročilí', subtitle: 'aj pre mužov', den: 'ŠTVRTOK', cas: '17:00', datum: '19.3.26 — 21.5.26' },
  { title: 'SM SYSTÉM — začiatočníci', subtitle: 'aj pre mužov', den: 'ŠTVRTOK', cas: '16:00', datum: '19.3.26 — 21.5.26' },
  { title: 'PILATES pre MP aj pokročilých', subtitle: '', den: 'STREDA', cas: '18:00', datum: '18.3.26 — 20.5.26' },
  { title: 'POWER JOGA', subtitle: 'aj pre mužov', den: 'UTOROK', cas: '18:00', datum: '24.3.26 — 26.5.26' },
  { title: 'JOGA pre Zdravý chrbát', subtitle: 'aj pre mužov', den: 'ŠTVRTOK', cas: '20:00', datum: '19.3.26 — 21.5.26' },
]

export default function KurzyMarcaPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          event
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Kurzy od marca 2026
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Milí naši klienti V-FITu — nové kurzy od marca 2026
        </p>
      </section>

      {/* Motivácia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Neprestaňte sa hýbať, keď zostárnete. Zostárnete, keď sa prestanete hýbať.',
              'Keď nie je čas na cvičenie, máme čas na chorobu.',
              'Šport je základ zdravia a imunity ruku v ruke so zdravou stravou.',
              'Náš život je tak dlhý, ako budeme zdraví.',
              'Šport je prevenciou voči vážnym ochoreniam.',
              'Cvičenie znižuje riziko pred akýmkoľvek chronickým ochorením.',
            ].map((quote) => (
              <div key={quote} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-1">format_quote</span>
                <p className="text-on-surface-variant italic">{quote}</p>
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant text-lg mt-10 text-center max-w-3xl mx-auto">
            Práve teraz je čas urobiť pre svoju postavu a zdravie niečo viac než len každodenný výstup
            na váhu. Potrebujete odbúrať tuky, spevniť telo a pritom cvičiť správne tak, aby vás nebolel
            chrbát alebo iné časti tela?
          </p>
          <p className="text-primary font-bold text-lg mt-4 text-center">
            Poďte sa prihlásiť do kurzov vo V-FIT Bratislava.
          </p>
        </div>
      </section>

      {/* Rozpis info */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-6">Rozpis kurzov — dospelí</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center">
            <p className="text-3xl font-black text-primary">10</p>
            <p className="text-on-surface-variant text-sm">lekcií v kurze</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center">
            <p className="text-3xl font-black text-primary">10 €</p>
            <p className="text-on-surface-variant text-sm">za lekciu</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center">
            <p className="text-3xl font-black text-primary">100 €</p>
            <p className="text-on-surface-variant text-sm">celý kurz / 50 min.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-primary/5 rounded-xl p-6 flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0">savings</span>
            <p className="text-on-surface-variant text-sm">
              Kto platí <strong>2 kurzy</strong> má zľavu na každý kurz <strong>5 €</strong>.
            </p>
          </div>
          <div className="bg-primary/5 rounded-xl p-6 flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0">person_add</span>
            <p className="text-on-surface-variant text-sm">
              Každý člen, ktorý privedie nového člena, získa <strong>10 € na ďalší kurz</strong>.
            </p>
          </div>
          <div className="bg-primary/5 rounded-xl p-6 flex items-start gap-4 md:col-span-2">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0">confirmation_number</span>
            <p className="text-on-surface-variant text-sm">
              <strong>2 vouchery</strong> na náhradku v prípade choroby.
            </p>
          </div>
        </div>
      </section>

      {/* Špeciálne kurzy */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10">Špeciálne kurzy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {KURZY_SCHEDULE.map((kurz) => (
            <div
              key={kurz.title}
              className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {kurz.badge}
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">{kurz.title}</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
                  {kurz.den}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">schedule</span>
                  {kurz.cas}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">date_range</span>
                  {kurz.datum}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{kurz.popis}</p>
              <p className="text-on-surface-variant/80 text-sm leading-relaxed border-l-2 border-primary/30 pl-4">
                {kurz.vhodne}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pravidelné kurzy */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10">Pravidelné kurzy</h2>
        <div className="space-y-3">
          {KURZY_REGULAR.map((kurz, i) => (
            <div
              key={`${kurz.title}-${kurz.den}-${i}`}
              className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="font-bold text-lg">{kurz.title}</h3>
                {kurz.subtitle && (
                  <p className="text-on-surface-variant text-sm">{kurz.subtitle}</p>
                )}
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
                  {kurz.den}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">schedule</span>
                  {kurz.cas}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">
                  {kurz.datum}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SM Systém začiatočníci info */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary">inventory_2</span>
            SM SYSTÉM — info pre začiatočníkov
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            Na cvičenie je potrebné si zakúpiť za 30 € aj lano navrhnuté špeciálne pre optimálne cvičenie
            SM systém, vyrábané podľa precíznych požiadaviek MUDr. Smíška z prvotriednych materiálov,
            alebo si prineste svoje, ak ste si už niekde obstarali. Z hygienických dôvodov lano
            nezapožičiavame. Elastické lano patrí k nevyhnutným pomôckam pre cvičenie SM Systém
            a cvičenie ním je pohodlné a zároveň vysoko účinné. S lanom cvičíte aj doma a na kurz
            je potrebné si ho nosiť.
          </p>
        </div>
      </section>

      {/* SM Systém deti */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            Novinka
          </span>
          <h2 className="font-headline text-3xl font-bold mb-6">
            SM SYSTÉM — pre DETI od 8 rokov
          </h2>
          <p className="text-on-surface-variant mb-6">
            Zlepšenie stavu tela a naučiť sa správne pohybovať.
            Nechcete ploché nohy, skoliózu, guľatý chrbát, bolesti chrbta, nesprávne držanie tela?
          </p>
          <p className="text-primary font-bold mb-6">Poďme spolu cvičiť!</p>
          <ul className="space-y-3 mb-8">
            {[
              'základy správneho držania tela',
              'cvičenie na posilnenie chrbtových svalov',
              'prevencia bolesti chrbta',
              'podpora zdravého rastu a vývoja',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">done</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-on-surface-variant text-sm">
            Ak máte o kurz záujem, napíšte e-mail na{' '}
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold">
              vfit.petrzalka@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Prihlášky a Helena */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">school</span>
            CVIČÍME — cvičte v našich zdravotných kurzoch namiesto liekov
          </h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Kurzy sa uskutočnia pod vedením Heleny Petrášovej, ktorá je terapeut metódy SM systém,
            absolventka Školy SM systému MUDr. Smíška, lektor Pilates Medical, lektor Školy chrbta,
            lektor Gravid jogy a Pilates pre tehotné, fitness tréner a masér. Všetko robí pre Vaše zdravie.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Pozývame do V-FIT — športovo-relaxačného centra na zdravé cvičenie.
            Máme pre Vás pripravené nové kurzy.
          </p>
        </div>
      </section>

      {/* Prihlášky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-6">Prihlášky a úhrada</h2>
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
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block mb-6">
            <p className="text-surface-variant text-sm mb-1">Úhrady vopred na účet:</p>
            <p className="font-mono font-bold text-lg text-surface-bright">
              SK38 0200 0000 0027 8709 3958
            </p>
            <p className="text-surface-variant text-sm mt-2">Do poznámky: priezvisko + kurz</p>
          </div>
          <p className="text-surface-variant text-sm max-w-xl mx-auto">
            V platnosti zostáva zvýšená dezinfekcia dotykových plôch, kľúčiek, pomôcok, podložiek
            a strojov. Prekrytie horných dýchacích ciest nie je povinné pri cvičení.
          </p>
          <p className="text-primary-fixed font-bold text-lg mt-8">
            Tešíme sa na všetkých aj nových klientov.
          </p>
          <p className="text-surface-variant mt-2">Kolektív V-FIT Bratislava</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
