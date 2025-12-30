interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ProductCard = ({
  image,
  title,
  description,
  onClick,
}: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute bottom-4 left-4 right-4 bg-[#1f1b3a]/90 backdrop-blur-md rounded-xl p-4 flex items-center justify-between">
        <div>
          <h3 className="text-white text-lg font-semibold">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>

        <span className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center text-white text-xl">
          →
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
