import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const COURSES_ADULTS = [
  {
    title: 'LADY BODY BUILDING',
    description:
      'Posilňovacie cvičenie zamerané na formovanie postavy s využitím posilňovacích pomôcok (aerobicových činiek, fit lopt, overballov, dynabandov, expanderov, tyčí a gumičiek). Vhodné pre všetky váhové aj vekové kategórie. Hodinu možno odporučiť i začiatočníkom, ktorí môžu posilňovať i bez posilňovacích pomôcok.',
    icon: 'fitness_center',
  },
  {
    title: 'KRUHOVÝ TRÉNING pre ŽENY',
    badge: 'SUPER NOVINKA!',
    description:
      'Rýchly a nekompromisní odbúravač tuku. Princíp kruhového tréningu spočíva v cvičení viacerých cvikov s nízkymi váhami v neprerušovanom slede za sebou. Používajú sa rôzne pomôcky ako sú činky, overbally, expandery, či flexibary, pričom sa vykonáva vždy jedna séria na určitú svalovú paritu. V jednom cykle sa precvičí komplexne celé telo. Hodina je určená všetkým ženám bez rozdielu veku, či váhy. Je určena aj pre začiatočníčky aj pokročilé cvičenky.',
    icon: 'loop',
  },
  {
    title: 'SM SYSTÉM pre všetkých',
    badge: 'NOVINKA 2015',
    description:
      'Jednoduché kondičné i rehabilitačné cvičenie pre každého. Jedná sa o liečebné cvičenie so špeciálnym lanom. Lano si môžete u nás zakúpiť súčasne s kurzou, alebo si prineste svoje ak ste si už niekde obstarali, alebo si môžete prenajať za 1 euro za lekciu.',
    details:
      'Máte bolesti chrbta, bolestivé ramená, lakte, kolena, členky, bedrové kĺby, skoliózu, guľatý chrbát, bolesti krčnej chrbtice, diastázu, oslabené brušné svaly, výrez platničky, ploché nohy, haluxy, ste po úraze? Cvičenie odstraňuje bolesti hlavy a regeneruje chrbticu. Vhodné aj pre tehotné, ale len osobitne v kurze SM systém pre tehotné.',
    icon: 'exercise',
  },
  {
    title: 'CROSSFIT pre všetkých',
    badge: 'SUPER NOVINKA!',
    description:
      'CrossFit nie je jednostranne zameraný fitness program, ale snaží sa rovnomerne rozvíjať všetkých 10 čiastkových schopností: odolnosť srdcovo-cievneho a dýchacieho systému, vytrvalosť, silu, kĺbovú pohyblivosť, výbušnosť, rýchlosť, koordináciu, rovnováhu a presnosť.',
    icon: 'sports_martial_arts',
  },
]

