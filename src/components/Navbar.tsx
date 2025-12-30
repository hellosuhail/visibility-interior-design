import  { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import TopHeader from "@/pages/Home/TopHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState<boolean>(false);

  const navigate = useNavigate();

useEffect(() => {
  const handleScroll = () => {
    setSticky(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  const navLinks = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Services", path: "/services" },
    { link: "Products", path: "/product" },
    { link: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {/* Top Header Desktop Only */}
      <div className="hidden md:block">
        <TopHeader />
      </div>

      {/* Navbar */}
      <nav className={`transition-all duration-[500ms] ease-in-out ${sticky ? "fixed flex justify-between top-0 p-4 translate-0 left-0 w-ful dark:bg-black w-full bg-white shadow-md z-50 transition-all" : "flex translate-[-20px ] items-center justify-between p-4 border-b relative shadow-2xl"}`}>
        {/* Logo */}
        <img className="w-20" src="/logo.png" alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {navLinks.map((item, i) => (
            <li key={i} className="p-4 text-lg cursor-pointer">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-400 font-semibold"
                    : "text-gray-500 hover:text-red-400"
                }
              >
                {item.link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-2 items-center">
          <Button onClick={()=>navigate('/contact')} className="hover:bg-red-500 cursor-pointer hidden md:flex p-6 bg-red-400 text-white">
            Get a Quote
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-20 text-gray-600"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-background border-t md:hidden z-50">
            <ul className="flex flex-col items-center">
              {navLinks.map((item, i) => (
                <li key={i} className="py-4 text-lg">
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-400 font-semibold"
                        : "text-gray-600 hover:text-red-400"
                    }
                  >
                    {item.link}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Actions */}
          
          </div>
        )}
          <div className=" absolute md:hidden  left-70 flex flex-col items-center gap-4">
              
              <ModeToggle />
            </div>
      </nav>
    </div>
  );
};

export default Navbar;
