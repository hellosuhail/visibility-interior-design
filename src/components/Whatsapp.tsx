import { FaWhatsapp } from "react-icons/fa6";

const ContectWhatsapp = () => {
  return (
    <div>
      <a
  href="https://wa.me/917983896882?text=Hello%20I%20am%20interested%20in%20your%20interior%20design%20services.%20Please%20contact%20me."
  target="_blank"
  rel="noopener noreferrer"
  className="flex fixed top-130 md:top-110 right-5 items-center gap-3 hover:text-white"
>
    <FaWhatsapp className="text-green-500 bg-gray-300 dark:bg-gray-800 rounded-full p-2" size={50} />

</a>

    </div>
  )
}

export default ContectWhatsapp
