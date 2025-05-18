import React, { useEffect, useState } from 'react';
import Layout from '../components/common/Layout';
import { products as mockProducts } from '../api/mockData';
import Toast from '../components/common/Toast';
import Pagination from '../components/common/Pagination';
import ProductTable from '../components/inventory/ProductTable';
import EditStockModal from '../components/inventory/EditStockModal';
import DeleteProductModal from '../components/inventory/DeleteProductModal';
import ProductDetailsModal from '../components/inventory/ProductDetailsModal';
import LowStockBanner from '../components/inventory/LowStockBanner';
import ProductSearchBar from '../components/inventory/ProductSearchBar';
import type { Product } from '../types/product';

const LOW_STOCK_THRESHOLD = 5;
const PAGE_SIZE = 10;

const InventoryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [editStock, setEditStock] = useState<number>(0);
  const [updating, setUpdating] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [deleteProduct, setDeleteProduct] = useState<Product | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  const [page, setPage] = useState(1);

  const filtered = products.filter((p) =>
    (!search || p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())) &&
    (!category || p.category === category)
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const lowStock = filtered.filter((p) => p.stock <= LOW_STOCK_THRESHOLD);
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Modal handlers
  const openEditModal = (product: Product) => { setEditProduct(product); setEditStock(product.stock); };
  const closeEditModal = () => { setEditProduct(null); setEditStock(0); };
  const handleStockUpdate = async () => {
    if (!editProduct) return;
    setUpdating(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setProducts((prev) => prev.map((p) => p.id === editProduct.id ? { ...p, stock: editStock } : p));
      setToast({ type: 'success', message: 'Stock updated successfully!' });
      closeEditModal();
    } catch {
      setToast({ type: 'error', message: 'Failed to update stock.' });
    } finally {
      setUpdating(false);
    }
  };
  const openDeleteModal = (product: Product) => setDeleteProduct(product);
  const closeDeleteModal = () => setDeleteProduct(null);
  const handleDelete = async () => {
    if (!deleteProduct) return;
    setDeleting(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setProducts((prev) => prev.filter((p) => p.id !== deleteProduct.id));
      setToast({ type: 'success', message: 'Product deleted successfully!' });
      closeDeleteModal();
    } catch {
      setToast({ type: 'error', message: 'Failed to delete product.' });
    } finally {
      setDeleting(false);
    }
  };
  const openViewModal = (product: Product) => setViewProduct(product);
  const closeViewModal = () => setViewProduct(null);
  useEffect(() => { setPage(1); }, [search, category, products.length]);

  return (
    <Layout pageTitle="Inventory Management">
      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
      <EditStockModal open={!!editProduct} onClose={closeEditModal} product={editProduct} updating={updating} onUpdate={handleStockUpdate} />
      <DeleteProductModal open={!!deleteProduct} onClose={closeDeleteModal} product={deleteProduct} deleting={deleting} onDelete={handleDelete} />
      <ProductDetailsModal open={!!viewProduct} onClose={closeViewModal} product={viewProduct} />
      <LowStockBanner count={lowStock.length} />
      <ProductSearchBar search={search} setSearch={setSearch} category={category} setCategory={setCategory} categories={categories} />
      <ProductTable
        products={paginated}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
        onView={openViewModal}
        lowStockThreshold={LOW_STOCK_THRESHOLD}
      />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </Layout>
  );
};

export default InventoryPage; 
