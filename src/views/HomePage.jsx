import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Schedule from '../components/Schedule'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import yogaAsana from '../images/yoga-asana-of-a-woman-svgrepo-com.svg'
import yogaLotus from '../images/yoga-lotus-posture-svgrepo-com.svg'
import yogaExercise from '../images/yoga-exercise-svgrepo-com.svg'
import yogaStretching from '../images/woman-standing-practicing-yoga-stretching-posture-svgrepo-com.svg'
import yogaExercise2 from '../images/yoga-exercise-svgrepo-com(1).svg'
import yogaMovement from '../images/yoga-movement-svgrepo-com.svg'

const YOGA_DECORATIONS = [
  // Top right
  { src: yogaAsana, className: 'absolute top-[5%] -right-6 hidden md:block w-48 h-48 opacity-[0.15] rotate-12 pointer-events-none' },
  // Upper left
  { src: yogaLotus, className: 'absolute top-[20%] -left-6 hidden md:block w-40 h-40 opacity-[0.18] -rotate-6 pointer-events-none' },
  // Middle right
  { src: yogaExercise, className: 'absolute top-[40%] -right-8 hidden md:block w-56 h-56 opacity-[0.15] rotate-3 pointer-events-none' },
  // Middle left
  { src: yogaStretching, className: 'absolute top-[55%] -left-8 hidden md:block w-44 h-44 opacity-[0.18] -rotate-12 pointer-events-none' },
  // Lower right
  { src: yogaExercise2, className: 'absolute top-[75%] -right-6 hidden md:block w-52 h-52 opacity-[0.15] rotate-6 pointer-events-none' },
  // Bottom left
  { src: yogaMovement, className: 'absolute top-[0%] -left-4 hidden md:block w-30 h-48 opacity-[0.18] -rotate-3 pointer-events-none' },
]

export default function HomePage() {
  return (
    <>
    
      <Navbar />
      
      <main className="relative overflow-hidden">
       
        {/* Yoga decorations along the sides */}
        {YOGA_DECORATIONS.map((pose, i) => (
          <img key={i} src={pose.src} alt="" className={pose.className} />
        ))}

        <Hero />
        
        <Services />
        <Contact />
        
      </main>
      <Footer />
    </>
  )
}
