'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, ShoppingCart, X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'



export default function Header() {
  
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <div className="flex items-center gap-2">
          <Image src="/solieth.png" alt="Logo Solieth" width={40} height={40} />
          <span className="text-xl font-medium">Solieth Boutique</span>
        </div>

        <ul className="hidden md:flex gap-6 text-sm text-neutral-700">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/colecciones">Colecciones</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
          <li><Link href="https://wa.me/52XXXXXXXXXX" target="_blank">WhatsApp</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          {cartItems.length > 0 && (
            <button className="relative" onClick={() => setCartOpen(!cartOpen)}>
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </button>
          )}

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-2 text-sm text-neutral-700">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/colecciones">Colecciones</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
          <li><Link href="https://wa.me/52XXXXXXXXXX" target="_blank">WhatsApp</Link></li>
        </ul>
      )}

      {cartOpen && (
        <div className="absolute right-4 md:right-20 top-20 bg-white border rounded-lg shadow-lg w-80 z-50 p-4">
          <h2 className="text-lg font-semibold mb-2">Carrito</h2>
          {cartItems.length === 0 ? (
            <p className="text-sm text-neutral-500">Tu carrito está vacío.</p>
          ) : (
            <>
              <ul className="max-h-60 overflow-y-auto">
                {cartItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 py-2 border-b">
                    <Image src={item.image} alt={item.name} width={40} height={40} className="rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      {item.color && <p className="text-xs text-neutral-500">{item.color}</p>}
                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => updateQuantity(i, -1)}><Minus size={16} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(i, 1)}><Plus size={16} /></button>
                        <button onClick={() => removeFromCart(i)} className="text-red-500 ml-2"><X size={16} /></button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-right text-sm font-semibold">Total: ${total}</div>
              <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
                Comprar
              </button>
            </>
          )}
        </div>
      )}
    </header>
  )
}
