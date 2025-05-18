import React, { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import { products as mockProducts } from '../api/mockData';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/products/ProductForm';
import type { Product } from '../types/product';

const AddProductPage: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCategories(Array.from(new Set(mockProducts.map((p: Product) => p.category))));
  }, []);

  return (
    <Layout pageTitle="Add Product">
      <ProductForm categories={categories} onSuccess={() => navigate('/inventory')} />
    </Layout>
  );
};

export default AddProductPage; 
