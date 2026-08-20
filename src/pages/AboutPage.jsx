import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { FaMedal, FaLeaf, FaCogs, FaQuoteLeft } from 'react-icons/fa'
import SEO from '../components/SEO'
export default function AboutPage() {
  const values = [
    {
      icon: <FaMedal className="text-4xl text-red" />,
      title: "Premium Quality",
      desc: "We use only the finest materials and strict quality control to ensure every pair meets world-class standards."
    },
    {
      icon: <FaCogs className="text-4xl text-red" />,
      title: "Innovation",
      desc: "Embracing cutting-edge technology in our manufacturing processes to create smarter, more durable footwear."
    },
    {
      icon: <FaLeaf className="text-4xl text-red" />,
      title: "Sustainability",
      desc: "Committed to eco-friendly practices and sustainable materials to reduce our environmental footprint."
    }
  ];

  return (
    <main className="pt-[104px] pb-0 min-h-screen bg-surface selection:bg-red selection:text-white overflow-hidden">
      <SEO 
        title="About Universal Shoes Industries | Footwear Manufacturer in Nepal"
        description="Learn about Universal Shoes Industries (XCroxx). With over 8 years of experience in Bhairahawa, we manufacture premium quality, comfortable, and sustainable footwear."
        canonical="/about"
      />
      
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0 opacity-40 flex items-center justify-center p-10">
          <img 
            src="/logo.png" 
            alt="XCroxx Logo" 
            className="w-full h-full object-contain invert"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>
        
        <div className="container-xc relative z-10 text-center px-4 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 tracking-tight drop-shadow-lg">
              Our <span className="text-red">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-body font-light">
              Crafting the future of footwear with passion, precision, and an unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-pad bg-white relative">
        <div className="container-xc">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-red mb-2">
                <div className="w-8 h-[2px] bg-red"></div>
                About XCroxx
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink leading-tight">
                Step into a world of <br/><span className="text-red">unmatched comfort.</span>
              </h2>
              <div className="space-y-4 text-charcoal/70 text-lg leading-relaxed">
                <p>
                  At Universal Shoes Industries (XCroxx), we believe that every step matters. Founded on principles of quality, durability, and unmatched comfort, our mission is to deliver premium footwear that meets the diverse needs of modern consumers.
                </p>
                <p>
                  Whether it's for performance, safety, or everyday style, our products are a testament to our dedication to excellence. We combine traditional craftsmanship with modern technology.
                </p>
              </div>
              
              <div className="pt-6 grid grid-cols-2 gap-6 border-t border-charcoal/10">
                <div>
                  <h4 className="text-4xl font-black text-ink mb-1">8<span className="text-red">+</span></h4>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider font-semibold">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-ink mb-1">1M<span className="text-red">+</span></h4>
                  <p className="text-sm text-charcoal/60 uppercase tracking-wider font-semibold">Happy Customers</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red rounded-3xl transform rotate-3 scale-[1.03] opacity-10 transition-transform duration-500 hover:rotate-6"></div>
              <div className="relative z-10 w-full h-[400px] md:h-[550px] bg-white rounded-3xl shadow-xl flex items-center justify-center p-8">
                <img 
                  src="/image/brand_image.png" 
                  alt="XCroxx Brand" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad bg-surface">
        <div className="container-xc">
          <div className="text-center mb-16">
            <SectionHeading
              eyebrow="Our Values"
              title="What Drives Us Forward"
              align="center"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-charcoal/5"
              >
                <div className="w-16 h-16 bg-red/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red transition-colors duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300 group-hover:brightness-0 group-hover:invert">
                    {val.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-ink">{val.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section className="section-pad bg-surface relative overflow-hidden">
        <div className="container-xc max-w-6xl mx-auto">
          
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-ink/5 overflow-hidden flex flex-col md:flex-row border border-charcoal/5">
            
            {/* Left Column: Name & Position (Dark Theme) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-2/5 bg-ink text-white p-12 md:p-16 flex flex-col justify-center relative overflow-hidden"
            >
              {/* Abstract decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>
              
              <FaQuoteLeft className="text-5xl text-white/10 mb-10 relative z-10" />
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-heading font-black leading-tight mb-2 tracking-tight">
                  Subham
                  <br />
                  <span className="text-red">Jaiswal</span>
                </h3>
                
                <div className="w-16 h-1 bg-white/10 my-8 overflow-hidden rounded-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-full bg-red rounded-full"
                  />
                </div>
                
                <p className="text-white/60 tracking-[0.25em] uppercase text-sm font-semibold">
                  Managing Director
                </p>
              </div>
            </motion.div>

            {/* Right Column: Quote & Details (Light Theme) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-3/5 p-12 md:p-16 relative bg-white flex flex-col justify-center"
            >
              {/* Massive background quote mark */}
              <FaQuoteLeft className="absolute top-8 right-8 text-8xl md:text-[140px] text-surface -z-0 opacity-50" />
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-ink leading-snug mb-8 relative z-10">
                "Our journey began with a simple yet ambitious goal: <span className="text-red">to redefine the standards</span> of footwear manufacturing."
              </h2>
              
              <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed relative z-10 font-body">
                <p>
                  With years of industry expertise, our Managing Director has steered XCroxx through immense growth, focusing on sustainable practices, technological advancements in manufacturing, and fostering a culture of innovation.
                </p>
                <p>
                  Today, XCroxx stands as a symbol of trust and quality, continually pushing boundaries to deliver the best to our customers worldwide.
                </p>
              </div>
            </motion.div>

          </div>
          
        </div>
      </section>

    </main>
  )
}
