import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="container">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Browse owr categories
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] gap-6 my-10">
        {[
          { name: "all", image: "/images/products/1.avif" },
          { name: "women", image: "/images/Hero.png" },
          { name: "men", image: "/images/men.png" },
          { name: "uni", image: "/images/products/Lightweight puffer jacket2jpg" },
        ].map((category) => (
          <Link
            key={category.name}
            href={`products/${category.name}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Image
                src={category.image}
                alt={`${category.name} category`}
                className="object-cover transition-transform duration-300 group-hover:scale-105 object-top"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold capitalize">
                  {category.name}
                </h3>
                <span className="mt-1 inline-flex items-center text-sm font-medium">
                  Shop now <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
