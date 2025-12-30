import HeaderImgae from "@/components/HeaderImgae"
import WhoWeAre from "./About/Whoweare"
import { Helmet } from "react-helmet"


const About = () => {
  
  return (
    <div>

      <Helmet>
        {/* Primary SEO */}
        <title>
          About Us | Visibility Interior & Exterior Design Experts
        </title>

        <meta
          name="description"
          content="Learn about Visibility Interior & Exterior. We provide professional 3D AutoCAD interior and exterior designs, detailed documentation, transparent pricing, and complete execution support."
        />

        <meta
          name="keywords"
          content="about interior designer, interior design company, 3d interior design, autocad interior design, exterior design services"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://visibilityinteriorexterior.com/about"
        />

        {/* Open Graph (Social Media) */}
        <meta property="og:title" content="About Visibility Interior & Exterior" />
        <meta
          property="og:description"
          content="We specialize in 3D AutoCAD interior and exterior designs with clear visualization, accurate pricing, and complete documentation before execution."
        />
        <meta
          property="og:url"
          content="https://visibilityinteriorexterior.com/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/logo.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Visibility Interior & Exterior"
        />
        <meta
          name="twitter:description"
          content="Professional interior and exterior design services with 3D visualization, documentation, and transparent pricing."
        />
        <meta
          name="twitter:image"
          content="/logo.png"
        />
      </Helmet>

      {/* About Page Content */}
      <section>
        {/* your existing about UI */}
      </section>


        <HeaderImgae title="About Us" page="about"/>
        <WhoWeAre/>
      
    </div>
  )
}

export default About
