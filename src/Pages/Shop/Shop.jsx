import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Shop.module.scss';
import {
  ShopGrid,
  ShopFilter,
} from '../../components/ShopComponents';
import { getAllProducts, createProductSlug } from '../../data/products';
import { useFilter } from '../../contexts/FilterContext';

// Produktdaten aus der Datenbank laden und für Grid-Ansicht konvertieren
const products = getAllProducts();
const shopItems = products.map(product => ({
  id: product.id,
  image: product.images[0], // Erstes Bild als Hauptbild
  imageHover: product.images[1] || product.images[0], // Zweites Bild als Hover-Bild
  title: product.name,
  price: product.price,
  isOnSale: product.isOnSale,
  originalPrice: product.originalPrice,
  slug: product.slug || createProductSlug(product.name), // Slug für Navigation
}));

// Verfügbare Kategorien aus den Produkten extrahieren
const availableCategories = Array.from(
  new Set(products.map(product => product.category))
);

const Shop = () => {
  const navigate = useNavigate();
  const { filters, setFilters, setCategories, setProductCount, openFilter } =
    useFilter();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Set categories in context
  useEffect(() => {
    setCategories(availableCategories);
  }, [setCategories, availableCategories]);

  // Set product count in context - moved after filteredAndSortedItems is defined

  // Gefilterte und sortierte Items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = [...shopItems];

    // Nach Kategorien filtern
    if (filters.categories.length > 0) {
      filtered = filtered.filter(item => {
        const product = products.find(p => p.id === item.id);
        return product && filters.categories.includes(product.category);
      });
    }

    // Nach Preis filtern
    filtered = filtered.filter(item => {
      const price = parseFloat(
        item.price?.replace(/[^0-9.,]/g, '').replace(',', '.') || '0'
      );
      return price >= filters.priceRange.min && price <= filters.priceRange.max;
    });

    // Sortieren
    switch (filters.sortBy) {
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseFloat(
            a.price?.replace(/[^0-9.,]/g, '').replace(',', '.') || '0'
          );
          const priceB = parseFloat(
            b.price?.replace(/[^0-9.,]/g, '').replace(',', '.') || '0'
          );
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseFloat(
            a.price?.replace(/[^0-9.,]/g, '').replace(',', '.') || '0'
          );
          const priceB = parseFloat(
            b.price?.replace(/[^0-9.,]/g, '').replace(',', '.') || '0'
          );
          return priceB - priceA;
        });
        break;
      case 'newest':
      default:
        // Standard-Reihenfolge beibehalten
        break;
    }

    return filtered;
  }, [filters]);

  // Set product count in context after filteredAndSortedItems is defined
  useEffect(() => {
    setProductCount(filteredAndSortedItems.length);
  }, [setProductCount, filteredAndSortedItems.length]);

  const handleCardClick = (item) => {
    console.log('Card clicked:', item);
    // Navigation zur Produktseite mit URL-Slug
    const productSlug = item.slug || createProductSlug(item.title);
    navigate(`/products/${productSlug}`);
  };

  // Remove handleFilterChange since we're using context directly

  return (
    <div className={styles.shop}>
      {/* Filter Component */}
      <ShopFilter />

      {/* Produkt Grid */}
      <ShopGrid items={filteredAndSortedItems} onCardClick={handleCardClick} />
    </div>
  );
};

export default Shop;
