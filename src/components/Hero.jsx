import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import client from '../sanityClient'
import yogaAsana from '../images/yoga-asana-of-a-woman-svgrepo-com.svg'
import yogaLotus from '../images/yoga-lotus-posture-svgrepo-com.svg'
import yogaExercise from '../images/yoga-exercise-svgrepo-com.svg'
import yogaStretching from '../images/woman-standing-practicing-yoga-stretching-posture-svgrepo-com.svg'
import yogaExercise2 from '../images/yoga-exercise-svgrepo-com(1).svg'
import yogaMovement from '../images/yoga-movement-svgrepo-com.svg'

const YOGA_POSES = [
  { src: yogaAsana, className: 'absolute top-[15%] right-[5%] hidden md:block md:w-52 opacity-[0.25] rotate-12' },
  { src: yogaLotus, className: 'absolute top-[55%] right-[25%] hidden md:block md:w-40 opacity-[0.20] -rotate-6' },
  { src: yogaExercise, className: 'absolute top-[10%] right-[30%] hidden md:block md:w-44 opacity-[0.22] rotate-3' },
  { src: yogaStretching, className: 'absolute top-[40%] right-[8%] hidden md:block md:w-56 opacity-[0.28] -rotate-12' },
  { src: yogaExercise2, className: 'absolute top-[70%] right-[15%] hidden md:block md:w-36 opacity-[0.20] rotate-6' },
  { src: yogaMovement, className: 'absolute top-[25%] right-[18%] hidden md:block md:w-48 opacity-[0.22] -rotate-3' },
]

const DEFAULTS = {
  badge: 'športovo-relaxačné centrum od 2004',
  heading: 'Prečo CVIČIŤ vo športovo-relaxačnom centre?',
  headingHighlight: 'V-FIT Bratislava,',
  description: 'Na lekcii je malý počet klientov na cvičení. Máme výborné, skúsené, certifikované lektorky a certifikované fitness tréneri, preto cviky cvičíte správne, a máte motiváciu k pravidelnému cvičeniu. Po cvičení si môžete dať MASÁŽ, PEDIKÚRU, či MANIKÚRU zatiaľ, čo Vaše dieťatko si hraje v Detskom Kútiku, alebo cvičí na detských fitness prístrojoch. Vo V-FIT vás čaká príjemné a čisté prostredie v Bratislave PRIAZNIVÉ CENY za KVALITU!',
}

export default function Hero() {
  const [content, setContent] = useState(DEFAULTS)

  useEffect(() => {
    client
      .fetch(`*[_type == "heroSection"][0]{ badge, heading, headingHighlight, description }`)
      .then((data) => {
        console.log('Sanity data:', data)
        if (data) setContent({ ...DEFAULTS, ...data })
      })
      .catch((err) => console.error('Sanity error:', err))
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        {/* Scattered yoga poses */}
        {YOGA_POSES.map((pose, i) => (
          <img
            key={i}
            src={pose.src}
            alt=""
            className={`${pose.className} pointer-events-none select-none`}
          />
        ))}
      </div>
        {/* Bloom effects */}
        <div className="bloom-effect top-[5%] -right-10" />
        <div className="bloom-effect top-[5%] right-[20%]" style={{ background: '#3b82f6' }} />
        <div className="bloom-effect top-[10%] left-[60%]" style={{ background: '#10b981' }} />
        <div className="bloom-effect top-[15%] -left-10" style={{ background: '#06b6d4' }} />
        <div className="bloom-effect top-[20%] left-[30%]" style={{ background: '#10b981' }} />
        <div className="bloom-effect top-[25%] right-[10%]" style={{ background: '#3b82f6' }} />
        <div className="bloom-effect top-[30%] -right-20" />
        <div className="bloom-effect top-[30%] left-[15%]" style={{ background: '#06b6d4' }} />
        <div className="bloom-effect top-[35%] right-[40%]" style={{ background: '#10b981' }} />
        <div className="bloom-effect top-[40%] -left-20" />
        <div className="bloom-effect top-[45%] left-[50%]" style={{ background: '#3b82f6' }} />
        <div className="bloom-effect top-[50%] right-[5%]" style={{ background: '#10b981' }} />
        <div className="bloom-effect top-[55%] left-[10%]" style={{ background: '#06b6d4' }} />
        <div className="bloom-effect top-[60%] right-[30%]" />
        <div className="bloom-effect top-[60%] -left-10" style={{ background: '#10b981' }} />
        <div className="bloom-effect top-[65%] right-[15%]" style={{ background: '#3b82f6' }} />
        <div className="bloom-effect top-[70%] left-[40%]" style={{ background: '#06b6d4' }} />
        <div className="bloom-effect top-[75%] -right-10" style={{ background: '#10b981' }} />
        <div className="bloom-effect top-[80%] left-[20%]" />
        <div className="bloom-effect top-[85%] right-[25%]" style={{ background: '#3b82f6' }} />
        <div className="bloom-effect top-[90%] -left-20" style={{ background: '#10b981' }} />
        <div className="bloom-effect top-[95%] right-[50%]" style={{ background: '#06b6d4' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">
            {content.badge}
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tighter mb-8">
            {content.heading.split(content.headingHighlight)[0]}
            <span className="text-primary italic">{content.headingHighlight}</span>
            {content.heading.split(content.headingHighlight)[1]}
          </h1>
          <p className="text-lg text-on-surface-variant/70 font-medium leading-relaxed mb-10 max-w-2xl">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/kurzy-marca" className="signature-gradient text-on-primary px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Kurzy od marca 2026
            </Link>
            <Link to="/v-fit" className="flower-btn">
              <div className="flower-wrapper">
                <p className="flower-text">V-FIT</p>
                <div className="flower flower1"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower2"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower3"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower4"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower5"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower6"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
              </div>
            </Link>
            <Link to="/v-fit/stanovy" className="flower-btn">
              <div className="flower-wrapper">
                <p className="flower-text">Stanovy</p>
                <div className="flower flower1"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower2"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower3"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower4"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower5"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
                <div className="flower flower6"><div className="petal one" /><div className="petal two" /><div className="petal three" /><div className="petal four" /></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
