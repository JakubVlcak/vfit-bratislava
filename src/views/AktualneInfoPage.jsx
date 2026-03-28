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
      'Lektorka je živé striebro. Akčná, veselá a empatická. Rýchlejším tempom sa zbavíte tukových vankúšikov a posilníte a spevníte všetky svalové partie tela. Lektorka používa aj moderné pomôcky — Bosu, Fit lopty, stepy, činky, elastické pásy, overbally a iné. Zabavíte sa a najmä kvalitne zacvičíte. Vhodné aj pre ženy po pôrode, ktoré majú záujem nadobudnúť svoje predpôrodné telíčko, alebo mať ešte vyformovanejšie a zdravšie. Pre mladšie ženy, ktoré si potrebujú vyladiť svoju postavičku, ale aj pre ženy v neskoršom veku, ktoré nemajú závažné zdravotné problémy a majú záujem si udržať svoje krivky, čo najdlhšie.',
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
      'Lektorka je živé striebro. Akčná, veselá a empatická, ale vie pracovať aj v miernejšom tempe, ale účinnom cvičení. Zameriavame sa na zlepšenie a udržanie pohybového aparátu s použitím rôzneho náčinia — ľahké činky, válce, Bosu, Fit lopty, tyče, overbally a elastické pásy. Nový kurz je zdravé a efektívne cvičenie pre všetkých. Vhodné aj pre ženy po pôrode. Kurz je vedený tak, že ho môžu navštevovať aj mladšie aj staršie ročníky žien. Zoštíhlite si pás, odstránite celulitídu, odstránite bolesti chrbta, získate ladné pohyby a držanie tela. Naučíte sa, ako používať ľudské telo, aby bolo ZDRAVÉ, ŠTÍHLE a NEBOLELO.',
  },
  {
    name: 'PILATES a ZDRAVÝ CHRBÁT',
    forMen: true,
    day: 'UTOROK',
    time: 'o 17 h',
    dates: '24.3.26 – 26.5.26',
  },
  {
    name: 'ZDRAVÝ CHRBÁT',
    day: 'PONDELOK',
    time: 'o 18 h',
    dates: '16.3.26 – 25.5.26',
  },
  {
    name: 'JOGA pre ZDRAVÝ CHRBÁT',
    forMen: true,
    day: 'ŠTVRTOK',
    time: 'o 18 h',
    dates: '19.3.26 – 21.5.26',
  },
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
    note: 'Na cvičenie je potrebné si zakúpiť za 30 € lano navrhnuté špeciálne pre optimálne cvičenie SM systém, vyrábané podľa precíznych požiadaviek MUDr. Smíška z prvotried­nych materiálov, alebo si prineste svoje. Z hygienických dôvodov lano nezapožičiavame.',
  },
  {
    name: 'PILATES pre MP aj pokročilých',
    day: 'STREDA',
    time: 'o 18 h',
    dates: '18.3.26 – 20.5.26',
  },
  {
    name: 'POWER JOGA',
    forMen: true,
    day: 'UTOROK',
    time: 'o 20 h',
    dates: '24.3.26 – 26.5.26',
  },
]

const ENERGY_PRODUCTS = [
  {
    icon: 'healing',
    name: 'ARTRIN',
    question: 'Máte bolesti?',
    description:
      'Má výrazné analgetické a protizápalové účinky, pomáha pri bolestiach, zápaloch, chorobách pohybového aparátu a urogenitálneho traktu.',
  },
  {
    icon: 'vaccines',
    name: 'DROSERIN',
    question: 'Máte stále kašeľ aj keď ste užívali antibiotiká?',
    description:
      'Je vhodný pri kašli, chrípkach, angínach, prechladnutí, prechladnutí čelných dutín.',
  },
  {
    icon: 'dermatology',
    name: 'PROTEKTIN',
    question: 'Máte kožné problémy?',
    description:
      'Je vhodný na ekzematickú a problematickú pokožku, vhodný pri akne, lupienke, alergických vyrážkach, zle sa hojacich ranách, na zápalový stav kože.',
  },
]

const TEA_TREE_USES = [
  'Prvá pomoc pri prechladnutí — kašeľ, bolesť v krku, nádcha',
  'Ošetrenie pier a ústnej dutiny — herpes, bolesti ďasien, zuby',
  'Ošetrenie pokožky — akne, kliešť, vredy, bradavice',
  'Bolesť krížov a svalov — artritída, podvrtnutie',
  'Ošetrenie nôh — likvidácia plesní na nohách',
  'Starostlivosť o vlasy — lupiny, svrbenie pokožky',
]

