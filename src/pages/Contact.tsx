import { useState } from "react";
import HeaderImgae from "@/components/HeaderImgae";
import Input from "@/components/Input";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "917983896882"; // WhatsApp number

    const text = encodeURIComponent(
      `Hello, I want to contact you from website 👋

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
     <Helmet>
            {/* Primary SEO */}
            <title>
              Interior & Exterior Design Contact | 3D AutoCAD Planning & Execution
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
      <HeaderImgae title="Contact" page="Contact" />

      <section className="min-h-screen px-6 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Let's get in touch
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-40 rounded-lg bg-transparent border dark:border-white/20 px-5 py-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 resize-none"
            />

            {/* Submit */}
            <div className="flex justify-end md:pt-4">
              <button
                type="submit"
                className="bg-red-400 hover:bg-red-500 text-white transition px-10 py-4 rounded-xl font-semibold"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
