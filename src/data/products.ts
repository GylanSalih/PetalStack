export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  isOnSale?: boolean;
  category: string;
  images: string[];
  description?: string;
  slug?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: '29,99',
    originalPrice: '39,99',
    isOnSale: true,
    category: 'Clothing',
    images: [
      '/assets/img/Products/016.webp',
      '/assets/img/Products/018.webp'
    ],
    description: 'Comfortable and stylish white t-shirt',
    slug: 'classic-white-t-shirt'
  },
  {
    id: '2',
    name: 'Denim Jeans',
    price: '79,99',
    category: 'Clothing',
    images: [
      '/assets/img/Products/2.webp',
      '/assets/img/Products/Denim_Eva_01_24.01.25.webp'
    ],
    description: 'Classic denim jeans with perfect fit',
    slug: 'denim-jeans'
  },
  {
    id: '3',
    name: 'Leather Jacket',
    price: '199,99',
    category: 'Clothing',
    images: [
      '/assets/img/Products/chainsaw_sr_back.webp',
      '/assets/img/Products/SACRIFICE_vis-back.webp'
    ],
    description: 'Premium leather jacket',
    slug: 'leather-jacket'
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: '89,99',
    originalPrice: '119,99',
    isOnSale: true,
    category: 'Footwear',
    images: [
      '/assets/img/Products/4.webp',
      '/assets/img/Products/5.webp'
    ],
    description: 'Comfortable running shoes',
    slug: 'running-shoes'
  },
  {
    id: '5',
    name: 'Sneakers',
    price: '69,99',
    category: 'Footwear',
    images: [
      '/assets/img/Products/7.webp',
      '/assets/img/Products/NEO_GEN_EVA_2_1_1.webp'
    ],
    description: 'Casual sneakers for everyday wear',
    slug: 'sneakers'
  },
  {
    id: '6',
    name: 'Baseball Cap',
    price: '24,99',
    category: 'Accessories',
    images: [
      '/assets/img/Products/035.webp',
      '/assets/img/Products/038.webp'
    ],
    description: 'Classic baseball cap',
    slug: 'baseball-cap'
  },
  {
    id: '7',
    name: 'Watch',
    price: '149,99',
    category: 'Accessories',
    images: [
      '/assets/img/Products/M004.webp',
      '/assets/img/Products/M005.webp'
    ],
    description: 'Elegant wristwatch',
    slug: 'watch'
  },
  {
    id: '8',
    name: 'Backpack',
    price: '59,99',
    originalPrice: '79,99',
    isOnSale: true,
    category: 'Accessories',
    images: [
      '/assets/img/Products/b.jpg.webp',
      '/assets/img/Products/TRAVEL_GUIDE_BLEACHED_NEO4IC_4.webp'
    ],
    description: 'Stylish backpack for everyday use',
    slug: 'backpack'
  },
  {
    id: '9',
    name: 'Hoodie',
    price: '49,99',
    category: 'Clothing',
    images: [
      '/assets/img/Products/hoodie_blc-P-1.jpg.webp',
      '/assets/img/Products/hudi-MAGICHKA-Z.jpg.webp'
    ],
    description: 'Comfortable hoodie',
    slug: 'hoodie'
  },
  {
    id: '10',
    name: 'Sunglasses',
    price: '39,99',
    category: 'Accessories',
    images: [
      '/assets/img/Products/imageGreen.jpg',
      '/assets/img/Products/imageRed.jpg'
    ],
    description: 'UV protection sunglasses',
    slug: 'sunglasses'
  },
  {
    id: '11',
    name: 'Dress Shirt',
    price: '54,99',
    category: 'Clothing',
    images: [
      '/assets/img/Products/shirt_indi_01_back.webp',
      '/assets/img/Products/varnyj-v-ch-pered.jpg.webp'
    ],
    description: 'Formal dress shirt',
    slug: 'dress-shirt'
  },
  {
    id: '12',
    name: 'Boots',
    price: '99,99',
    category: 'Footwear',
    images: [
      '/assets/img/Products/1-47.jpg.webp',
      '/assets/img/Products/NEO_GEN_EVA_2_1_2.webp'
    ],
    description: 'Durable leather boots',
    slug: 'boots'
  }
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const createProductSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Standard sizes for products
const STANDARD_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const getAllSizesForProduct = (product: Product): Array<{ size: string; available: boolean }> => {
  // For now, all sizes are available for all products
  // In a real app, this would check product inventory
  return STANDARD_SIZES.map(size => ({
    size,
    available: true,
  }));
};

