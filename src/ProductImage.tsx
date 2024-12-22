import React from 'react';
import './ProductImage.css';

interface ProductImageProps {
  image: string;
  title: string;
  subtitle: string;
  brand: string;
  retailer: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, title, subtitle, brand, retailer }) => {
  return (
    <div className="product-info">
      <img src={image} alt={title} className="product-image" />
      <div className="product-description">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Retailer:</strong> {retailer}</p>
      </div>
      <div className="tags-container">
        <div className="tag">Pantry</div>
        <div className="tag">Obsolete</div>
        <div className="tag">Blender</div>
        <div className="tag">Lightning Deal</div>
      </div>
    </div>
  );
};

export default ProductImage;