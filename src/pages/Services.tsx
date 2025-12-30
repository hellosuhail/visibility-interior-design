import HeaderImgae from "@/components/HeaderImgae"
import { Helmet } from "react-helmet"
import DesignSessionSection from "./services/DesignSessionSection"
import ServiceSlider from "./services/Servicesslider"

const Services = () => {
  return (
    <div>
          <Helmet>
        {/* Primary SEO */}
        <title>
          Interior & Exterior Design Services | 3D AutoCAD Planning & Execution
        </title>

        <meta
          name="description"
          content="Explore our interior and exterior design services including home, kitchen, restaurant, and commercial designs. We provide 3D AutoCAD visualization, detailed documentation, and transparent pricing."
        />

        <meta
          name="keywords"
          content="interior design services, exterior design services, home interior design, kitchen interior design, restaurant interior design, 3d autocad interior design"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://visibilityinteriorexterior.com/services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Interior & Exterior Design Services | Visibility"
        />
        <meta
          property="og:description"
          content="Professional interior and exterior design services with 3D AutoCAD visualization, clear documentation, and accurate pricing before execution."
        />
        <meta
          property="og:url"
          content="https://visibilityinteriorexterior.com/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/logo.png"
        />

        {/* Twitter (Optional but safe) */}
       
        <meta
          name="twitter:title"
          content="Interior & Exterior Design Services"
        />
        <meta
          name="twitter:description"
          content="Home, kitchen, restaurant and commercial interior & exterior design services with 3D planning and transparent pricing."
        />
        <meta
          name="twitter:image"
          content="/logo.png"
        />
      </Helmet>
      <HeaderImgae title="Our Services"  page="services"/>

      <DesignSessionSection title='Personalized interior design services' subTitle='Design Session'
      discription='Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      types={['Pharetra massa init ultricies labore dolor amet sed','Dolore magna aliqua init sodales tempor','Incididunt ut labore et, pharetra massa','Vestibulum ante ipsum primis tempor'] } image='/images/kitchen.jpg'
      display='flex-row '
      />
      <DesignSessionSection title='Custom interior design solutions' subTitle='Wall painting'
      discription='Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      types={['Pharetra massa init ultricies labore dolor amet sed','Dolore magna aliqua init sodales tempor','Incididunt ut labore et, pharetra massa','Vestibulum ante ipsum primis tempor'] } image='/images/wall.jpg'
      display='flex-row-reverse '
      />
      <DesignSessionSection title='Professional interior styling' subTitle='Interior Decoration'
      discription='Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      types={['Pharetra massa init ultricies labore dolor amet sed','Dolore magna aliqua init sodales tempor','Incididunt ut labore et, pharetra massa','Vestibulum ante ipsum primis tempor'] } image='/images/hall3.jpg'
      display='flex-row '
      />

      <ServiceSlider/>
    </div>
  )
}

export default Services
