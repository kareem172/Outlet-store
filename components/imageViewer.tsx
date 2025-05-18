"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageViewerProps {
  images: string[];
  alt: string;
}
export function ImageViewer({ images, alt }: ImageViewerProps) {
  const [ImageIndex, setImageIndex] = useState(0);
  return (
    <aside className="grid grid-cols-[100px_1fr] gap-5 min-h-[500px]">
      <div className="grid relative gap-3">
        {images.map((image, index) => (
          <div
            key={index + image}
            className="relative overflow-hidden max-w-full"
          >
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover rounded-xl cursor-pointer"
              onMouseEnter={() => setImageIndex(index)}
            />
          </div>
        ))}
      </div>
      <div className="relative">
        <Image
          src={images[ImageIndex]}
          alt={alt}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </aside>
  );
}
