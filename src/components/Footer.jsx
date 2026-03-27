import { Link } from 'react-router-dom'
import logoImg from '../images/logo.png'
import yogaLotus from '../images/yoga-lotus-posture-svgrepo-com.svg'
import yogaStretching from '../images/woman-standing-practicing-yoga-stretching-posture-svgrepo-com.svg'

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[2rem] mt-20 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
      <img src={yogaLotus} alt="" className="absolute top-4 right-8 hidden md:block w-32 h-32 opacity-[0.08] rotate-12 pointer-events-none" />
      <img src={yogaStretching} alt="" className="absolute bottom-4 left-8 hidden md:block w-36 h-36 opacity-[0.08] -rotate-6 pointer-events-none" />
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-7xl mx-auto font-body text-sm">
        <div className="mb-8 md:mb-0">
          <Link to="/">
            <img
              alt="V-Fit Logo"
              className="w-20 h-20 object-contain"
              src={logoImg}
            />
          </Link>
          <p className="text-zinc-500 mt-4">
            &copy; 2026 V-FIT Bratislava. Všetky práva vyhradené.
          </p>
        </div>
        <div className="flex gap-8">
          <Link to="/contact" className="text-zinc-500 hover:text-emerald-400 hover:translate-y-[-2px] transition-all duration-300">
            Kontakt
          </Link>
          <Link to="/v-fit" className="text-zinc-500 hover:text-emerald-400 hover:translate-y-[-2px] transition-all duration-300">
            O nás
          </Link>
          <Link to="/v-fit/stanovy" className="text-zinc-500 hover:text-emerald-400 hover:translate-y-[-2px] transition-all duration-300">
            Stanovy
          </Link>
          
        </div>
      </div>
    </footer>
  )
}
