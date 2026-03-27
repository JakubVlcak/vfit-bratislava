import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BodyWorkPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-6xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">BODY WORK — FORMUJ telo</h1>
      </section>

      {/* Špeciál 1 */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">Kurz Špeciál 1</span>
          <h2 className="font-headline text-3xl font-bold mb-4">BODY WORK — FORMUJ SVOJE TELO</h2>
          <p className="text-on-surface-variant text-sm mb-6">Kurz vhodný pre náročnejších.</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-primary text-base">calendar_today</span>UTOROK
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-primary text-base">schedule</span>od 19:00
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm text-on-surface-variant">24.3.26 — 26.5.26</span>
          </div>
          <div className="bg-surface-container rounded-xl p-6 mb-6 inline-block">
            <p className="text-3xl font-black text-primary mb-1">100 €</p>
            <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Lektorka je živé striebro — akčná, veselá a empatická. Rýchlejším tempom sa zbavíte tukových vankúšikov a posilníte a spevníte všetky svalové partie tela. Lektorka používa aj moderné pomôcky — Bosu, Fit lopty, stepy, činky, elastické pásy, overbally a iné. Zabavíte sa a najmä kvalitne zacvičíte.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Vhodné aj pre ženy po pôrode, mladšie ženy, ktoré si potrebujú vyladiť svoju postavu, ale aj pre ženy v neskoršom veku, ktoré nemajú závažné zdravotné problémy a majú záujem si udržať svoje krivky čo najdlhšie.
          </p>
        </div>
      </section>

      {/* Špeciál 2 */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <span className="inline-block py-1 px-4 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold tracking-widest uppercase mb-6">Kurz Špeciál 2</span>
          <h2 className="font-headline text-3xl font-bold mb-4">FIT — Body work — zdravie a kondícia</h2>
          <p className="text-on-surface-variant text-sm mb-6">Vhodné aj pre staršiu generáciu na posilnenie tela.</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-tertiary text-base">calendar_today</span>ŠTVRTOK
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-tertiary text-base">schedule</span>od 19:00
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm text-on-surface-variant">8.1.26 — 12.3.26</span>
          </div>
          <div className="bg-surface-container rounded-xl p-6 mb-6 inline-block">
            <p className="text-3xl font-black text-tertiary mb-1">100 €</p>
            <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Lektorka je živé striebro — akčná, veselá a empatická, vie pracovať aj v miernejšom tempe, ale účinnom cvičení. Zameriavame sa na zlepšenie a udržanie pohybového aparátu s použitím rôzneho náčinia — ľahké činky, Bosu, Fit lopty, overbally a elastické pásy.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Nový kurz je zdravé a efektívne cvičenie pre všetkých. Zoštíhlite si pás, odstránite celulitídu, odstránite bolesti chrbta, získate ladné pohyby a držanie tela. Naučíte sa, ako používať ľudské telo, aby bolo ZDRAVÉ, ŠTÍHLE a NEBOLELO.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Stačí už len sa rozhodnúť, čo s vaším telíčkom plánujete ďalej a prihlásiť sa.
          </p>
        </div>
      </section>

      {/* Motivácia */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 text-center">
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Práve teraz je čas urobiť pre svoju postavu a zdravie niečo viac než len každodenný výstup na váhu.
            Potrebujete odbúrať tuky, spevniť telo a pritom cvičiť správne?
            Pre všetkých, ktorí majú chuť sa odreagovať a pritom si tvarovať postavu snov.
          </p>
        </div>
      </section>

      {/* Prihlášky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-4">Prijímame prihlášky</h2>
          <p className="text-surface-variant mb-6">Jedna cvičebná hodina trvá 50 min.</p>
          <a href="tel:+421903174885" className="text-primary-fixed font-bold">+421 903 17 48 85</a>
          <p className="text-surface-variant text-sm mt-1">doobeda, inak SMS</p>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block mt-6">
            <p className="font-mono font-bold text-lg text-surface-bright">SK38 0200 0000 0027 8709 3958</p>
            <p className="text-surface-variant text-sm mt-2">VS — termín kurzu, poznámka — typ kurzu a meno a priezvisko (info: 0903/174 885 — 9:00 — 14:00 h.)</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
