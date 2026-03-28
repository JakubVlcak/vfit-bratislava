import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ADULT_COURSES = [
  {
    highlight: true,
    badge: 'ŠPECIÁL 1',
    name: 'BODY WORK - FORMUJ SVOJE TELO',
    subtitle: 'Kurz vhodný pre náročnejších.',
    day: 'UTOROK',
    time: 'od 19 h',
    dates: '24.3.26 – 26.5.26',
    description:
      'Lektorka je živé striebro. Akčná, veselá a empatická. Rýchlejším tempom sa zbavíte tukových vankúšikov a posilníte a spevníte všetky svalové partie tela. Používa moderné pomôcky — Bosu, Fit lopty, stepy, činky, elastické pásy, overbally a iné. Vhodné aj pre ženy po pôrode. Pre mladšie ženy aj pre ženy v neskoršom veku.',
  },
  {
    highlight: true,
    badge: 'ŠPECIÁL 2',
    name: 'FIT - Body work — zdravie a kondícia',
    subtitle: 'Vhodné aj pre staršiu generáciu na posilnenie tela.',
    day: 'ŠTVRTOK',
    time: 'od 19 h',
    dates: '19.3.26 – 21.5.26',
    description:
      'Zameriavame sa na zlepšenie a udržanie pohybového aparátu s použitím rôzneho náčinia — ľahké činky, válce, Bosu, Fit lopty, tyče, overbally a elastické pásy. Zoštíhlite si pás, odstránite celulitídu, odstránite bolesti chrbta, získate ladné pohyby a držanie tela.',
  },
  { name: 'PILATES a ZDRAVÝ CHRBÁT', forMen: true, day: 'UTOROK', time: 'o 17 h', dates: '24.3.26 – 26.5.26' },
  { name: 'ZDRAVÝ CHRBÁT', day: 'PONDELOK', time: 'o 18 h', dates: '16.3.26 – 25.5.26' },
  { name: 'JOGA pre ZDRAVÝ CHRBÁT', forMen: true, day: 'ŠTVRTOK', time: 'o 18 h', dates: '19.3.26 – 21.5.26' },
  {
    name: 'SM SYSTÉM — mierne pokročilí',
    forMen: true,
    sessions: [
      { day: 'PONDELOK', time: 'o 19 h', dates: '16.3.26 – 25.5.26' },
      { day: 'STREDA', time: 'o 19 h', dates: '18.3.26 – 20.5.26' },
      { day: 'ŠTVRTOK', time: 'o 17 h', dates: '19.3.26 – 21.5.26' },
    ],
  },
  {
    name: 'SM SYSTÉM — ZAČIATOČNÍCI',
    forMen: true,
    day: 'ŠTVRTOK',
    time: 'o 16 h',
    dates: '19.3.26 – 21.5.26',
    note: 'Na cvičenie je potrebné si zakúpiť za 30 € lano navrhnuté špeciálne pre SM systém. Z hygienických dôvodov lano nezapožičiavame.',
  },
  { name: 'PILATES pre MP aj pokročilých', day: 'STREDA', time: 'o 18 h', dates: '18.3.26 – 20.5.26' },
  { name: 'POWER JOGA', forMen: true, day: 'UTOROK', time: 'o 18 h', dates: '24.3.26 – 26.5.26' },
  { name: 'JOGA pre Zdravý chrbát', forMen: true, day: 'ŠTVRTOK', time: 'o 20 h', dates: '19.3.26 – 21.5.26' },
]

const STALE_KURZY = [
  'SM systém pre všetkých',
  'Progresívny Pilates',
  'Power joga',
  'Joga pre všetkých',
  'Body work — formuj svoje telo',
  'Zdravý chrbát',
  'FIT BW'
]

const NOVE_KURZY = [
  'FIT lopty + Zdravý chrbát',
  'Škola chrbta',
  'Joga ako prevencia',
  'Fyzio-Pilates',
  'Fyzio-Joga',
]

const INDIVIDUALNE_KURZY = [
  'SM systém pre tehotné',
  'Zdravé regeneračné cvičenie',
  'Rehabilitačno-relaxačné cvičenie pre zdravé telo a myseľ s loptičkami',
  'Kruhový tréning',
]

const POMUCKY = [
  'Pilates kruh',
  'Pilates meč',
  'Originál Pilates pásy',
  'Posilňovacie gumičky',
  'Expandery',
  'Elastické pásy — dynabandy',
  'Balančné loptičky — overbally',
  'Veľké lopty — fit bally',
  'BOSU',
  'FLEXI BAR',
  'PUMPING BAR',
  'Jednoručné činky',
  'Odpružené stepy',
  'PILATES VÁLCE',
  'Rôzne loptičky, ježci a iné',
]

