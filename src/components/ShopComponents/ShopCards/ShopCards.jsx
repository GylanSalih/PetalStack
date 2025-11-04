import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../../contexts/WishlistContext';
import styles from './ShopCards.module.scss';



const ShopCard = ({
  item,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation(); // Prevent card click

    const wishlistItem = {
      id: item.id.toString(),
      name: item.title,
      price: item.price || '€0.00',
      image: item.image,
      slug: item.slug || `product-${item.id}`,
    };

    if (isInWishlist(item.id.toString())) {
      removeFromWishlist(item.id.toString());
    } else {
      addToWishlist(wishlistItem);
    }
  };

  // Bestimme welches Bild angezeigt werden soll
  const currentImage =
    isHovered && item.imageHover ? item.imageHover : item.image;

  return (
    <div
      className={`${styles.shopCard} ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role='button'
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className={styles.imageContainer}>
        <img src={currentImage} alt={item.title} />
        {item.isOnSale && <div className={styles.saleTag}>SALE</div>}
        <button
          className={`${styles.wishlistButton} ${isInWishlist(item.id.toString()) ? styles.active : ''}`}
          onClick={handleWishlistToggle}
          title={
            isInWishlist(item.id.toString())
              ? 'Remove from wishlist'
              : 'Add to wishlist'
          }
        >
          <Heart size={20} />
        </button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>

        {item.price && (
          <div className={styles.priceContainer}>
            <p
              className={`${styles.price} ${item.isOnSale ? styles.salePrice : ''}`}
            >
              {item.price}
            </p>
            {item.isOnSale && item.originalPrice && (
              <p className={styles.originalPrice}>{item.originalPrice}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
