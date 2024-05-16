import React, { useState } from 'react';

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

const CardProduct: React.FC<CardProductProps> = ({ product, onDeleteProduct, onEditProduct}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product });
  
  const handleDelete = () => {
    onDeleteProduct(product.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    onEditProduct(editedProduct);
    setIsEditing(false);
  };
 
  return (
    <div className="card-product">
      {isEditing ? (
        <div>
          <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
          <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />
          <input type="text" name="category" value={editedProduct.category} onChange={handleChange} />
          <input type="text" name="supplier" value={editedProduct.supplier} onChange={handleChange} />
          <input type="text" name="stock" value={editedProduct.stock} onChange={handleChange} />
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>Preço: {product.price}</p>
          <p>Categoria: {product.category}</p>
          <p>Fornecedor: {product.supplier}</p>
          <p>Estoque: {product.stock}</p>
          <button onClick={handleDelete}>Excluir</button>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default CardProduct;
