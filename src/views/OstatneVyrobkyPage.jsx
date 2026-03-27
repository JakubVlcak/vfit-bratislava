import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PRODUCTS = [
  {
    name: 'KING KONG',
    description: 'Prípravok s anabolickým efektom, vhodný pri poúrazových stavoch a na zvýšenie kondície v neskorom veku. Má priaznivý vplyv:',
    benefits: [
      'na zlepšenie stavu kostí, chrupaviek a kože a pri svalovej atrofii',
      'na zvýšenie silového výkonu — spolu s cvičením podporuje nárast svalovej hmoty',
      'pri psychickej záťaži a zníženej sexuálnej aktivite',
    ],
    extra: 'Vďaka detoxikačnému efektu zlepšuje čistotu buniek a krvi.',
    icon: 'fitness_center',
  },
  {
    name: 'STIMARAL',
    description: 'Prípravok s tonizačným a adaptogénnym účinkom. Zvyšuje odolnosť organizmu, fyzickú a duševnú výkonnosť, odstraňuje únavu a vracia energiu. Dá sa využiť:',
    benefits: [
      'ako životabudič pri stavoch po opici',
      'na tonizáciu organizmu, upokojenie, sústredenie a lepšiu činnosť mozgu',
      'na zmiernenie problémov spojených so starnutím',
    ],
    extra: 'Ako ľahké afrodiziakum pri pohlavnej impotencii psychického pôvodu.',
    icon: 'bolt',
  },
  {
    name: 'ACIDOFIT',
    description: 'Minerálny nápoj na zníženie prekyslenia organizmu, zabránenie tvorbe svalových kŕčov a celkové doplnenie minerálov do ľudského organizmu. Obsahuje špeciálnu zmes minerálov ako je sodík, vápnik, draslík, horčík, fosfor, a prírodné extrakty Aloe vera a Alfalfa.',
    benefits: [
      'zabraňuje vytvoreniu svalových kŕčov a tetanii',
      'zabraňuje prekysleniu organizmu a tým podporuje imunitný systém',
      'neutralizuje kyseliny v tele',
      'podporuje správne fungovanie nervov, svalov a srdca',
      'doplňuje minerály potrebné k správnemu fungovaniu celého organizmu',
      'upravuje rovnováhu tekutín v tele',
      'zmierňuje bolesti a urýchľuje hojenie rán a popálenín',
    ],
    icon: 'water_drop',
  },
]

export default function OstatneVyrobkyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          inventory_2
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Ostatné výrobky
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Špeciálne prípravky a minerálne nápoje spoločnosti Energy
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
                <p className="text-on-surface-variant text-sm leading-relaxed border-l-2 border-primary/30 pl-4 mt-4">
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
