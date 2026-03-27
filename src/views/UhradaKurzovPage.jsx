import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function UhradaKurzovPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          account_balance
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Úhrada kurzov
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          V-FIT — športovo-relaxačné centrum, o.z.
        </p>
      </section>

      {/* Úhrada info */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">payments</span>
          <h2 className="font-headline text-2xl font-bold mb-4">Úhrada kurzovného</h2>
          <p className="text-surface-variant text-lg mb-6">
            Úhrady sú možné <strong className="text-surface-bright">len vopred na účet</strong>
          </p>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block mb-6">
            <p className="font-mono font-bold text-xl text-surface-bright">
              SK38 0200 0000 0027 8709 3958
            </p>
          </div>
          <p className="text-surface-variant text-sm max-w-lg mx-auto">
            VS — termín kurzu, poznámka — typ kurzu a meno a priezvisko
          </p>
          <p className="text-surface-variant text-sm mt-2">
            Ďalšie info: tel. 0903/174 885 — do 14:00 h.
          </p>
        </div>
      </section>

      {/* Kedy uhradiť */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              schedule
            </span>
            <h2 className="font-headline text-3xl font-bold">Kedy je potrebné kurz uhradiť</h2>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
            Kurz je potrebné uhradiť než začne. Pozor — kurz má obmedzenú kapacitu.
          </p>
          <p className="text-primary font-bold text-lg">
            Neváhajte preto so zaplatením kurzu. Zaplatením je istota miesta v kurze.
          </p>
        </div>
      </section>

      {/* Rezervácie */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">book_online</span>
            Rezervácie kurzu
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Rezervácia kurzov sa robí len s minimálne <strong>10 € vopred na účet</strong>. Pred začatím konania
            kurzu je nutné zostatok kurzu doplatiť na účet. <strong>Záloha je nevratná.</strong>
          </p>
        </div>
      </section>

      {/* Náhrada lekcie */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 border border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span
              className="material-symbols-outlined text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              card_giftcard
            </span>
            Náhrada lekcie v kurze pri absencii
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            V čase trvania jedného kurzu v prípade choroby dlhšej ako 2 týždne si prineste potvrdenie
            od lekára a bude vám vystavený <strong>VOUCHER</strong> na vynechané hodiny v kurze a tie Vám
            budú odrátané z ďalšieho kurzu.
          </p>
        </div>
      </section>

      {/* Storno podmienky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <h2 className="font-headline text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">gavel</span>
            Storno podmienky kurzovného
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Kurzovné sa nevracia po začatí kurzu. Účastníkovi kurzu nevzniká nárok na vrátenie kurzovného
            pri vzniknutých prekážkach z jeho strany. Výnimku tvorí choroba dlhšia ako 2 týždne s potvrdením
            od lekára (viz vyššie — vystavíme Voucher).
          </p>
          <p className="text-on-surface-variant font-bold mb-6">
            Pri stornovaní účasti (vrátení platby) Vám budeme účtovať:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-primary mb-2">10%</p>
              <p className="text-on-surface-variant text-xs">
                manipulačný poplatok pri odhlásení z kurzu 20 dní pred začiatkom
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-primary mb-2">50%</p>
              <p className="text-on-surface-variant text-xs">
                pri odhlásení sa z kurzu 2 až 7 dní pred začiatkom
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-primary mb-2">100%</p>
              <p className="text-on-surface-variant text-xs">
                pri odhlásení 1 deň pred začiatkom alebo v deň začiatku / po začatí kurzu
              </p>
            </div>
          </div>

          <div className="bg-tertiary-container/10 rounded-xl p-6 border border-outline-variant/10 mb-8">
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Kurzovné sa nevracia po začatí kurzu. V prípade, ak by ste zistili, že sa z vážnych dôvodov
              nemôžete kurzu zúčastňovať, môžeme vám na požiadanie vystaviť <strong>VOUCHER</strong> na zvyšné
              hodiny v kurze a ten môžete niekomu darovať alebo využiť v ďalšom kurze.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Napriek tomu však všetkých dopredu žiadame, aby zvážili, či na kurz naozaj chcú a môžu chodiť.
            </p>
          </div>
        </div>
      </section>

      {/* Náhrada pri neotvorení */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 border border-primary/10">
          <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">undo</span>
            Náhrada kurzovného v prípade neotvorenia kurzu
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Hodnota kurzu sa vracia v <strong>plnej výške</strong>, obratom na účet.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Pri žiadosti o vrátenie uhradenej platby za permanentky a iné Vám budeme účtovať:
            <strong> 10% manipulačný poplatok</strong>.
          </p>
        </div>
      </section>

      {/* Postup */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 text-center">
          <span
            className="material-symbols-outlined text-primary text-4xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            description
          </span>
          <h3 className="font-headline text-xl font-bold mb-4">
            Postup pri žiadosti o storno alebo voucher kurzu
          </h3>
          <p className="text-on-surface-variant">
            Písomnú žiadosť odovzdáte na recepcii V-FIT — športovo-relaxačnom centre s príslušným dokladom.
          </p>
          <p className="text-on-surface-variant text-sm mt-6">Bratislava, 1. 9. 2023</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
