export function groupOrdersByTimeframe(orders: any[], timeframe: string) {
  const keyFn = (o: any) => {
    const d = new Date(o.date);
    if (timeframe === 'daily') return d.toISOString().split('T')[0];
    if (timeframe === 'weekly') {
      const year = d.getFullYear();
      const week = Math.ceil(((d.getTime() - new Date(year, 0, 1).getTime()) / 86400000 + new Date(year, 0, 1).getDay() + 1) / 7);
      return `${year}-W${week}`;
    }
    if (timeframe === 'monthly') return d.toISOString().slice(0, 7);
    return d.getFullYear().toString();
  };
  const grouped: Record<string, any[]> = {};
  orders.forEach(o => {
    const key = keyFn(o);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(o);
  });
  return Object.entries(grouped).map(([label, group]) => ({
    label,
    orders: group.length,
    revenue: group.reduce((sum, o) => sum + o.total, 0),
  })).sort((a, b) => a.label.localeCompare(b.label));
}

export function getCategoryRevenue(orders: any[], products: any[], selectedCategory = '', selectedProduct = '') {
  const categoryMap: Record<string, number> = {};
  orders.forEach(order => {
    (order.items || []).forEach((item: any) => {
      const prod = products.find((p: any) => p.id === item.productId);
      if (prod) {
        if (!selectedCategory || prod.category === selectedCategory) {
          if (!selectedProduct || prod.id === selectedProduct) {
            categoryMap[prod.category] = (categoryMap[prod.category] || 0) + ((item.unitPrice || prod.price) as number) * item.quantity;
          }
        }
      }
    });
  });
  return Object.entries(categoryMap).map(([category, revenue]) => ({ category, revenue }));
} 
