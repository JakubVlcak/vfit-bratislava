import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SM_TERMINY_POKROCILI = [
  { den: 'PONDELOK', cas: '19:00', datum: '16.3.26 — 25.5.26' },
  { den: 'STREDA', cas: '19:00', datum: '18.3.26 — 20.5.26' },
  { den: 'ŠTVRTOK', cas: '17:00', datum: '19.3.26 — 21.5.26' },
]

const FAQ = [
  {
    q: 'Akú najčastejšiu chybu robia klienti počas cvičenia SM Systému?',
    a: 'Hlavný problém je koncentrácia — schopnosť sústrediť sa. Pri SM Systéme je dôležitý presný pohyb a precvičenie určitej partie svalov — efektivita je priamo úmerná koncentrácii. Snažím sa klientov učiť spoznávať ľudské telo z pohľadu princípov fungovania svalov.',
  },
  {
    q: 'Čo klienti najviac podcenia počas cvičenia SM Systému?',
    a: 'Klienti by radi, aby bol problém odstránený behom jedného týždňa. Ale vznik problému sa vyvíjal cez rôzne okolnosti mesiace i roky; odstránenie tiež bude chvíľku trvať. Napríklad liečba hernie disku trvá 6 mesiacov, avšak cvičenie je potrebné praktizovať až 2 roky aby sa problém nevrátil. Bolesti pominú, no bez kompletnej regenerácie to nejde — je to beh na dlhšiu trať.',
  },
  {
    q: 'Aký je význam cvičebných pomôcok SM Systému, sú potrebné alebo to ide aj bez nich?',
    a: 'Laná sú nevyhnutné — bez nich to nejde. Balančná podložka je voliteľná. Moja osobná skúsenosť, ako dlhoročnej trénerky je, keď klienti cvičia bez nej a doma sa ju pokúsia nahradiť niečím podobným — to je zlé. Po určitom čase ale zistia, že niektoré cviky vyžadujú špeciálnu podložku. Potom si vezmú podložku a okamžite cítia úplne inú kvalitu prevedenia cvikov; hlavne počas cvičení na kolenách a jednej nohe.',
  },
]

const LANO_INFO = [
  'vysoká prieťažnosť (4x)',
  'špeciálne konštruované pútka pre upevnenie na ruku a nohu',
  '4 možnosti voľby sily:',
]

const LANO_SILY = [
  { farba: 'čierne', sila: '1 kp', popis: 'predĺženie' },
  { farba: 'zelené', sila: '2 kp', popis: 'predĺženie' },
  { farba: '—', sila: '3,5 kp', popis: 'bez predĺženia' },
  { farba: 'obe laná spolu', sila: '7 kp', popis: '' },
]

