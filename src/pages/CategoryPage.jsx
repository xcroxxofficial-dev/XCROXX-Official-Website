import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SAMPLE_PRODUCTS = {
  pu: [
    { id: 1, name: 'PU Classic Comfort', price: '₹4500', image: '/image/pu/sample.png' },
    { id: 2, name: 'PU Sports Flex', price: '₹5500', image: '/image/pu/sample.png' },
    { id: 3, name: 'PU Walker Pro', price: '₹4000', image: '/image/pu/sample.png' },
  ],
  eva: [
    { id: 4, name: 'EVA Lightweight Runner', price: '₹3500', image: '/image/eva/sample.png' },
    { id: 5, name: 'EVA Everyday Soft', price: '₹3000', image: '/image/eva/sample.png' },
  ],
  nekishoo: [
    { id: 6, name: 'Nekishoo Signature', price: '₹8500', image: '/image/nekishoo/sample.png' },
    { id: 7, name: 'Nekishoo Urban', price: '₹9500', image: '/image/nekishoo/sample.png' },
  ],
  cherry: [
    { id: 8, name: 'Cherry Red Style', price: '₹5000', image: '/image/cherry/sample.png' },
  ],
  shoes: [
    { id: 9, name: 'Standard Dress Shoe', price: '₹7500', image: '/image/shoes/sample.png' },
    { id: 10, name: 'Casual Sneaker', price: '₹6500', image: '/image/shoes/sample.png' },
    { id: 11, name: 'Trekking Boot', price: '₹11000', image: '/image/shoes/sample.png' },
  ],
  slipper: [
    { id: 12, name: 'Comfort Slipper', price: '₹1500', image: '/image/slipper/sample.png' },
    { id: 13, name: 'Summer Flip Flop', price: '₹1200', image: '/image/slipper/sample.png' },
  ]
}

export default function CategoryPage() {
  const { category } = useParams()
  
  const categoryKey = category?.toLowerCase() || ''
  const products = SAMPLE_PRODUCTS[categoryKey] || []
  const categoryName = category?.toUpperCase() || 'PRODUCTS'

  return (
    <div className="min-h-screen pt-32 pb-20 bg-soft/30">
      <div className="container-xc px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-charcoal/60 font-medium mb-4">
            <Link to="/" className="hover:text-red transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal uppercase tracking-wider">{categoryName}</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-ink">
            {categoryName} Collection
          </h1>
          <p className="mt-4 text-charcoal/80 max-w-2xl leading-relaxed">
            Explore our premium selection of {categoryName} footwear, engineered for maximum comfort, durability, and style.
          </p>
        </motion.div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-ink">
                    {categoryName}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-ink mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-red text-xl">{product.price}</span>
                    <button className="text-sm font-semibold text-charcoal hover:text-red transition-colors">
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-heading font-bold text-ink/50">No products found in this category.</h3>
            <Link to="/" className="inline-block mt-6 btn-primary">
              Return Home
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
