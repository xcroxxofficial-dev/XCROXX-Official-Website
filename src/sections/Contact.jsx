import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { COMPANY } from '../constants/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
    setSent(true)
  }


  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="container-xc">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's talk about your order"
          desc="Reach out for dealer registration, bulk orders, OEM manufacturing or general enquiries."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-ink text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl mb-8">{COMPANY.name}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="text-red mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide">Phone</p>
                    <a href={`tel:${COMPANY.phone}`} className="font-medium">{COMPANY.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-red mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="font-medium break-all">{COMPANY.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-red mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide">Address</p>
                    <p className="font-medium leading-relaxed">{COMPANY.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-10">
              <a href={`tel:${COMPANY.phone}`} className="flex flex-col items-center gap-2 py-4 rounded-xl bg-white/10 hover:bg-red transition-colors">
                <FaPhoneAlt />
                <span className="text-xs">Call Now</span>
              </a>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 py-4 rounded-xl bg-white/10 hover:bg-green-600 transition-colors">
                <FaWhatsapp />
                <span className="text-xs">WhatsApp</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex flex-col items-center gap-2 py-4 rounded-xl bg-white/10 hover:bg-red transition-colors">
                <FaEnvelope />
                <span className="text-xs">Email</span>
              </a>
            </div>

          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-card"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-charcoal/70">Name</label>
                <input required name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your full name" className="mt-2 w-full px-4 py-3 rounded-xl border border-black/10 focus:border-red focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal/70">Phone</label>
                <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone number" className="mt-2 w-full px-4 py-3 rounded-xl border border-black/10 focus:border-red focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal/70">Email</label>
                <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@company.com" className="mt-2 w-full px-4 py-3 rounded-xl border border-black/10 focus:border-red focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal/70">Company</label>
                <input name="company" value={form.company} onChange={handleChange} type="text" placeholder="Company name" className="mt-2 w-full px-4 py-3 rounded-xl border border-black/10 focus:border-red focus:outline-none transition-colors" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-charcoal/70">Message</label>
                <textarea required name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tell us about your order, quantity, or enquiry" className="mt-2 w-full px-4 py-3 rounded-xl border border-black/10 focus:border-red focus:outline-none transition-colors resize-none" />
              </div>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              Send Message <FaPaperPlane size={13} />
            </button>
            {sent && <p className="mt-4 text-sm text-green-700">Your email client should now be open with your message ready to send.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
