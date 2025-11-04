import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus } from 'lucide-react';
import { gsap } from 'gsap';
import { useCart } from '../../contexts/CartContext';
import styles from './CartSidebar.module.scss';

const CartSidebar = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalTaxAmount,
  } = useCart();

  const cartRef = useRef(null);
  const backdropRef = useRef(null);
  const [shouldRender, setShouldRender] = React.useState(false);

  const FREE_SHIPPING_THRESHOLD = 75; // €75 für kostenlosen Versand

  const getRemainingAmount = () => {
    const total = getTotalPrice();
    const remaining = FREE_SHIPPING_THRESHOLD - total;
    return Math.max(0, remaining);
  };

  const getProgressPercentage = () => {
    const total = getTotalPrice();
    return Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);
  };

  const handleCheckout = () => {
    // Animate out the sidebar first
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });

    gsap.to(cartRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        // Close cart and navigate after animation completes
        closeCart();
        navigate('/account/cart');
      },
    });
  };

  const handleClose = () => {
    // Update context state immediately
    closeCart();

    // Animate out
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });

    gsap.to(cartRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        // Reset position and unmount after animation
        gsap.set(cartRef.current, { x: '100%' });
        setShouldRender(false);
      },
    });
  };

  useEffect(() => {
    if (isCartOpen) {
      setShouldRender(true);
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        gsap.set(cartRef.current, { x: '100%' });
        gsap.set(backdropRef.current, { opacity: 0 });

        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });

        gsap.to(cartRef.current, {
          x: '0%',
          duration: 0.5,
          ease: 'power3.out',
        });
      }, 10);
    }
  }, [isCartOpen]);

  if (!shouldRender) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className={styles.backdrop}
        onClick={handleClose}
      />

      {/* Cart Sidebar */}
      <div ref={cartRef} className={styles.cartSidebar}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            DEIN WARENKORB ({cartItems.length} ARTIKEL)
          </h2>
          <button className={styles.closeButton} onClick={handleClose}>
            <X size={24} />
          </button>
        </div>

        {cartItems.length > 0 && (
          <div className={styles.freeShipping}>
            {getRemainingAmount() > 0 ? (
              <div className={styles.shippingInfo}>
                <div className={styles.shippingIcon}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 17 20'
                    height='20'
                    width='17'
                  >
                    <g clipPath='url(#clip0_5565_1459)' id='Frame'>
                      <path
                        fill='#111111'
                        d='M7.98058 17.4168V10.2755L1.73058 6.6568V13.4652C1.73058 13.5639 1.75524 13.6563 1.80455 13.7426C1.85386 13.8289 1.92783 13.9029 2.02644 13.9645L7.98058 17.4168ZM8.94212 17.4168L14.8963 13.9645C14.9949 13.9029 15.0688 13.8289 15.1181 13.7426C15.1675 13.6563 15.1921 13.5639 15.1921 13.4652V6.6568L8.94212 10.2755V17.4168ZM7.68472 18.3525L1.54566 14.8151C1.30282 14.6758 1.11267 14.4866 0.975221 14.2474C0.837769 14.0082 0.769043 13.7494 0.769043 13.4708V6.5292C0.769043 6.25062 0.837769 5.99174 0.975221 5.75258C1.11267 5.51342 1.30282 5.32418 1.54566 5.18489L7.68472 1.64754C7.92757 1.50825 8.18644 1.4386 8.46135 1.4386C8.73626 1.4386 8.99513 1.50825 9.23798 1.64754L15.377 5.18489C15.6198 5.32418 15.81 5.51342 15.9475 5.75258C16.0849 5.99174 16.1537 6.25062 16.1537 6.5292V13.4708C16.1537 13.7494 16.0849 14.0082 15.9475 14.2474C15.81 14.4866 15.6198 14.6758 15.377 14.8151L9.23798 18.3525C8.99513 18.4917 8.73626 18.5614 8.46135 18.5614C8.18644 18.5614 7.92757 18.4917 7.68472 18.3525ZM12.0301 7.3798L14.6392 5.87831L8.75721 2.47411C8.6586 2.41246 8.55997 2.38165 8.46135 2.38165C8.36273 2.38165 8.2641 2.41246 8.16549 2.47411L5.8652 3.79622L12.0301 7.3798ZM8.46135 9.44895L11.0575 7.94194L4.87963 4.37129L2.28347 5.87831L8.46135 9.44895Z'
                        id='Vector'
                      ></path>
                    </g>
                    <defs>
                      <clipPath id='clip0_5565_1459'>
                        <rect fill='white' height='20' width='16.9231'></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={styles.shippingText}>
                  <p>
                    DIR FEHLEN NUR NOCH €{getRemainingAmount().toFixed(2)} ZUM
                    KOSTENLOSEN VERSAND INNERHALB DEUTSCHLAND
                  </p>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.shippingInfo}>
                <div className={styles.shippingIcon}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 17 20'
                    height='20'
                    width='17'
                  >
                    <g clipPath='url(#clip0_5565_1459)' id='Frame'>
                      <path
                        fill='#111111'
                        d='M7.98058 17.4168V10.2755L1.73058 6.6568V13.4652C1.73058 13.5639 1.75524 13.6563 1.80455 13.7426C1.85386 13.8289 1.92783 13.9029 2.02644 13.9645L7.98058 17.4168ZM8.94212 17.4168L14.8963 13.9645C14.9949 13.9029 15.0688 13.8289 15.1181 13.7426C15.1675 13.6563 15.1921 13.5639 15.1921 13.4652V6.6568L8.94212 10.2755V17.4168ZM7.68472 18.3525L1.54566 14.8151C1.30282 14.6758 1.11267 14.4866 0.975221 14.2474C0.837769 14.0082 0.769043 13.7494 0.769043 13.4708V6.5292C0.769043 6.25062 0.837769 5.99174 0.975221 5.75258C1.11267 5.51342 1.30282 5.32418 1.54566 5.18489L7.68472 1.64754C7.92757 1.50825 8.18644 1.4386 8.46135 1.4386C8.73626 1.4386 8.99513 1.50825 9.23798 1.64754L15.377 5.18489C15.6198 5.32418 15.81 5.51342 15.9475 5.75258C16.0849 5.99174 16.1537 6.25062 16.1537 6.5292V13.4708C16.1537 13.7494 16.0849 14.0082 15.9475 14.2474C15.81 14.4866 15.6198 14.6758 15.377 14.8151L9.23798 18.3525C8.99513 18.4917 8.73626 18.5614 8.46135 18.5614C8.18644 18.5614 7.92757 18.4917 7.68472 18.3525ZM12.0301 7.3798L14.6392 5.87831L8.75721 2.47411C8.6586 2.41246 8.55997 2.38165 8.46135 2.38165C8.36273 2.38165 8.2641 2.41246 8.16549 2.47411L5.8652 3.79622L12.0301 7.3798ZM8.46135 9.44895L11.0575 7.94194L4.87963 4.37129L2.28347 5.87831L8.46135 9.44895Z'
                        id='Vector'
                      ></path>
                    </g>
                    <defs>
                      <clipPath id='clip0_5565_1459'>
                        <rect fill='white' height='20' width='16.9231'></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={styles.shippingText}>
                  <p>Kostenloser Versand in DE!</p>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: '100%', background: '#10b981' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.deliveryInfo}>
              <div className={styles.deliveryDot}></div>
              <p>LIEFERZEIT: IN 1 - 3 WERKTAGE BEI DIR ZUHAUSE</p>
            </div>
          </div>
        )}

        <div className={styles.content}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className={styles.cartItem}
                >
                  <div className={styles.itemImage}>
                    <img src={item.image || item.images?.[0] || '/assets/img/placeholder.jpg'} alt={item.name} />
                  </div>

                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>{item.price}</p>
                    {item.size && <p className={styles.itemSize}>Größe: {item.size}</p>}
                    {item.color && <p className={styles.itemColor}>Farbe: {item.color}</p>}

                    <div className={styles.quantitySection}>
                      <span className={styles.quantityLabel}>Anzahl</span>
                      <div className={styles.quantityControls}>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          className={styles.quantityButton}
                        >
                          <Minus size={16} />
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className={styles.quantityButton}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeButton}
                    >
                      <X size={16} />
                      Entfernen
                    </button>
                  </div>

                  <div className={styles.itemPriceRight}>{item.price}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.shippingCosts}>
              <span>Versandkosten:</span>
              <span>Wird beim Checkout berechnet</span>
            </div>

            <div className={styles.total}>
              <span>GESAMT (INKL. MWST.)</span>
              <span>€{getTotalPrice().toFixed(2)}</span>
            </div>

            <button className={styles.checkoutButton} onClick={handleCheckout}>
              JETZT SICHER ZUR KASSE
            </button>

            <div className={styles.paymentMethods}>
              <div className={styles.paymentLogos}>
                <span>AMEX</span>
                <span>Apple Pay</span>
                <span>Bancontact</span>
                <span>eps</span>
                <span>G Pay</span>
                <span>Maestro</span>
                <span>Mastercard</span>
                <span>Visa</span>
                <span>PayPal</span>
                <span>Shop Pay</span>
                <span>V Pay</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
