'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color?: string;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, change: number) => void;
  total: number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing cart from localStorage', e);
      }
    }
  }, []);

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cartItems]);

  // Agregar producto al carrito
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (p) => p.id === item.id && p.color === item.color
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        return updated;
      }

      return [...prev, item];
    });
  };

  // Eliminar producto por índice
  const removeFromCart = (index: number) => {
    if (index < 0 || index >= cartItems.length) return;
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Actualizar cantidad (sumar o restar)
  const updateQuantity = (index: number, change: number) => {
    if (index < 0 || index >= cartItems.length) return;

    setCartItems((prev) => {
      const newCart = [...prev];
      const item = newCart[index];
      const newQuantity = item.quantity + change;

      if (newQuantity < 1) {
        return newCart.filter((_, i) => i !== index); // Eliminar si es 0
      }

      item.quantity = newQuantity;
      return newCart;
    });
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};