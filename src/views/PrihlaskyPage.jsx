import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrihlaskyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          how_to_reg
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Prihlášky na kurz
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Kontakt a prihlásenie na kurz
        </p>
      </section>

      {/* Info */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center">
          <h2 className="font-headline text-2xl font-bold mb-4">
            V-FIT — športovo-relaxačné centrum, o.z.
          </h2>
          <p className="text-on-surface-variant text-lg">
            Prihlasovanie sa na kurzy a informácie o kurzoch
          </p>
        </div>
      </section>

      {/* Úhrada */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-2xl p-10 md:p-14 text-surface-bright text-center">
          <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">account_balance</span>
          <h2 className="font-headline text-2xl font-bold mb-4">Číslo účtu pre úhradu za kurz</h2>
          <div className="bg-surface-bright/10 rounded-xl p-6 inline-block">
            <p className="font-mono font-bold text-xl text-surface-bright">
              SK38 0200 0000 0027 8709 3958
            </p>
          </div>
        </div>
      </section>

      {/* Prihlásenie */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              mail
            </span>
            <h2 className="font-headline text-3xl font-bold">Ako sa prihlásiť</h2>
          </div>
          <p className="text-on-surface-variant text-lg mb-6">
            Pošlite e-mailom na{' '}
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold">
              vfit.petrzalka@gmail.com
            </a>{' '}
            nasledujúce údaje:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: 'person', text: 'Meno a priezvisko' },
              { icon: 'cake', text: 'Rok narodenia (u detí celý dátum)' },
              { icon: 'phone', text: 'Číslo telefónu' },
              { icon: 'alternate_email', text: 'Váš e-mail' },
            ].map((item) => (
              <div
                key={item.text}
                className="bg-primary/5 rounded-xl p-6 flex items-center gap-4"
              >
                <span
                  className="material-symbols-outlined text-primary text-2xl shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                <p className="text-sm font-bold">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-primary font-bold text-lg text-center">
            A budete prihlásená na kurz.
          </p>
        </div>
      </section>

      {/* Kontaktné údaje */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-4xl">contact_phone</span>
          Kontaktné údaje
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">phone</span>
            <p className="font-bold mb-1">Telefón</p>
            <a href="tel:+421903174885" className="text-primary font-bold text-lg">
              +421 (0) 903 174 885
            </a>
            <p className="text-on-surface-variant text-sm mt-1">doobeda, inak SMS</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">email</span>
            <p className="font-bold mb-1">E-mail</p>
            <a href="mailto:vfit.petrzalka@gmail.com" className="text-primary font-bold text-lg">
              vfit.petrzalka@gmail.com
            </a>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">person</span>
            <p className="font-bold mb-1">Kontaktná osoba</p>
            <p className="text-on-surface-variant">
              Helena Petrášová alebo recepčná pri volaní na recepciu
            </p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">business</span>
            <p className="font-bold mb-1">IČO</p>
            <p className="text-on-surface-variant">42180287</p>
          </div>
        </div>
      </section>

      {/* Adresa */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-tertiary-container/10 rounded-2xl p-10 md:p-14 border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="material-symbols-outlined text-tertiary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <h2 className="font-headline text-2xl font-bold">Poštová adresa</h2>
          </div>
          <p className="text-on-surface-variant text-lg mb-1 font-bold">
            V-FIT — športovo-relaxačné centrum, o.z.
          </p>
          <p className="text-on-surface-variant text-lg">
            Gercenova 8/F, 851 02 Bratislava-Petržalka
          </p>
        </div>
      </section>

      {/* Miesto konania */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 text-center">
          <span
            className="material-symbols-outlined text-primary text-4xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            place
          </span>
          <h3 className="font-headline text-xl font-bold mb-4">Miesto konania kurzov</h3>
          <p className="text-on-surface-variant mb-4">
            Bratislava — bližšie info o termínoch konania kurzov nájdete v
          </p>
          <Link
            to="/aerobic"
            className="inline-flex items-center gap-2 signature-gradient text-on-primary px-8 py-4 rounded-full font-bold hover:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined">AEROBIC KURZY</span>
           
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
