// src/products/CreateContext.jsx
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // refs لتتبع آخر toast لكل نوع
    const lastToastRef = useRef({ add: null, remove: null, clear: false });

    // تحميل السلة من localStorage عند بداية التطبيق
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('shopping-cart');
            console.log('Loading cart from localStorage:', savedCart); // للتصحيح
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                setCartItems(parsedCart);
                console.log('Cart loaded successfully:', parsedCart); // للتصحيح
            }
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            setCartItems([]);
        }
    }, []);

    // حفظ السلة في localStorage عند كل تغيير
    useEffect(() => {
        if (cartItems.length > 0) {
            console.log('Saving cart to localStorage:', cartItems); // للتصحيح
            localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
        } else {
            // إذا كانت السلة فارغة، نحذف من localStorage
            localStorage.removeItem('shopping-cart');
        }
    }, [cartItems]);

    const addToCart = (product, quantity = 1) => {
        console.log('Adding to cart:', product, quantity); // للتصحيح

        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            let updatedItems;

            if (existingItem) {
                // إذا كان المنتج موجود، زيادة الكمية
                updatedItems = prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );

                // إظهار toast للتحديث
                if (lastToastRef.current.add !== product.id) {
                    toast.success(`${product.name} quantity updated! Total: ${existingItem.quantity + quantity}`);
                    lastToastRef.current.add = product.id;
                    setTimeout(() => {
                        lastToastRef.current.add = null;
                    }); // إضافة القيمة الزمنية المفقودة
                }
            } else {
                // إذا كان منتج جديد، إضافته للسلة
                const newItem = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    categoryOne: product.categoryOne,
                    categoryTow: product.categoryTow,
                    quantity: quantity
                };
                updatedItems = [...prev, newItem];

                // إظهار toast للإضافة
                if (lastToastRef.current.add !== product.id) {
                    toast.success(`${product.name} added to cart!`);
                    lastToastRef.current.add = product.id;
                    setTimeout(() => {
                        lastToastRef.current.add = null;
                    }); // إضافة القيمة الزمنية المفقودة
                }
            }

            console.log('Updated cart items:', updatedItems); // للتصحيح
            return updatedItems;
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => {
            const updatedItems = prev.filter(item => item.id !== productId);

            if (lastToastRef.current.remove !== productId) {
                toast.info('Product removed from cart');
                lastToastRef.current.remove = productId;
                setTimeout(() => {
                    lastToastRef.current.remove = null;
                }); // إضافة القيمة الزمنية المفقودة
            }

            return updatedItems;
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            return removeFromCart(productId);
        }

        setCartItems(prev =>
            prev.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);

        if (!lastToastRef.current.clear) {
            toast.success('Cart cleared!');
            lastToastRef.current.clear = true;
            setTimeout(() => {
                lastToastRef.current.clear = false;
            }); // إضافة القيمة الزمنية المفقودة
        }
    };

    const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const getTotalPrice = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider value={{
            cartItems,
            isCartOpen,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getTotalItems,
            getTotalPrice,
            openCart,
            closeCart
        }}>
            {children}
        </CartContext.Provider>
    );
};