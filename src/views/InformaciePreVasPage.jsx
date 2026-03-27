import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function InformaciePreVasPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          campaign
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Informácie pre vás
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          V-FIT — športovo-relaxačné centrum, Gercenova 8/F, Bratislava
        </p>
      </section>

      {/* Nové akcie */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center mb-12">
          <span
            className="material-symbols-outlined text-primary text-5xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_offer
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            NOVÉ AKCIE pre Vaše peňaženky a váš čas
          </h2>
          <p className="text-on-surface-variant text-lg max-w-3xl mx-auto">
            V-FIT — športovo-relaxačné centrum, o.z., je tu zasa s novými akciami pre Vaše peňaženky a váš čas.
          </p>
        </div>
      </section>

      {/* Hendikepovaní */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="material-symbols-outlined text-tertiary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              accessibility_new
            </span>
            <h2 className="font-headline text-3xl font-bold">
              Cvičenie a masáže pre telesne a zdravotne hendikepovaných
            </h2>
          </div>
          <p className="text-on-surface-variant mb-8 text-lg">
            Pripravili sme pre Vás cvičenie a masáže (individuálne) aj pre telesne a zdravotne hendikepovaných.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-surface-container rounded-2xl p-8">
              <span
                className="material-symbols-outlined text-primary text-3xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                healing
              </span>
              <h3 className="font-headline font-bold text-lg mb-2">Po operácii</h3>
              <p className="text-on-surface-variant text-sm">
                Pomôžeme Vám s rýchlejším návratom do bežného života v prípade, že ste po operácii kolena, lakte a pod.
              </p>
            </div>
            <div className="bg-surface-container rounded-2xl p-8">
              <span
                className="material-symbols-outlined text-primary text-3xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                personal_injury
              </span>
              <h3 className="font-headline font-bold text-lg mb-2">Trvalé následky</h3>
              <p className="text-on-surface-variant text-sm">
                V prípade, že máte trvalé následky na končatinách po úraze, máme pre vás pripravené cvičenie pre váš zdravotný problém.
              </p>
            </div>
            <div className="bg-surface-container rounded-2xl p-8">
              <span
                className="material-symbols-outlined text-primary text-3xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                medical_services
              </span>
              <h3 className="font-headline font-bold text-lg mb-2">Chronické choroby</h3>
              <p className="text-on-surface-variant text-sm">
                Máme pripravené cvičenie pre choroby s cukrovkou, astmou, ploché nohy a iné. Problém sa môže týkať aj dospelého aj detí.
              </p>
            </div>
          </div>

          <div className="bg-surface-container rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <span className="material-symbols-outlined text-primary text-4xl">mail</span>
            <div>
              <p className="font-bold mb-1">Záujemcovia sa hláste:</p>
              <p className="text-on-surface-variant text-sm">
                E-mail: <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold">vfit.petrzalka@gmail.com</a> alebo do 14 h. na tel. čísle / SMS{' '}
                <a href="tel:+421903174885" className="text-primary font-bold">0903/174 885</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platba */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary-fixed text-4xl">account_balance</span>
            <h2 className="font-headline text-3xl font-bold">Platba vo V-FIT</h2>
          </div>
          <p className="text-surface-variant text-lg mb-4">
            Platba vo V-FIT je možná <strong className="text-surface-bright">LEN vopred na účet</strong>.
          </p>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block">
            <p className="text-surface-bright font-mono text-lg font-bold">
              SK38 0200 0000 0027 8709 3958
            </p>
          </div>
          <p className="text-surface-variant mt-6 text-sm">
            Ďakujeme za pochopenie — kolektív V-FIT Bratislava
          </p>
        </div>
      </section>

      {/* Ceny */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              payments
            </span>
            <h2 className="font-headline text-3xl font-bold">Veľmi priaznivé ceny</h2>
          </div>
          <p className="text-on-surface-variant text-lg mb-6 max-w-3xl">
            Tak príďte k nám do V-FIT — športovo-relaxačného centra na Gercenovej 8/F, Bratislava Petržalka.
            Ceny kurzov pre Vašu peňaženku nebudú záťažou — <strong>LEN 8 €/hod. v kurze</strong> a každý lektor u nás má certifikát.
          </p>
          <p className="text-primary font-bold text-lg">
            Vo V-FIT nájdete nielen KVALITU, ale aj PRIAZNIVÉ CENY.
          </p>
        </div>
      </section>

      {/* Kontakt a úhrada */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-4xl">contact_support</span>
          Kontakt a úhrada kurzovného
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">email</span>
            <p className="font-bold mb-1">E-mail</p>
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary text-sm font-bold">
              vfit.petrzalka@gmail.com
            </a>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">language</span>
            <p className="font-bold mb-1">Web</p>
            <p className="text-primary text-sm font-bold">www.v-fit.sk</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">sms</span>
            <p className="font-bold mb-1">SMS</p>
            <a href="tel:+421903174885" className="text-primary text-sm font-bold">
              0903 174 885
            </a>
          </div>
        </div>

        {/* Úhrada kurzovného */}
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 mb-8">
          <h3 className="font-headline text-2xl font-bold mb-6">Úhrada kurzovného</h3>
          <div className="bg-primary/5 rounded-xl p-6 mb-6">
            <p className="text-on-surface-variant text-sm mb-2">Účet:</p>
            <p className="font-mono font-bold text-lg mb-3">SK38 0200 0000 0027 8709 3958</p>
            <p className="text-on-surface-variant text-sm">
              VS — termín kurzu, poznámka — typ kurzu a meno a priezvisko.
            </p>
            <p className="text-on-surface-variant text-sm mt-1">
              Ďalšie info: tel. 0903/174 885 — do 14 h.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">credit_card</span>
                Ako je možno platiť
              </h4>
              <p className="text-on-surface-variant text-sm">Len na účet vopred.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                Kedy musí byť kurz uhradený
              </h4>
              <p className="text-on-surface-variant text-sm">
                Kurz musí byť uhradený než začne. Pozor — kurz má obmedzenú kapacitu. Neváhajte preto so zaplatením kurzu. Zaplatením je istota miesta v kurzu.
              </p>
            </div>
          </div>
        </div>

        {/* Rezervácie */}
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 mb-8">
          <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">book_online</span>
            Rezervácie kurzu
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Rezervácia kurzov sa robí len s minimálne <strong>30% úhradou</strong> ceny kurzov. Deň vopred konania kurzu je nutné zostatok kurzu doplatiť. <strong>Záloha je nevratná.</strong>
          </p>
        </div>

        {/* Náhrada lekcie */}
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 mb-8">
          <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">card_giftcard</span>
            Náhrada lekcie v kurze pri absencii
          </h3>
          <p className="text-on-surface-variant text-sm">
            V rámci kurzu je možno vystaviť <strong>VOUCHER</strong>.
          </p>
        </div>

        {/* Storno podmienky */}
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
          <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">gavel</span>
            Storno podmienky kurzovného
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-on-surface-variant text-sm">
              <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">info</span>
              Účastníkovi kurzu nevzniká nárok na vrátenie kurzovného pri vzniknutých prekážkach z jeho strany.
            </li>
            <li className="flex items-start gap-3 text-on-surface-variant text-sm">
              <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">info</span>
              Pri stornovaní účasti (vrátení platby) Vám budeme účtovať:
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-8">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-primary mb-2">10%</p>
              <p className="text-on-surface-variant text-xs">manipulačný poplatok pri odhlásení z kurzu</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-primary mb-2">50%</p>
              <p className="text-on-surface-variant text-xs">pri odhlásení sa z kurzu 2 až 7 dní pred začiatkom</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-primary mb-2">100%</p>
              <p className="text-on-surface-variant text-xs">pri odhlásení 1 deň pred začiatkom alebo v deň začiatku / po začatí kurzu</p>
            </div>
          </div>

          <div className="bg-tertiary-container/10 rounded-xl p-6 border border-outline-variant/10">
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Kurzovné sa nevracia po začatí kurzu. Taktiež nijako nesúvisí s kurzovným na ďalšie pokračovanie kurzu alebo iný kurz. V prípade, ak by ste zistili, že sa z vážnych dôvodov nemôžete kurzu zúčastňovať, môžeme vám na požiadanie vystaviť <strong>voucher</strong> na zvyšné hodiny v kurze a ten môžete niekomu darovať.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Napriek tomu však všetkých dopredu žiadame, aby zvážili, či na kurz naozaj chcú a môžu chodiť.
            </p>
          </div>

          <div className="mt-8 bg-surface-container rounded-xl p-6">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">description</span>
              Postup pri žiadosti o storno alebo voucher kurzu
            </h4>
            <p className="text-on-surface-variant text-sm">
              Písomnú žiadosť odovzdáte na recepcii V-FIT — športovo-relaxačnom centre.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