export default function SmSystemPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          exercise
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          SM SYSTÉM
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Jednoduché kondičné i rehabilitačné cvičenie pre každého — aj pre mužov
        </p>
      </section>

      {/* Úvod */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <h2 className="font-headline text-3xl font-bold mb-6">O SM Systéme</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Kurz má veľmi výhodnú cenu len 100 € za 10 lekcií. Lekcia má 50 min.
            Kvalita a profesionalita lektorky Heleny z V-FIT.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Na cvičenie je potrebné si zakúpiť za 30 € aj lano navrhnuté špeciálne pre optimálne cvičenie
            SM systém, vyrábané podľa precíznych požiadaviek MUDr. Smíška z prvotriednych materiálov,
            alebo si prineste svoje, ak ste si už niekde obstarali. Z hygienických dôvodov lano nezapožičiavame.
            Elastické lano patrí k nevyhnutným pomôckam pre cvičenie SM Systém a cvičenie ním je pohodlné
            a zároveň vysoko účinné. S lanom cvičíte aj doma a na kurz je potrebné si ho nosiť.
            Je možno si zakúpiť aj profi podložku za 30 €.
          </p>
          <div className="bg-surface-container rounded-xl p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              V prípade SM systému, ak je kurz rozbehnutý, je potrebné si uhradiť individuálnu lekciu,
              aby lektor Vás doučil cviky, ktoré klienti už vedia. Následne si doplatíte ostatok lekcií
              po 10 € a nastúpite do kurzu. Individuálna lekcia: 40 min — 21 €, 50 min — 25 €.
            </p>
          </div>
        </div>
      </section>

      {/* Pre koho */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold mb-6">Pre koho je SM Systém?</h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Máte sedavé zamestnanie, zlé držanie tela, bolí vás v oblasti krížov, máte iné bolesti?
            Trpíte skoliózou chrbtice, ochoreniami pohybového aparátu? Hrozí Vám operácia chrbtice?
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            SM systém (Stabilizácia a Mobilizácia chrbtice) je jednou z najúčinnejších metód ako
            predísť či sa zbaviť bolestí chrbta.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Jedná sa o liečebné cvičenie so špeciálnym lanom na odstránenie bolesti chrbta a regeneráciu chrbtice.
            Máte bolesti chrbta, bolestivé ramená, lakte, kolena, členky, bedrové kĺby, bolesť v krčnej chrbtici,
            skoliózu, guľatý chrbát, diastázu, oslabené brušné svaly, vysunutie platničky, ploché nohy, haluxy, ste po úraze?
          </p>
          <p className="text-primary font-bold text-lg">
            Cvičenie odstráni bolesti hlavy a regeneruje chrbticu. Potom tento kurz je určený pre Vás.
          </p>
        </div>
      </section>

      {/* Motivácia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 text-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
            medication
          </span>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto italic">
            Než zoberiete tabletky proti bolesti, radšej si poďte zacvičiť pod vedením kvalifikovanej
            lektorky, absolventky školy SM systému MUDr. Smíška. <strong>Cvičte namiesto liekov.</strong>
          </p>
        </div>
      </section>

      {/* Termíny */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10">Termíny kurzov</h2>

        {/* Začiatočníci */}
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 mb-6">
          <h3 className="font-headline text-xl font-bold mb-2">SM Systém pre ZAČIATOČNÍKOV</h3>
          <span className="inline-block text-sm text-on-surface-variant bg-primary/5 rounded-full px-3 py-1 mb-6">
            aj pre mužov
          </span>
          <div className="bg-primary/5 rounded-xl p-6 mb-4">
            <p className="text-3xl font-black text-primary mb-1">100 €</p>
            <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
              ŠTVRTOK
            </span>
            <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-primary text-base">schedule</span>
              od 16:00
            </span>
            <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">
              19.3.26 — 21.5.26
            </span>
          </div>
        </div>

        {/* Pokročilí */}
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
          <h3 className="font-headline text-xl font-bold mb-2">SM Systém pre MIERNE POKROČILÝCH a POKROČILÝCH</h3>
          <span className="inline-block text-sm text-on-surface-variant bg-primary/5 rounded-full px-3 py-1 mb-6">
            aj pre mužov
          </span>
          <div className="bg-primary/5 rounded-xl p-6 mb-6">
            <p className="text-3xl font-black text-primary mb-1">100 €</p>
            <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
          </div>
          <div className="space-y-3">
            {SM_TERMINY_POKROCILI.map((t) => (
              <div key={`${t.den}-${t.cas}`} className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
                  {t.den}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary text-base">schedule</span>
                  {t.cas}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-4 py-2 text-sm text-on-surface-variant">
                  {t.datum}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pomôcky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
          <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">inventory_2</span>
            Pomôcky a lano
          </h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Elastické lano (originálne) na SM systém si môžete u nás zakúpiť súčasne s kurzom (30 €),
            alebo si prineste svoje. Skutočnou pomocou pre chrbticu je len pravidelné cvičenie s lanom.
            Nestačí cvičiť len raz týždenne na kurze SM systém, ale cvičiť doma aspoň 10 — 15 minút
            denne základných 12 cvikov. Vhodné je zakúpiť si aj špeciálnu štvorcovú profi podložku (30 €)
            od Dr. Smíška, ktorá sa kľačaním nedeformuje. Pre stabilitu pri cvičení niektorých cvikov
            je možno si zakúpiť aj 2 špeciálne palice za 10 €.
          </p>
          <p className="text-on-surface-variant text-sm font-bold mb-4">
            Všetko potrebné si u nás môžete zakúpiť súčasne s kurzom.
          </p>
        </div>
      </section>

      {/* Lano - POZOR */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">warning</span>
            <h3 className="font-headline text-2xl font-bold">POZOR — Originálne lano</h3>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Elastické lano na SM Systém je špeciálne dimenzované pre optimálne cvičenie SM Systému.
            Ide o originál, ktorý vyvinul MUDr. Richard Smíšek, autor SM Systému, preto dávajte pozor
            na lacné kópie, ktoré nespĺňajú technické parametre. Lano 6 mm je špeciálne vyrobené
            pre zakázku MUDr. Smíška a má špeciálne vlastnosti:
          </p>
          <ul className="space-y-2 mb-6">
            {LANO_INFO.map((item) => (
              <li key={item} className="flex items-start gap-3 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">done</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {LANO_SILY.map((l) => (
              <div key={l.sila} className="bg-surface-container rounded-xl p-4 text-center">
                <p className="text-2xl font-black text-primary">{l.sila}</p>
                <p className="text-on-surface-variant text-xs mt-1">{l.farba}</p>
                {l.popis && <p className="text-on-surface-variant text-xs">{l.popis}</p>}
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant text-sm italic">
            MUDr. Smíšek varuje pred používaním napodobenín, ktoré svojimi chybnými vlastnosťami
            môžu viesť k preťaženiu a bolestiam.
          </p>
        </div>
      </section>

      {/* Podmienky otvorenia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h3 className="font-headline text-2xl font-bold mb-6">Podmienky otvorenia kurzu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center">
            <p className="text-sm text-on-surface-variant mb-2">min. 4 osoby</p>
            <p className="text-3xl font-black text-primary">100 €</p>
            <p className="text-on-surface-variant text-xs mt-1">za celý kurz / osoba</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center">
            <p className="text-sm text-on-surface-variant mb-2">individuálne 2 osoby</p>
            <p className="text-3xl font-black text-primary">36 €</p>
            <p className="text-on-surface-variant text-xs mt-1">za lekciu (360 € celý kurz pre oboch)</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center">
            <p className="text-sm text-on-surface-variant mb-2">individuálne 1 osoba</p>
            <p className="text-3xl font-black text-primary">25 €</p>
            <p className="text-on-surface-variant text-xs mt-1">za lekciu / 50 min. (21 € za 40 min.)</p>
          </div>
        </div>
      </section>

      {/* SM Systém deti */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <span className="inline-block py-1 px-4 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold tracking-widest uppercase mb-6">
            Novinka
          </span>
          <h2 className="font-headline text-3xl font-bold mb-6">SM SYSTÉM — pre DETI od 8 rokov</h2>
          <p className="text-on-surface-variant mb-4">
            Zlepšenie stavu tela a naučiť sa správne pohybovať.
            Nechcete ploché nohy, skoliózu, guľatý chrbát, bolesti chrbta, nesprávne držanie tela? Poďme spolu cvičiť!
          </p>
          <ul className="space-y-3 mb-6">
            {['základy správneho držania tela', 'cvičenie na posilnenie chrbtových svalov', 'prevencia bolesti chrbta', 'podpora zdravého rastu a vývoja'].map((item) => (
              <li key={item} className="flex items-start gap-3 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">done</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-on-surface-variant text-sm">
            Ak máte záujem o kurz, píšte na{' '}
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold">vfit.petrzalka@gmail.com</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10">Často kladené otázky</h2>
        <div className="space-y-6">
          {FAQ.map((item) => (
            <div key={item.q} className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <h3 className="font-bold text-lg mb-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">help</span>
                {item.q}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prihlášky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-4">Prijímame prihlášky</h2>
          <p className="text-surface-variant mb-6">Jedna cvičebná hodina trvá 50 min.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <p className="text-surface-variant">
              tel. na recepciu (16-21 h.):{' '}
              <a href="tel:+421243426357" className="text-primary-fixed font-bold">+421 2 4342 6357</a>
            </p>
            <span className="text-surface-variant hidden md:inline">·</span>
            <p className="text-surface-variant">
              mobil:{' '}
              <a href="tel:+421903174885" className="text-primary-fixed font-bold">+421 903 17 48 85</a>
            </p>
          </div>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block">
            <p className="text-surface-variant text-sm mb-1">Úhrada kurzovného na účet:</p>
            <p className="font-mono font-bold text-lg text-surface-bright">SK38 0200 0000 0027 8709 3958</p>
            <p className="text-surface-variant text-sm mt-2">VS — termín kurzu, poznámka — typ kurzu a meno a priezvisko</p>
            <p className="text-surface-variant text-sm mt-1">info: 0903/174 885 — 10:00 — 14:00 h. alebo SMS</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
