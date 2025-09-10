import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import NavbarWithCart from "@/components/ui/NavbarWithCart";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solieth Boutique",
  description: "Moda y estilo para toda ocasión",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2523212338096436"
     crossOrigin="anonymous"></script>
        <CartProvider>
          <NavbarWithCart/>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
