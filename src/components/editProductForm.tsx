import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  supplier: string;
  stock: string;
}

interface EditProductFormProps {
  product: Product;
  onSave: (product: Product) => void;
  onClose: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onSave, onClose }) => {
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Produto</h2>
      <input type="text" name="name" value={editedProduct.name} onChange={handleChange} placeholder="Nome do Produto" />
      <input type="number" name="price" value={editedProduct.price} onChange={handleChange} placeholder="Preço do Produto" />
      <input type="text" name="category" value={editedProduct.category} onChange={handleChange} placeholder="Categoria do Produto" />
      <input type="text" name="supplier" value={editedProduct.supplier} onChange={handleChange} placeholder="Fornecedor do Produto" />
      <input type="text" name="stock" value={editedProduct.stock} onChange={handleChange} placeholder="Estoque do Produto" />
      <button type="submit" onClick={onClose}>Salvar</button>
      <button type="button" onClick={onClose}>Cancelar</button>
    </form>
  );
};

export default EditProductForm;
