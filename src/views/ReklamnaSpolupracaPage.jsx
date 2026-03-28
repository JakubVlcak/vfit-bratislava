import Navbar from '../components/Navbar'

export default function ReklamnaSpolupracaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-52 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black font-headline text-on-surface mb-8">
            Reklamná spolupráca
          </h1>

          <div className="bg-surface-container-low rounded-2xl p-8 space-y-6 text-on-surface/80 leading-relaxed">
            <h2 className="text-xl font-bold text-on-surface">REKLAMNÁ PLOCHA</h2>

            <p>
              V priestoroch V-FIT – športovo relaxačného štúdia,
              Gercenova 8/F, Petržalka-Dvory
            </p>

            <p>
              Na vyhradených miestach si môžete umiestniť reklamu Vašej spoločnosti.
            </p>

            <p>
              Informácie o umiestnení reklamnej plochy získate na tel. č.{' '}
              <span className="font-semibold">0903/174 885</span>,
              alebo zašlete E-mail:{' '}
              <a href="mailto:vfit.petrzalka@gmail.com" className="text-emerald-600 hover:underline font-semibold">
                vfit.petrzalka@gmail.com
              </a>
            </p>

            <p>
              Naše priestory a rozmanitá klientela sú ideálne na umiestnenie reklamy vašej firmy,
              resp. produktu. Ponúkame reklamnú plochu nad čelnými a bočnými stenami aerobicovej sály
              a viacúčelovej telocvične. Reklamné plochy máme vyhradené aj v ostatných častiach
              (posilňovňa, relaxačné priestory, šatne, chodby, vstupný vestibul …).
            </p>

            <p>
              Takisto Vám ponúkame reklamnú plochu na našej internetovej stránke.
            </p>

            <p>Neváhajte nás kontaktovať.</p>
          </div>
        </div>
      </main>
    </>
  )
}