const COURSES_KURZY = [
  {
    title: 'TVARUJME TELO do ŠTÍHLEJ LÍNIE',
    type: 'kurz',
    description:
      'Teraz je čas urobiť pre svoju postavu niečo viac než len každodenný výstup na váhu. Potrebujete odbúrať tuky, spevniť telo a pritom cvičiť správne? Ploché bruško, pevný zadoček, tvarované stehná + odbúranie tuku a posilnenie svalstva. Pre všetkých, ktorí majú chuť sa odreagovať a po pritom si tvarovať postavu snov. Špecialne cvičenie práve pre vás. Poradenstvo aj v oblasti výživy a pitného režimu.',
    icon: 'woman',
  },
  {
    title: 'JOGA a PILATES',
    description:
      'Jogalates je nová metodika, ktorá v sebe prepojuje niektoré prvky Pilates a Jogy. U toho cvičenia sa vaše telo sa preťahuje aj v tých miestach, o ktorých ste dlhé roky nevedeli, že je na tele máte, potrebné svaly sa dostanú do zdravého napätia a hlava sa "vyčistí". Niektoré cviky vychádzajú z pilatesovej zostavy a ďalší sú bližšie jogovým ásanám. V Jogalates sa prepojí celé tela do jedného harmonicky fungujúceho celku. Cvičí sa v ľahu na podložke, aj v kľaku, v sede, ale i v stoji.',
    icon: 'self_improvement',
  },
  {
    title: 'POWER JOGA',
    description:
      'Cieľom pravidelného cvičenia Power jogy je harmónia tela, psychiky a mysli. Power joga uvoľní, posilní a zaťaží súmerne svaly celého tela. Odstráni sa dysbalancia (nerovnováha svalov), ktorou v súčasnej dobe trpí väčšina populácie. Zlepšuje flexibilitu, silu, zachováva prirodzenú hybnosť kĺbov, vyrovnáva skoliotické držanie tela, zlepšuje hybnosť a pružnosť chrbtice. Power joga je aj veľmi vhodná na chudnutie.',
    icon: 'self_improvement',
  },
  {
    title: 'PILATES pre ZDRAVIE a POHODU',
    description:
      'Metoda Pilates určená pre tých, ktorí chcú ostať zdraví a myslia na svoje zdravie. Pomôcky: fit ball, overball, činky, palice, Pilates kruh, Pilates uterák, overbal, BOSU.',
    icon: 'sports_gymnastics',
  },
  {
    title: 'BRUŠNÉ TANCE',
    description:
      'Orientálny tanec za sprievodu bohatej hudby z Orientu je jedinečným nástrojom pre formovanie ženského tela a je ideálnou pohybovou aktivitou pre všetky ženy, ktorá nie je obmedzená vekom, postavou ani kondíciou. Brušný tanec pôsobí ako relaxácia psychicky aj fyzicky.',
    icon: 'music_note',
  },
  {
    title: 'ZUMBA',
    description:
      'Zmes dynamickej latinsko americkej hudby a exotických aeróbnych cvičebných prvkov sa vám zapáči. Zumba je určena pre všetky ženy. Pri Zumbe je najdôležitejší pohyb a radosť z neho. Vydáte veľa kalórií, spalíte tuky a posilníte svaly. Zumba vám zlepší náladu.',
    icon: 'nightlife',
  },
  {
    title: 'ZDRAVÝ CHRBÁT',
    description:
      'Cvičenie na odstránenie bolestí chrbta a prevencia. Bolesti chrbta, nesprávne postavenie chrbtice a chcete pre seba niečo urobiť?',
    icon: 'healing',
  },
  {
    title: 'SEBEOBRANA',
    description:
      'Radi by ste naučili, ako prežiť potenciálne nebezpečné situácie v meste ale aj v prírode? Kurz má cieľ pripraviť vás na riziká každodenného života. Teória aj prax. Vy si všetko aj vyskúšate. Na vlastnej koži, pod dohľadom akreditovaného inštruktora.',
    subtitle: 'určené pre všetkých',
    icon: 'sports_martial_arts',
  },
  {
    title: 'SENIOR JOGA',
    badge: 'NOVINKA',
    description:
      'Nebude vás viac bolieť chrbát a vaše svalstvo sa spevní a vy sa môžete bezbolestne usmievať a tešiť sa z každého dňa. Nemusíte viac premýšlať ak ráno vstávať, aby to čo najmenej bolelo.',
    icon: 'elderly',
  },
  {
    title: 'REGENERAČNÉ CVIČENIA',
    subtitle: 'pre všetkých aj pre mužov',
    description:
      'Liečebná telesná výchova výrazne prispieva k zlepšeniu fyzickej sily, zlepšuje držanie tela a odstráni bolesti chrbta, kĺbov. Máte bolestivé ramená, lakte, kolena, členky, bedrové kĺby, alebo ste po úraze? Tak tento kurz je práve pre Vás. Pomôcky: Pilates valec, Fit lopta, overbal, Flexi bar, BOSU.',
    icon: 'physical_therapy',
  },
]

const PREGNANCY_BENEFITS = [
  'pomáha proti ranným nevoľnostiam',
  'zlepšuje trávenie a metabolizmus',
  'vyrovnáva krvný tlak',
  'znižuje, odstraňuje bolesti chrbta, najmä v oblasti krížov',
  'zlepšuje sa celková adaptabilita — udržiava hormóny v rovnováhe',
  'posilňuje činnosť jednotlivých orgánov',
  'pôsobí preventívne proti kŕčovým žilám',
  'pomáha proti zápche a tiež preventívne proti hemoroidom',
  'posilňuje svaly panvového dna',
  'naučí vás efektívne dýchať',
]

