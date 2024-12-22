import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './SalesGraph.css'; // Import CSS for styling

const SalesGraph: React.FC = () => {
  // Access monthlyData from the Redux store
  const monthlyData = useSelector((state: RootState) => state.sales.monthlyData);

  if (monthlyData.length === 0) {
    return <p>Loading sales data...</p>;
  }

  // Custom tick formatter for XAxis
  const formatMonth = (tickItem: string) => {
    const date = new Date(tickItem + '-01');
    return date.toLocaleString('default', { month: 'short' });
  };

  return (
    <div className="graph">
      <h3>Monthly Sales Data</h3>
      <LineChart width={800} height={400} data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tickFormatter={formatMonth} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" name="Retail Sales" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" name="Wholesale Sales" />
        <Line type="monotone" dataKey="unitsSold" stroke="#ffc658" name="Units Sold" />
        <Line type="monotone" dataKey="retailerMargin" stroke="#ff7300" name="Retailer Margin" />
      </LineChart>
    </div>
  );
};

export default SalesGraph;