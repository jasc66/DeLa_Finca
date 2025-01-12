'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/img/comida1.jpg', alt: 'Plato 1', width: 500, height: 300 },
  { src: '/img/comida2.jpg', alt: 'Plato 2', width: 500, height: 300 },
  { src: '/img/comida3.jpg', alt: 'Plato 3', width: 600, height: 360 },
  { src: '/img/comida4.jpg', alt: 'Plato 4', width: 600, height: 360 },
  { src: '/img/comida7.jpg', alt: 'Plato 5', width: 500, height: 300 },
  { src: '/img/comida6.jpg', alt: 'Plato 6', width: 500, height: 300 },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap mb-20">
          <h2 className="sm:text-4xl text-3xl font-bold text-white lg:w-1/3 lg:mb-0 mb-4">
            Nuestra Galería
          </h2>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Descubre la esencia de De La Finca a través de nuestra galería de imágenes. 
            Cada plato es una obra maestra culinaria, preparada con los ingredientes más frescos 
            y presentada con pasión. Déjate llevar por los colores vibrantes y las texturas 
            tentadoras que caracterizan nuestra cocina.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <ImageWithHover {...images[0]} onClick={() => setSelectedImage(images[0].src)} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <ImageWithHover {...images[1]} onClick={() => setSelectedImage(images[1].src)} />
            </div>
            <div className="md:p-2 p-1 w-full">
              <ImageWithHover {...images[2]} onClick={() => setSelectedImage(images[2].src)} />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <ImageWithHover {...images[3]} onClick={() => setSelectedImage(images[3].src)} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <ImageWithHover {...images[4]} onClick={() => setSelectedImage(images[4].src)} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <ImageWithHover {...images[5]} onClick={() => setSelectedImage(images[5].src)} />
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <LightboxImage src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  )
}

function ImageWithHover({ src, alt, width, height, onClick }: { src: string; alt: string; width: number; height: number; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-all duration-300 ease-in-out border-4 ${
          isHovered ? 'border-[#91211e] scale-105' : 'border-transparent'
        }`}
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
          <p className="text-white text-lg font-semibold">{alt}</p>
        </div>
      )}
    </div>
  )
}

function LightboxImage({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative max-w-full max-h-full w-full h-full flex items-center justify-center">
        <Image
          src={src}
          alt="Imagen ampliada"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
        <button 
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-opacity-75 transition-colors duration-200 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}

