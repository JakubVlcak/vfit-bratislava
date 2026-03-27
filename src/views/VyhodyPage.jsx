import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const VYHODY = [
  {
    num: '1',
    title: 'Náhrady dospeláckych kurzov',
    description:
      'Spolu so zaplateným kurzom získavate 2 Vouchery, ktoré môžete použiť v čase trvania vášho kurzu ako náhradu za nevyčerpané lekcie. Môžete sa zúčastniť iného kurzu v čase trvania Vášho kurzu po odovzdaní Voucheru na recepcii.',
    icon: 'confirmation_number',
  },
  {
    num: '2',
    title: 'Náhrady pri chorobe',
    description:
      'V prípade choroby dlhšej ako 2 týždne si prineste potvrdenie od lekára a vystavíme Vám voucher na vynechané hodiny a odrátané budú z ďalšieho kurzu. Platí pre dospeláckych aj detských kurzov.',
    icon: 'medical_services',
  },
  {
    num: '3',
    title: 'Akciová permanentka na 5 vstupov',
    description:
      'Akciová permanentka na 5 vstupov za 55 € pre kurz na vyskúšanie, či je kurz pre vás vhodný. Cena hodiny v kurzu je 10 €. Na permanentku si doplatíte o 1 € viac na hodinu. Môžete si vyskúšať, ktorý kurz bude pre Vás najvhodnejší a môžete si potom doplatiť zostatok hodín v kurze za zníženú cenu 10 €.',
    icon: 'loyalty',
  },
  {
    num: '4',
    title: 'Zľava pri 2 kurzoch',
    description:
      'Klient ak platí 2 kurzy má zľavu 5 € na každý kurz, spolu 10 €.',
    icon: 'savings',
  },
]

export default function VyhodyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Výhody pre členov
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Rok 2026 vo V-FIT — žiadne ročné viazanosti
        </p>
      </section>

      {/* Novinka - Bonus */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            Novinka
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            Priveďte nového člena a získajte BONUS
          </h2>
          <div className="inline-block bg-primary/10 rounded-full px-10 py-4 mb-4">
            <span className="text-4xl font-black text-primary">10 €</span>
          </div>
          <p className="text-on-surface-variant text-lg">
            na ďalší kurz
          </p>
        </div>
      </section>

      {/* Výhody */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
          Vaše výhody
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VYHODY.map((v) => (
            <div
              key={v.num}
              className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-primary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {v.icon}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold">{v.title}</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pozvánka */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
            Tak príďte k nám do V-FIT — športovo-relaxačného centra na Gercenovej 8/F, Bratislava Petržalka.
            Ceny kurzov pre Vašu peňaženku nebudú záťažou — <strong>LEN 10 €/hod. v kurze</strong> a každý
            lektor u nás má certifikát.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Kolektív našich trénerov verí, že nám ostanete verní aj naďalej.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="material-symbols-outlined text-primary-fixed text-3xl mb-3 block">email</span>
              <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary-fixed font-bold">
                vfit.petrzalka@gmail.com
              </a>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary-fixed text-3xl mb-3 block">language</span>
              <p className="text-primary-fixed font-bold">www.v-fit.sk</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary-fixed text-3xl mb-3 block">sms</span>
              <a href="tel:+421903174885" className="text-primary-fixed font-bold">0903/174 885</a>
              <p className="text-surface-variant text-sm mt-1">SMS</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-surface-variant text-sm">Číslo účtu:</p>
            <p className="font-mono font-bold text-lg text-surface-bright mt-1">
              SK38 0200 0000 0027 8709 3958
            </p>
          </div>
          <p className="text-surface-variant text-sm text-center mt-8">
            V Bratislave 18. 11. 2025
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
