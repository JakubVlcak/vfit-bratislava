import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../images/logo.png'

const NAV_LINKS = [
  { label: 'Aktuálne informácie', to: '/aktualne' },
  {
    label: 'Aerobic centrum',
    to: '/aerobic',
    children: [
      { label: 'Informácie o cvičeniach', to: '/aerobic/informacie' },
      { label: 'Informácie pre vás', to: '/aerobic/informacie-pre-vas' },
      { label: 'Darčeková poukážka', to: '/aerobic/darcekova-poukazka' },
      { label: 'Akcie dospelí', to: '/aerobic/akcie-dospeli' },
      { label: 'Rozvrh hodín', to: '/aerobic/rozvrh' },
      { label: 'Otváracie hodiny', to: '/aerobic/otvaracie-hodiny' },
      { label: 'SM systém pre tehotné', to: '/aerobic/sm-system-tehotne' },
    ],
  },
  {
    label: 'Kurzy od marca 2026',
    to: '/kurzy-marca',
    children: [
      { label: 'Pilates', to: '/kurzy-marca/pilates' },
      { label: 'Power Joga', to: '/kurzy-marca/power-joga' },
      { label: 'Joga pre zdravý chrbát', to: '/kurzy-marca/joga-zdravy-chrbat' },
      { label: 'SM Systém', to: '/kurzy-marca/sm-system' },
      { label: 'Zdravý chrbát', to: '/kurzy-marca/zdravy-chrbat' },
      { label: 'Body Work', to: '/kurzy-marca/body-work' },
      { label: 'FIT - Body Work 2', to: '/kurzy-marca/fit-body-work' },
    ],
  },
  {
    label: 'Rozvrhy',
    to: '/rozvrhy',
    children: [
      { label: 'Rozvrh deti', to: '/rozvrhy/deti' },
    ],
  },
  {
    label: 'Energy štúdio',
    to: '/energy-studio',
    children: [
      { label: 'Výrobky k vnútornému použitiu', to: '/energy-studio/vyrobky-vnutorne' },
      { label: 'Výrobky k vonkajšiemu použitiu', to: '/energy-studio/vyrobky-vonkajsie' },
      { label: 'Ostatné výrobky', to: '/energy-studio/ostatne-vyrobky' },
      { label: 'Výrobky Energy', to: '/energy-studio/vyrobky-energy' },
    ],
  },

  { label: 'Úhrada kurzov', to: '/uhrada-kurzov' },
  { label: 'Akcie', to: '/akcie' },
  { label: 'Kontakt', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl">
      
      <div className="flex justify-between items-center px-8 max-w-7xl mx-auto py-6">
        <Link
          to="/"
          className="text-2xl font-black text-emerald-600 tracking-tighter font-headline flex-shrink-0"
          onClick={closeMenu}
        >
          <img
            alt="V-Fit Logo"
            className="w-35 h-20 object-contain flex-shrink-0"
            src={logoImg}
          />
        
        </Link>
        

        {/* Desktop nav */}
        
        <div className="hidden xl:flex items-center gap-5 font-plus-jakarta-sans font-bold tracking-tight text-[15px] whitespace-nowrap">
          
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <Link
                  to={link.to}
                  className="text-zinc-600 hover:text-emerald-500 transition-colors inline-flex items-center gap-1"
                >
                  {link.label}
                  <span className="material-symbols-outlined text-base group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </Link>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-surface border border-outline-variant/20 rounded-lg shadow-xl py-2 min-w-[240px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-5 py-3 text-sm text-zinc-600 hover:text-emerald-500 hover:bg-primary/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="text-zinc-600 hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <Link to="/prihlasky" className="hidden xl:block ml-6 signature-gradient text-on-primary px-8 py-3 rounded-full font-bold hover:scale-95 transition-all duration-200 ease-in-out whitespace-nowrap flex-shrink-0">
          Prihlásenie na kurz
        </Link>

        {/* Hamburger button */}
        <button
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10 px-8 py-4 space-y-1 overflow-y-auto max-h-[70vh]">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={link.to}
                    className="block py-3 text-zinc-600 hover:text-emerald-500 font-bold transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="p-2 text-zinc-400 hover:text-emerald-500 transition-colors"
                    aria-label={`Rozbaliť ${link.label}`}
                  >
                    <span className={`material-symbols-outlined text-xl transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-200 ${openDropdown === link.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l-2 border-emerald-500/20 ml-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block py-2 text-sm text-zinc-500 hover:text-emerald-500 transition-colors"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="block py-3 text-zinc-600 hover:text-emerald-500 font-bold transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/prihlasky"
            className="block mt-4 text-center signature-gradient text-on-primary px-8 py-3 rounded-full font-bold"
            onClick={closeMenu}
          >
            Prihlásenie na kurz
          </Link>
        </div>
      </div>
    </nav>
  )
}
