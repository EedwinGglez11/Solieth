'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { products } from '@/data/productos'
import { useCart } from '@/context/CartContext'
import { Minus, Plus, ChevronUp, ChevronDown } from 'lucide-react'

// Función para obtener productos relacionados por tipo
const getProductCategory = (name: string) => {
  const lowerName = name.toLowerCase()
  if (lowerName.includes('vestido')) return 'vestido'
  if (lowerName.includes('blusa') || lowerName.includes('top')) return 'blusa'
  if (lowerName.includes('pantalon') || lowerName.includes('pantalón') || lowerName.includes('cargo')) return 'pantalon'
  return 'otros'
}

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const category = product ? getProductCategory(product.name) : ''

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [zoomActive, setZoomActive] = useState(false)
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 })
  const [containerSize, setContainerSize] = useState({ width: 1, height: 1 })
  const [isDesktop, setIsDesktop] = useState(true)

  const { addToCart } = useCart()
  const zoomSize = 200

  useEffect(() => {
    const updateSize = () => setIsDesktop(window.innerWidth >= 768)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Cambiar imagen principal al seleccionar color
  useEffect(() => {
    if (selectedColor?.image && product) {
      const index = product.images.findIndex(img => img === selectedColor.image)
      if (index !== -1) {
        setSelectedImageIndex(index)
      }
    }
  }, [selectedColor, product])

  // Cambiar imagen y color automáticamente al cambiar índice
  useEffect(() => {
    if (!product) return
    const image = product.images[selectedImageIndex]
    setSelectedImage(image)

    const matchingColor = product.colors.find(color => color.image === image)
    if (matchingColor) {
      setSelectedColor(matchingColor)
    }
  }, [selectedImageIndex, product])

  if (!product) {
    return <div className="p-6 text-center">Producto no encontrado</div>
  }

  // Productos relacionados
  const relatedProducts = products.filter(p => {
    if (p.id === product.id) return false
    const pCategory = getProductCategory(p.name)
    return pCategory === category
  })

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: selectedColor?.nameOverride ?? product.name,
      price: product.price,
      image: selectedImage,
      quantity,
      color: selectedColor?.name || '',
    })
  }

  const scrollThumbnails = (direction: 'up' | 'down') => {
    if (!product) return
    const total = product.images.length
    setSelectedImageIndex(prev =>
      direction === 'up'
        ? (prev - 1 + total) % total
        : (prev + 1) % total
    )
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    setContainerSize({ width, height })
    const x = e.clientX - left
    const y = e.clientY - top
    setZoomPos({
      x: Math.min(Math.max(x, 0), width),
      y: Math.min(Math.max(y, 0), height),
    })
  }

  return (
    <div className="px-4 md:px-20 py-10">
      {/* Contenido principal */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Galería */}
        <div className="flex md:flex-row flex-col gap-6">
          {/* Miniaturas */}
          <div className="flex md:flex-col flex-row items-center gap-2">
            <button
              onClick={() => scrollThumbnails('up')}
              className="hidden md:flex items-center justify-center w-8 h-8 bg-pink-200 text-pink-600 rounded-full hover:bg-pink-300"
            >
              <ChevronUp className="w-5 h-5" />
            </button>

            <div className="flex md:flex-col gap-2 max-w-full">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-16 h-16 shrink-0 rounded border-2 cursor-pointer ${
                    selectedImageIndex === index ? 'border-pink-500' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-contain rounded"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollThumbnails('down')}
              className="hidden md:flex items-center justify-center w-8 h-8 bg-pink-200 text-pink-600 rounded-full hover:bg-pink-300"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Imagen principal */}
          <div
            className="relative w-full aspect-square rounded-lg overflow-hidden bg-white"
            onMouseEnter={() => isDesktop && setZoomActive(true)}
            onMouseLeave={() => setZoomActive(false)}
            onMouseMove={handleMouseMove}
          >
            <Image
              src={selectedImage}
              alt={selectedColor?.nameOverride ?? product.name}
              fill
              className="object-contain rounded-lg p-2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />

            {/* Zoom tipo lupa */}
            {zoomActive && isDesktop && (
              <div
                style={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  top: zoomPos.y - zoomSize / 2,
                  left: zoomPos.x - zoomSize / 2,
                  width: zoomSize,
                  height: zoomSize,
                  borderRadius: '20%',
                  boxShadow: '0 0 8px 2px rgba(0,0,0,0.3)',
                  backgroundImage: `url(${selectedImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `${containerSize.width * 2}px ${containerSize.height * 2}px`,
                  backgroundPosition: `-${zoomPos.x * 2 - zoomSize / 2}px -${zoomPos.y * 2 - zoomSize / 2}px`,
                  border: '2px solid #f472b6',
                }}
              />
            )}
          </div>
        </div>

        {/* Info producto */}
        <div className="flex flex-col justify-start gap-6 text-center md:text-left">
          <h1 className="text-2xl font-bold">{selectedColor?.nameOverride ?? product.name}</h1>
          <p className="text-sm text-gray-600">{selectedColor?.description ?? product.description}</p>

          {/* Precio */}
          <div>
            <p className="text-3xl font-bold text-pink-600">${product.price.toFixed(2)} MXN</p>
          </div>

          {/* Colores */}
          <div>
            <p className="text-sm mb-1">Color:</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-1 rounded border text-sm min-w-24 ${
                    selectedColor?.name === color.name
                      ? 'bg-pink-500 text-white border-pink-500'
                      : 'border-gray-300'
                  }`}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cantidad */}
          <div>
            <p className="text-sm mb-1">Cantidad:</p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 border rounded"
              >
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 border rounded"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition text-base font-medium"
            >
              Agregar al carrito
            </button>
            <button className="border border-pink-600 text-pink-600 px-8 py-3 rounded-lg hover:bg-pink-50 transition text-base font-medium">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>

      {/* Recomendaciones */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-medium mb-6 text-center">Quizás también te guste</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="flex-none w-48 md:w-64 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-light text-gray-700 truncate">{p.name}</h3>
                  <p className="text-pink-600 font-semibold mt-1">${p.price.toFixed(2)} MXN</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}