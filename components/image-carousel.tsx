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
  { src: "/img/comida1.jpg", alt: "comida 1" },
  { src: "/img/comida2.jpg", alt: "comida 2" },
  { src: "/img/comida3.jpg", alt: "comida 3" },
  { src: "/img/comida4.jpg", alt: "comida 4" },
  { src: "/img/comida7.jpg", alt: "comida 7" },
  { src: "/img/comida6.jpg", alt: "comida 6" },
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
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl"
      setApi={setApi}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
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
      <CarouselPrevious />
      <CarouselNext />
      <div className="py-2 text-center text-sm text-muted-foreground">
        comida {current} de {count}
      </div>
    </Carousel>
  )
}

