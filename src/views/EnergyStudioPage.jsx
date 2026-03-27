import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function EnergyStudioPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          spa
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Energy štúdio
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Prírodné preparáty novej generácie pre vaše zdravie
        </p>
      </section>

      {/* O spoločnosti */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              business
            </span>
            <h2 className="font-headline text-3xl font-bold">O spoločnosti Energy</h2>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Spoločnosť Energy, ktorá bola založená na začiatku deväťdesiatych rokov, dnes predstavuje
            nadnárodné zoskupenie združujúce pobočky a zastúpenia v rôznych častiach sveta.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Významné postavenie v odbore potravinových doplnkov a kozmetiky dosiahli predovšetkým
            produkciou čisto prírodných preparátov novej generácie. Všetky produkty zo sortimentu
            Energy predstavujú novú filozofiu v prístupe k ľudskému zdraviu.
          </p>
        </div>
      </section>

      {/* Pentagram */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10 text-center">
          <span
            className="material-symbols-outlined text-tertiary text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            pentagon
          </span>
          <h2 className="font-headline text-3xl font-bold mb-6">
            Pentagram© — päť elementov čínskej medicíny
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl mx-auto">
            Sortiment spoločnosti Energy je postavený na myšlienke piatich elementov čínskej medicíny,
            tzv. Pentagramu©. Prostredníctvom tohto systému si konzument dokáže ľahko zvoliť vhodnú
            kombináciu prípravkov a ich postupnosť pri užívaní. Vďaka tejto myšlienke môže každý
            človek veľmi ľahko získať dokonalý prehľad o celej šírke našej ponuky.
          </p>
        </div>
      </section>

      {/* 5 elementov */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10 text-center">Päť elementov</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { element: 'Oheň', icon: 'local_fire_department', color: 'text-red-500' },
            { element: 'Zem', icon: 'landscape', color: 'text-amber-600' },
            { element: 'Kov', icon: 'diamond', color: 'text-zinc-400' },
            { element: 'Voda', icon: 'water_drop', color: 'text-blue-500' },
            { element: 'Drevo', icon: 'forest', color: 'text-green-600' },
          ].map((item) => (
            <div
              key={item.element}
              className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center"
            >
              <span
                className={`material-symbols-outlined ${item.color} text-4xl mb-4 block`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <p className="font-headline font-bold text-lg">{item.element}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
