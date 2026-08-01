const imageModules = import.meta.glob('/public/image/product/**/*.{jpg,jpeg,png,webp,avif}', { eager: true });

export const PRODUCTS = Object.keys(imageModules).map((path, index) => {
  // path is like "/public/image/product/Kids/09 & 07 & 010.jpeg"
  const url = path.replace('/public', '');
  
  const parts = path.split('/');
  const fileName = parts.pop(); // e.g., "09 & 07 & 010.jpeg"
  
  // Get all folders after "product"
  const productIndex = parts.indexOf('product');
  const categoryPath = parts.slice(productIndex + 1);
  
  // Format category string for display
  const category = categoryPath.join(' - ').replace(/_/g, ' ');
  
  // Extract Art No by removing the extension
  const artNo = fileName.substring(0, fileName.lastIndexOf('.'));
  
  return {
    id: `product-${index}`,
    name: `Art No: ${artNo}`,
    category: category,
    rawCategory: categoryPath[0], // Top level category
    desc: category,
    image: url,
    artNo: artNo,
  };
});
