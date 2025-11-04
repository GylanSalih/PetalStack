import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../../contexts/WishlistContext';
import { getAllSizesForProduct } from '../../../data/products';
import styles from './SingleProductView.module.scss';

const SingleProductView = ({
  product,
  onAddToCart,
  onBuyNow,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Get current images based on selected color variant
  const currentImages =
    product.colorVariants && product.colorVariants.length > 0
      ? product.colorVariants[selectedColor]?.images || product.images
      : product.images;

  const handleAddToCart = () => {
    if (selectedSize && onAddToCart) {
      onAddToCart(product, selectedSize, quantity);
    }
  };

  const handleBuyNow = () => {
    if (selectedSize && onBuyNow) {
      onBuyNow(product, selectedSize, quantity);
    }
  };

  const handleWishlistToggle = () => {
    const wishlistItem = {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.images[0] || '',
      slug: product.slug || `product-${product.id}`,
    };

    if (isInWishlist(product.id.toString())) {
      removeFromWishlist(product.id.toString());
    } else {
      addToWishlist(wishlistItem);
    }
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const handleColorSelection = (colorIndex) => {
    setSelectedColor(colorIndex);
    setSelectedImage(0); // Reset to first image when color changes
  };

  return (
    <div className={styles.singleProductView}>
      <div className={styles.container}>
        {/* Left side - Image Gallery */}
        <div className={styles.imageSection}>
          <div className={styles.thumbnails}>
            {currentImages.map((image, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${
                  selectedImage === index ? styles.active : ''
                }`}
                onClick={() => setSelectedImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className={styles.mainImageContainer}>
            <div className={styles.mainImage}>
              <img src={currentImages[selectedImage]} alt={product.name} />
            </div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className={styles.productDetails}>
          <div className={styles.productHeader}>
            <div className={styles.titleRow}>
              <h1 className={styles.productName}>{product.name}</h1>
              <button
                className={`${styles.wishlistButton} ${isInWishlist(product.id.toString()) ? styles.active : ''}`}
                onClick={handleWishlistToggle}
                title={
                  isInWishlist(product.id.toString())
                    ? 'Remove from wishlist'
                    : 'Add to wishlist'
                }
              >
                <Heart size={24} />
              </button>
            </div>
            <div className={styles.priceSection}>
              <div className={styles.priceContainer}>
                <span
                  className={`${styles.price} ${product.isOnSale ? styles.salePrice : ''}`}
                >
                  {product.price.includes('€') ? product.price : `€${product.price}`}
                </span>
                {product.isOnSale && product.originalPrice && (
                  <span className={styles.originalPrice}>
                    {product.originalPrice.includes('€') ? product.originalPrice : `€${product.originalPrice}`}
                  </span>
                )}
              </div>
              <span className={styles.taxInfo}>
                Inkl. MwSt. zzgl. Versandkosten
              </span>
            </div>
          </div>

          {/* Color & Size & Quantity Selection */}
          <div className={styles.selectionSection}>
            {/* Color Selection */}
            {product.colorVariants && product.colorVariants.length > 0 && (
              <div className={styles.colorSection}>
                <label className={styles.sectionLabel}>Farbe auswählen</label>
                <div className={styles.colorGrid}>
                  {product.colorVariants.map((variant, index) => (
                    <button
                      key={index}
                      className={`${styles.colorButton} ${
                        selectedColor === index ? styles.selected : ''
                      }`}
                      onClick={() => handleColorSelection(index)}
                      title={variant.name}
                    >
                      <img
                        src={variant.images[0]}
                        alt={variant.name}
                        className={styles.colorImage}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.sizeSection}>
              <div className={styles.sizeHeader}>
                <label className={styles.sectionLabel}>Size:</label>
                <button className={styles.sizeChartLink}>Size chart</button>
              </div>
              <div className={styles.sizeGrid}>
                {getAllSizesForProduct(product).map(({ size, available }) => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${
                      selectedSize === size ? styles.selected : ''
                    } ${!available ? styles.unavailable : ''}`}
                    onClick={() => available && setSelectedSize(size)}
                    disabled={!available}
                  >
                    {size}
                    {!available && <div className={styles.diagonalLine}></div>}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.quantitySection}>
              <label className={styles.sectionLabel}>Anzahl</label>
              <div className={styles.quantitySelector}>
                <button
                  className={styles.quantityButton}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className={styles.quantityValue}>{quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionSection}>
            <button
              className={`${styles.primaryButton} ${!selectedSize ? styles.disabled : ''}`}
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 21h12M9 19.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM20 19.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z' />
              </svg>
              In den Warenkorb
            </button>
            <button
              className={`${styles.secondaryButton} ${!selectedSize ? styles.disabled : ''}`}
              onClick={handleBuyNow}
              disabled={!selectedSize}
            >
              Jetzt kaufen
            </button>
          </div>

          {/* Product Information Accordions */}
          <div className={styles.productInfo}>
            <div className={styles.accordion}>
              <button
                className={styles.accordionTrigger}
                onClick={() => toggleAccordion('description')}
                aria-expanded={expandedAccordion === 'description'}
              >
                <span>PRODUKTBESCHREIBUNG</span>
                <svg
                  className={`${styles.accordionIcon} ${expandedAccordion === 'description' ? styles.expanded : ''}`}
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M6 9l6 6 6-6' />
                </svg>
              </button>
              {expandedAccordion === 'description' && (
                <div className={styles.accordionContent}>
                  <p>
                    {product.description ||
                      'Hochwertige Materialien und präzise Verarbeitung zeichnen dieses Produkt aus. Perfekt für den täglichen Gebrauch und besondere Anlässe.'}
                  </p>
                </div>
              )}
            </div>

            <div className={styles.accordion}>
              <button
                className={styles.accordionTrigger}
                onClick={() => toggleAccordion('fabric')}
                aria-expanded={expandedAccordion === 'fabric'}
              >
                <span>MATERIAL & PFLEGE</span>
                <svg
                  className={`${styles.accordionIcon} ${expandedAccordion === 'fabric' ? styles.expanded : ''}`}
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M6 9l6 6 6-6' />
                </svg>
              </button>
              {expandedAccordion === 'fabric' && (
                <div className={styles.accordionContent}>
                  <p>
                    {product.fabric ||
                      '100% Premium-Baumwolle mit spezieller Behandlung für Langlebigkeit und Komfort.'}
                  </p>
                  <ul>
                    <li>Maschinenwäsche bei 30°C</li>
                    <li>Nicht bleichen</li>
                    <li>Bei niedriger Temperatur bügeln</li>
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.accordion}>
              <button
                className={styles.accordionTrigger}
                onClick={() => toggleAccordion('shipping')}
                aria-expanded={expandedAccordion === 'shipping'}
              >
                <span>VERSAND & RÜCKGABE</span>
                <svg
                  className={`${styles.accordionIcon} ${expandedAccordion === 'shipping' ? styles.expanded : ''}`}
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M6 9l6 6 6-6' />
                </svg>
              </button>
              {expandedAccordion === 'shipping' && (
                <div className={styles.accordionContent}>
                  <div className={styles.shippingDetails}>
                    <div className={styles.shippingOption}>
                      <strong>Standardversand:</strong>
                      <span>3-5 Werktage • €4,90 (kostenlos ab €150)</span>
                    </div>
                    <div className={styles.shippingOption}>
                      <strong>Expressversand:</strong>
                      <span>1-2 Werktage • €9,90</span>
                    </div>
                    <div className={styles.returnPolicy}>
                      <strong>Rückgabe:</strong>
                      <span>30 Tage kostenlose Rückgabe</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductView;

