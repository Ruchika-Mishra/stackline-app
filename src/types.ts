export interface Review {
    customer: string;
    review: string;
    score: number;
  }
  
  export interface SalesData {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }
  
  export interface ProductDetails {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: { customer: string; review: string; score: number; }[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: SalesData[];
  }
  
  export interface SalesState {
    product: ProductDetails | null;
    monthlyData: MonthlyData[];
    salesData: SalesData[];
  }
  
  export interface MonthlyData {
    month: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }