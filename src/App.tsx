import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterProducts from './components/registerProducts';
import CardProduct from './components/cardProduct';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  supplier: string;
  stock: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RegisterProducts onAddProduct={handleAddProduct} />
        <div className="product-list">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
