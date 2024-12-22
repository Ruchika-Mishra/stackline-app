import productData from './stackline_frontend_assessment_data_2021.json';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductData, loadSalesData } from './salesSlice';
import { RootState } from './store';
import SalesGraph from './SalesGraph';
import ProductImage from './ProductImage';
import SalesTable from './SalesTable'; 
import './App.css'; 

const App: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadProductData(productData[0]));
    dispatch(loadSalesData(productData[0].sales));
  }, [dispatch]);

  const product = useSelector((state: RootState) => state.sales.product);

  if (!product) {
    return <p>Loading sales data...</p>;
  }

  return (
    <div className="app-container">
      <ProductImage
        image={product.image}
        title={product.title}
        subtitle={product.subtitle}
        brand={product.brand}
        retailer={product.retailer}
      />
      <div className="content">
        <SalesGraph />
        <SalesTable />
      </div>
    </div>
  );
};

export default App;