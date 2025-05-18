import React from 'react';
import StatCard from '../../components/common/StatCard';

interface StatCardData {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  color?: string;
}

interface StatCardsSectionProps {
  cards: StatCardData[];
}

const StatCardsSection: React.FC<StatCardsSectionProps> = ({ cards }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8">
    {cards.map((card, i) => (
      <StatCard key={i} {...card} large={false} />
    ))}
  </div>
);

export default StatCardsSection; 
