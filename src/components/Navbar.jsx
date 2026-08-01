import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { NAV_LINKS, COMPANY } from '../constants/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    setActiveDropdown(null)
    
    // Check if it's a hash link for the current page (e.g. /#products in footer)
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate(href)
      }
    } else {
      navigate(href)
      window.scrollTo(0, 0)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-xc flex items-center justify-between px-6 md:px-10 lg:px-16">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
          <img 
            src="/logo.png" 
            alt="XCroxx Logo" 
            className={`w-auto transition-all duration-300 object-contain ${scrolled || location.pathname !== '/' ? 'h-10' : 'h-12'}`} 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group/dropdown">
              {link.dropdown ? (
                <>
                  <button className={`relative text-sm font-medium tracking-wide flex items-center gap-1 ${scrolled || location.pathname !== '/' ? 'text-charcoal' : 'text-white/90'}`}>
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:mt-2 transition-all duration-300 flex flex-col py-2 border border-black/5 overflow-hidden">
                    {link.dropdown.map(sublink => (
                      <button
                        key={sublink.href}
                        onClick={() => handleClick(sublink.href)}
                        className="px-4 py-2.5 text-sm text-left text-charcoal hover:bg-red/5 hover:text-red hover:font-bold transition-all"
                      >
                        {sublink.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => handleClick(link.href)}
                  className={`relative text-sm font-medium tracking-wide group ${scrolled || location.pathname !== '/' ? 'text-charcoal' : 'text-white/90'}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red transition-all duration-300 group-hover:w-full" />
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href={`tel:${COMPANY.phone}`} className={`flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors group ${scrolled || location.pathname !== '/' ? 'text-ink hover:text-red' : 'text-white hover:text-red'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${scrolled || location.pathname !== '/' ? 'bg-red/10 text-red group-hover:bg-red group-hover:text-white' : 'bg-white/10 text-white group-hover:bg-red group-hover:text-white'}`}>
              <FaPhoneAlt size={12} />
            </span>
            {COMPANY.phone}
          </a>
          <button onClick={() => handleClick('/contact')} className="btn-primary !px-6 !py-2.5 text-sm shadow-lg hover:shadow-red/30 hover:-translate-y-0.5 transition-all">
            Get a Quote
          </button>
        </div>

        <button
          className={`lg:hidden text-2xl ${scrolled || location.pathname !== '/' ? 'text-ink' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="border-b border-black/5">
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className="flex items-center justify-between w-full text-left py-3 text-charcoal font-semibold"
                      >
                        {link.label}
                        <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pl-4 gap-3 py-2 mb-2 border-l-2 border-red/20 bg-soft/10 rounded-r-lg">
                              {link.dropdown.map(sublink => (
                                <button
                                  key={sublink.href}
                                  onClick={() => handleClick(sublink.href)}
                                  className="text-left text-sm text-charcoal/80 font-medium active:text-red py-1"
                                >
                                  {sublink.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-left w-full py-3 border-b border-black/5 text-charcoal font-semibold"
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
              <button onClick={() => handleClick('/contact')} className="btn-primary mt-4 py-3">
                Get a Quote
              </button>

              <div className="mt-6 pt-6 border-t border-black/5 flex flex-col gap-4">
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm font-medium text-charcoal hover:text-red transition-colors">
                  <span className="w-8 h-8 rounded-full bg-red/10 text-red flex items-center justify-center"><FaEnvelope size={14} /></span>
                  {COMPANY.email}
                </a>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm font-medium text-charcoal hover:text-red transition-colors">
                  <span className="w-8 h-8 rounded-full bg-red/10 text-red flex items-center justify-center"><FaPhoneAlt size={14} /></span>
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

