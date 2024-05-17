import React from 'react';
import './CardProduct.css'
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  supplier: string;
  stock: string;
}

interface CardProductProps {
  product: Product;
  onDeleteProduct: (id: number) => void;
  onEditProduct: (product: Product) => void;
}

const CardProduct: React.FC<CardProductProps> = ({ product, onDeleteProduct, onEditProduct }) => {
  const handleDelete = () => {
    onDeleteProduct(product.id);
  };

  const handleEdit = () => {
    onEditProduct(product);
  };

  return (
    <div className="card-product">
      <h2>{product.name}</h2>
      <p>Preço: {product.price}</p>
      <p>Categoria: {product.category}</p>
      <p>Fornecedor: {product.supplier}</p>
      <p>Estoque: {product.stock}</p>
      <button onClick={handleDelete}>Excluir</button>
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
};

export default CardProduct;