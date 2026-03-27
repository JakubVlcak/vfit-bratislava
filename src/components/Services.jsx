import { Link } from 'react-router-dom'
import kruhovyTreningImg from '../images/kruhovy-trening.jpg'

const GYM_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBMP1Y59UdEU5L_1pGLHoEt0Ugzvyhvdn3Pe8MoU7hXGp5n4Up5RzHlk1tsyI4CVqLBHJ2YFQD-O3p-tvt7Vg15Z1zXpHhbrAcrDZoatOfZjg2vRiu-dOhwkKAEQHy7aPaWWhr6DYxNZijxIaC4FwAsDh8yD-64dBeIQPa8IOqdE_N4iPPycAiw_JKD5G52ETP63ZsqVWRCDaPI3pASG_hMs3fzdZA6nF27NHWPB89jqSdD1UOtpXn1v-GXRQumkvLcuhoRCprqHuU'

export default function Services() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Card - Fitness Center */}
        <Link
          to="/fitness"
          className="md:col-span-8 group relative bg-surface-container-low rounded-lg overflow-hidden p-10 min-h-[400px] flex flex-col justify-end cursor-pointer"
        >
          <div className="absolute top-10 right-10">
            <span
              className="material-symbols-outlined text-primary text-5xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              fitness_center
            </span>
          </div>
          <div className="relative z-10">
            <h3 className="font-headline text-3xl font-bold mb-3">
              FITNESS centrum
            </h3>
            <p className="text-on-surface-variant max-w-md mb-6">
              Posilňovňa a kardio zóna vybavená značkou Kettler a DAFE.
              Cvičte individuálne alebo s osobným inštruktorom. Permanentky už od 17,50 €.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
              Zistiť viac{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </div>
          <img
            alt="Gym Equipment"
            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
            src={GYM_IMAGE}
          />
        </Link>

        {/* Aerobic Center */}
        <Link
          to="/aerobic"
          className="md:col-span-4 group bg-tertiary-container/10 rounded-lg p-10 flex flex-col justify-between border border-outline-variant/10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-tertiary text-4xl">
            AEROBIC
          </span>
          <div>
            <h3 className="font-headline text-2xl font-bold mb-2">
              AEROBIC centrum
            </h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Aerobic, joga, pilates, SM Systém a ďalšie skupinové cvičenia pre všetky vekové kategórie.
            </p>
            <span className="inline-flex items-center gap-2 text-tertiary font-bold text-sm group-hover:gap-4 transition-all">
              Zistiť viac{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </div>
        </Link>

        {/* Gift Vouchers */}
        <div className="md:col-span-4 bg-surface-container-high rounded-lg p-10 flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-4xl">
            card_giftcard
          </span>
          <div>
            <h3 className="font-headline text-2xl font-bold mb-2">
              Darčeková poukážka
            </h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Darujte zdravie a vitalitu tým, na ktorých vám záleží.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/darcekova-poukazka"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all"
              >
                Darčeková poukážka{' '}
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                to="/vyhody"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all"
              >
                Výhody pre členov{' '}
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Corporate Programs */}
        <div className="md:col-span-8 bg-on-background rounded-lg p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          <div className="relative z-10">
            <Link to="/ponuka-firmy">
              <h3 className="font-headline text-3xl font-bold text-surface-bright mb-3 hover:text-primary-fixed transition-colors">
                Ponuka pre firmy
              </h3>
            </Link>
            <p className="text-surface-variant max-w-sm mb-6">
              Výhodné permanentky pre vašich zamestnancov. Využite finančné prostriedky zo sociálneho fondu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ponuka-firmy/zdrave-cvicenie"
                className="inline-flex items-center gap-2 text-primary-fixed font-bold hover:gap-4 transition-all"
              >
                Zdravé cvičenie{' '}
                <span className="material-symbols-outlined">fitness_center</span>
              </Link>
              <Link
                to="/ponuka-firmy/reklamna-spolupraca"
                className="inline-flex items-center gap-2 text-primary-fixed font-bold hover:gap-4 transition-all"
              >
                Reklamná spolupráca{' '}
                <span className="material-symbols-outlined">handshake</span>
              </Link>
            </div>
          </div>
          <div className="bloom-effect -right-20 -bottom-20 opacity-30" />
        </div>

        {/* Kruhový tréning */}
        <Link
          to="/kruhovy-trening"
          className="md:col-span-8 group relative bg-secondary-container/10 rounded-lg overflow-hidden p-10 min-h-[300px] flex flex-col justify-end border border-outline-variant/10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-secondary text-4xl relative z-10">
            sync
          </span>
          <div className="relative z-10">
            <h3 className="font-headline text-2xl font-bold mb-2">
              Kruhový tréning
            </h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Kruhový tréning predstavuje spôsob, ktorým je možné zredukovať tuk, formovať svaly a súčasne rozvíjať kondíciu. Jeho výhoda spočíva aj v tom, že je na rozdiel od dosť jednotvárneho aeróbneho tréningu pomerne pestrý.
            </p>
            <span className="inline-flex items-center gap-2 text-secondary font-bold text-sm group-hover:gap-4 transition-all">
              Zistiť viac{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </div>
          <img
            alt="Kruhový tréning"
            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
            src={kruhovyTreningImg}
          />
        </Link>
      </div>
    </section>
  )
}
