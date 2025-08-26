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
  changeQuantity: (index: number, delta: number) => void;
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

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    const index = cartItems.findIndex(
      (p) => p.id === item.id && p.color === item.color
    );
    const updated = [...cartItems];
    if (index >= 0) {
      updated[index].quantity += item.quantity;
    } else {
      updated.push(item);
    }
    setCartItems(updated);
  };

  const removeFromCart = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
  setCartItems([]);
};


  const changeQuantity = (index: number, delta: number) => {
    const updated = [...cartItems];
    updated[index].quantity = Math.max(1, updated[index].quantity + delta);
    setCartItems(updated);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity, total,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
