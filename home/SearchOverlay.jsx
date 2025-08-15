import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { allProducts } from '../products/ProductsData';
import { allArticles } from '../Blog/NewsData';

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const navigate = useNavigate();

  // مرجع للعنصر الرئيسي
  const overlayRef = useRef(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      const productResults = allProducts
        .filter(product => product.name.toLowerCase().includes(lowerCaseSearchTerm))
        .map(product => ({ ...product, type: 'product', url: `/products/${product.id}` }));

      const articleResults = allArticles
        .filter(article => article.title.toLowerCase().includes(lowerCaseSearchTerm))
        .map(article => ({ ...article, type: 'article', url: `/articles/${article.id}` }));

      setFilteredResults([...productResults, ...articleResults]);
      setDisplayCount(4);
    } else {
      setFilteredResults([]);
      setDisplayCount(4);
    }
  }, [searchTerm]);

  // معالجة الضغط على Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // معالجة الضغط خارج العنصر
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // معالجة زر العودة في المتصفح
  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.history.pushState({ searchOverlayOpen: true }, '');
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleLinkClick = () => {
    onClose();
  };

  const handleShowMore = () => {
    setDisplayCount(filteredResults.length);
  };

  const handleSearchClick = () => {
    onClose();
    navigate("/products");
  };

  // التعامل مع الضغط على Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  // إغلاق البحث عند الضغط على الخلفية
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 z-[9999] flex items-center justify-center px-4"
      onClick={handleBackdropClick}
    >
      <div ref={overlayRef} className="w-full max-w-4xl px-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-400 text-3xl cursor-pointer focus:outline-none"
        >
          <img src="/close.png" alt="close-icon" className="w-7 right-5 top-2 hover:rotate-90 transition duration-400 relative" />
        </button>

        <div className="relative flex items-center border-b-2 border-purple-600 pb-3">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent border-none outline-none text-white text-4xl sm:text-5xl placeholder-gray-500 py-2"
            autoFocus
          />
          <button
            type="submit"
            onClick={handleSearchClick}
            className="bg-purple-600  rounded-full p-4 ml-4 hover:bg-purple-700 cursor-pointer transition-colors duration-300"
          >
            <img src="/search.png" alt="search-icon" className="w-10" />
          </button>
        </div>

        {searchTerm.length > 0 && (
          <div className="mt-8 bg-[#111518] px-6 pt-8 pb-28 lg:pt-6 lg:pb-6 rounded-lg max-h-80 overflow-y-auto">
            {filteredResults.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredResults.slice(0, displayCount).map(item => (
                  <li key={`${item.type}-${item.id}`}>
                    <Link to={item.url} onClick={handleLinkClick} className="flex flex-col sm:flex-row items-center gap-4 p-2 hover:bg-gray-800 rounded-lg transition-colors">
                      <img src={item.image} alt={item.name || item.title} className="w-full sm:w-16 h-40 sm:h-16 object-cover rounded-md" />
                      <div className="flex-grow text-center sm:text-left">
                        <p className="text-white font-semibold text-lg">{item.name || item.title}</p>
                        {item.type === 'product' && <p className="text-gray-400 text-base">{`$${item.price.toFixed(2)}`}</p>}
                        {item.type === 'article' && <p className="text-gray-400 text-base">{`Category: ${item.category}`}</p>}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">No results found.</p>
            )}

            {filteredResults.length > displayCount && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleShowMore}
                  className="inline-block py-3 w-40 rounded-lg bg-indigo-600 text-white cursor-pointer font-semibold hover:bg-indigo-700 transition-colors duration-300"
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}