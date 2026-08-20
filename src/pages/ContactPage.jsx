import Contact from '../sections/Contact'
import SEO from '../components/SEO'
export default function ContactPage() {
  return (
    <main className="pt-[104px] [&>section:first-child]:!pt-8 pb-12 min-h-screen">
      <SEO 
        title="Contact Universal Shoes Industries | Bhairahawa, Nepal"
        description="Get in touch with Universal Shoes Industries for wholesale footwear inquiries, dealership opportunities, and OEM manufacturing in Siddharthanagar, Nepal."
        canonical="/contact"
      />
      <Contact />
    </main>
  )
}
