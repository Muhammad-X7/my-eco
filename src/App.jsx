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
import ContactHome from "../Contact/ContactHome";
import ArticleDetails from "../Blog/ArticleDetails";
import ScrollToTop from "./ScrollToTop";
import MyCart from "../home/MyCart";
import CheckoutPage from "../products/CheckoutPage"; // صفحة الدفع الكاملة
import PaymentMethods from "../products/PaymentMethods";

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

          {/* صفحة السلة */}
          <Route path="/cart" element={<MyCart />} />

          {/* صفحة الدفع المنفصلة */}
          <Route path="/checkout" element={<CheckoutPage />} />

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
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/contact-us" element={<ContactHome />} />

          {/* صفحة طرق الدفع الجديدة */}
          <Route path="/payment-methods" element={<PaymentMethods />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}
