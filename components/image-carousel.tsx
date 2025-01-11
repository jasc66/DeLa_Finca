"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import AutoplayPlugin from "embla-carousel-autoplay"

const images = [
  { src: "/img/comida1.jpg", alt: "Comida 1" },
  { src: "/img/comida2.jpg", alt: "Comida 2" },
  { src: "/img/comida3.jpg", alt: "Comida 3" },
  { src: "/img/comida4.jpg", alt: "Comida 4" },
  { src: "/img/comida7.jpg", alt: "Comida 7" },
  { src: "/img/comida6.jpg", alt: "Comida 6" },
  { src: "/img/costilla-de-cerdo-con.jpg", alt: "Comida 7" },
]

export function ImageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const plugin = React.useRef(
    AutoplayPlugin({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <div className="w-full max-w-5xl mx-auto px-4 xl:max-w-7xl 2xl:max-w-[1920px]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
            >
              <div className="p-1 xl:p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2 xl:p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="text-white border-white hover:bg-white/20" />
          <CarouselNext className="text-white border-white hover:bg-white/20" />
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-white/80">
        Plato {current} de {count}
      </div>
    </div>
  )
}