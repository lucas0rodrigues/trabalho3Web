import React from 'react';

interface Product {
  name: string;
  price: number;
  category: string;
  supplier: string;
  stock: string;
}

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      <p>Categoria: {product.category}</p>
      <p>Fornecedor: {product.supplier}</p>
      <p>Estoque: {product.stock}</p>
    </div>
  );
};

export default CardProduct;
