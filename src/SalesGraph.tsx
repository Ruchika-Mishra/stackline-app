import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './SalesGraph.css';

const SalesGraph: React.FC = () => {

  const monthlyData = useSelector((state: RootState) => state.sales.monthlyData);

  return (
    <div className="sales-graph-container">
      <div className="graph">
        <h3>Monthly Sales Data</h3>
        <LineChart width={800} height={400} data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="retailSales" stroke="#8884d8" name="Retail Sales" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" name="Wholesale Sales" />
          <Line type="monotone" dataKey="unitsSold" stroke="#ffc658" name="Units Sold" />
          <Line type="monotone" dataKey="retailerMargin" stroke="#ff7300" name="Retailer Margin" />
        </LineChart>
      </div>
    </div>
  );
};

export default SalesGraph;