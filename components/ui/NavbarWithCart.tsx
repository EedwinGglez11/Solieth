"use client";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import React from "react";


export interface CartItem {
  id: number;
  name: string;
  image: string;
  color: string;
  quantity: number;
  price: number;
}

const NavbarWithCart: React.FC = () => {

   const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow-md bg-white relative z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/solieth.png" alt="Logo" width={40} height={40} />
        <span className="font-semibold text-lg">Solieth Boutique</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Inicio</Link>
       { /*<Link href="/coleccion">Colección</Link>
        <Link href="/contacto">Contacto</Link>*/}
      </div>

      {/* Iconos */}
      <div className="flex items-center gap-4">
        {/* Carrito */}
        <button onClick={() => setCartOpen(!cartOpen)} className="relative">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 rounded-full">
              {totalItems}
            </span>
          )}
        </button>

        {/* Menú móvil */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md px-4 py-2 flex flex-col gap-2 md:hidden">
          <Link href="/">Inicio</Link>
          <Link href="/coleccion">Colección</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      )}

      {/* Carrito flotante */}
      {cartOpen && (
        <div className="absolute right-4 top-full mt-2 w-80 bg-white shadow-lg border rounded-lg z-50">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Carrito de compras</h2>
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-600">Tu carrito está vacío</p>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center mb-4 gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Color: {item.color}</p>
                      <p className="text-sm">${item.price} MXN</p>
                      <div className="flex items-center mt-1">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="px-2 py-1 bg-gray-200 text-xs"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="px-2 py-1 bg-gray-200 text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 text-sm"
                    >
                      X
                    </button>
                  </div>
                ))}

                {/* Total y acciones */}
                <div className="mt-4 border-t pt-4 text-right">
                  <p className="font-semibold mb-2">Total: ${totalPrice.toFixed(2)} MXN</p>
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavbarWithCart;
  