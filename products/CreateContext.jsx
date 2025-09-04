import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

// Create a context for the cart to share state across components
const CartContext = createContext();

// Custom hook to access the cart context easily
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};

// CartProvider component wraps your app and provides cart state & functions
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // State for cart items
    const [isCartOpen, setIsCartOpen] = useState(false); // State to control cart visibility

    // Ref to track the last toast for add, remove, or clear actions to prevent duplicates
    const lastToastRef = useRef({ add: null, remove: null, clear: false });

    // Load cart from localStorage on initial render
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('shopping-cart');
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                setCartItems(parsedCart);
            }
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            setCartItems([]);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
        } else {
            // Remove from localStorage if the cart is empty
            localStorage.removeItem('shopping-cart');
        }
    }, [cartItems]);

    // Function to add an item to the cart or update quantity if it already exists
    const addToCart = (product, quantity = 1) => {

        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            let updatedItems;

            if (existingItem) {
                // If the product exists, increase its quantity
                updatedItems = prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );

                // Show toast notification once per item update
                if (lastToastRef.current.add !== product.id) {
                    toast.success(`${product.name} quantity updated! Total: ${existingItem.quantity + quantity}`);
                    lastToastRef.current.add = product.id;
                    setTimeout(() => {
                        lastToastRef.current.add = null;
                    });
                }
            } else {
                // Add new product to cart
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

                // Show toast notification for addition
                if (lastToastRef.current.add !== product.id) {
                    toast.success(`${product.name} added to cart!`);
                    lastToastRef.current.add = product.id;
                    setTimeout(() => {
                        lastToastRef.current.add = null;
                    });
                }
            }

            return updatedItems;
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (productId) => {
        setCartItems(prev => {
            const updatedItems = prev.filter(item => item.id !== productId);

            if (lastToastRef.current.remove !== productId) {
                toast.info('Product removed from cart');
                lastToastRef.current.remove = productId;
                setTimeout(() => {
                    lastToastRef.current.remove = null;
                });
            }

            return updatedItems;
        });
    };

    // Function to update the quantity of an item
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            // If quantity is 0 or less, remove the item
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

    // Function to clear the cart completely
    const clearCart = () => {
        setCartItems([]);

        if (!lastToastRef.current.clear) {
            toast.success('Cart cleared!');
            lastToastRef.current.clear = true;
            setTimeout(() => {
                lastToastRef.current.clear = false;
            });
        }
    };

    // Utility functions to get total items and total price
    const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const getTotalPrice = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Functions to open/close cart UI
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    // Provide all states and functions to children components
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
