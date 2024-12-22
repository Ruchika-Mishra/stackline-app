import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import './SalesTable.css'; 

const SalesTable: React.FC = () => {
  const salesData = useSelector((state: RootState) => state.sales.salesData);

  return (
    <div className="sales-table-container">
      <h3>Sales Data</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((data, index) => (
            <tr key={index}>
              <td>{data.weekEnding}</td>
              <td>{data.retailSales}</td>
              <td>{data.wholesaleSales}</td>
              <td>{data.unitsSold}</td>
              <td>{data.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;