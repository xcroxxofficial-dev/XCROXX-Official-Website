export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'kids', label: 'Kids' },
  { id: 'pvc', label: 'PVC' },
  { id: 'eva', label: 'EVA' },
  {
    id: 'ladies',
    label: 'Ladies',
    subcategories: [
      { id: '100_series', label: '100 Series' },
      { id: '700_series', label: '700 Series' },
    ]
  },
  {
    id: 'pu_gents',
    label: 'PU Gents',
    subcategories: [
      { id: '200_series', label: '200 Series' },
      { id: '300_series', label: '300 Series' },
    ]
  }
];

const imageModules = import.meta.glob('../assets/product/**/*.{jpg,jpeg,png,webp,avif}', { eager: true, import: 'default' });

export const PRODUCTS = Object.entries(imageModules).map(([path, url], index) => {
  const parts = path.split('/');
  const fileName = parts.pop();
  const parentFolder = parts.pop();
  const grandParentFolder = parts.pop();

  const artNo = fileName.substring(0, fileName.lastIndexOf('.'));

  let category = '';
  let subcategory = null;

  if (parentFolder === 'Kids') {
    category = 'kids';
  } else if (parentFolder === 'EVA') {
    category = 'eva';
  } else if (parentFolder === 'PVC') {
    category = 'pvc';
  } else if (grandParentFolder === 'Ladies') {
    category = 'ladies';
    subcategory = parentFolder.toLowerCase();
  } else if (grandParentFolder === 'pu_Gents') {
    category = 'pu_gents';
    subcategory = parentFolder.toLowerCase();
  }

  return {
    id: index + 1,
    artNo: artNo,
    category: category,
    subcategory: subcategory,
    image: url,
    name: `Art No: ${artNo}`,
    desc: `Premium footwear from our collection.`
  };
});