import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RozvrhHodinPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      {/* Header */}
      <section className="pt-56 pb-20 px-8 max-w-7xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-6 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          calendar_month
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-black mb-6">
          Rozvrh cvičenia
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Pre ženy a mládež
        </p>
      </section>

      {/* Info */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-2xl p-10 md:p-14 border border-primary/10 text-center">
          <span
            className="material-symbols-outlined text-primary text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            school
          </span>
          <h2 className="font-headline text-3xl font-bold mb-4">
            Vo V-FIT všetko prebieha formou kurzov
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">
            Kurzy nájdete v sekcii{' '}
            <Link to="/aerobic" className="text-primary font-bold underline">
              Aerobic centrum — Kurzy
            </Link>
            , kde sú vypísané všetky.
          </p>
        </div>
      </section>

      {/* Možnosti */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-4xl">info</span>
          Ak je kurz otvorený
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">confirmation_number</span>
              </div>
              <h3 className="font-headline text-xl font-bold">5 vstupová permanentka</h3>
            </div>
            <p className="text-on-surface-variant mb-4">
              Je možné chodiť aj na 5 vstupovú permanentku na kurzy.
            </p>
            <p className="text-3xl font-black text-primary">55 €</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">add_circle</span>
              </div>
              <h3 className="font-headline text-xl font-bold">Doplatiť zostatok</h3>
            </div>
            <p className="text-on-surface-variant mb-4">
              Doplatiť si zostatok lekcií jednotlivo.
            </p>
            <p className="text-3xl font-black text-primary">10 € <span className="text-base font-normal text-on-surface-variant">/ lekcia</span></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
