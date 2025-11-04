import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Minus, Trash2, Tag, Check } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { createProductSlug } from '../../data/products';
import styles from './Cart.module.scss';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    getTotalPrice,
    getTotalNetPrice,
    getTotalTaxAmount,
    getTotalItems,
    updateQuantity,
    removeFromCart,
  } = useCart();

  // Coupon state
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Test coupons
  const testCoupons = {
    WELCOME10: {
      discount: 0.1,
      type: 'percentage',
      description: '10% off your order',
    },
    SAVE20: {
      discount: 0.2,
      type: 'percentage',
      description: '20% off your order',
    },
    FREESHIP: {
      discount: 5,
      type: 'fixed',
      description: '€5 off shipping',
    },
    NEWUSER: {
      discount: 15,
      type: 'fixed',
      description: '€15 off for new users',
    },
  };

  const handleCheckout = () => {
    navigate('/account/cart');
  };

  const handleQuantityChange = (
    itemId,
    size,
    newQuantity
  ) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, size);
    } else {
      updateQuantity(itemId, size, newQuantity);
    }
  };

  const handleRemoveItem = (itemId, size) => {
    removeFromCart(itemId, size);
  };

  const handleCouponApply = () => {
    const coupon =
      testCoupons[couponCode.toUpperCase()];
    if (coupon) {
      setAppliedCoupon(couponCode.toUpperCase());
      if (coupon.type === 'percentage') {
        setCouponDiscount(getTotalPrice() * coupon.discount);
      } else {
        setCouponDiscount(coupon.discount);
      }
    } else {
      alert('Invalid coupon code');
    }
  };

  const handleCouponRemove = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    setCouponCode('');
  };

  const getFinalTotal = () => {
    return Math.max(0, getTotalPrice() - couponDiscount);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Shopping Cart</h1>
          <p>{getTotalItems()} items in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <h2>Your cart is empty</h2>
            <p>Add some products to your cart to see them here.</p>
          </div>
        ) : (
          <div className={styles.cartContent}>
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div
                  key={`${item.id}-${item.size}`}
                  className={styles.cartItem}
                >
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemoveItem(item.id, item.size)}
                    title='Remove item'
                  >
                    <Trash2 size={16} />
                  </button>

                  <Link
                    to={`/products/${createProductSlug(item.name)}`}
                    className={styles.itemImage}
                  >
                    <img src={item.image} alt={item.name} />
                  </Link>

                  <div className={styles.itemDetails}>
                    <Link
                      to={`/products/${createProductSlug(item.name)}`}
                      className={styles.itemName}
                    >
                      <h3>{item.name}</h3>
                    </Link>
                    <p className={styles.itemSize}>Size: {item.size}</p>
                    <p className={styles.itemPrice}>{item.price}</p>

                    <div className={styles.quantityControls}>
                      <span className={styles.quantityLabel}>Quantity:</span>
                      <div className={styles.quantityButtons}>
                        <button
                          className={styles.quantityButton}
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              item.size,
                              item.quantity - 1
                            )
                          }
                        >
                          <Minus size={16} />
                        </button>
                        <span className={styles.quantityValue}>
                          {item.quantity}
                        </span>
                        <button
                          className={styles.quantityButton}
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartSummary}>
              <div className={styles.summaryContent}>
                <h3>Order Summary</h3>

                {/* Coupon Section */}
                <div className={styles.couponSection}>
                  <h4>Coupon Code</h4>
                  {!appliedCoupon ? (
                    <div className={styles.couponInput}>
                      <input
                        type='text'
                        placeholder='Enter coupon code'
                        value={couponCode}
                        onChange={e => setCouponCode(e.target.value)}
                        className={styles.couponField}
                      />
                      <button
                        className={styles.couponApplyButton}
                        onClick={handleCouponApply}
                      >
                        <Tag size={16} />
                        Apply
                      </button>
                    </div>
                  ) : (
                    <div className={styles.appliedCoupon}>
                      <div className={styles.couponInfo}>
                        <Check size={16} className={styles.checkIcon} />
                        <span className={styles.couponCode}>
                          {appliedCoupon}
                        </span>
                        <span className={styles.couponDescription}>
                          {
                            testCoupons[
                              appliedCoupon
                            ]?.description
                          }
                        </span>
                      </div>
                      <button
                        className={styles.couponRemoveButton}
                        onClick={handleCouponRemove}
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  {/* Test Coupons Display */}
                  <div className={styles.testCoupons}>
                    <p className={styles.testCouponsLabel}>Test Coupons:</p>
                    <div className={styles.testCouponsList}>
                      {Object.entries(testCoupons).map(([code, details]) => (
                        <span key={code} className={styles.testCoupon}>
                          {code}: {details.description}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <hr className={styles.divider} />

                <div className={styles.summaryRow}>
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>€{getTotalNetPrice().toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Tax (19%)</span>
                  <span>€{getTotalTaxAmount().toFixed(2)}</span>
                </div>

                {appliedCoupon && (
                  <div className={styles.summaryRow}>
                    <span>Discount ({appliedCoupon})</span>
                    <span className={styles.discountAmount}>
                      -€{couponDiscount.toFixed(2)}
                    </span>
                  </div>
                )}

                <hr className={styles.divider} />
                <div className={styles.summaryRow}>
                  <strong>Total (incl. tax)</strong>
                  <strong>€{getFinalTotal().toFixed(2)}</strong>
                </div>

                <div className={styles.taxInfo}>
                  <p>* All prices include applicable taxes</p>
                </div>

                {/* Checkout Button */}
                <button
                  className={styles.checkoutButton}
                  onClick={handleCheckout}
                >
                  PROCEED TO CHECKOUT
                </button>

                {/* Payment Buttons */}
                <div className={styles.paymentButtons}>
                  <button
                    className={styles.paypalButton}
                    onClick={handleCheckout}
                  >
                    <img
                      src='https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg'
                      alt='PayPal'
                      className={styles.paypalLogo}
                    />
                    PayPal
                  </button>

                  <button
                    className={styles.googlePayButton}
                    onClick={handleCheckout}
                  >
                    <svg
                      className={styles.googlePayLogo}
                      viewBox='0 0 24 24'
                      width='20'
                      height='20'
                    >
                      <path
                        fill='#4285F4'
                        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                      />
                      <path
                        fill='#34A853'
                        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                      />
                      <path
                        fill='#FBBC05'
                        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                      />
                      <path
                        fill='#EA4335'
                        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                      />
                    </svg>
                    Google Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
