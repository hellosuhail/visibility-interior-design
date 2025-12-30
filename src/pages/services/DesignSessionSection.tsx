import { Check } from "lucide-react"

type DesignSessionSectionProps = {
    subTitle?: string;
    discription?: string;
    types?: string[];
    image?: string;
    title: string;
    display?: string;
}

export default function DesignSessionSection({title, subTitle, discription, types, image, display}: DesignSessionSectionProps) {
  return (
    <section className=" md:py-16 px-6 md:px-20">
      <div className={`max-w-7xl mx-auto md:flex ${display} items-center gap-12 md:gap-20`}>

        {/* LEFT IMAGE */}
        <div className="relative md:w-1/2 mt-4">
          <img
            src={image}
            alt="Interior design"
            className="w-full h-[320px] md:h-[520px] object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className=" md:w-1/2">
          <p className="uppercase tracking-widest text-sm text-gray-900 mt-4 md:mt-0 dark:text-white/60 mb-4">
            {subTitle}
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>

          <p className="mt-6 text-gray-500 dark:text-white/80 max-w-xl">
            {discription}
          </p>

          {/* LIST */}
          <ul className="mt-8 space-y-4">
            {types?.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20">
                  <Check className="h-4 w-4 text-pink-500" />
                </span>
                <p className="text-gray-800 dark:text-white/90">{item}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
