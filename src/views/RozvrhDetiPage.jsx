import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SM_BENEFITS = [
  'základy správneho držania tela',
  'cvičenie na posilnenie chrbtových svalov',
  'prevencia bolesti chrbta',
  'podpora zdravého rastu a vývoja',
]

export default function RozvrhDetiPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          child_care
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Cvičenia detí
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Kurzy pre deti — rok 2026–2027 vo V-FIT Bratislava
        </p>
        <p className="text-on-surface-variant mt-2">
          Cvičebná hodina trvá 50 minút.
        </p>
      </section>

      {/* SM Systém pre deti */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <span className="inline-block py-1 px-4 rounded-full bg-tertiary/20 text-tertiary text-xs font-bold tracking-widest uppercase mb-6">
            Novinka
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            SM SYSTÉM — pre DETI od 8 rokov
          </h2>
          <p className="text-on-surface-variant text-lg mb-4">
            Zlepšenie stavu tela a naučiť sa správne pohybovať.
          </p>
          <p className="text-on-surface-variant text-lg mb-8">
            Nechcete ploché nohy, skoliózu, guľatý chrbát, bolesti chrbta, nesprávne držanie tela?
            Poďme spolu cvičiť.
          </p>

          <ul className="space-y-3 mb-10">
            {SM_BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">done</span>
                {b}
              </li>
            ))}
          </ul>

          {/* Termín */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-surface-container rounded-2xl p-8 text-center">
              <span className="material-symbols-outlined text-primary text-3xl mb-3">calendar_today</span>
              <p className="font-bold text-lg mb-1">UTOROK</p>
              <p className="text-on-surface-variant text-sm">od 16:00 h.</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-8 text-center">
              <span className="material-symbols-outlined text-primary text-3xl mb-3">date_range</span>
              <p className="font-bold text-lg mb-1">13.1.26 — 17.3.26</p>
              <p className="text-on-surface-variant text-sm">10 lekcií</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-8 text-center">
              <span className="material-symbols-outlined text-primary text-3xl mb-3">person</span>
              <p className="font-bold text-sm">Lektorka</p>
              <p className="text-on-surface-variant text-sm mt-1">
                Helena Petrášová — certifikovaná lektorka SM systému
              </p>
            </div>
          </div>

          {/* Lano info */}
          <div className="bg-surface-container rounded-xl p-6">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">inventory_2</span>
              Pomôcky — lano (30 €)
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Na cvičenie je potrebné si zakúpiť za 30 € aj lano navrhnuté špeciálne pre optimálne
              cvičenie SM systém, vyrábané podľa precíznych požiadaviek MUDr. Smíška z prvotriednych
              materiálov, alebo si prineste svoje, ak ste si už niekde obstarali. Z hygienických dôvodov
              lano nezapožičiavame. Elastické lano patrí k nevyhnutným pomôckam pre cvičenie SM Systém
              a cvičenie ním je pohodlné a zároveň vysoko účinné. S lanom cvičíte aj doma a na kurz je
              potrebné si ho nosiť.
            </p>
          </div>
        </div>
      </section>

      {/* Prihlášky */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">how_to_reg</span>
          <h2 className="font-headline text-2xl font-bold mb-6">Prihlášky</h2>
          <p className="text-surface-variant mb-6">
            Prosím prihlasujte sa na kurzy a môžete uhrádzať.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary-fixed font-bold">
              vfit.petrzalka@gmail.com
            </a>
            <span className="text-surface-variant hidden md:inline">·</span>
            <p className="text-surface-variant">
              telefonicky do 14 h. alebo SMS —{' '}
              <a href="tel:+421903174885" className="text-primary-fixed font-bold">0903/174 885</a>
            </p>
          </div>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block">
            <p className="text-surface-variant text-sm mb-1">Úhrady vopred na účet:</p>
            <p className="font-mono font-bold text-lg text-surface-bright">
              SK38 0200 0000 0027 8709 3958
            </p>
            <p className="text-surface-variant text-sm mt-2">
              do poznámky: meno a priezvisko dieťaťa + názov kurzu
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
