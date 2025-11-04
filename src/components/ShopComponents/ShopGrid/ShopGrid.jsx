import React from 'react';
import ShopCard from '../ShopCards/ShopCards';
import styles from './ShopGrid.module.scss';


const ShopGrid = ({
  items,
  onCardClick,
  className = '',
}) => {
  const gridClass = `${styles.shopGrid} ${className}`;

  return (
    <div className={gridClass}>
      {items.map(item => (
        <ShopCard
          key={item.id}
          item={item}
          onClick={onCardClick || undefined}
        />
      ))}
    </div>
  );
};

export default ShopGrid;
