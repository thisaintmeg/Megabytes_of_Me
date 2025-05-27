import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, imageAlt, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="relative max-w-4xl w-full p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-xl max-h-[80vh] w-auto mx-auto shadow-lg object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;
