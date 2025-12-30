import { useState } from "react";
import ProductCard from "./Product/ProductsCard";
import { Helmet } from "react-helmet";
import ImageModal from "./Product/ImageModalProps";
import HeaderImgae from "@/components/HeaderImgae";


interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "White Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013",
  },
  {
    id: 2,
    title: "Kitchen Fitting",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1",
  },
  {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
    {
    id: 3,
    title: "Modern Bedroom",
    description: "Lorem ipsum dolor sit.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
];

const Products = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen   ">
          <Helmet>
        {/* Primary SEO */}
        <title>
          Interior & Exterior Design Product | 3D AutoCAD Planning & Execution
        </title>

        <meta
          name="description"
          content="Explore our interior and exterior design products including home, kitchen, restaurant, and commercial designs. We provide 3D AutoCAD visualization, detailed documentation, and transparent pricing."
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
        <div className="mb-8">
        <HeaderImgae title="Product" page="Product"/>
        </div>
      <div className="max-w-7xl px-4 md:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            onClick={() => setSelectedImage(item.image)}
          />
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Products;
