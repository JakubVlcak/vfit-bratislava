import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DarcekovaPokazkaMainPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          card_giftcard
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Darčeková poukážka
        </h1>
      </section>

      {/* Hlavná ponuka */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center">
          <span
            className="material-symbols-outlined text-primary text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            redeem
          </span>
          <div className="inline-block bg-primary/10 rounded-full px-10 py-4 mb-8">
            <span className="text-4xl font-black text-primary">10% zľava</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-6">
            Darčeková poukážka na kurz pre dospelých
          </h2>
          <p className="text-on-surface-variant text-lg max-w-3xl mx-auto mb-10">
            Darčeková poukážka na kurz so zľavou 10% pre dospelých je vhodná ako darček
            k narodeninám, meninám, Vianociam, alebo len tak zo srdiečka.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: 'cake', text: 'Narodeniny' },
              { icon: 'celebration', text: 'Meniny' },
              { icon: 'ac_unit', text: 'Vianoce' },
              { icon: 'favorite', text: 'Zo srdiečka' },
            ].map((item) => (
              <div
                key={item.text}
                className="bg-surface-container rounded-2xl p-6 flex flex-col items-center gap-3"
              >
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                <p className="font-bold text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Účet */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">account_balance</span>
          <h2 className="font-headline text-2xl font-bold mb-4">Úhrada na účet</h2>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block">
            <p className="font-mono font-bold text-xl text-surface-bright">
              SK38 0200 0000 0027 8709 3958
            </p>
          </div>
        </div>
      </section>

      {/* Trojbalíčky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10 text-center">
          <span
            className="material-symbols-outlined text-tertiary text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            inventory_2
          </span>
          <h2 className="font-headline text-3xl font-bold mb-6">
            VÝHODNÉ TROJBALÍČKY
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-8">
            Využite našu možnosť zakúpiť u nás darčekové poukážky alebo výhodné trojbalíčky!
          </p>
          <div className="bg-surface-container rounded-xl p-8 max-w-md mx-auto">
            <p className="font-bold mb-2">Pre viac informácií nás kontaktujte</p>
            <div className="flex flex-col gap-2 mt-4">
              <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold">
                vfit.petrzalka@gmail.com
              </a>
              <a href="tel:+421903174885" className="text-primary font-bold">
                0903/174 885
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
