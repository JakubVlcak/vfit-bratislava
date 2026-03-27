import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PERMANENTKY = [
  { name: '5 vstupov', price: '17,50 €', note: null },
  { name: '10 vstupov', price: '35 €', note: '+ 1 vstup zdarma' },
  {
    name: 'Bežný mesiac',
    price: '19,99 €',
    note: 'Viazaná na konkrétny mesiac (napr. február, marec)',
  },
  {
    name: 'Mesačná',
    price: '36 €',
    note: 'Neviazaná — termín od ... do ... na permanentke',
  },
]

const KARDIO_VYBAVENIE = [
  '2 ergonometre — stacionárne bicykle s meračmi pulzu',
  'Spiningový bicykel',
  'Eliptický trenažér',
  'Masážny pás',
  'Bežiaci pás',
  'Veslársky trenažér (v posilňovni)',
]

const POSILNOVNA_VYBAVENIE = [
  'Fitness žinenky na rozcvičenie',
  'Fit ball na strečing',
  '2 posilňovacie stanice s lavičkou na tlaky',
  'Multifunkčný posilňovací stroj „Multi-gym"',
  'Univerzálne posilňovacie lavice',
  'Špeciálna strečingová lavica',
  'Medic chrbtový',
  'Činky, ketbely, tyče, kotúče',
  'Pyteľ na posilňovanie',
]

