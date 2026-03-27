import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FitBodyWorkPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          fitness_center
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          FIT — Body work
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Zdravie a kondícia — vhodné aj pre staršiu generáciu na posilnenie tela
        </p>
      </section>

      {/* Kurz Špeciál 2 */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            Kurz Špeciál 2
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            FIT — Body work — zdravie a kondícia
          </h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Vhodné aj pre staršiu generáciu na posilnenie tela.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-primary text-base">calendar_today</span>ŠTVRTOK
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm font-bold">
              <span className="material-symbols-outlined text-primary text-base">schedule</span>od 19:00
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container rounded-full px-4 py-2 text-sm text-on-surface-variant">
              19.3.26 — 21.5.26
            </span>
          </div>
          <div className="bg-surface-container rounded-xl p-6 mb-6 inline-block">
            <p className="text-3xl font-black text-primary mb-1">100 €</p>
            <p className="text-on-surface-variant text-sm">10 lekcií / 50 min.</p>
          </div>
        </div>
      </section>

      {/* Popis kurzu */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">description</span>
            O kurze
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Zameriavame sa na zlepšenie a udržanie pohybového aparátu s použitím rôzneho náčinia — ľahké činky, Bosu, Fit lopty, tyče, overbally a elastické pásy. Nový kurz je zdravé a efektívne cvičenie pre všetkých. Vhodné aj pre ženy po pôrode.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Zoštíhlite si pás, odstránite celulitídu, odstránite bolesti chrbta, získate ladné pohyby a držanie tela. Naučíte sa, ako používať ľudské telo, aby bolo ZDRAVÉ, ŠTÍHLE a NEBOLELO.
          </p>
        </div>
      </section>

      {/* Benefity */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10">Čo získate</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'monitor_weight', title: 'Zoštíhlenie pásu', desc: 'Zbavíte sa nadbytočných centimetrov a tukových vankúšikov.' },
            { icon: 'spa', title: 'Odstránenie celulitídy', desc: 'Efektívne cvičenie pre hladkú a pevnú pokožku.' },
            { icon: 'accessibility_new', title: 'Ladné pohyby', desc: 'Získate ladné pohyby a správne držanie tela.' },
            { icon: 'healing', title: 'Bez bolesti chrbta', desc: 'Odstránite bolesti chrbta a posilníte pohybový aparát.' },
            { icon: 'pregnant_woman', title: 'Aj po pôrode', desc: 'Kurz je vhodný aj pre ženy po pôrode.' },
            { icon: 'elderly', title: 'Pre staršiu generáciu', desc: 'Vhodné aj pre staršiu generáciu na posilnenie tela.' },
          ].map((item) => (
            <div key={item.title} className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <span
                className="material-symbols-outlined text-primary text-3xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <h3 className="font-headline font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Náčinie */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">inventory_2</span>
          Používané náčinie
        </h2>
        <div className="flex flex-wrap gap-3">
          {['Ľahké činky', 'Bosu', 'Fit lopty', 'Tyče', 'Overbally', 'Elastické pásy'].map((item) => (
            <span
              key={item}
              className="bg-surface-container-low border border-outline-variant/10 rounded-full px-5 py-3 text-sm font-bold"
            >
              {item}
            </span>
          ))}
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
