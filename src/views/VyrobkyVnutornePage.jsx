import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import vironalImg from '../images/Vironal.jpg'

const PRODUCTS = [
  {
    name: 'VIRONAL',
    description: 'Ovplyvňuje predovšetkým dráhu pľúc, hrubého a tenkého čreva a sleziny. Možno ho využiť preventívne, ale aj pri:',
    benefits: [
      'akútnych vírusových, mikrobiálnych a bakteriálnych infekciách',
      'dýchacích ťažkostiach, kašli, dýchavičnosti a bolesti v krku',
      'pri zápale zažívacieho traktu, pri kolitíde a Crohnovej chorobe',
      'podporuje činnosť sleziny, vyvoláva potenie a harmonizuje imunitný a lymfatický systém, podávanie je vhodné aj pri liečbe antibiotikami',
    ],
    hasImage: true,
  },
  {
    name: 'REGALEN',
    description: 'Ovplyvňuje dráhu pečene, žlčníka, žalúdka, sleziny, dráhu riadiacu a opasku. Je vhodný najmä v prípade potreby detoxikovať a regenerovať organizmus, a ďalej pri:',
    benefits: [
      'zažívacích ťažkostiach, nechutenstve, pri funkčných poruchách žlčníka a žlčových kameňoch',
      'ekzémoch, alergiách, lupienke, astme a chronických stavoch týchto ochorení, regenerácii pečene poškodenej infekčnými chorobami, ako je žltačka či mononukleóza',
    ],
  },
  {
    name: 'RENOL',
    description: 'Osvedčuje sa predovšetkým pri poruchách na dráhe obličiek a močového mechúra. Vzhľadom na to, že upravuje činnosť obličiek a lymfatického systému, je účinný najmä pri zvyšovaní imunity a pri:',
    benefits: [
      'urologických problémoch, zápaloch močových ciest a močových kameňoch',
      'degeneratívnych ochoreniach kĺbov sprevádzaných pohybovými ťažkosťami, pri dne, reumatizme, artrózach, pri bolestiach chrbtice, skolióze a Bechterevovej chorobe, ekzémoch, vyrážkach, akné a vysokom krvnom tlaku',
    ],
  },
  {
    name: 'GYNEX',
    description: 'Ovplyvňuje najmä dráhu počatia a dráhu troch žiaričov. Okrem priaznivého pôsobenia na ženské choroby pomáha pri:',
    benefits: [
      'premenštruačných tenziách, hormonálnych poruchách a poruchách cyklu',
      'osteoporóze, návaloch a uzlinách v prsiach',
      'mužskej neplodnosti a padaní vlasov s príčinou v štítnej žľaze, a pri redukčnej diéte znižovať chuť do jedla a stabilizovať psychiku',
    ],
  },
  {
    name: 'KOROLEN',
    description: 'Rieši problémy na dráhe srdca, riadiacej a troch žiaričov. Má pozitívny vplyv na cievny systém, využívať aj pri:',
    benefits: [
      'prevencii cievnych príhod, mozgovej mŕtvici a infarkte myokardu',
      'ďalej pri artérioskleróze a poruchách periférneho prekrvenia',
      'zvýšenej hladine cholesterolu v krvi, na podporu krvotvorby, pri rôznych chorobách krvi ako je nedostatok červených a bielych krviniek a pri leukémii',
    ],
    extra: 'Zložky obsiahnuté v produkte majú vplyv na detoxikáciu a regeneráciu buniek, priaznivo ovplyvňujú regeneračné procesy pri onkologických ochoreniach, podporujú imunitný systém u HIV pozitívnych a u ľudí infikovaných toxoplazmózou.',
  },
]

export default function VyrobkyVnutornePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          medication
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Výrobky k vnútornému použitiu
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Bylinné koncentráty spoločnosti Energy
        </p>
      </section>

      {/* Bylinné koncentráty */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span
            className="material-symbols-outlined text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            eco
          </span>
          <h2 className="font-headline text-3xl font-bold">BYLINNÉ KONCENTRÁTY</h2>
        </div>

        <div className="space-y-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="font-headline text-2xl font-bold mb-4 text-primary">
                    {product.name}
                  </h3>
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
                    <p className="text-on-surface-variant text-sm leading-relaxed border-l-2 border-primary/30 pl-4 mt-4">
                      {product.extra}
                    </p>
                  )}
                </div>
                {product.hasImage && (
                  <div className="md:w-64 shrink-0 flex items-start justify-center">
                    <img
                      src={vironalImg}
                      alt="Vironal"
                      className="w-full max-w-[240px] rounded-xl object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
