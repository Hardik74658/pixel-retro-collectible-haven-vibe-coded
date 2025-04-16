import React, { useState } from "react";

interface PixelImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  className?: string;
}

const PixelImage: React.FC<PixelImageProps> = ({
  src,
  alt,
  fallbackText = "Image not found",
  className = "",
  ...props
}) => {
  const [error, setError] = useState(false);

  return error ? (
    <div
      className={`flex items-center justify-center bg-gray-200 text-retro-red font-pixel text-xs h-full w-full rounded ${className}`}
      aria-label={fallbackText}
      role="img"
    >
      {fallbackText}
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={`pixel-image ${className}`}
      style={{
        imageRendering: "pixelated",
        objectFit: "contain",
        borderRadius: "0.5rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        background: "#f6f6fa"
      }}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default PixelImage;
