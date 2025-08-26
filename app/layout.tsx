import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import NavbarWithCart from "@/components/ui/NavbarWithCart";

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
        <CartProvider>
          <NavbarWithCart/>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
