import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {  BedIcon, PenBoxIcon, Sofa } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesCard = () => {

  const navigate = useNavigate();

  const data = [
    {
      title: "Stylish Home decor",
      description:
        "Elevate your living space with our expert interior design services, blending aesthetics and functionality to create a home that reflects your unique style.",
      icon: <PenBoxIcon className="size-6" />,
    },
    {
      title: "Modern Furniture",
      description:
        "Discover our curated selection of modern furniture that combines sleek design with comfort, perfect for enhancing any contemporary living space.",
      icon: <Sofa className="size-6" />,
    },
    {
      title: "Custom Lighting",
      description:
        "Transform your space with our custom lighting solutions, designed to enhance ambiance and highlight the beauty of your interior.",
      icon: <BedIcon className="size-6" />,
    },
  ];
  return (
    <div className="block md:flex gap-6 px-12 relative -top-12">
      {data.map((service, index) => (
      <Card key={index} className="mt-4 md:mt-0flex flex-col p-2 items-center justify-center">
        <div className="dark:bg-gray-800 bg-gray-200 w-12 flex items-center justify-center h-12 rounded-full mb-4 hover:bg-red-400 text-red-400n hover:text-white transition duration-300 ">
          {service.icon}
        </div>
        <CardTitle className="text-center text-2xl font-bold">
          {service.title}
        </CardTitle>
        <CardDescription className="text-center mt-2  dark:text-gray-300">
          {service.description}
        </CardDescription>
        <Button onClick={()=> navigate('/services')} className="bg-red-400 text-white hover:bg-red-500 cursor-pointer">
          Read More
        </Button>
      </Card>))}
    </div>
  );
};

export default ServicesCard;