export default function FitnessCentrumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">
            Fitness centrum
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tighter mb-6">
            FITNESS <span className="text-primary italic">centrum</span>
          </h1>
          <p className="text-xl text-on-surface-variant/70 font-medium max-w-2xl mb-8">
            Milí naši klienti V-FITu — naším cieľom je vytvorenie pekne
            vyformovanej postavy, zlepšenie zdravotného stavu a zdravý životný
            štýl.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Cvičenie znižuje riziko pred akýmkoľvek chronickým ochorením.',
              'Znižuje riziko mŕtvice alebo infarktu. Znižuje zápaly v tele.',
              'Šport je základ zdravia a imunity ruku v ruke so zdravou stravou.',
            ].map((quote) => (
              <div
                key={quote}
                className="p-5 rounded-lg bg-primary/5 border border-primary/10"
              >
                <span className="material-symbols-outlined text-primary text-xl mb-2 block">
                  format_quote
                </span>
                <p className="text-sm font-medium text-on-surface-variant italic">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Novinka - Cenník */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-on-background rounded-lg p-10 relative overflow-hidden">
            <div className="bloom-effect -right-20 -bottom-20 opacity-20" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider mb-4">
                Novinka
              </span>
              <h2 className="font-headline text-3xl font-extrabold text-surface-bright tracking-tight mb-2">
                Cvičte LEN za 3,50 € za vstup
              </h2>
              <p className="text-surface-variant mb-6">
                V rámci permanentky. Individuálne vstupy nie sú. Ak si chcete
                raz vyskúšať, uhradíte na náš účet 4,50 €. Potom už kupujete
                príslušnú permanentku podľa vášho výberu.
              </p>
              <p className="text-surface-variant text-sm">
                <strong className="text-surface-bright">Platba:</strong> LEN
                vopred na účet.
              </p>
            </div>
          </div>
        </section>

        {/* Permanentky */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8">
            Permanentky
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERMANENTKY.map((p) => (
              <div
                key={p.name}
                className="bg-surface-container-high rounded-lg p-8 text-center flex flex-col"
              >
                <p className="text-sm text-on-surface-variant font-medium mb-3">
                  {p.name}
                </p>
                <p className="font-headline text-4xl font-extrabold text-primary mb-3">
                  {p.price}
                </p>
                {p.note && (
                  <p className="text-xs text-on-surface-variant/60 mt-auto">
                    {p.note}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-lg bg-surface-container-low">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl shrink-0">
                account_balance
              </span>
              <div>
                <p className="text-sm font-bold mb-1">Úhrady na účet</p>
                <p className="font-mono text-sm text-on-surface-variant">
                  SK38 0200 0000 0027 8709 3958
                </p>
                <p className="text-xs text-on-surface-variant/60 mt-1">
                  Do poznámky: priezvisko + výber permanentky
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant mt-4">
            Permanentka bude pripravená na vaše meno na recepcii V-FIT.
          </p>
        </section>

        {/* Vstup info */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-primary-container/10 border border-primary/10 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl shrink-0">
                schedule
              </span>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Vstup do posilňovne — každý deň
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Ak máte záujem prísť o 16 h. v týždni alebo o 20 h., je
                  potrebné napísať doobeda SMS alebo zavolať, lebo nie vždy tam
                  sme. Keď dáte vopred vedieť, prídeme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pre koho */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="max-w-3xl">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8">
              Fitness pre každého
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                Už nie je zriedkavosť stretnúť ženy pri posilňovacích strojoch
                alebo vidieť ich, ako posilňujú sedacie svalstvo pomocou veľkej
                činky. Viac žien nad 35 rokov vidí šancu na zlepšení svojej
                postavy práve v cvičení so záťažou.
              </p>
              <p>
                Pokiaľ si žena myslí, že vek nad 40 rokov už nie je vhodný na
                začatie so silovým tréningom, veľmi sa mýli. Posilňovacie
                cvičenia sa dajú vykonávať v každom veku a jediným faktorom,
                ktorý zabraňuje silovému tréningu, je choroba alebo zranenie.
              </p>
              <p>
                Je len treba zvoliť správne tréningové metódy a nič neprehnať —
                takáto forma cvičenia je priam ideálna pre všetky vekové
                kategórie, seniorov nevynímajúc.
              </p>
            </div>
          </div>
        </section>

        {/* Čo so sebou */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8">
            Čo si priniesť
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low rounded-lg p-8">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                checkroom
              </span>
              <h3 className="font-headline text-lg font-bold mb-2">Oblečenie</h3>
              <p className="text-sm text-on-surface-variant">
                Tričko a legíny alebo tepláky. Dôležitý je odev, čo saje pot.
              </p>
            </div>
            <div className="bg-surface-container-low rounded-lg p-8">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                do_not_step
              </span>
              <h3 className="font-headline text-lg font-bold mb-2">
                Čistá obuv
              </h3>
              <p className="text-sm text-on-surface-variant">
                Do fitneska vstupujete len v čistej obuvi, v ktorej budete
                cvičiť.
              </p>
            </div>
            <div className="bg-surface-container-low rounded-lg p-8">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                dry_cleaning
              </span>
              <h3 className="font-headline text-lg font-bold mb-2">Uterák</h3>
              <p className="text-sm text-on-surface-variant">
                Musíte si ho dávať pod seba. Zapožičanie na recepcii za 1 €.
              </p>
            </div>
          </div>
        </section>

        {/* Inštruktori */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-surface-container-low rounded-lg p-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
              fitness_center
            </span>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
              Osobní inštruktori
            </h2>
            <p className="text-on-surface-variant mb-4 max-w-3xl">
              Môžete cvičiť individuálne alebo pod vedením osobných inštruktorov
              s predpísaným vzdelaním. Naši fitness inštruktori sú vyškolení a
              schopní vám zostaviť tréningový plán alebo predviesť jednotlivé
              stroje a náradie.
            </p>
            <p className="text-on-surface-variant max-w-3xl">
              Inštruktor vám ukáže, ako sa na čom cvičí, aké svalové partie sa
              posilňujú. Ak máte záujem upraviť si niektoré svalové partie
              alebo schudnúť, poradí vám vhodné cviky, počet opakovaní a
              rozvrhnutie celého vášho cvičenia. Poradí a doporučí vám
              doplnkovú výživu a pitný režim.
            </p>
          </div>
        </section>

        {/* Tréningový postup */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="p-5 rounded-lg bg-tertiary/5 border border-tertiary/10">
            <span className="material-symbols-outlined text-tertiary text-2xl align-middle mr-2">
              tips_and_updates
            </span>
            <strong>Tréningový postup:</strong>{' '}
            <span className="text-on-surface-variant">
              Krátka rozcvička → strečing → vlastné cvičenie → krátky strečing
              na záver. Začať môžete napr. bicyklovaním na stacionárnom bicykli.
            </span>
          </div>
        </section>

        {/* Vybavenie */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8">
            Vybavenie
          </h2>
          <p className="text-on-surface-variant mb-8">
            Posilňovňa je v zrkadlovej sále, kardio-zóna je v miestnosti bez
            zrkadiel. Miestnosti sú vybavené klimatizáciou. Vybavené výrobkami
            nemeckej firmy značky Kettler a DAFE.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">
                  monitor_heart
                </span>
                Kardio zóna
              </h3>
              <div className="space-y-3">
                {KARDIO_VYBAVENIE.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      check
                    </span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  fitness_center
                </span>
                Posilňovňa
              </h3>
              <div className="space-y-3">
                {POSILNOVNA_VYBAVENIE.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      check
                    </span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hygiene */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="flex items-start gap-4 p-5 rounded-lg bg-primary-container/10 border border-primary/10">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0">
              health_and_safety
            </span>
            <p className="text-sm text-on-surface-variant font-medium">
              V platnosti zostáva zvýšená dezinfekcia dotykových plôch, kľúčiek,
              pomôcok, podložiek a strojov. Prekrytie horných dýchacích ciest
              nie je povinné pri cvičení.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="bg-on-background rounded-lg p-10 text-center relative overflow-hidden">
            <div className="bloom-effect -left-20 -top-20 opacity-20" />
            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-surface-bright tracking-tight mb-4">
                Neváhaj!
              </h2>
              <p className="text-surface-variant mb-6">
                Kolektív V-FIT Bratislava
              </p>
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
                  className="inline-flex items-center gap-2 bg-surface/20 text-surface-bright px-8 py-4 rounded-full font-bold hover:bg-surface/30 transition-colors"
                >
                  <span className="material-symbols-outlined">call</span>
                  0903/174 885
                  <span className="text-surface-variant text-sm font-normal">
                    (do 14 h. alebo SMS)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