const DETSKE_FITNESS = [
  '2 rotopedy',
  'Bežiaci pás',
  'Lyžiarsky trenažér',
  'Trampolína',
  'Hojdačka a šmykľavka',
  'Detské stoličky, stolík',
  'Pastelky, omaľovánky, papier',
  'Veľa hračiek a hier',
]

function CourseCard({ course }) {
  const hl = course.highlight
  return (
    <div className={`rounded-lg p-8 ${hl ? 'bg-on-background text-surface-bright' : 'bg-surface-container-low'}`}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {course.badge && (
          <span className="inline-block py-1 px-3 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider">
            {course.badge}
          </span>
        )}
        {course.forMen && (
          <span className="inline-block py-1 px-3 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold">
            aj pre mužov
          </span>
        )}
      </div>
      <h3 className={`font-headline text-2xl font-bold mb-2 ${hl ? 'text-surface-bright' : 'text-on-background'}`}>
        {course.name}
      </h3>
      {course.subtitle && (
        <p className={`text-sm mb-4 ${hl ? 'text-surface-variant' : 'text-on-surface-variant'}`}>{course.subtitle}</p>
      )}
      {course.sessions ? (
        <div className="space-y-2 mb-4">
          {course.sessions.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={`material-symbols-outlined text-base ${hl ? 'text-primary-fixed' : 'text-primary'}`}>calendar_today</span>
              <span className="font-bold">{s.day}</span>
              <span className={hl ? 'text-surface-variant' : 'text-on-surface-variant'}>{s.time}</span>
              <span className={`text-sm ${hl ? 'text-surface-variant/60' : 'text-on-surface-variant/60'}`}>{s.dates}</span>
            </div>
          ))}
        </div>
      ) : course.day && (
        <div className="flex items-center gap-3 mb-4">
          <span className={`material-symbols-outlined text-base ${hl ? 'text-primary-fixed' : 'text-primary'}`}>calendar_today</span>
          <span className="font-bold">{course.day}</span>
          <span className={hl ? 'text-surface-variant' : 'text-on-surface-variant'}>{course.time}</span>
          <span className={`text-sm ${hl ? 'text-surface-variant/60' : 'text-on-surface-variant/60'}`}>{course.dates}</span>
        </div>
      )}
      {course.description && (
        <p className={`text-sm leading-relaxed ${hl ? 'text-surface-variant' : 'text-on-surface-variant'}`}>{course.description}</p>
      )}
      {course.note && (
        <div className={`mt-4 p-4 rounded-lg text-sm ${hl ? 'bg-surface/10' : 'bg-primary/5'}`}>
          <span className="material-symbols-outlined text-base align-middle mr-2 text-primary">info</span>
          {course.note}
        </div>
      )}
    </div>
  )
}

