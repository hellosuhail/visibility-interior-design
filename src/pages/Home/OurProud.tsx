import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurProud = () => {
  const [open, setOpen] = useState(false);


  const navigate =useNavigate();

  

  const images = [
    "/images/sofa1.jpg",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "/images/sofa2.jpg",
  ];
  return (
    <>
    <div className="flex  md:flex-row flex-col justify-between flex-wrap">
      <div className="w-full md:w-1/2 h-96">
        <h6 className=" md:ml-12 text-2xl md:text-4xl m-2 md:mt-8 font-semibold">
          We are very proud of the service we provide and stand by every product
          we carry.
        </h6>
        <p className="m-2 text-lg md:ml-12  text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          hic odio voluptatem tenetur consequatur. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia.
        </p>
        <Button onClick={()=> navigate('/about')} className="p-8 m-2 md:ml-12 text-white hover:text-white hover:bg-red-500 bg-red-400 cursor-pointer">
          Read More
        </Button>
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-16 mb-8 md:mb-0 md:py-12">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-lg "
            >
              <img
                src={img}
                alt={`img-${index}`}
                className="
                w-full h-30 object-cover
                transition-transform duration-500 ease-out
                group-hover:-translate-y-3
              "
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      {/* Section */}
      <section className="bg-gray-200 dark:bg-[#2b2a45]  py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What makes us different?
            </h2>

            <p className="dark:text-white/80 text-gray-500 leading-relaxed mb-10">
          We create detailed 3D interior designs using AutoCAD, helping clients visualize their space clearly before execution, with complete documentation and transparent pricing for a smooth, confident build process.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
              {[
                "Wall painting designs",
                "Personalized design services",
                "Home Decorating",
                "Interior design Solutions",
                "Interior Decoration",
                "Stylish living home",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VIDEO CARD */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/thubnell.jpg"
              alt="video"
              className="w-full h-[420px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 dark:bg-black/30" />

            {/* Play Button */}
            <button
              onClick={() => setOpen(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="h-20 w-20 rounded-full bg-red-400 cursor-pointer flex items-center justify-center shadow-xl animate-pulse">
                <Play className=" ml-1" size={34} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 z-10"
              >
                <X size={28} />
              </button>

              {/* Video */}
              <video
                src="/images/video.mp4"
                controls
                autoPlay
                className="w-full h-[260px] md:h-[520px] object-cover"
              />
            </div>
          </div>
        )}

      <div className=" w-full block md:flex mt-6">
        <div className="md:w-1/2 p-2">
          <img src="/images/s2.jpg" alt="img" className="rounded-lg" />
        </div>
        <div className=" w-full md:w-1/2">
          <ul className="flex w-full items-center">
            {[
              { number: "20+", text: "Workers" },
              { number: "50+", text: "Projects" },
              { number: "150+", text: "Happy Clients" },
            ].map((item, index) => (
              <li key={index} className="m-4">
                <h3 className="md:text-5xl text-3xl font-bold md:ml-0 ml-6">{item.number}</h3>
                <p className="dark:text-white/80 md:ml-0 ml-6">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="dark:text-white/80 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse debitis harum beatae quo voluptatum dolores aspernatur, perspiciatis voluptas facere deleniti error rerum earum alias culpa, iste, odio cum sit consequuntur assumenda praesentium possimus distinctio ut. Animi modi consequatur voluptatum voluptates?</p>
          <Button onClick={()=> navigate('/about')} className="p-8 m-2 mt-8 text-white hover:text-white hover:bg-red-500 bg-red-400 cursor-pointer">
          Read More
        </Button>
        </div>
      </div>

      {/* End Section */}

       <section
      className="
        relative h-[80vh] flex w-full items-center justify-center text-center
        bg-fixed bg-center bg-cover
      "
      style={{
        backgroundImage: "url('/images/sofa.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6">
        <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          Let your designer find the right pieces for you, your space and budget.
          Give us a call or get in touch!
        </h2>

        <div className="mt-8 flex justify-center gap-4">
          <button onClick={()=> navigate('/product')} className="px-6 py-3 rounded-md bg-white/30 cursor-pointer text-white backdrop-blur hover:bg-white/40 transition">
            Read More
          </button>

          <button onClick={()=> navigate('/contact')} className="px-6 py-3 rounded-md bg-red-400 text-white hover:bg-red-500 cursor-pointer transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
    <div className="md:p-12 p-4 flex md:items-center justify-center  flex-col dark:bg-[#2b2a45]">
        <p className="md:text-5xl text-3xl m-2 font-semibold">Stay Updated!</p>
        <p className="text-lg m-2 md:w-160 md:text-center dark:text-white/60 text-gray-600">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis.</p>
        <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-center">
        <input type="email" placeholder="Enter your email" className=" bg-white  text-black border border-red-400 p-4 rounded-md w-90  md:w-130 outline-none"/>
        <Button className="md:ml-4 p-8 bg-red-400 w-full md:w-30 text-white hover:bg-red-500 cursor-pointer">
          Subscribe
        </Button></div>
    </div>
    
    </>
  );
};

export default OurProud;