const SM_FAQ = [
  {
    question:
      'Akú najčastejšiu chybu robia klienti počas cvičenia SM Systému?',
    answer:
      'Hlavný problém je koncentrácia — schopnosť sústrediť sa. Pri SM Systéme je dôležitý presný pohyb a precvičenie určitej partie svalov — efektivita je priamo úmerná koncentrácii. Snažím sa klientov učiť spoznávať ľudské telo z pohľadu princípov fungovania svalov.',
  },
  {
    question: 'Čo klienti najviac podcenia počas cvičenia SM Systému?',
    answer:
      'Klienti by radi, aby bol problém odstránený behom jedného týždňa. Ale vznik problému sa vyvíjal cez rôzne okolnosti mesiace i roky; odstránenie tiež bude chvíľu trvať. Napríklad liečba hernie disku trvá 6 mesiacov, avšak cvičenie je potrebné praktizovať až 2 roky, aby sa problém nevrátil. Bolesti pominú, no bez kompletnej regenerácie to nejde — je to beh na dlhšiu trať.',
  },
  {
    question:
      'Aký je význam cvičebných pomôcok SM Systému, sú potrebné alebo to ide aj bez nich?',
    answer:
      'Laná sú nevyhnutné — bez nich to nejde. Balančná podložka je voliteľná. Môžete cvičiť bez nej. Moja osobná skúsenosť ako dlhoročnej trénerky je, že keď klienti cvičia bez nej a doma sa ju pokúsia nahradiť niečím podobným, to je zlé. Po určitom čase zistia, že niektoré cviky vyžadujú špeciálnu podložku. Potom si vezmú podložku a okamžite cítia úplne inú kvalitu prevedenia cvikov — hlavne počas cvičení na kolenách a jednej nohe. Vo V-FIT je celý SM Systém prijateľne cenovo nastavený širokej verejnosti.',
  },
]

function CourseCard({ course }) {
  const isHighlight = course.highlight

  return (
    <div
      className={`rounded-lg p-8 ${
        isHighlight
          ? 'bg-on-background text-surface-bright'
          : 'bg-surface-container-low'
      }`}
    >
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

      <h3
        className={`font-headline text-2xl font-bold mb-2 ${
          isHighlight ? 'text-surface-bright' : 'text-on-background'
        }`}
      >
        {course.name}
      </h3>

      {course.subtitle && (
        <p
          className={`text-sm mb-4 ${
            isHighlight ? 'text-surface-variant' : 'text-on-surface-variant'
          }`}
        >
          {course.subtitle}
        </p>
      )}

      {course.sessions ? (
        <div className="space-y-2 mb-4">
          {course.sessions.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className={`material-symbols-outlined text-base ${
                  isHighlight ? 'text-primary-fixed' : 'text-primary'
                }`}
              >
                calendar_today
              </span>
              <span className="font-bold">{s.day}</span>
              <span className={isHighlight ? 'text-surface-variant' : 'text-on-surface-variant'}>
                {s.time}
              </span>
              <span className={`text-sm ${isHighlight ? 'text-surface-variant/60' : 'text-on-surface-variant/60'}`}>
                {s.dates}
              </span>
            </div>
          ))}
        </div>
      ) : (
        course.day && (
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`material-symbols-outlined text-base ${
                isHighlight ? 'text-primary-fixed' : 'text-primary'
              }`}
            >
              calendar_today
            </span>
            <span className="font-bold">{course.day}</span>
            <span className={isHighlight ? 'text-surface-variant' : 'text-on-surface-variant'}>
              {course.time}
            </span>
            <span className={`text-sm ${isHighlight ? 'text-surface-variant/60' : 'text-on-surface-variant/60'}`}>
              {course.dates}
            </span>
          </div>
        )
      )}

      {course.description && (
        <p
          className={`text-sm leading-relaxed ${
            isHighlight ? 'text-surface-variant' : 'text-on-surface-variant'
          }`}
        >
          {course.description}
        </p>
      )}

      {course.note && (
        <div className={`mt-4 p-4 rounded-lg text-sm ${isHighlight ? 'bg-surface/10' : 'bg-primary/5'}`}>
          <span className="material-symbols-outlined text-base align-middle mr-2 text-primary">
            info
          </span>
          {course.note}
        </div>
      )}
    </div>
  )
}

