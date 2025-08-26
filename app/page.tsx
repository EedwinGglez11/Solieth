"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import NavbarWithCart,  {CartItem} from "@/components/ui/NavbarWithCart";

import Link from "next/link";

// Tipado para el carrito
/*interface CartItem {
  id: number;
  name: string;
  image: string;
  color: string;
  quantity: number;
  price: number;
}*/

const products = [
  {
    id: 1,
    name: "Vestido largo elegante",
    price: 289.99,
    image: "/ropa/vestidocereza.jpg",
  },
  {
    id: 2,
    name: "Vestido de largo medio",
    price: 199.99,
    image: "/ropa/vestidonegro.jpg",
  },
  {
    id: 3,
    name: "Vestido corto elegante",
    price: 369.99,
    image: "/ropa/vestidoazul.jpg",
  },
  {
    id: 4,
    name: "Vestido casual",
    price: 229.99,
    image: "/ropa/vestidorosa.jpg",
  },
  {
    id: 5,
    name: "Vestido ajustado",
    price: 229.99,
    image: "/ropa/vestidorojo.jpg",
  },
  {
    id: 6,
    name: "Vestido floral",
    price: 229.99,
    image: "/ropa/vestidofloral.jpg",
  },
  {
    id: 7,
    name: "Vestido estampado",
    price: 159.99,
    image: "/ropa/vestidoflores.jpg",
  },
  {
    id: 8,
    name: "Falda alta",
    price: 199.99,
    image: "/ropa/faldalistones.jpg",
  },
  {
    id: 9,
    name: "Falda diseño pastel",
    price: 199.99,
    image: "/ropa/faldablanca.jpg",
  },
  {
    id: 10,
    name: "Pantalón cintura alta",
    price: 199.99,
    image: "/ropa/pantalonrosa.jpg",
  },
  {
    id: 11,
    name: "Top floral",
    price: 129.99,
    image: "/ropa/blusaflorazul.jpg",
  },
  {
    id: 12,
    name: "Camiseta asimétrica",
    price: 129.99,
    image: "/ropa/blusaunamanga.jpg",
  },
  {
    id: 13,
    name: "Top sexy",
    price: 159.99,
    image: "/ropa/blusacortacafe.jpg",
  },
  {
    id: 14,
    name: "Trio tops",
    price: 209.99,
    image: "/ropa/tops.jpg",
  },
  {
    id: 15,
    name: "Vestido de verano",
    price: 179.99,
    image: "/ropa/vestidolargo.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-white text-neutral-900">
        {/* Banner de presentación */}
        <section className="relative h-[60vh] bg-pink-100 flex items-center justify-center text-center px-4">
          <div>
            <Image
              src="/solieth.png"
              alt="Logo Solieth"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase">
              Solieth  Boutique
            </h1>
            <p className="mt-4 text-neutral-600 text-sm md:text-base">
              Prenda para toda ocasión
            </p>
          </div>
        </section>

        {/* Colección Destacada */}
        <section className="px-4 py-10 md:px-20 relative">
          <h2 className="text-2xl font-medium mb-6">Colección Destacada</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/producto/${product.id}`}
                className="relative overflow-hidden transition border bg-white rounded-lg shadow hover:shadow-lg"
              >
              <div className="w-full h-80 md:h-96 relative bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
                <div className="p-3">
                  <h3 className="text-sm font-light text-neutral-700">
                    {product.name}
                  </h3>
                  <p className="text-pink-600 text-base font-semibold mt-1">
                    ${product.price} MXN
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 
      
        {/* Sección de Categorías }
        <section className="px-4 py-10 md:px-20">
          <h2 className="text-2xl font-medium mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pantalones Cargo }
            <div className="relative h-[600px] overflow-hidden rounded-xl">
              <Image
                src="/ropa/pantalon-cargo.webp"
                alt="Pantalones Cargo"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-2 rounded text-white">
                <p className="text-lg font-semibold">Pantalones cargo</p>
                <p className="text-sm">7 Artículo(s)</p>
              </div>
            </div>

            {/* Blusas }
            <div className="relative h-[600px] overflow-hidden rounded-xl">
              <Image
                src="/ropa/blusa1.webp"
                alt="Blusas"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-2 rounded text-white">
                <p className="text-lg font-semibold">Blusas</p>
                <p className="text-sm">12 Artículo(s)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Descubre nuevos productos }
        <section className="px-4 py-10 md:px-20">
          <h2 className="text-2xl font-medium mb-6">Descubre nuevos productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Enterizos",
                img: "/ropa/enterizos.jpg",
                desc: "Compra ahora",
              },
              {
                title: "Vestidos",
                img: "/ropa/vestido1.webp",
                desc: "Navega por nuestra tienda",
              },
              {
                title: "Pantalones Cargo",
                img: "/ropa/pantalon-cargo.webp",
                desc: "Descúbrelos aquí",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative h-[500px] overflow-hidden group rounded-xl"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4 text-center">
                  <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm mb-4">{item.desc}</p>
                  <button className="bg-white text-black px-6 py-2 font-medium text-sm rounded hover:bg-neutral-100">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
  */}       
      </main>
    </>
  );
}