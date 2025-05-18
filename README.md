# Ecommerce Admin Dashboard

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/sheerazmehboob/admin-dashboard.git
cd admin-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

## Dependencies
- React
- TypeScript
- Tailwind CSS
- React Router
- Formik & Yup
- Heroicons
- Recharts

## Navigating the Dashboard
- **Sidebar:** Use the sidebar on the left to switch between Revenue, Inventory, and Add Product pages. The active tab is highlighted.
- **Revenue (`/revenue`):** View KPIs and interactive charts for revenue and orders. Filter by category, product, timeframe, and date range.
- **Inventory (`/inventory`):** Manage your product inventory. Edit stock, view product details, or delete products. Use the search bar and pagination for large inventories.
- **Add Product (`/products/new`):** Add new products to your inventory using a modern, validated form.

## Features
- Global dark mode with consistent styling
- Sidebar navigation with clear active state
- Inventory management (view, edit, delete, add products)
- Revenue dashboard with charts and KPIs
- Responsive tables, forms, and modals
- Pagination with ellipsis for large datasets
- Toast notifications and banners
