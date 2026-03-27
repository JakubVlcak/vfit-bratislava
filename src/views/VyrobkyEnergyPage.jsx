import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function VyrobkyEnergyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          eco
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Výrobky Energy
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Prírodné preparáty vyvinuté podľa princípov čínskej medicíny
        </p>
      </section>

      {/* O výrobkoch */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Všetky prípravky sú vyvinuté podľa princípov starej čínskej medicíny, s využitím
            najnovších technológií bioinformačnej medicíny a poznatkov fytoterapie, homeopatie,
            kryštáloterapie, biorezonancie a psychotroniky.
          </p>
        </div>
      </section>

      {/* Nákup */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              storefront
            </span>
            <h2 className="font-headline text-3xl font-bold">Nákup výrobkov</h2>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Ak máte záujem o nákup výrobkov, privítame vás vo V-FIT, o.z., kde vám vysvetlíme
            a poradíme ich správne použitie, aby došlo k zlepšeniu vášho zdravia.
          </p>
        </div>
      </section>

      {/* Klub Energy */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span
            className="material-symbols-outlined text-primary-fixed text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            card_membership
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">Klub Energy</h2>
          <div className="inline-block bg-primary-fixed/20 rounded-full px-10 py-4 mb-6">
            <span className="text-4xl font-black text-primary-fixed">20% zľava</span>
          </div>
          <p className="text-surface-variant text-lg mb-4 max-w-2xl mx-auto">
            Ponúkame Vám stať sa členmi klubu Energy a získate 20% zľavu na výrobkoch.
          </p>
          <p className="text-surface-variant max-w-2xl mx-auto">
            Členstvo v Klube Energy prináša značné výhody, a to nielen vďaka garantovaným
            zľavám pri nákupe tovaru.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 border border-outline-variant/10 text-center">
          <span
            className="material-symbols-outlined text-tertiary text-4xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            help
          </span>
          <h3 className="font-headline text-xl font-bold mb-4">Potrebujete pomoc s výberom produktu?</h3>
          <p className="text-on-surface-variant mb-4">Obráťte sa na nás:</p>
          <a
            href="mailto:v-fit@szm.sk"
            className="text-primary font-bold text-lg"
          >
            v-fit@szm.sk
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
