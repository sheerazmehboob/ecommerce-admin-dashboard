import React, { useEffect, useState } from 'react';
import Layout from '../components/common/Layout';
import { products, orders } from '../api/mockData';
import StatCardsSection from '../components/revenue/StatCardsSection';
import OrdersRevenueChart from '../components/revenue/OrdersRevenueChart';
import CategoryRevenueChart from '../components/revenue/CategoryRevenueChart';
import DateRangeFilter from '../components/revenue/DateRangeFilter';
import { CurrencyDollarIcon, ShoppingBagIcon, ChartBarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import { groupOrdersByTimeframe, getCategoryRevenue } from '../utils/revenueUtils';

const dateRangeOptions = [
  { label: 'All time', value: 0 },
  { label: 'Last 90 days', value: 90 },
  { label: 'Last 30 days', value: 30 },
  { label: 'Last 7 days', value: 7 },
];

const RevenueDashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState('yearly');
  const [dateRange, setDateRange] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    document.title = 'Revenue Dashboard | Admin';
  }, []);

  // Filter orders by date range, category, and product
  const now = new Date();
  let filteredOrders = dateRange === 0
    ? orders
    : orders.filter(o => (now.getTime() - new Date(o.date).getTime()) < dateRange * 24 * 60 * 60 * 1000);
  if (selectedCategory) {
    filteredOrders = filteredOrders.filter(o =>
      o.items.some((item: any) => {
        const prod = products.find((p: any) => p.id === item.productId);
        return prod && prod.category === selectedCategory;
      })
    );
  }
  if (selectedProduct) {
    filteredOrders = filteredOrders.filter(o =>
      o.items.some((item: any) => {
        const prod = products.find((p: any) => p.id === item.productId);
        return prod && prod.id === selectedProduct;
      })
    );
  }

  // KPIs
  const totalRevenue = filteredOrders.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = filteredOrders.length;
  const avgOrderValue = totalOrders ? (totalRevenue / totalOrders) : 0;
  // Sales Change
  const last7 = orders.filter(o => (now.getTime() - new Date(o.date).getTime()) < 7 * 24 * 60 * 60 * 1000);
  const prev7 = orders.filter(o => (now.getTime() - new Date(o.date).getTime()) >= 7 * 24 * 60 * 60 * 1000 && (now.getTime() - new Date(o.date).getTime()) < 14 * 24 * 60 * 60 * 1000);
  const last7Revenue = last7.reduce((sum, o) => sum + o.total, 0);
  const prev7Revenue = prev7.reduce((sum, o) => sum + o.total, 0);
  const salesChange = prev7Revenue ? (((last7Revenue - prev7Revenue) / prev7Revenue) * 100).toFixed(1) : 'N/A';

  // Chart data
  const chartData = groupOrdersByTimeframe(filteredOrders, timeframe);
  const categoryData = getCategoryRevenue(filteredOrders, products, selectedCategory, selectedProduct);

  // Category/product filter options
  const categories = Array.from(new Set(products.map(p => p.category)));
  const filteredProducts = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;

  return (
    <Layout pageTitle="Revenue Dashboard">
      <div className="container mx-auto px-4">
        <StatCardsSection
          cards={[
            { title: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: <CurrencyDollarIcon />, color: 'border-primary text-primary' },
            { title: 'Total Orders', value: totalOrders, icon: <ShoppingBagIcon />, color: 'border-accent text-accent' },
            { title: 'Avg. Order Value', value: `$${avgOrderValue.toFixed(2)}`, icon: <ChartBarIcon />, color: 'border-blue-400 text-blue-400' },
            {
              title: 'Sales Change (7d)',
              value: salesChange !== 'N/A' ? salesChange : 'N/A',
              change: salesChange !== 'N/A' ? (parseFloat(salesChange) >= 0 ? `+${salesChange}%` : `${salesChange}%`) : undefined,
              icon: <ArrowTrendingUpIcon />,
              color: salesChange !== 'N/A' && parseFloat(salesChange) < 0 ? 'border-danger text-danger' : 'border-accent text-accent',
            },
          ]}
        />
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 w-full">
          <label className="text-sm font-semibold text-gray-200">Category:</label>
          <select
            className="border rounded px-2 py-1 text-sm bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0"
            value={selectedCategory}
            onChange={e => {
              setSelectedCategory(e.target.value);
              setSelectedProduct('');
            }}
          >
            <option value="">All</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <label className="text-sm font-semibold text-gray-200 ml-0 md:ml-4">Product:</label>
          <select
            className="border rounded px-2 py-1 text-sm bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0"
            value={selectedProduct}
            onChange={e => setSelectedProduct(e.target.value)}
            disabled={!selectedCategory}
          >
            <option value="">All</option>
            {filteredProducts.map(prod => (
              <option key={prod.id} value={prod.id}>{prod.name}</option>
            ))}
          </select>
          <label className="text-sm font-semibold text-gray-200 ml-0 md:ml-4">Timeframe:</label>
          <select
            className="border rounded px-2 py-1 text-sm bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-0"
            value={timeframe}
            onChange={e => setTimeframe(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <div className="flex-1" />
          <DateRangeFilter dateRange={dateRange} onDateRangeChange={setDateRange} options={dateRangeOptions} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <OrdersRevenueChart chartData={chartData} timeframe={timeframe} onTimeframeChange={undefined} noData={chartData.length === 0} />
          <CategoryRevenueChart categoryData={categoryData} noData={categoryData.length === 0} />
        </div>
      </div>
    </Layout>
  );
};

export default RevenueDashboard; 
