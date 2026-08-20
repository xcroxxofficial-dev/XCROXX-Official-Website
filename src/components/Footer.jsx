import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight, FaTiktok } from 'react-icons/fa'
import { COMPANY, FOOTER_LINKS } from '../constants/site'

function FooterColumn({ title, links }) {
  return (
    <div className="z-10 relative">
      <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs mb-6 opacity-90">{title}</h4>
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l.label}>
            <Link 
              to={l.href.startsWith('#') ? `/${l.href}` : l.href} 
              className="group flex items-center text-white/50 hover:text-white transition-colors text-sm font-medium w-fit"
            >
              <span className="w-0 h-[2px] bg-red mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#111111] to-black text-white relative overflow-hidden pt-20 lg:pt-24 mt-auto">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      <div className="container-xc px-6 md:px-10 lg:px-16 pb-16 z-10 relative">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-16 border-b border-white/10 mb-16">
          <div className="max-w-xl">
            <h3 className="font-heading font-extrabold text-3xl md:text-4xl mb-3 tracking-tight">Join the XCroxx Network.</h3>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              Subscribe to our newsletter for exclusive updates on new product lines, B2B wholesale deals, and manufacturing insights.
            </p>
          </div>
          <form className="flex w-full lg:w-auto relative group" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-full pl-6 pr-40 py-4 w-full lg:w-[450px] focus:outline-none focus:border-red/50 focus:bg-white/10 transition-all text-sm font-medium backdrop-blur-md"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-red hover:bg-red/90 text-white rounded-full px-6 text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-red/20 group-hover:shadow-red/40">
              Subscribe <FaArrowRight size={12} />
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-16">
          <div className="max-w-md">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-xl transition-transform hover:scale-105 duration-300 shadow-xl">
              <img src="/logo.png" alt="XCroxx Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-white/50 text-sm mt-8 leading-relaxed font-medium">
              {COMPANY.name} manufactures precision footwear for dealers, distributors and
              institutions across Nepal, from our state-of-the-art facility in Rupandehi.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { Icon: FaFacebookF, url: "https://www.facebook.com/share/195kvN4gWU/" },
                { Icon: FaTiktok, url: "https://www.tiktok.com/@xcroxx.footwear?_r=1&_t=ZS-98eHHRrmtnT" }
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target={url !== "#" ? "_blank" : undefined}
                  rel={url !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red hover:border-red hover:-translate-y-1 hover:shadow-lg hover:shadow-red/20 transition-all duration-300 group"
                >
                  <Icon size={14} className="text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:pr-10 lg:pr-24">
            <FooterColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40 backdrop-blur-md relative z-10">
        <div className="container-xc px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/40">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name} ({COMPANY.brand}). All rights reserved.</p>
          <div className="flex gap-6">
            <p className="hidden sm:block">Rupandehi, Nepal</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
