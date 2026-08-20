import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/productCatalog'
import { HiX, HiChevronRight, HiOutlineViewGrid } from 'react-icons/hi'
import { FaChild, FaFemale, FaMale, FaLeaf, FaBoxOpen } from 'react-icons/fa'
import SEO from '../components/SEO'
// Map categories to specific icons for a more visual sidebar
const CATEGORY_ICONS = {
  all: HiOutlineViewGrid,
  kids: FaChild,
  pvc: FaBoxOpen,
  eva: FaLeaf,
  ladies: FaFemale,
  pu_gents: FaMale,
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeSubcategory, setActiveSubcategory] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
    setActiveSubcategory(null)
  }

  const activeCategoryData = PRODUCT_CATEGORIES.find(c => c.id === activeCategory)

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory)
    }
    if (activeSubcategory) {
      filtered = filtered.filter(p => p.subcategory === activeSubcategory)
    }
    return filtered
  }, [activeCategory, activeSubcategory])

  return (
    <main className="pt-[80px] lg:pt-[96px] min-h-screen bg-[#F8F9FA] flex flex-col">
      <SEO 
        title="Footwear Products | Universal Shoes Industries"
        description="Browse our wide range of premium footwear products including sports shoes, casual shoes, school shoes, and industrial safety shoes manufactured in Nepal."
        canonical="/products"
      />
      <div className="container-xc flex-1 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Animated Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0">
            {/* The sticky wrapper ensures it stays visible while scrolling the grid */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:sticky lg:top-[120px] lg:h-[calc(100vh-150px)] flex flex-col border border-black/[0.03] overflow-hidden">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-ink tracking-tight">Categories</h2>
                <div className="w-10 h-1.5 bg-red mt-3 rounded-full"></div>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-3 -mr-3 flex flex-col gap-2 relative">
                {PRODUCT_CATEGORIES.map(category => {
                  const Icon = CATEGORY_ICONS[category.id] || HiOutlineViewGrid
                  const isActive = activeCategory === category.id
                  
                  return (
                    <div key={category.id}>
                      <div className="relative">
                        {/* 
                          If active, we render a background that animates across the list items
                          using layoutId="activeCategoryBg". This creates a beautiful sliding effect.
                        */}
                        {isActive && (
                          <motion.div
                            layoutId="activeCategoryBg"
                            className="absolute inset-0 bg-gradient-to-r from-red to-red-dark rounded-2xl z-0 shadow-md shadow-red/20"
                            initial={false}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}

                        <button
                          onClick={() => handleCategoryClick(category.id)}
                          className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 relative z-10 ${
                            isActive 
                              ? 'text-white' 
                              : 'text-charcoal hover:bg-gray-50 hover:text-ink'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <Icon className={`text-xl transition-colors ${isActive ? 'text-white' : 'text-red/80'}`} />
                            <span className="font-bold text-sm tracking-wide">{category.label}</span>
                          </div>
                          {category.subcategories && (
                            <motion.div
                              animate={{ rotate: isActive ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                              className={`${isActive ? 'text-white/90' : 'text-charcoal/30'}`}
                            >
                              <HiChevronRight size={20} />
                            </motion.div>
                          )}
                        </button>
                      </div>

                      {/* Subcategory Dropdown */}
                      <AnimatePresence>
                        {isActive && category.subcategories && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1.5 pl-6 mt-3 border-l-2 border-red/20 ml-7 pb-3">
                              <button
                                onClick={() => setActiveSubcategory(null)}
                                className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                  activeSubcategory === null 
                                    ? 'text-red bg-red/5' 
                                    : 'text-charcoal/60 hover:text-ink hover:bg-black/5'
                                }`}
                              >
                                All {category.label}
                              </button>
                              {category.subcategories.map(sub => (
                                <button
                                  key={sub.id}
                                  onClick={() => setActiveSubcategory(sub.id)}
                                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                    activeSubcategory === sub.id 
                                      ? 'text-red bg-red/5' 
                                      : 'text-charcoal/60 hover:text-ink hover:bg-black/5'
                                  }`}
                                >
                                  {sub.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Header integrated tightly above the grid */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-red mb-3">
                  <div className="w-6 h-0.5 bg-red"></div>
                  Our Collection
                </span>
                <h1 className="text-4xl lg:text-5xl font-black text-ink tracking-tight">
                  {activeSubcategory 
                    ? activeCategoryData?.subcategories?.find(s => s.id === activeSubcategory)?.label 
                    : activeCategoryData?.label}
                  <span className="block text-2xl lg:text-3xl font-medium text-charcoal/40 mt-1">Footwear</span>
                </h1>
              </div>
              <div className="bg-surface px-6 py-3 rounded-2xl border border-black/5 shadow-inner self-start sm:self-auto flex items-center gap-3">
                <span className="text-2xl font-black text-red">{filteredProducts.length}</span>
                <span className="text-charcoal/60 text-xs font-bold uppercase tracking-wider leading-tight">Items<br/>Found</span>
              </div>
            </motion.div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-16 text-center">
                <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red">
                  <HiOutlineViewGrid size={28} />
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">No products found</h3>
                <p className="text-charcoal/60">Try selecting a different category or series.</p>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                <AnimatePresence>
                  {filteredProducts.map(product => {
                    const catLabel = PRODUCT_CATEGORIES.find(c => c.id === product.category)?.label
                    const subCatLabel = product.subcategory ? PRODUCT_CATEGORIES.find(c => c.id === product.category)?.subcategories?.find(s => s.id === product.subcategory)?.label : 'Premium Collection'
                    
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 border border-black/[0.04] flex flex-col cursor-pointer hover:-translate-y-2 relative"
                      >
                        {/* Image Section */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-white flex items-center justify-center border-b border-black/[0.02]">
                          
                          {/* Floating Category Badge */}
                          <div className="absolute top-4 right-4 z-20">
                            <span className="bg-white/90 backdrop-blur-md text-ink text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm border border-black/5">
                              {catLabel}
                            </span>
                          </div>

                          {/* Decorative Glow on Hover */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                            <div className="w-64 h-64 bg-red/10 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-1000"></div>
                          </div>

                          <img 
                            src={product.image} 
                            alt={`Product ${product.id}`} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 relative z-0"
                          />
                        </div>

                        {/* Details Footer */}
                        <div className="p-5 sm:p-6 bg-white relative z-20 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] sm:text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">
                              {subCatLabel}
                            </p>
                            <h3 className="font-black text-ink text-xl line-clamp-1 group-hover:text-red transition-colors">
                              Art No: {product.artNo || String(product.id).padStart(3, '0')}
                            </h3>
                          </div>
                          
                          {/* Action Button */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-surface group-hover:bg-red text-ink group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-sm border border-black/5 group-hover:border-transparent group-hover:shadow-[0_8px_20px_rgb(214,40,40,0.3)] group-hover:scale-110 -translate-x-1 group-hover:translate-x-0">
                            <HiChevronRight size={20} />
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/40 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-charcoal hover:bg-red hover:text-white transition-all duration-300 hover:rotate-90 hover:scale-110"
              >
                <HiX size={24} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 bg-white p-8 md:p-14 flex items-center justify-center relative min-h-[400px] lg:min-h-[500px]">
                {/* Very subtle radial gradient to make the product pop slightly */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none"></div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
                  className="relative w-full aspect-[4/3] max-w-md xl:max-w-lg flex items-center justify-center group bg-gradient-to-br from-red/5 via-surface to-gold/10 rounded-[2rem] p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-red/10 overflow-hidden"
                >
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-red/10 to-transparent rounded-br-[4rem] pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gold/20 to-transparent rounded-tl-[4rem] pointer-events-none"></div>

                  <img
                    src={selectedProduct.image}
                    alt={`Product ${selectedProduct.id}`}
                    className="w-full h-full object-contain drop-shadow-xl rounded-xl group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-700 ease-out relative z-10"
                  />
                </motion.div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative">
                {/* Subtle divider line on desktop */}
                <div className="hidden md:block absolute left-0 top-10 bottom-10 w-[1px] bg-black/[0.04]"></div>
                <p className="text-xs font-black text-red uppercase tracking-[0.2em] mb-4">
                  {PRODUCT_CATEGORIES.find(c => c.id === selectedProduct.category)?.label}
                  {selectedProduct.subcategory && ` / ${PRODUCT_CATEGORIES.find(c => c.id === selectedProduct.category)?.subcategories?.find(s => s.id === selectedProduct.subcategory)?.label}`}
                </p>
                <h2 className="text-4xl font-black text-ink mb-6 tracking-tight">
                  Art No: {selectedProduct.artNo || String(selectedProduct.id).padStart(3, '0')}
                </h2>
                
                <div className="prose prose-sm text-charcoal/70 mb-10">
                  <p className="text-base leading-relaxed">
                    Experience the perfect blend of comfort, durability, and style. This premium footwear from our {PRODUCT_CATEGORIES.find(c => c.id === selectedProduct.category)?.label} collection is meticulously manufactured in-house using top-grade materials to ensure long-lasting performance.
                  </p>
                  <ul className="mt-6 space-y-3 font-medium">
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-red/10 text-red flex items-center justify-center text-xs">✓</span>
                      Superior grip and traction
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-red/10 text-red flex items-center justify-center text-xs">✓</span>
                      High-quality material construction
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-red/10 text-red flex items-center justify-center text-xs">✓</span>
                      Ergonomic design for all-day comfort
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-black/5">
                  <a href="/contact" className="btn-primary w-full py-4 text-base shadow-[0_8px_20px_rgb(214,40,40,0.3)]">
                    Inquire About This Product
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
