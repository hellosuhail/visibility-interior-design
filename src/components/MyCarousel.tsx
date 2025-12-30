import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const images = [
  "/images/sofa2.jpg",
  "/images/sofa.jpg",
  "/images/sofa1.jpg",
]

export default function CustomCarousel() {
  const [current, setCurrent] = useState(0)

const navigate = useNavigate()

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? images.length - 1 : current - 1)
        }
        className="absolute z-3 cursor-pointer left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        <ArrowBigLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          setCurrent((current + 1) % images.length)
        }
        className="absolute z-3 cursor-pointer right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        <ArrowBigRight/>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
        {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

    {/* Static Text Content */}
<div className="absolute inset-0 z-2 flex items-center px-6 md:px-20">
  <div className="max-w-xl text-white">
    <h1 className="text-3xl md:text-6xl font-bold leading-tight">
      Good design for stylish living
    </h1>

    <p className="mt-4 text-sm md:text-lg text-white/90">
      Make your interior more minimalist and modern with 3D design
    </p>

    <button onClick={()=>navigate('services')} className="mt-6 px-6 py-3 bg-red-400 hover:bg-red-500 text-white cursor-pointer rounded-md font-medium  transition">
      Our Services
    </button>
  </div>
</div>

    </div>
  )
}