export default function AerobicCentrumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold tracking-widest uppercase mb-6">
            Nové kurzy od marca 2026
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tighter mb-6">
            AEROBIC <span className="text-primary italic">centrum</span>
          </h1>
          <p className="text-xl text-on-surface-variant/70 font-medium leading-relaxed max-w-3xl mb-8">
            Milí naši klienti V-FITu — neprestaňte sa hýbať, keď zostárnete.
            Zostárnete, keď sa prestanete hýbať. Aeróbne cvičenia prebiehajú v 2 zrkadlových sálach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-primary/5 border border-primary/10">
              <h3 className="font-headline font-bold text-lg mb-2">Pre ženy</h3>
              <p className="text-on-surface-variant text-sm">
                Chcete schudnúť, spevniť telo, nabrať kondíciu alebo len tak relaxovať?
              </p>
            </div>
            <div className="p-6 rounded-lg bg-tertiary/5 border border-tertiary/10">
              <h3 className="font-headline font-bold text-lg mb-2">Pre deti</h3>
              <p className="text-on-surface-variant text-sm">
                Máte doma dieťa s vlohami na gymnastiku, tanec či aerobic? Máme pre vás riešenie.
              </p>
            </div>
          </div>
          <Link
            to="/aerobic/informacie"
            className="inline-flex items-center gap-2 mt-8 signature-gradient text-on-primary px-8 py-4 rounded-full font-bold hover:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined">info</span>
            Informácie o cvičeniach
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </section>

        {/* Ponuka */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <p className="text-on-surface-variant font-medium max-w-3xl mb-8">
            Ponúkame cvičenie pre všetky vekové kategórie — pre začiatočníkov, stredne pokročilých a pokročilých, pre tehotné, pre ženy po pôrode, pre mamičky s deťmi a pre deti a mládež.
          </p>
          <div className="bg-surface-container-high rounded-lg p-10">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-6">
              Rozpis kurzov — Dospelí
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Cena kurzu</p>
                  <p className="text-on-surface-variant">10 lekcií po 10 €, <strong>spolu 100 €</strong>, dĺžka 50 min.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">local_offer</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Zľava</p>
                  <p className="text-on-surface-variant">Kto platí 2 kurzy má zľavu <strong>5 €</strong> na každý kurz.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">card_giftcard</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Bonus</p>
                  <p className="text-on-surface-variant">Privediete nového člena = <strong>10 € zľava</strong> + 2 vouchery na náhradku.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course List */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ADULT_COURSES.map((course) => (
              <CourseCard key={course.name} course={course} />
            ))}
          </div>
        </section>

        {/* Kids SM System */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="relative bg-tertiary-container/10 border border-tertiary/20 rounded-lg p-10 overflow-hidden">
            <div className="bloom-effect -right-20 -top-20 opacity-10" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold uppercase tracking-wider mb-4">
                Novinka
              </span>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
                SM SYSTÉM — pre DETI od 8 rokov
              </h2>
              <p className="text-on-surface-variant font-medium mb-6 max-w-2xl">
                Zlepšenie stavu tela a naučiť sa správne pohybovať. Nechcete ploché nohy, skoliózu, guľatý chrbát, bolesti chrbta, nesprávne držanie tela?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {['Základy správneho držania tela', 'Cvičenie na posilnenie chrbtových svalov', 'Prevencia bolesti chrbta', 'Podpora zdravého rastu a vývoja'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-bold text-on-surface-variant">
                Ak máte záujem, napíšte na{' '}
                <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary hover:underline">vfit.petrzalka@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Detské fitness */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-on-background rounded-lg p-10 relative overflow-hidden">
            <div className="bloom-effect -left-20 -top-20 opacity-20" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider mb-4">
                Super novinka
              </span>
              <h2 className="font-headline text-3xl font-extrabold text-surface-bright tracking-tight mb-2">
                Detský kútik — FITNESS pre DETI
              </h2>
              <p className="text-surface-variant mb-2">
                Bežiaci pás, bicykel, stepper, trampolína pre deti do 8 rokov.
              </p>
              <p className="text-primary-fixed font-headline text-2xl font-extrabold mb-6">
                Vstup LEN 1 € na hodinu
              </p>
              <p className="text-surface-variant mb-6 max-w-2xl">
                Zriadili sme pre vás detské fitness, aby ste sa vy aj váš malý čertík „zabavili" v rovnakom čase súčasne s fitcentrom pre dospelých.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DETSKE_FITNESS.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-base">check</span>
                    <span className="text-sm text-surface-variant">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sály */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8">
            Naše sály
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aerobicová sála */}
            <div className="bg-surface-container-low rounded-lg p-8">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4 block">AEROBIC</span>
              <h3 className="font-headline text-xl font-bold mb-4">Aerobicová sála</h3>
              <p className="text-xs text-on-surface-variant/60 uppercase tracking-wider font-bold mb-2">Odpružená podlaha</p>
              <p className="text-sm text-on-surface-variant mb-4">
                Cvičenia pre mládež a dospelých: Cross Fit, Kruhový tréning.
              </p>
              <p className="text-xs text-on-surface-variant/60 uppercase tracking-wider font-bold mb-2">Nové kurzy</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {NOVE_KURZY.map((k) => (
                  <span key={k} className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-bold">{k}</span>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant/60 uppercase tracking-wider font-bold mb-2">Stále kurzy</p>
              <div className="flex flex-wrap gap-2">
                {STALE_KURZY.map((k) => (
                  <span key={k} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">{k}</span>
                ))}
              </div>
            </div>

            {/* Viacúčelová telocvičňa */}
            <div className="bg-surface-container-low rounded-lg p-8">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">sports_gymnastics</span>
              <h3 className="font-headline text-xl font-bold mb-4">Viacúčelová telocvičňa</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                Cvičenie pre deti a mládež — štúdio aerobiku, tanca a gymnastiky.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  'GYMNASTIKA (deti od 4 r.)',
                  'ŠPORTÍK — pohybová príprava (deti 3–5 r.)',
                  'SM Systém na chrbát, ploché nohy a skoliózu (deti od 5 r.)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant/60 uppercase tracking-wider font-bold mb-2">Pripravujeme</p>
              <div className="flex flex-wrap gap-2">
                {['Joga pre deti', 'Zdravé nožky', 'Zdravý chrbát', 'Pilates pre deti'].map((k) => (
                  <span key={k} className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-bold">{k}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-primary-container/10 border border-primary/10 text-sm">
            <span className="material-symbols-outlined text-primary text-base align-middle mr-2">info</span>
            Do aeróbnej a viacúčelovej sály vstupujete len v <strong>čistej</strong> obuvi, v ktorej budete cvičiť.
          </div>
        </section>

        {/* Individuálne kurzy */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-6">
            Individuálne kurzy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INDIVIDUALNE_KURZY.map((k) => (
              <div key={k} className="flex items-center gap-3 p-5 bg-surface-container-high rounded-lg">
                <span className="material-symbols-outlined text-primary">person</span>
                <span className="font-bold">{k}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pomôcky */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-6">
            Aké pomôcky používame?
          </h2>
          <p className="text-on-surface-variant mb-6">Cvičíme s najmodernejšími cvičebnými pomôckami:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {POMUCKY.map((p) => (
              <div key={p} className="flex items-center gap-2 p-3 bg-surface-container-low rounded-lg">
                <span className="material-symbols-outlined text-primary text-base">check</span>
                <span className="text-sm">{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Kurzy info + permanentka */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-surface-container-low rounded-lg p-10">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
              Kurzy — informácie
            </h2>
            <p className="text-on-surface-variant mb-4">
              Vo V-FIT všetko prebieha formou kurzov. Cvičenia sa uskutočňujú pod vedením{' '}
              <strong className="text-on-surface">Heleny Petrášovej</strong> — terapeut metódy SM systém, absolventka Školy SM systému MUDr. Smíška, lektor Pilates Medical, lektor Školy chrbta, lektor Gravid jogy a Pilates pre tehotné, fitness tréner a masér.
            </p>
            <p className="text-on-surface-variant mb-4">
              Ak je kurz otvorený, je možné chodiť aj na <strong>5 vstupovú permanentku</strong> na kurzy v hodnote 45 €, alebo si dokúpiť zostatok lekcií po 8 €.
            </p>
            <p className="text-on-surface-variant mb-4">
              Jedna cvičebná hodina trvá 50 min. Neváhajte so zaplatením kurzu — zaplatením je istota miesta v kurze.
            </p>
            <div className="p-4 rounded-lg bg-primary/5 text-sm">
              <span className="material-symbols-outlined text-primary text-base align-middle mr-2">info</span>
              <strong>Novinka:</strong> Teraz je možné urobiť si náhradku v kurze SM systém pre začiatočníkov. Je potrebné si priniesť cvičebné lano (z hygienických dôvodov sa nezapožičiava).
            </div>
          </div>
        </section>

        {/* Prihlášky */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-10 text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
              Prihlášky a úhrady
            </h2>
            <p className="text-on-surface-variant mb-6 max-w-2xl mx-auto">
              Prijímame prihlášky. Úhrady vopred na účet, do poznámky typ kurzu, meno a priezvisko.
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
                <span className="text-on-surface-variant/50 text-sm font-normal">(do 14 h. alebo SMS)</span>
              </a>
            </div>
            <div className="inline-flex items-center gap-3 bg-surface-container-lowest px-6 py-3 rounded-lg text-sm">
              <span className="material-symbols-outlined text-primary">account_balance</span>
              <span className="font-mono font-bold">SK38 0200 0000 0027 8709 3958</span>
            </div>
          </div>
        </section>

        {/* Hygiene + Closing */}
        <section className="max-w-7xl mx-auto px-8 mb-10">
          <div className="flex items-start gap-4 p-5 rounded-lg bg-primary-container/10 border border-primary/10 mb-8">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0">health_and_safety</span>
            <p className="text-sm text-on-surface-variant font-medium">
              V platnosti zostáva zvýšená dezinfekcia dotykových plôch, kľúčiek, pomôcok, podložiek a strojov. Prekrytie horných dýchacích ciest nie je povinné pri cvičení.
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-headline font-bold text-on-background mb-2">
              Tešíme sa na všetkých aj nových klientov.
            </p>
            <p className="text-on-surface-variant font-medium">
              Kolektív V-FIT Bratislava — Petrášová Helena, 0903/174885 do 14 h.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
