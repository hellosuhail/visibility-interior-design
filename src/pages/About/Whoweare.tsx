import { Sofa } from "lucide-react";
import { FaFaucetDrip, FaShower } from "react-icons/fa6";
import type { ReactNode } from "react";

export default function WhoWeAre() {
    const stats = [
  {
    title: "Founded In",
    value: "2015",
    about: "Year We Founded",
  },
  {
    title: "Projects Completed",
    value: "1200+",
    about: "Successfully Completed Projects",
  },
  {
    title: "Happy Clients",
    value: "900+",
    about: "Satisfied Clients Worldwide",
  },
  {
    title: "Awards Won",
    value: "15",
    about: "International Design Awards",
  },
]

  return (
    <>
      <section className="md:py-20 px-6 md:px-20">
      <div className="md:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm tracking-widest text-white/60 uppercase">
            An enchanting dream home.
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold md:leading-tight">
            We Have <span className="text-red-400">10+</span> Years <br />
            Of Experience.
          </h2>

          <p className="md:mt-6 text-gray-500 dark:text-white/75 leading-relaxed">
            Aliquam ac est vel nisl condimentum interduauris et justo vel
            nibh rhoncusm vel eget enim. Curabitur mattis orci sed leo
            mattis, nec maximus nibh faucibus.
          </p>

          <button className="md:mt-8 mt-3 px-8 py-3 text-white bg-red-400 cursor-pointer rounded-md font-medium hover:red-red-500 transition">
            Read More
          </button>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-sm">
            <img
              src="/images/sofa.jpg"
              alt="interior"
              className="w-full md:h-[420px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          {/* Quote Icon */}
          <span className="absolute -top-6 left-0 text-7xl text-white/10 font-serif">
            “
          </span>

          <p className="italic taxt-gray-500 dark:text-white/80 leading-relaxed md:pl-10">
            Aliquam ac est vel nisl condimentum interdum vel eget enim.
            Curabitur mattis orci sed leo mattis, nec maximus nibh
            faucibus. Mauris et justo vel nibh rhoncus venenatis.
            Nullal dolor init condimentum interdum vel eget enim.
          </p>

          <h4 className="mt-8 text-red-400 text-xl font-semibold">
            Home Interior
          </h4>

          <p className="text-white/70 mt-1">
            The best interior solution.
          </p>
        </div>
      </div>
    </section>
  
      {/* Decorative Element */}

         <section className="bg-red-400/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center
                border-l md:border-l border-red-400/40
                first:border-l-0 md:first:border-l
                pl-6
              "
            >
              <p className="text-sm uppercase tracking-wide taxt-gray-500 dark:text-white/70">
                {item.title}
              </p>

              <span className="mt-2 text-4xl font-bold text-red-400">
                {item.value}
              </span>

              <span className="mt-2text-gray-500 dark:text-white/80 text-sm">
                {item.about}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className=" md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-white/60 mb-4">
            Who We Are
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Let your designer find the right pieces for you, your space and budget.
          </h2>

          <p className="text-gray-500 dark:text-white/70 mb-4">
            Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla,
            gravida felis vitae.
          </p>

          <p className="text-gray-500 dark:text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            debitis. Quas minima sunt natus tempore.
          </p>
        </div>

        {/* RIGHT */}
        <div className="md:space-y-10">

          <Feature
            icon={<FaShower />}
            title="Great Design For Creative Folks."
            desc="Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi."
          />

          <Feature
            icon={<FaFaucetDrip />}
            title="Affordable style for living home"
            desc="Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi."
          />

          <Feature
            icon={<Sofa />}
            title="Luxurious Interior couches"
            desc="Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi."
          />

        </div>
      </div>
    </section>
</>
  );
}


type FeatureProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};
function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div className="flex gap-6 items-start">
      <div className="text-3xl">{icon}</div>
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-500 dark:text-white/70">{desc}</p>
      </div>
    </div>
  );
}
