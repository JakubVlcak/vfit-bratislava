import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function PonukaFirmyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-52 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black font-headline text-on-surface mb-8">
            Ponuka pre FIRMY – Permanentky
          </h1>

          <div className="bg-surface-container-low rounded-2xl p-8 space-y-6 text-on-surface/80 leading-relaxed">
            <p>
              Za týmto účelom poskytujeme pre firmy výhodné permanentky,
              ktoré vám umožňujú vybrať vhodnú kombináciu zo všetkých nami
              poskytovaných služieb pre <strong>vašich zamestnancov</strong>.
            </p>

            <p>
              <strong>Výhodou</strong> zamestnávateľa je možnosť využiť na tento účel
              finančné prostriedky zo sociálneho fondu.
            </p>

            <p>
              Pre viac informácií nás neváhajte kontaktovať (viď{' '}
              <Link to="/contact" className="text-emerald-600 hover:underline font-semibold">
                Kontakty
              </Link>
              ).
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