export default function AktualneInfoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">
            Nové kurzy od marca 2026
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tighter mb-8">
            Aktuálne <span className="text-primary italic">informácie</span>
          </h1>
          <p className="text-xl text-on-surface-variant/70 font-medium leading-relaxed max-w-3xl">
            Milí naši klienti V-FITu — neprestaňte sa hýbať, keď zostárnete.
            Zostárnete, keď sa prestanete hýbať.
          </p>
        </section>

        {/* Motivational Quotes */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Keď nie je čas na cvičenie, máme čas na chorobu.',
              'Šport je základ zdravia a imunity ruku v ruke so zdravou stravou.',
              'Náš život je tak dlhý, ako budeme zdraví.',
              'Šport je prevenciou voči vážnym ochoreniam.',
              'Cvičenie znižuje riziko pred akýmkoľvek chronickým ochorením.',
              'Znižuje riziko mŕtvice alebo infarktu. Znižuje zápaly v tele.',
            ].map((quote) => (
              <div
                key={quote}
                className="p-6 rounded-lg bg-primary/5 border border-primary/10"
              >
                <span className="material-symbols-outlined text-primary text-2xl mb-3 block">
                  format_quote
                </span>
                <p className="font-medium text-on-surface-variant italic">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Pricing */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <div className="bg-surface-container-high rounded-lg p-10">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-6">
              Rozpis kurzov — Dospelí
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">
                    payments
                  </span>
                </div>
                <div>
                  <p className="font-bold text-lg">Cena kurzu</p>
                  <p className="text-on-surface-variant">
                    10 lekcií po 10 €, <strong>spolu 100 €</strong>, dĺžka 50
                    min.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">
                    local_offer
                  </span>
                </div>
                <div>
                  <p className="font-bold text-lg">Zľava</p>
                  <p className="text-on-surface-variant">
                    Kto platí 2 kurzy má zľavu <strong>5 €</strong> na každý
                    kurz.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">
                    card_giftcard
                  </span>
                </div>
                <div>
                  <p className="font-bold text-lg">Bonus</p>
                  <p className="text-on-surface-variant">
                    Privediete nového člena = <strong>10 € zľava</strong> na
                    ďalší kurz + 2 vouchery na náhradku v prípade choroby.
                  </p>
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
                Zlepšenie stavu tela a naučiť sa správne pohybovať. Nechcete
                ploché nohy, skoliózu, guľatý chrbát, bolesti chrbta, nesprávne
                držanie tela? Poďme spolu cvičiť.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Základy správneho držania tela',
                  'Cvičenie na posilnenie chrbtových svalov',
                  'Prevencia bolesti chrbta',
                  'Podpora zdravého rastu a vývoja',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-base">
                      check_circle
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low text-sm">
                <span className="material-symbols-outlined text-base align-middle mr-2 text-primary">
                  info
                </span>
                Na cvičenie je potrebné si zakúpiť za 30 € lano navrhnuté
                špeciálne pre optimálne cvičenie SM systém. Z hygienických
                dôvodov lano nezapožičiavame.
              </div>
              <p className="mt-6 font-bold text-on-surface-variant">
                Ak máte o kurz záujem, napíšte na{' '}
                <a
                  href="mailto:vfit.petrzalka@gmail.com"
                  className="text-primary hover:underline"
                >
                  vfit.petrzalka@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Rehabilitation Program */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-on-background rounded-lg p-10 relative overflow-hidden">
            <div className="bloom-effect -right-20 -bottom-20 opacity-20" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider mb-4">
                Nový kurz
              </span>
              <h2 className="font-headline text-3xl font-extrabold text-surface-bright tracking-tight mb-4">
                Rehabilitačný program — pre všetkých aj pre mužov
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
                okysličujeme telo a mozog lepšie pracuje, svaly sú pružnejšie. To
                znamená, že niektoré svaly potrebujú pre svoju činnosť nádych,
                niektoré výdych. Nijaké ale nie sú „bez dychu".
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-10 text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
              Prihlášky a úhrady
            </h2>
            <p className="text-on-surface-variant font-medium mb-6 max-w-2xl mx-auto">
              Prosím prihlasujte sa na kurzy a môžete uhrádzať. Úhrady vopred na
              účet, do poznámky priezvisko + kurz.
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
            <div className="inline-flex items-center gap-3 bg-surface-container-lowest px-6 py-3 rounded-lg text-sm">
              <span className="material-symbols-outlined text-primary">
                account_balance
              </span>
              <span className="font-mono font-bold">
                SK38 0200 0000 0027 8709 3958
              </span>
            </div>
          </div>
        </section>

        {/* Helena's Message */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-8 text-center">
              Cvičte v našich zdravotných kurzoch namiesto liekov
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                Kurzy sa uskutočnia pod vedením{' '}
                <strong className="text-on-surface">Heleny Petrášovej</strong>,
                ktorá je terapeut metódy SM systém, absolventka Školy SM systému
                MUDr. Smíška, lektor Pilates Medical, lektor Školy chrbta, lektor
                Gravid jogy a Pilates pre tehotné, fitness tréner a masér.
              </p>
              <p>
                Ak máte nejaký zdravotný problém, dohovorte si s Helenou termín
                na masáže, rehabilitáciu, individuálny tréning alebo pedikúru, či
                manikúru. Volať doobeda do 14 h. Termínov je málo, čakacie doby
                dlhšie. Preto neváhajte a ozvite sa včas.
              </p>
              <p>
                Uvedomte si, že keď raz prídete, je to málo. Choroba tiež nepríde
                náhle, postupne vaše telo upozorňuje a vy buď zareagujete včas
                alebo to necháte až vaše telo zaútočí silne. Minimálne 3 termíny
                sú potrebné, aby sa váš problém začal riešiť.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-on-surface font-medium">
                My sme tu vo V-FIT naozaj pre Vás, nie ste tu Vy pre nás.
                Zdravie je to najdôležitejšie. Náš život je tak dlhý, ako budeme
                zdraví.
              </blockquote>
              <p>
                Poďme budovať imunitu pravidelným cvičením v kurzoch vo V-FIT
                Bratislava. Pohyb je ŽIVOT a ZDRAVIE. Budujme si IMUNITU zdravým
                cvičením a správnym dýchaním.
              </p>
            </div>
          </div>
        </section>

        {/* SM System FAQ */}
        <section className="bg-surface-container-low py-20 rounded-t-xl mb-20">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-12 text-center">
              SM Systém — Časté otázky
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {SM_FAQ.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-surface-container-lowest rounded-lg p-8"
                >
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                    help
                  </span>
                  <h3 className="font-headline font-bold text-lg mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Products */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold uppercase tracking-wider mb-4">
            Novinka
          </span>
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-10">
            Produkty Energy — dostupné vo V-FIT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {ENERGY_PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="bg-surface-container-low rounded-lg p-8"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                  {product.icon}
                </span>
                <p className="font-bold text-sm text-primary mb-2">
                  {product.question}
                </p>
                <h3 className="font-headline text-xl font-bold mb-3">
                  Krém {product.name}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tea Tree Oil */}
          <div className="bg-surface-container-high rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_pharmacy
              </span>
              <div>
                <h3 className="font-headline text-xl font-bold">
                  100% Tea Tree Olej
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Pravý prírodný olej. Prvá pomoc do lekárničky. Je možné užívať
                  aj vnútorne.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {TEA_TREE_USES.map((use) => (
                <div key={use} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">
                    check
                  </span>
                  <span className="text-sm">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hygiene + Holiday Notice */}
        <section className="max-w-7xl mx-auto px-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 rounded-lg bg-primary-container/10 border border-primary/10">
              <span className="material-symbols-outlined text-primary text-2xl shrink-0">
                health_and_safety
              </span>
              <p className="text-sm text-on-surface-variant font-medium">
                V platnosti zostáva zvýšená dezinfekcia dotykových plôch,
                kľúčiek, pomôcok, podložiek a strojov. Prekrytie horných
                dýchacích ciest nie je povinné pri cvičení.
              </p>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-lg bg-tertiary/5 border border-tertiary/10">
              <span className="material-symbols-outlined text-tertiary text-2xl shrink-0">
                event
              </span>
              <p className="text-sm text-on-surface-variant font-medium">
                V dňoch štátnych sviatkov je V-FIT OTVORENÉ. Výnimkou je
                veľkonočný piatok a pondelok.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-xl font-headline font-bold text-on-background mb-2">
            Tešíme sa na všetkých aj nových klientov.
          </p>
          <p className="text-on-surface-variant font-medium">
            Kolektív V-FIT Bratislava
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
