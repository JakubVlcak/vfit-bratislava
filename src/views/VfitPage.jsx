import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import vfitImg from '../images/vfit.jpg'

const KURZY = [
  'Power joga', 'Joga pre zdravie', 'PILATES', 'Zdravý chrbát',
  'Do formy po pôrode', 'Kurz chudnutia', 'Fit programy', 'Tvarujme telo',
  'Štíhla línia', 'Gravid joga', 'Pilates a fit lopty pre tehotné',
  'SM systém', 'Škola chrbta',
]

const POMOCKY = [
  'posilňovacie gumičky', 'expandery', 'elastické pásy — dynabandy',
  'balančné loptičky — overbally', 'veľké fit lopty', 'jednoručné činky',
  'odpružené stepy', 'BOSU', 'flexi bar', 'tyče', 'pilates kruhy', 'pilates valec',
]

export default function VfitPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
              V-FIT
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6 italic">
              Verte, že Váš život sa zmení k lepšiemu, ak začnete načúvať svojmu JA!
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Dňom 1. mája 2004 sme pre Vás otvorili H-FIT — športovo-relaxačné centrum,
              príjemné a tiché prostredie rodinného typu pre bežnú populáciu na relax a odpočinok.
              Dňom 6. 8. 2010 došlo k zmene názvu H-FIT na V-FIT.
            </p>
          </div>
          <div>
            <img
              src={vfitImg}
              alt="V-FIT športovo-relaxačné centrum"
              className="w-48 rounded-2xl object-cover shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* O nás */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <h2 className="font-headline text-3xl font-bold mb-6">O nás</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            V-FIT — športovo-relaxačné centrum sa nachádza v mestskej časti Petržalka-Dvory, Bratislava.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Naším cieľom je pomôcť ľuďom s ich zdravotnými problémami ako sú bolesti chrbta, nadváha
            — ukázať vám, ako sa zbaviť nadbytočných kíl a nepotrebného tuku pravidelným cvičením
            a zdravou výživou.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Naším cieľom je vytvorenie pekne vyformovanej postavy, zlepšenie zdravotného stavu
            a zdravý životný štýl.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Môžete cvičiť individuálne, alebo pod vedením osobných lektorov s predpísaným vzdelaním.
          </p>
        </div>
      </section>

      {/* Wellness */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <span
            className="material-symbols-outlined text-tertiary text-5xl mb-6 block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            spa
          </span>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Veľmi často už je počuť slovo <strong>WELLNESS</strong>, ktoré preložíme ako „cítiť sa skvele",
            a o to ide. Dnes športovo-relaxačné centrá navštevujú ľudia lepšie informovaní a uvedomujú si,
            že sedavý spôsob života je príčinou mnohých ochorení. Spojme príjemné s užitočným.
          </p>
          <p className="text-primary font-bold text-lg">
            Výsledkom vášho snaženia bude perfektná postava a zdravý človek.
          </p>
          <p className="text-on-surface-variant mt-6 leading-relaxed">
            Mnoho ľudí stále nevie, ako správne cvičiť alebo ako si nájsť svoje najslabšie miesta.
            Z tohto dôvodu naši inštruktori sú vyškolení a schopní vám zostaviť tréningový program.
          </p>
        </div>
      </section>

      {/* Pre koho */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-4xl">groups</span>
          Pre koho ponúkame?
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
          V časovom harmonograme relaxačného centra dostali priestor všetky vekové kategórie.
          Sme tu pre každého, komu záleží na fyzickej a psychickej pohode a kondícii.
          Stačí si vybrať podľa času, náročnosti, obsahu a momentálnej kondície.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Viacúčelová telocvičňa */}
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <span
              className="material-symbols-outlined text-tertiary text-4xl mb-4 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              child_care
            </span>
            <h3 className="font-headline text-xl font-bold mb-4">Viacúčelová telocvičňa</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Cvičenie pre DETI a mládež od 2,5 r. do 16 rokov. Zriadené pre nich je od 1.10.2005
              Štúdio aerobiku, tanca a bojového umenia pri V-FIT.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Cvičenie pre rodičov s deťmi od 6 mesiacov do 4 rokov.
            </p>
            <div className="bg-primary/5 rounded-lg p-4 mt-4">
              <p className="text-sm font-bold">
                Novinka 2012: Cvičebné priestory pre deti do 8 rokov.
              </p>
            </div>
          </div>

          {/* Aerobicová sála */}
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <span
              className="material-symbols-outlined text-primary text-4xl mb-4 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              AEROBIC
            </span>
            <h3 className="font-headline text-xl font-bold mb-4">Aerobicová sála</h3>
            <p className="text-on-surface-variant text-sm mb-2">(odpružená podlaha)</p>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Cvičenia pre mládež a dospelých na jednotlivé vstupy:
              Body work, Body styling, BOSU, Fit lopty.
            </p>
            <h4 className="font-bold text-sm mb-3">Kurzy:</h4>
            <div className="flex flex-wrap gap-2">
              {KURZY.map((k) => (
                <span
                  key={k}
                  className="bg-primary/5 rounded-full px-3 py-1 text-xs font-bold"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Čo ponúkame navyše */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 border border-primary/10">
          <h2 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">add_circle</span>
            Čo ponúkame navyše?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Ponúkame cvičenie aj pre <strong>pracovné kolektívy</strong> alebo pre deti z materských,
            základných a stredných škôl.
          </p>
        </div>
      </section>

      {/* Čo pripravujeme */}
      <section className="py-8 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 border border-outline-variant/10 text-center">
          <span
            className="material-symbols-outlined text-tertiary text-4xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
          <h2 className="font-headline text-2xl font-bold mb-2">Čo pripravujeme?</h2>
          <p className="text-on-surface-variant text-lg">Nechajte sa prekvapiť.</p>
        </div>
      </section>

      {/* Pomôcky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">inventory_2</span>
          Aké pomôcky používame?
        </h2>
        <p className="text-on-surface-variant mb-6">
          Cvičíme s najmodernejšími cvičebnými pomôckami:
        </p>
        <div className="flex flex-wrap gap-3">
          {POMOCKY.map((p) => (
            <span
              key={p}
              className="bg-surface-container-low border border-outline-variant/10 rounded-full px-5 py-3 text-sm font-bold"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Oznámenie */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">info</span>
            Oznámenie
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Oznamujeme Vám, že dňom 6. 8. 2010 došlo k zmene názvu H-FIT na V-FIT.
          </p>
          <div className="bg-primary/5 rounded-xl p-6 mb-6">
            <h3 className="font-bold mb-3">Dôvod a vysvetlenie:</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-3">
              Dňa 9.7.09 JUDr. Eva Senariková, advokátka, zaslala H-FITu, o.z., list vo veci:
              Výzva na okamžité upustenie od protiprávneho konania — zasahovanie do práv vyplývajúcich
              z ochrannej známky.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              V liste uvádza, že spoločnosť H-Fit agency, s.r.o., Trnavská cesta 37, Bratislava,
              zastúpená pánom Henrichom Hekšom je majiteľom ochrannej známky H-Fit, zapísanej Úradom
              priemyselného vlastníctva Slovenskej republiky do registra ochranných známok dňa 12.6.09,
              podľa § 12 odst. 1 zák. č. 55/1997 z.z. o ochranných známkach pod číslom 224846.
            </p>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Ďakujeme za pochopenie všetkým našim členkám — klientkám a veríme, že aj naďalej po zmene
            názvu nášho športovo-relaxačného centra na V-FIT, o.z., nám ostanete verné.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            S pozdravom <strong>Petrášová Helena</strong> — športový manažér H-FIT, o.z., teraz V-FIT, o.z., Bratislava
          </p>
          <p className="text-on-surface-variant text-sm mt-2">
            <a href="tel:+421903174885" className="text-primary font-bold">0903/174 885</a>
            {' · '}
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold">vfit.petrzalka@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
