import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// @ts-expect-error - SingleProductView.jsx is a JSX file, not TypeScript
import { SingleProductView } from '../../components/ShopComponents';
// @ts-expect-error - CartContext.jsx is a JSX file, not TypeScript
import { useCart } from '../../contexts/CartContext';
import { getProductBySlug } from '../../data/products';
import styles from './Product.module.scss';

const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();

  // Get product by slug
  const product = slug ? getProductBySlug(slug) : null;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // If product not found, redirect to shop
  useEffect(() => {
    if (!product && slug) {
      navigate('/shop');
    }
  }, [product, slug, navigate]);

  if (!product) {
    return (
      <div className={styles.product}>
        <div className={styles.notFound}>
          <h2>Produkt nicht gefunden</h2>
          <button onClick={() => navigate('/shop')} className={styles.backLink}>
            Zurück zum Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = (productItem: any, size: string, quantity: number) => {
    // Prepare cart item with correct image format
    const cartItem = {
      ...productItem,
      image: productItem.images[0] || productItem.images || '/assets/img/placeholder.jpg',
      size: size,
    };
    addToCart(cartItem, quantity);
    // Open cart sidebar after adding
    openCart();
    console.log('Added to cart:', cartItem);
  };

  const handleBuyNow = (productItem: any, size: string, quantity: number) => {
    // Add to cart and navigate to checkout
    handleAddToCart(productItem, size, quantity);
    // Navigate to checkout page (you can create this later)
    // navigate('/checkout');
  };

  return (
    <div className={styles.product}>
      <SingleProductView
        product={product}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
    </div>
  );
};

export default Product;

