import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetails, SalesState, MonthlyData, SalesData } from './types';

const initialState: SalesState = {
  product: null,
  monthlyData: [],
  salesData: [], 
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    loadProductData(state, action: PayloadAction<ProductDetails>) {
      state.product = action.payload;
      const monthlyMap: Record<string, MonthlyData> = {};

      action.payload.sales.forEach((data) => {
        const month = data.weekEnding.slice(0, 7);
        if (!monthlyMap[month]) {
          monthlyMap[month] = { month, retailSales: 0, wholesaleSales: 0, unitsSold: 0, retailerMargin: 0 };
        }
        monthlyMap[month].retailSales += data.retailSales;
        monthlyMap[month].wholesaleSales += data.wholesaleSales;
        monthlyMap[month].unitsSold += data.unitsSold;
        monthlyMap[month].retailerMargin += data.retailerMargin;
      });

      state.monthlyData = Object.values(monthlyMap);
    },
    loadSalesData(state, action: PayloadAction<SalesData[]>) {
      state.salesData = action.payload;
    },
  },
});

export const { loadProductData, loadSalesData } = salesSlice.actions;
export default salesSlice.reducer;