import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterProducts from './components/registerProducts';
import CardProduct from './components/cardProduct';
import ReactModal from 'react-modal';
import EditProductForm from './components/editProductForm';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  supplier: string;
  stock: string;
}
ReactModal.setAppElement('#root');

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const handleAddProduct = (product: Product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  const openModal = (product: Product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

 
   return (
    <div className="App">
      <header className="App-header">
        <RegisterProducts onAddProduct={handleAddProduct} />
        <div className="product-list">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} onDeleteProduct={handleDeleteProduct} onEditProduct={openModal} />
          ))}
        </div>
        {currentProduct && (
          <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Edit Product">
            <EditProductForm product={currentProduct} onSave={handleEditProduct} onClose={closeModal} />
          </ReactModal>
        )}
      </header>
    </div>
  );
}

export default App;