const MORE_COURSES = [
  {
    title: 'TAE-BO',
    description:
      'Najväčší hit aerobnej hodiny spojenej s bojovým umením. Zameraný na tréning svalových skupín v oblasti stehien, lýtok, sedacieho a chrbtového svalstva spájaním techniky úderov a kopov. Rytmickým pohybom napomáha k ich zoštíhleniu a prerysovaniu. Tae-bo môže cvičiť každý.',
    icon: 'sports_kabaddi',
  },
  {
    title: 'TVARUJME ŽENSKÉ PARTIE',
    subtitle: 'bruško, zadoček a stehná',
    description:
      'Cvičenie zamerané na posilňovanie brucha, sedacieho svalstva a svalstva stehien. Využite možnosť precvičenia, zníženia tukovej vrstvy a spevnenia "najproblémovejších" partií Vášho tela. Každá z nás má problém s plochým bruškom, zmenšením zadočka, spevnením stehien a odbúraním celulitídy.',
    icon: 'woman',
  },
  {
    title: 'BOSU',
    subtitle: 'Vhodné pre všetky úrovne',
    description:
      'BOSU má svoj pôvod v rehabilitácii a predstavuje balančnú pomôcku. Vďaka jednoduchosti pomôcky si každý užívateľ určuje vlastnú úroveň obtiažnosti. Pri cvičení dochádza k posilneniu a tvarovaniu vášho tela. Pri cvičebných hodinách s BOSU zlepšujete fyzickú kondíciu, precvičujete súčasne celý rad svalových skupín, najmä svaly podieľajúce sa na udržovaní vzpriameného postavenia trupu.',
    icon: 'sports_gymnastics',
  },
  {
    title: 'FAT BURNER',
    description:
      'Dynamické a intenzívne cvičenie zamerané na odbúranie tuku, posilnenie srdcovo-cievneho systému a posilnenie svalstva. V tejto hodine sa využíva choreografia v kombinácii s posilňovacím cvičením zameraným na problémové partie. Hodina je ideálna pre tých, ktorí chcú schudnúť a vyformovať si postavu.',
    icon: 'local_fire_department',
  },
  {
    title: 'DANCE BODY WORK',
    description:
      'Pokiaľ máte radi tanečnú formu a nebojíte sa odviazať, potom je to hodina priamo pre vás. Uvoľnite telo a myseľ a zabávajte sa a pritom spaľujte tuky, tvarujte postavu a odstraňujte pracovný stres a zhon.',
    icon: 'music_note',
  },
  {
    title: 'INTERVAL BODY WORK',
    description:
      'Nová forma BODY WORK. Odporúčame ju všetkým, ktorý majú záujem o posilňovanie a spevňovanie jednotlivých svalových skupín. Zároveň vám ponúkame v pravidelných intervaloch zaradenie fázy s vyšším aerobným zaťažením. Pravidelne sa využívajú stepy, BOSU ako základné náradie. Nie je vhodné pre začiatočníkov.',
    icon: 'timer',
  },
  {
    title: 'STEP AEROBIK',
    description:
      'Lekcia spojujúca kondiční tréning s využitím stepov. Obľúbená forma aerobiku je špecifická vystupovaním na odpružený step, preto sa jedná o cvičenie šetrné k nášmu kĺbovému a väzivovému aparátu. Hodina zaručuje intenzívny aerobný tréning redukujúci tuky. Hodina je vhodná aj pre začiatočníkov.',
    icon: 'stairs',
  },
  {
    title: 'FIT LOPTY',
    description:
      'Špeciálne cvičenie s využitím veľkých a malých lôpt. Zlepšuje rovnováhu, držanie tela a odstraňuje bolesti chrbta. Pri cvičení je využívaná aj technika Pilates + zdravý chrbát. Vhodné pre všetky váhové aj vekové kategórie, najmä pre ľudí s nadváhou, so sedavým zamestnaním, problémami s chrbticou a kĺbov.',
    icon: 'sports_tennis',
  },
  {
    title: 'SALSA',
    description:
      'Salsa je jednoducho úžasná. Predstavuje neutíchajúci príliv čistej energie, andrenalínu, vzrušenia a pozitívnych emócií. Ponúkame ju vo forme kurzu pre ženy.',
    icon: 'nightlife',
  },
  {
    title: 'PORT DE BRAS',
    description:
      'Ideálny spôsob ako sa dostať do formy a zároveň zrelaxovať. Spojenie klasického a moderného tanca s naťahovacími cvičeniami si získal milovníčky po celom svete a pomaly sa udomácňuje.',
    icon: 'sports_gymnastics',
  },
]

