import { Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom components
import ErrorBoundary from './ErrorBoundary';       // Catches runtime errors in the component tree
import Header from "../home/Header";               // Header component visible on all pages
import ScrollToTop from "./ScrollToTop";          // Scrolls to top on route change

import Home from "../home/Home";
import ProductsHome from "../products/ProductsHome";
import ProductDetails from "../products/ProductDetails";
import AboutUs from "../aboutandcontact/AboutUs";
import BlogHome from "../Blog/BlogHome";
import ContactHome from "../Contact/ContactHome";
import ArticleDetails from "../Blog/ArticleDetails";
import MyCart from "../home/MyCart";
import CheckoutPage from "../products/CheckoutPage";
import PaymentMethods from "../products/PaymentMethods";

export default function App() {
  return (
    <div className="selection:text-indigo-50 selection:bg-indigo-700">

      {/* ErrorBoundary wraps the whole app to catch runtime errors */}
      <ErrorBoundary>

        {/* Header is always visible */}
        <Header />

        {/* Automatically scroll to top on route change */}
        <ScrollToTop />

        {/* Toast notifications container */}
        <ToastContainer position="top-center" autoClose={1400} />

        {/* Application Routes */}
        <Routes>

          {/* Home page */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          {/* Cart page */}
          <Route path="/cart" element={<MyCart />} />

          {/* Checkout page */}
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Product details page */}
          <Route path="/products/:productId" element={<ProductDetails />} />

          {/* Category pages */}
          <Route path="/category/:categoryName" element={<ProductsHome />} />

          {/* All products page */}
          <Route path="/products" element={<ProductsHome />} />

          {/* About Us page */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Blog pages */}
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/category/:categoryName" element={<BlogHome />} />
          <Route path="/blog/:articleId" element={<ArticleDetails />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />

          {/* Contact page */}
          <Route path="/contact-us" element={<ContactHome />} />

          {/* Payment methods page */}
          <Route path="/payment-methods" element={<PaymentMethods />} />

        </Routes>
      </ErrorBoundary>
    </div>
  );
}
