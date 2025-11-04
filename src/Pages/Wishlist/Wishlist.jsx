import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, Share2, X } from 'lucide-react';
import { useWishlist } from '../../contexts/WishlistContext';
import { useCart } from '../../contexts/CartContext';
import styles from './Wishlist.module.scss';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    // Add to cart with default size 'M' and quantity 1
    addToCart({
      id: parseInt(item.id),
      name: item.name,
      price: item.price,
      priceNet: item.priceNet || 0,
      priceGross: item.priceGross || 0,
      taxRate: item.taxRate || 19,
      image: item.image,
      size: 'M',
    });
  };

  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
  };

  const handleClearWishlist = () => {
    clearWishlist();
  };

  const handleShareWishlist = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Meine Wunschliste',
        text: 'Schau dir meine Wunschliste an!',
        url: window.location.href,
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link zur Wunschliste wurde in die Zwischenablage kopiert!');
    }
  };

  return (
    <div className={styles.wishlist}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1>Wunschliste</h1>
          <p>
            {wishlistItems.length}{' '}
            {wishlistItems.length === 1 ? 'Artikel' : 'Artikel'} gespeichert
          </p>
        </div>
        <div className={styles.headerActions}>
          {wishlistItems.length > 0 && (
            <button
              onClick={handleShareWishlist}
              className={styles.shareButton}
              title='Wunschliste teilen'
            >
              <Share2 size={16} />
              Teilen
            </button>
          )}
          {wishlistItems.length > 0 && (
            <button
              onClick={handleClearWishlist}
              className={styles.clearButton}
            >
              <Trash2 size={16} />
              Alle löschen
            </button>
          )}
        </div>
      </div>

      {/* Wishlist Content */}
      {wishlistItems.length === 0 ? (
        <div className={styles.emptyWishlist}>
          <Heart size={64} className={styles.emptyIcon} />
          <h2>Your wishlist is empty</h2>
          <p>Start adding items you love to your wishlist</p>
          <Link to='/shop' className={styles.shopButton}>
            <ShoppingBag size={20} />
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className={styles.wishlistGrid}>
          {wishlistItems.map(item => (
            <div key={item.id} className={styles.wishlistCard}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.name} />
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className={styles.removeButton}
                  title='Remove from wishlist'
                >
                  <X size={20} className={styles.xIcon} />
                </button>
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{item.name}</h3>
                <p className={styles.price}>{item.price}</p>
              </div>

              <div className={styles.actions}>
                <button
                  onClick={() => handleAddToCart(item)}
                  className={styles.addToCartButton}
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
                <Link
                  to={`/products/${item.slug}`}
                  className={styles.viewButton}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Continue Shopping */}
      {wishlistItems.length > 0 && (
        <div className={styles.continueShopping}>
          <Link to='/shop' className={styles.continueButton}>
            <ShoppingBag size={20} />
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