function CourseCard({ course }) {
  return (
    <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col gap-4 border border-outline-variant/10 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="material-symbols-outlined text-primary text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {course.icon}
          </span>
          <div>
            <h3 className="font-headline text-lg font-bold">{course.title}</h3>
            {course.subtitle && (
              <p className="text-sm text-on-surface-variant">{course.subtitle}</p>
            )}
          </div>
        </div>
        {course.badge && (
          <span className="shrink-0 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
            {course.badge}
          </span>
        )}
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        {course.description}
      </p>
      {course.details && (
        <p className="text-on-surface-variant/80 text-sm leading-relaxed border-l-2 border-primary/30 pl-4">
          {course.details}
        </p>
      )}
    </div>
  )
}

export default function InformacieOCviceniachPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          info
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Informácie o cvičeniach
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Na jednotlivé vstupy vo V-FIT — športovo-relaxačnom centre, o.z.
        </p>
      </section>

      {/* Dospelí - hlavné cvičenia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="material-symbols-outlined text-primary text-4xl">group</span>
          <h2 className="font-headline text-3xl font-bold">DOSPELÍ</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSES_ADULTS.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </section>

      {/* Kurzy */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="material-symbols-outlined text-tertiary text-4xl">school</span>
          <h2 className="font-headline text-3xl font-bold">KURZY vo V-FIT</h2>
        </div>
        <p className="text-on-surface-variant mb-10 max-w-3xl">
          V-FIT — športovo-relaxačné centrum, o.z.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES_KURZY.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </section>

      {/* Kurz pre tehotné */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="material-symbols-outlined text-tertiary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              pregnant_woman
            </span>
            <h2 className="font-headline text-3xl font-bold">Kurz pre TEHOTNÉ</h2>
          </div>
          <p className="text-on-surface-variant mb-6 max-w-3xl">
            Vhodné pre všetky trimestre. Nezáleží na to, či ste začiatočník vo cvičení, ale ste pred tým cvičila.
            Uvedomte si, že pohyb v tehotenstvu je veľmi dôležitý aj pre vaše dieťatko.
            Cvičenie je prispôsobené budúcim mamičkám.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Prečo cvičiť počas tehotenstva?
              </h3>
              <ul className="space-y-3">
                {PREGNANCY_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">
                      done
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container rounded-2xl p-8">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-tertiary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  child_care
                </span>
                Účinky na bábätko
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Cvičenie v tehotenstve má vplyv na dieťa ako v brušku, tak i po narodení.
                Dáva pocit navodenia kľudu, ako matke, tak i bábätku. Pri cvičení sa
                vyplavujú tzv. hormóny šťastia — endorfíny, ktoré ovplyvňujú aj bábätko.
                Naučíme Vás správne a efektívne dýchať, čo pomôže vám i bábätku počas pôrodu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIT a REDUKČNÝ PROGRAM */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center">
          <span
            className="material-symbols-outlined text-primary text-5xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            monitor_weight
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">FIT a REDUKČNÝ PROGRAM</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Ste moc chudučká, trochu viac kíl na sebe? Naším cieľom je vytvorenie pekne
            vyformovanej postavy, zlepšenie zdravotného stavu a zdravý životný štýl.
          </p>
        </div>
      </section>

      {/* Ďalšie cvičenia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="material-symbols-outlined text-primary text-4xl">sports</span>
          <h2 className="font-headline text-3xl font-bold">Ďalšie cvičenia</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MORE_COURSES.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
