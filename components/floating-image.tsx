'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface FloatingImageProps {
  src: string
  alt: string
  className?: string
  width: number
  height: number
}

export function FloatingImage({ src, alt, className = '', width, height }: FloatingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.src = src
    img.onload = () => setIsLoaded(true)
  }, [src])

  return (
    <div 
      className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        style={{
          filter: 'brightness(1.2) contrast(1.1)',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  )
}

