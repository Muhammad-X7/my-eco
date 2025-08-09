import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ErrorBoundary from './ErrorBoundary';
import Header from "../home/Header";
import Home from "../home/Home";
import ProductsHome from "../products/ProductsHome";
import ProductDetails from "../products/ProductDetails";
import AboutUs from "../aboutandcontact/AboutUs";
import BlogHome from "../Blog/BlogHome";
import ArticleDetails from "../Blog/ArticleDetails"
import ScrollToTop from "./ScrollToTop";


export default function App() {
  return (
    <div className="selection:text-indigo-50 selection:bg-indigo-700">
      <ErrorBoundary>
        <Header />

        <ScrollToTop />

        <ToastContainer position="top-center" autoClose={1400} />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          {/* صفحة تفاصيل المنتج */}
          <Route path="/products/:productId" element={<ProductDetails />} />

          {/* صفحة الفئة الجديدة */}
          <Route path="/category/:categoryName" element={<ProductsHome />} />

          {/* عرض كل المنتجات */}
          <Route path="/products" element={<ProductsHome />} />

          {/*About Us */}
          <Route path="/about-us" element={<AboutUs />} />


          {/* مسارات المدونة الجديدة */}
          <Route path="/blog" element={<BlogHome />} />

          {/* مسار جديد لصفحة فئة المدونة */}
          <Route path="/blog/category/:categoryName" element={<BlogHome />} />

          <Route path="/blog/:articleId" element={<ArticleDetails />} />
          <Route path="/articles/:id" element={<ArticleDetails />} /> {/* ✅ هذا هو المسار الجديد للمقالات */}

        </Routes>
      </ErrorBoundary>
    </div>
  );
}