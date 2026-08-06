const imageModules = import.meta.glob('../assets/product/**/*.{jpg,jpeg,png,webp,avif}', { eager: true, import: 'default' });

export const PRODUCTS = Object.entries(imageModules).map(([path, url], index) => {
  const parts = path.split('/');
  const fileName = parts.pop();
  
  const productIndex = parts.indexOf('product');
  const categoryPath = parts.slice(productIndex + 1);
  
  const category = categoryPath.join(' - ').replace(/_/g, ' ');
  const artNo = fileName.substring(0, fileName.lastIndexOf('.'));
  
  return {
    id: `product-${index}`,
    name: `Art No: ${artNo}`,
    category: category,
    rawCategory: categoryPath[0],
    desc: category,
    image: url,
    artNo: artNo,
  };
});
