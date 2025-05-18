import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RevenueDashboard from '../pages/RevenueDashboard';
import InventoryPage from '../pages/InventoryPage';
import AddProductPage from '../pages/AddProductPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/revenue" element={<RevenueDashboard />} />
    <Route path="/inventory" element={<InventoryPage />} />
    <Route path="/products/new" element={<AddProductPage />} />
    <Route path="*" element={<Navigate to="/revenue" />} />
  </Routes>
);

export default AppRoutes; 
