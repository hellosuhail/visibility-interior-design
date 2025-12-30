import { Link } from "react-router-dom"

type HeaderImageProps = {
  title: string;
  page: string;
}

const HeaderImgae = ({ title, page}: HeaderImageProps) => {

  return (
    <div>
            <section
      className="
        relative h-[50vh] flex flex-col w-full items-center justify-center text-center
        bg-fixed bg-center bg-cover
      "
      style={{
        backgroundImage: "url('/images/sofa2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
<p className=" relative z-1 text-5xl text-white font-semibold">{title}</p>
      <div className="flex gap-2 items-center mt-4 relative z-1 drak:text-white/80">
<Link to='/' className=" relative z-1 text-white/80 text-lg hover:text-red-400 ">Home</Link>
<span className="text-white/70">→</span>
<p className=" relative z-1 text-white text-lg font-semibold  ">{page}</p>
</div>
        </section>

        
  
    
    </div>
  )
}

export default HeaderImgae
