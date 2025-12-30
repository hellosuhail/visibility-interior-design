interface ImageModalProps {
  image: string | null;
  onClose: () => void;
}

const ImageModal = ({ image, onClose }: ImageModalProps) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={image}
          alt="Preview"
          className="w-full max-h-[80vh] object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ImageModal;
 