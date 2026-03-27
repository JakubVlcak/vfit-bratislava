import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DarcekovaPokazkaPage() {
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
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Urobte niekomu radosť a darujte DARČEKOVÚ POUKÁŽKU.
        </p>
      </section>

      {/* Poukážka info */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center">
          <span
            className="material-symbols-outlined text-primary text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            redeem
          </span>
          <h2 className="font-headline text-3xl font-bold mb-6">
            Milá pozornosť pre vašich blízkych
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
            Darčeková poukážka je vhodná ako milá pozornosť k narodeninám, meninám, Vianociam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-surface-container rounded-2xl p-8 flex flex-col items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                cake
              </span>
              <p className="font-bold">Narodeniny</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-8 flex flex-col items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                celebration
              </span>
              <p className="font-bold">Meniny</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-8 flex flex-col items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                ac_unit
              </span>
              <p className="font-bold">Vianoce</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vianočná poukážka */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span
            className="material-symbols-outlined text-primary-fixed text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            park
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            VIANOČNÁ POUKÁŽKA
          </h2>
          <p className="text-surface-variant text-lg mb-6">
            Ideálny darček pod stromček pre vaše kamarátky, či vaše maminky
          </p>
          <div className="inline-block bg-primary-fixed/20 rounded-full px-10 py-4 mb-6">
            <span className="text-4xl font-black text-primary-fixed">5% zľava</span>
          </div>
          <p className="text-surface-variant text-sm max-w-md mx-auto">
            Len na kurz pre dospelých — zľavy sa nezrátavajú.
          </p>
        </div>
      </section>

      {/* Valentínska poukážka */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10 text-center">
          <span
            className="material-symbols-outlined text-tertiary text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            VALENTÍNSKA POUKÁŽKA
          </h2>
          <p className="text-on-surface-variant text-lg mb-6">
            Darujte valentínsku poukážku na kurz pre dospelých
          </p>
          <div className="inline-block bg-tertiary/10 rounded-full px-10 py-4 mb-8">
            <span className="text-4xl font-black text-tertiary">5% zľava</span>
          </div>
          <div className="bg-surface-container rounded-xl p-6 max-w-md mx-auto">
            <p className="font-bold mb-2">Úhrada na účet</p>
            <p className="font-mono font-bold text-lg text-primary">
              SK38 0200 0000 0027 8709 3958
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
