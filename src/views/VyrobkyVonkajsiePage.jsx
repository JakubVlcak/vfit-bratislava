import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PRODUCTS = [
  {
    name: 'DROSERIN',
    description: 'Droserin má silný antibakteriálny a antivírový efekt. Vďaka svojmu zloženiu je vhodný na harmonizáciu pri:',
    benefits: [
      'chrípkach, angínach, nachladnutí, sínusitídach, nachladnutí čelných dutín a pri kašli',
      'problémoch s pľúcami, prieduškami a dýchaním a pri zápaloch stredného ucha',
      'niektorých mikrobiálnych a plesňových ochoreniach kože a vredoch predkolenia',
    ],
    extra: 'Osvedčil sa aj pri bolestiach krčnej a strednej časti chrbtice, ramien a úponu kľúčnych kostí.',
    icon: 'vaccines',
  },
  {
    name: 'PROTEKTIN',
    description: 'Tento regeneračný krém má silný antiseptický, protizápalový, prekrvovací a čistiaci efekt. Je veľmi vhodný:',
    benefits: [
      'na ekzematickú a problematickú pokožku so sklonom k tvorbe vyrážok',
      'najmä pri akné, lupienke, lišajoch, oparoch, alergických vyrážkach, zápalových stavoch kože a pri zle sa hojacich ranách',
    ],
    extra: 'Upokojuje kožu pri svrbení a preventívne bráni rozvoju plesní.',
    icon: 'dermatology',
  },
  {
    name: 'ARTRIN',
    description: 'Má silné analgetické, antispazmatické a prekrvovacie účinky. Komplex látok, ktoré sú obsiahnuté v Artrine sa dá využiť:',
    benefits: [
      'pri bolestiach a zápalových stavoch kĺbov, svalov a šliach',
      'pri reumatizme, bolestiach chrbtice a krčného svalstva',
      'na regeneráciu pri únave, chlade, nedostatočnom prekrvení končatín a ďalších pohybových ťažkostiach',
    ],
    extra: 'Krém aplikujeme pri problémoch s obličkami, močovým mechúrom, prostatou a ďalších zápalových stavoch, priamo na miesto nad uložením postihnutého orgánu.',
    icon: 'healing',
  },
  {
    name: 'CYTOVITAL',
    description: 'Bioinformačný krém na výživu buniek pokožky a jej silnú regeneráciu. Je vhodný najmä:',
    benefits: [
      'na omladnutie pokožky a regeneráciu a detoxikáciu buniek',
      'pri silnom poškodení kože (napr. jazvami, ranami, odreninami, celulitídou, rôznym žiarením, ohňom, plesňami, zápaly a opary)',
      'na podporu činnosti vaječníkov pri neplodnosti a podporu správnej činnosti štítnej žľazy',
    ],
    extra: 'Aplikujeme zvonka pri cystách, svrbení pokožky a ako antioxidačnú ochranu proti voľným radikálom.',
    icon: 'spa',
  },
  {
    name: 'RUTICELIT',
    description: 'Obsahuje výťažky látok, ktoré majú protizápalový a protinádorový účinok a silné protiplesňové účinky. Rastlinné látky použité v tomto komplexe pôsobia najmä pri:',
    benefits: [
      'cievnych ochoreniach ako sú zápaly žíl, hemoroidoch, výronoch, preležaninách, ďalej pri pomliaždeninách a zlomeninách',
      'nedostatočnom periférnom prekrvení, trombózach, lámavosti jemných cievnych kapilár na tvári a po tele',
      'urýchlení regenerácie po nadmernom opaľovaní a ako doplnok pri onkologickom ochorení kože a ožarovaní',
      'rastlinné látky pôsobia na niektoré druhy plesní, ktoré majú vplyv na cievne steny',
    ],
    icon: 'medication',
  },
]

export default function VyrobkyVonkajsiePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-tertiary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          dermatology
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Výrobky k vonkajšiemu použitiu
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Regeneračné krémy a masťe spoločnosti Energy
        </p>
      </section>

      {/* Products */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {product.icon}
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary">
                  {product.name}
                </h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                {product.description}
              </p>
              <ul className="space-y-3 mb-4">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">
                      check_circle
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              {product.extra && (
                <p className="text-on-surface-variant text-sm leading-relaxed border-l-2 border-tertiary/30 pl-4 mt-4">
                  {product.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
