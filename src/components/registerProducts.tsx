import React, { useState } from 'react';
import './RegisterProducts.css'; // Adicione esta linha

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  supplier: string;
  stock: string;
}

interface RegisterProductsProps {
  onAddProduct: (product: Product) => void;
}

const RegisterProducts: React.FC<RegisterProductsProps> = ({ onAddProduct }) => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [supplier, setSupplier] = useState<string>('');
  const [stock, setStock] = useState<string>('');

  const [error, setError] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleSupplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSupplier(e.target.value);
  };

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price || !category || !supplier || !stock) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name,
      price,
      category,
      supplier,
      stock
    };
    onAddProduct(newProduct);
    setName('');
    setPrice(0);
    setCategory('');
    setSupplier('');
    setStock('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome do Produto" value={name} onChange={handleNameChange} />
      <input type="number" placeholder="Preço do Produto" value={price} onChange={handlePriceChange} />
      <input type="text" placeholder="Categoria do Produto" value={category} onChange={handleCategoryChange} />
      <input type="text" placeholder="Fornecedor do Produto" value={supplier} onChange={handleSupplierChange} />
      <input type="text" placeholder="Estoque do Produto" value={stock} onChange={handleStockChange} />
      {error && <p className="error">{error}</p>}
      <button type="submit">Cadastrar Produtos</button>
    </form>
  );
};

export default RegisterProducts;
