import { Helmet } from 'react-helmet-async'
import { COMPANY } from '../constants/site'

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  schema,
  noindex = false
}) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://universalshoes.com.np'
  const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl
  const defaultDescription = "Universal Shoes Industries (XCroxx) is a leading footwear manufacturer in Bhairahawa, Siddharthanagar, Nepal. We produce high-quality sports, casual, school, and safety shoes."

  // Base Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ShoeStore", // Or "Organization" / "LocalBusiness"
    "name": COMPANY.name,
    "alternateName": COMPANY.brand,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Siddharthanagar Municipality",
      "addressLocality": "Bhairahawa",
      "addressRegion": "Rupandehi",
      "addressCountry": "NP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY.phone,
      "email": COMPANY.email,
      "contactType": "customer service"
    }
  }

  // Combine schemas if a custom one is passed
  const finalSchema = schema ? [orgSchema, schema] : orgSchema;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Social Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}/image/brand_image.png`} />
      <meta property="og:site_name" content={COMPANY.name} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}/image/brand_image.png`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  )
}
