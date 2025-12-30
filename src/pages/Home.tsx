import { Helmet } from "react-helmet"
import CustomCarousel from "@/components/MyCarousel"
import ServicesCard from "./Home/ServicesCard"
import OurProud from "./Home/OurProud"



const Home = () => {
  return (
    <div className="">
      <Helmet>
        {/* Primary SEO */}
        <title>
         Visibility Interior & Exterior Design Company | Home & Restaurant Designers
        </title>

        <meta
          name="description"
          content="Top interior and exterior design company offering home, restaurant, kitchen, furniture, and commercial design with 3D visualization, AutoCAD planning, and transparent pricing."
        />

        {/* Keywords (still useful for some engines) */}
        <meta
          name="keywords"
          content="interior design, exterior design, home interior, restaurant interior, kitchen design, furniture design, commercial interior, 3D interior design, AutoCAD interior"
        />

        {/* Author */}
        <meta name="Irshad" content="Visibility Interior & Exterior" />

        {/* Open Graph (Social Media) */}
        <meta property="og:title" content="Interior & Exterior Design Experts" />
        <meta
          property="og:description"
          content="We design homes and restaurants with modern interior and exterior solutions using 3D AutoCAD visualization and detailed pricing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://visibilityinteriorexterior.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Interior & Exterior Design Company"
        />
        <meta
          name="twitter:description"
          content="Professional home and restaurant interior designers with 3D planning and transparent pricing."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://visibilityinteriorexterior.com" />
      </Helmet>

     <CustomCarousel />
<ServicesCard/>
 <OurProud/> 
    </div>
  )
}

export default Home
