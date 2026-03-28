import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import yogaAsana from '../images/yoga-asana-of-a-woman-svgrepo-com.svg'
import yogaLotus from '../images/yoga-lotus-posture-svgrepo-com.svg'
import yogaExercise from '../images/yoga-exercise-svgrepo-com.svg'
import yogaStretching from '../images/woman-standing-practicing-yoga-stretching-posture-svgrepo-com.svg'
import yogaExercise2 from '../images/yoga-exercise-svgrepo-com(1).svg'
import yogaMovement from '../images/yoga-movement-svgrepo-com.svg'

const YOGA_DECORATIONS = [
  { src: yogaAsana, className: 'absolute -top-50 right-10 hidden md:block w-48 h-48 opacity-[0.15] rotate-12 pointer-events-none' },
  { src: yogaLotus, className: 'absolute top-40 -left-10 hidden md:block w-40 h-40 opacity-[0.18] -rotate-6 pointer-events-none' },
  { src: yogaExercise, className: 'absolute bottom-10 right-0 hidden md:block w-56 h-56 opacity-[0.15] rotate-3 pointer-events-none' },
  { src: yogaStretching, className: 'absolute top-20 -left-8 hidden md:block w-44 h-44 opacity-[0.18] -rotate-12 pointer-events-none' },
  { src: yogaExercise2, className: 'absolute bottom-20 right-8 hidden md:block w-52 h-52 opacity-[0.15] rotate-6 pointer-events-none' },
  { src: yogaMovement, className: 'absolute top-10 left-4 hidden md:block w-48 h-48 opacity-[0.18] -rotate-3 pointer-events-none' },
]

const CONTACT_INFO = [
  {
    icon: 'location_on',
    title: 'Adresa',
    detail: (
      <>
        V-FIT - športovo-relaxačné centrum, o.z.
        <br />
        Gercenova 8/F
        <br />
        851 01 Bratislava 5 / Petržalka-Dvory/
        <br />
        Slovakia (European Union)
      </>
    ),
  },
  {
    icon: 'email',
    title: 'E-mail',
    detail: (
      <a
        href="mailto:vfit.petrzalka@gmail.com"
        className="text-primary hover:underline"
      >
        vfit.petrzalka@gmail.com
      </a>
    ),
  },
  {
    icon: 'language',
    title: 'Webová stránka',
    detail: (
      <a
        href="http://www.v-fit.sk/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        www.v-fit.sk
      </a>
    ),
  },
  {
    icon: 'phone_iphone',
    title: 'Mobil',
    detail: (
      <>
        <a href="tel:+421903174885" className="text-primary hover:underline">
          +421 903 17 48 85
        </a>
        <span className="block text-sm text-on-surface-variant/60 mt-1">
          (doobeda 14, inak SMS)
        </span>
      </>
    ),
  },
  {
    icon: 'badge',
    title: 'IČO',
    detail: '42180287',
  },
  {
    icon: 'receipt_long',
    title: 'DIČ',
    detail: '2023089552',
  },
  {
    icon: 'account_balance',
    title: 'Bankové spojenie',
    detail: (
      <>
        SK38 0200 0000 0027 8709 3958
        <br />
        VUB banka Bratislava
      </>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20 relative overflow-hidden">
        {/* Yoga Decorations */}
        {YOGA_DECORATIONS.map((pose, i) => (
          <img key={i} src={pose.src} alt="" className={pose.className} />
        ))}
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">
            Kontakt
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tighter mb-6">
            Spojte sa s <span className="text-primary italic">V-FIT</span>
          </h1>
          <p className="text-lg text-on-surface-variant/70 font-medium max-w-2xl">
            Ak budete mať akékoľvek pripomienky, otázky, alebo sebamenšie dôvody
            k nespokojnosti, napíšte nám.
          </p>
        </section>

        {/* Contact Info */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact details */}
            <div className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wide text-on-surface-variant/60 mb-1">
                      {item.title}
                    </p>
                    <p className="text-on-surface font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Team card + Hygiene */}
            <div className="space-y-8">
              {/* Team Card */}
              <div className="bg-on-background rounded-lg p-8 relative overflow-hidden">
                <div className="bloom-effect -right-20 -bottom-20 opacity-20" />
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold text-surface-bright mb-4">
                    Za kolektív V-FIT
                  </h3>
                  <p className="text-surface-variant font-medium mb-2">
                    Helena Petrášová
                  </p>
                  <p className="text-surface-variant/70 text-sm mb-4">
                    trénerka, lektorka, masérka, pedikérka
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href="tel:+421903174885"
                      className="inline-flex items-center gap-2 text-primary-fixed font-bold"
                    >
                      <span className="material-symbols-outlined text-base">
                        call
                      </span>
                      0903/174885
                      <span className="text-surface-variant/50 font-normal">
                        (do 14 h.)
                      </span>
                    </a>
                    <a
                      href="mailto:vfit.petrzalka@gmail.com"
                      className="inline-flex items-center gap-2 text-primary-fixed font-bold"
                    >
                      <span className="material-symbols-outlined text-base">
                        email
                      </span>
                      vfit.petrzalka@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hygiene Notice */}
              <div className="flex items-start gap-4 p-5 rounded-lg bg-primary-container/10 border border-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl shrink-0">
                  health_and_safety
                </span>
                <p className="text-sm text-on-surface-variant font-medium">
                  V platnosti zostáva zvýšená dezinfekcia dotykových plôch,
                  kľúčiek, pomôcok, podložiek a strojov.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map - full width */}
        <section className="max-w-7xl mx-auto px-8 mt-20">
          <div className="rounded-lg overflow-hidden shadow-2xl" style={{ height: '500px' }}>
            <iframe
              title="V-FIT Bratislava - Gercenova 8/F"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.5!2d17.1069!3d48.1219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8b3a1f1b1b1b%3A0x0!2sGercenova%208%2FF%2C%20851%2001%20Bratislava!5e0!3m2!1ssk!2ssk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
