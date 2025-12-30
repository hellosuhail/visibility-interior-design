import { useEffect, useRef, useState } from "react"

const slides = [
  {
    title: "Modern Bedroom",
    desc: "Lorem ipsum dolor amet.",
    image: "/images/bed.jpg",
  },
  {
    title: "Velvet Sofa",
    desc: "Lorem ipsum dolor sit.",
    image: "/images/sofa.jpg",
  },
  {
    title: "Home Office",
    desc: "Lorem ipsum dolor sit.",
    image: "/images/hall.jpg",
  },
    {
    title: "Home Office",
    desc: "Lorem ipsum dolor sit.",
    image: "/images/kitchen1.jpg",
  },
    {
    title: "Home Office",
    desc: "Lorem ipsum dolor sit.",
    image: "/images/hall.jpg",
  },
 
]


export default function ServiceSlider() {
  const [current, setCurrent] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const isDragging = useRef(false)

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // 👉 Drag Start
  const handleStart = (x: number) => {
    startX.current = x
    isDragging.current = true
  }

  // 👉 Drag End
  const handleEnd = (x: number) => {
    if (!isDragging.current) return
    const diff = startX.current - x

    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % slides.length)
    } else if (diff < -50) {
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      )
    }
    isDragging.current = false
  }

  return (
    <section className=" md:py-16 overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        More Services
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-6 px-6 transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 340}px)`,
        }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] md:min-w-[360px] rounded-2xl overflow-hidden relative bg-black"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[320px] w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-[#1c1935]/90 p-4 rounded-xl text-white">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-sm opacity-80">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              current === i ? "bg-pink-500" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
